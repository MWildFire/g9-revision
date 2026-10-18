import geographyPractice from '../../data/geography-practice-portions.json';
import additionalPractice from '../../data/additional-practice-portions.json';
import practiceData from '../../data/chemistry-practice-portions.json';
import data from '../../data/study-sessions.json';
import type {Text} from './content';
export type StudySession={id:string;topic:string;title:Text;minutes:number;range:number[];timing:{read:number;example:number;attempt:number;check:number};libraryIds?:string[];practiceIds?:string[];teachingTitles?:string[];studyPath?:string};
export const sessions=data as StudySession[];
export const sessionRoute=(s:StudySession)=>s.studyPath??`/november/${s.topic}?part=${s.id}`;

// Optional practice choices stay outside the daily-plan session inventory.
export const practiceSessions=[...practiceData,...additionalPractice,...geographyPractice] as StudySession[];
