export type Text = { en: string; ru: string };
export type Topic = { id: string; subject: string; title: Text; route: string; source: string; optional?: boolean; parentTopic?:string };
export type Block = { id: string; minutes: number; topics: string[]; task: Text; lesson?: boolean; paper?: string; optional?: boolean; sessions?: string[]; paperQuestions?:string[]; reported?:boolean; flexible?:boolean; replacementSession?:string };
export type Day = { date: string; phase: string; title: Text; blocks: Block[]; recall: number; note?: Text; rest?: boolean };
export type Confidence = 'red' | 'amber' | 'green';
export type Diagnostic = { date:string; questionId:string; topicId:string; sessionId?:string; outcome:'retry'|'secure'; evidence:string };
export type PlanState = { completed: Record<string, string>; confidence: Record<string, Confidence>; arabic: boolean; notes: string; reportedSeeded?:boolean; diagnostics?:Record<string,Diagnostic>; replacements?:Record<string,string>; scienceContext?:'biology'|'chemistry'|'physics' };
export const PLAN_KEY = 'g9-november-plan-2026-v1';
export const FIRST_EXAM = '2026-11-09';
export const READY_BY = '2026-11-04';
export const freshPlan = (): PlanState => ({ completed: {}, confidence: {}, arabic: false, notes: '' });
export function validDate(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value)) && new Date(`${value}T12:00:00Z`).toISOString().slice(0, 10) === value;
}

export function normalizePlan(raw: unknown): PlanState {
  const state = freshPlan();
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return state;
  const value = raw as Record<string, unknown>;
  if (value.completed && typeof value.completed === 'object' && !Array.isArray(value.completed)) {
    for (const [id, date] of Object.entries(value.completed)) {
      if (typeof date === 'string' && validDate(date)) state.completed[id] = date;
    }
  }
  if (value.confidence && typeof value.confidence === 'object' && !Array.isArray(value.confidence)) {
    for (const [id, rating] of Object.entries(value.confidence)) {
      if (rating === 'red' || rating === 'amber' || rating === 'green') state.confidence[id] = rating;
    }
  }
  if(value.reportedSeeded===true)state.reportedSeeded=true;
  state.arabic = value.arabic === true;
  state.notes = typeof value.notes === 'string' ? value.notes.slice(0, 12000) : '';
  if(value.diagnostics && typeof value.diagnostics==='object' && !Array.isArray(value.diagnostics)){
    state.diagnostics={};
    for(const [id,item]of Object.entries(value.diagnostics as Record<string,unknown>)){
      if(!item||typeof item!=='object'||Array.isArray(item))continue;
      const d=item as Record<string,unknown>;
      if(typeof d.date==='string'&&validDate(d.date)&&typeof d.questionId==='string'&&typeof d.topicId==='string'&&(d.outcome==='retry'||d.outcome==='secure')&&typeof d.evidence==='string'&&d.evidence.trim()){
        state.diagnostics[id]={date:d.date,questionId:d.questionId.slice(0,160),topicId:d.topicId.slice(0,160),outcome:d.outcome,evidence:d.evidence.slice(0,2000),...(typeof d.sessionId==='string'?{sessionId:d.sessionId.slice(0,160)}:{})};
      }
    }
  }
  if(value.replacements&&typeof value.replacements==='object'&&!Array.isArray(value.replacements)){
    state.replacements={};for(const[id,session]of Object.entries(value.replacements))if(typeof session==='string'&&id.length<160&&session.length<160)state.replacements[id]=session;
  }
  if(value.scienceContext==='biology'||value.scienceContext==='chemistry'||value.scienceContext==='physics')state.scienceContext=value.scienceContext;
  return state;
}

export function dubaiToday(now = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Dubai', year: 'numeric', month: '2-digit', day: '2-digit' }).format(now);
}
export function shiftedDate(iso: string, days: number): string {
  const date = new Date(`${iso}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  // Protected Saturday. The review joins Sunday's existing recall slot.
  if (date.getUTCDay() === 6) date.setUTCDate(date.getUTCDate() + 1);
  return date.toISOString().slice(0, 10);
}
export function activeBlocks(day: Day, arabic: boolean): Block[] {
  return day.blocks.filter(block => arabic || !block.optional);
}
export function dayMinutes(day: Day, arabic: boolean): number {
  return activeBlocks(day, arabic).reduce((sum, block) => sum + block.minutes, day.recall);
}
export type SessionChoice={id:string;topic:string;title:Text;minutes:number};
export const blockCompletionKey=(block:Block)=>block.replacementSession?`replacement:${block.id}:${block.replacementSession}`:block.id;
export function applyReplacements(day:Day,state:PlanState,choices:SessionChoice[]):Day{
  return {...day,blocks:day.blocks.map(block=>{
    const choice=choices.find(s=>s.id===state.replacements?.[block.id]);
    const subject=choice?({p:'physics',c:'chemistry',b:'biology',m:'math',g:'geography',e:'english',f:'french',a:'arabic',s:state.scienceContext} as Record<string,string|undefined>)[choice.topic[0]]:undefined;
    if(!block.flexible||block.lesson||state.completed[block.id]||!choice||choice.minutes<=0||choice.minutes>block.minutes||day.rest||new Date(`${day.date}T12:00:00Z`).getUTCDay()===6||!subject||(subject==='arabic'&&!state.arabic)||!SUBJECT_EXAMS[subject]||day.date>=SUBJECT_EXAMS[subject])return block;
    return {...block,minutes:choice.minutes,topics:[choice.topic],sessions:[choice.id],task:choice.title,paper:undefined,paperQuestions:undefined,replacementSession:choice.id};
  })};
}
export const SUBJECT_EXAMS:Record<string,string>={english:'2026-11-09',arabic:'2026-11-09',biology:'2026-11-10',french:'2026-11-11',chemistry:'2026-11-11',geography:'2026-11-12',physics:'2026-11-12',math:'2026-11-13'};
export function recallPriority(topic:Topic,state:PlanState):Confidence|'unassessed'{
  const failed=Object.values(state.diagnostics??{}).some(d=>d.outcome==='retry'&&(d.sessionId===topic.id||(!topic.parentTopic&&d.topicId===topic.id)||(!!topic.parentTopic&&!d.sessionId&&d.topicId===topic.parentTopic)));
  return failed?'red':state.confidence[topic.id]??(topic.parentTopic?state.confidence[topic.parentTopic]:undefined)??'unassessed';
}
export function dueReviews(days: Day[], topics: Topic[], state: PlanState, today: string) {
  const latest: Record<string, string> = {};
  for (const day of days) for (const block of activeBlocks(day, state.arabic)) {
    const completed = state.completed[blockCompletionKey(block)];
    if (completed && completed <= today) for (const id of (block.sessions?.length?block.sessions:block.topics)) {
      if (!latest[id] || latest[id] < completed) latest[id] = completed;
    }
  }
  return topics.filter(topic => !topic.optional || state.arabic).flatMap(topic => {
    if (!latest[topic.id]) return [];
    const subject=topic.subject==='skills'?state.scienceContext:topic.subject;
    const exam=subject?SUBJECT_EXAMS[subject]:undefined;
    const dates = [...new Set([1, 4, 11].map(offset => shiftedDate(latest[topic.id], offset)))].filter(date => (!exam||date < exam) && !state.completed[`review:${topic.id}:${date}`]);
    const day=days.find(d=>d.date===today),saturday=new Date(`${today}T12:00:00Z`).getUTCDay()===6;
    const matchingExamBlock=!!day&&today>=FIRST_EXAM&&day.blocks.some(b=>b.minutes>0&&b.topics.some(id=>topics.find(t=>t.id===id)?.subject===subject));
    const allocated=!!day&&!day.rest&&!saturday&&(day.recall>0||matchingExamBlock);
    const overdue=dates.some(date=>date<=today);
    const due=overdue&&allocated&&!!exam&&today<exam&&!state.completed[`retrieval:${topic.id}:${today}`];
    return dates.length ? [{ topic, dates, due, overdue, deferred:overdue&&!due, examDate:exam, rating:recallPriority(topic,state),lastStudied:latest[topic.id] }] : [];
  }).sort((a,b)=>Number(b.due)-Number(a.due)||({red:0,amber:1,unassessed:2,green:3}[a.rating]-{red:0,amber:1,unassessed:2,green:3}[b.rating])||(a.examDate??'9999').localeCompare(b.examDate??'9999')||a.dates[0].localeCompare(b.dates[0]));
}

// One click records one actual retrieval, never several missed spacing events.
export function recordRetrieval(state:PlanState,id:string,dates:string[],today:string):PlanState{
  const date=dates.filter(d=>d<=today&&!state.completed[`review:${id}:${d}`]).sort()[0];
  if(!date||state.completed[`retrieval:${id}:${today}`])return state;
  return {...state,completed:{...state.completed,[`review:${id}:${date}`]:today,[`retrieval:${id}:${today}`]:today}};
}
export function remainingPastBlocks(days:Day[],state:PlanState,today:string){
  return days.filter(d=>d.date<today).flatMap(day=>activeBlocks(day,state.arabic).filter(b=>b.sessions?.length&&!state.completed[b.id]&&!b.sessions.every(id=>state.completed[`study:${id}`])).map(block=>({date:day.date,block})));
}

export function loadStudyState(raw:unknown):PlanState {
 const state=normalizePlan(raw);
 if(!state.reportedSeeded){for(const id of ['atomic-structure','isotopes','atomic-models'])state.completed['study:'+id]='2026-10-11';state.reportedSeeded=true;}
 return state;
}
