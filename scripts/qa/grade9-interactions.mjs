// Finite local author QA. Run only under the shared heavy-test-host lease.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { startAuditServer } from './local-audit-server.mjs';
// A heading alone can precede webfont loading and route entrance animations.
// Never open disclosures here: print restoration must preserve the real baseline.
async function settle(page){
 await page.evaluate(()=>document.fonts.ready);
 let previous='',since=0;
 const deadline=Date.now()+15000;
 while(Date.now()<deadline){
  const state=await page.evaluate(()=>{
   const root=document.querySelector('.g9-course')||document.querySelector('main');
   const nodes=[root,...root.querySelectorAll('h1,h2,p,table,span[lang="ar"]')];
   return {fonts:document.fonts.status,signature:JSON.stringify(nodes.map(n=>{const r=n.getBoundingClientRect(),s=getComputedStyle(n);return [Math.round(r.x),Math.round(r.y),Math.round(r.width),Math.round(r.height),s.opacity,s.fontFamily];}))};
  });
  if(state.fonts==='loaded'&&state.signature===previous){if(Date.now()-since>=500)return;}
  else{previous=state.signature;since=Date.now();}
  await new Promise(r=>setTimeout(r,100));
 }
 throw Error('capture_layout_or_fonts_unstable');
}
const [sha,outArg,portArg]=process.argv.slice(2);
if(!sha||!outArg||!portArg)throw Error('Usage: grade9-interactions.mjs SHA OUT PORT');
const out=path.resolve(outArg);fs.mkdirSync(out,{recursive:true});
const lessons=JSON.parse(fs.readFileSync('src/modules/grade9/lessons.json','utf8'));
const topics=JSON.parse(fs.readFileSync('src/data/revision-plan.json','utf8')).topics;
const mocks=JSON.parse(fs.readFileSync('src/data/mocks.json','utf8')).lessons;
function legacyHeading(route,lang){
 if(route.startsWith('/november/'))return topics.find(t=>t.id===route.split('/').at(-1)).title[lang];
 if(route.startsWith('/mocks/'))return mocks.find(t=>t.id===route.split('/').at(-1)).title[lang];
 const [subject,key]=route.slice(1).split('/');
 const keys={'acids-bases':'acidsBases','resource-reliance':'resourceReliance'};
 return JSON.parse(fs.readFileSync(`src/i18n/${lang}/${subject}.json`,'utf8'))[subject==='french'&&key==='units'?'unitsPage':keys[key]||key].title;
}
const {server,base,identity}=await startAuditServer({dist:path.resolve('dist'),sha,port:Number(portArg)});
const browser=await chromium.launch();const results=[];const errors=[];let fatal;
const save=()=>fs.writeFileSync(path.join(out,'report.json'),JSON.stringify({identity,results,errors,fatal,pronunciation_listening:'not_claimed; independent listening remains required',at:new Date().toISOString()},null,2));
try{
 for(const lang of ['en','ru']){
  const context=await browser.newContext();const page=await context.newPage();page.on('pageerror',e=>errors.push(String(e)));
  await context.addInitScript(({lang})=>{localStorage.setItem('g9-lang',lang);localStorage.setItem('g9-november-plan-2026-v1','{"notes":"R06 preserve"}');},{lang});
  for(const width of [1280,390]){
   await page.setViewportSize({width,height:900});
   for(const l of lessons){
    await page.goto(base+'/grade9/'+l.id);
    await page.getByRole('heading',{level:1,name:l.title[lang],exact:true}).waitFor();
    await page.getByText(l.explanation[lang],{exact:true}).waitFor();
    await page.locator('.g9-question details').evaluateAll(nodes=>nodes.forEach(n=>n.open=true));
    for(const q of l.practice)await page.getByText(q.answer[lang],{exact:true}).waitFor();
    await settle(page);
    const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth+1);
    assert.equal(overflow,false,`${l.id} ${lang} ${width} overflow`);
    assert.equal(await page.locator('.g9-question').count(),l.practice.length);
    if(l.id==='a-core'||l.id==='a-routine')assert.ok(await page.locator('[lang="ar"][dir="rtl"]').count()>0);
    await page.screenshot({path:path.join(out,`${l.id}-${lang}-${width===1280?'desktop':'mobile'}.png`),fullPage:true});
    results.push({route:'/grade9/'+l.id,lang,width,explanation:true,answers:l.practice.length,overflow});save();
   }
  }
  // New checks persist across route navigation and reload without losing old plan data.
  await page.goto(base+'/grade9/g-floods');await page.getByRole('heading',{level:1,name:lessons.find(l=>l.id==='g-floods').title[lang]}).waitFor();
  await page.locator('main input[type=checkbox]').check();await page.reload();await page.getByRole('heading',{level:1}).waitFor();
  assert.equal(await page.locator('main input[type=checkbox]').isChecked(),true);
  assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('g9-november-plan-2026-v1')).notes),'R06 preserve');
  results.push({scenario:'recall_reload_and_legacy_storage',lang,passed:true});
  // Real media decode and playback, not a pronunciation/listening certification.
  await page.goto(base+'/grade9/a-routine');await page.locator('audio').waitFor();
  const media=await page.locator('audio').evaluate(async audio=>{await audio.play();await new Promise((resolve,reject)=>{audio.addEventListener('ended',resolve,{once:true});audio.addEventListener('error',()=>reject(Error('media_error')),{once:true});setTimeout(()=>reject(Error('media_timeout')),20000);});return {duration:audio.duration,ended:audio.ended,currentTime:audio.currentTime};});
  assert.ok(media.ended&&media.duration>2);results.push({scenario:'arabic_media_playback',lang,...media});
  // Print events open answers and source metadata and then restore collapsed state.
  for(const id of lessons.map(lesson=>lesson.id)){
   await page.goto(base+'/grade9/'+id);await page.getByRole('heading',{level:1,name:lessons.find(l=>l.id===id).title[lang],exact:true}).waitFor();await page.emulateMedia({media:'print'});
   await page.evaluate(()=>window.dispatchEvent(new Event('beforeprint')));
   assert.equal(await page.locator('main details:not([open])').count(),0);
   await settle(page);
   await page.pdf({path:path.join(out,`${id}-${lang}.pdf`),format:'A4',printBackground:true});
   await page.evaluate(()=>window.dispatchEvent(new Event('afterprint')));await page.emulateMedia({media:'screen'});
   assert.equal(await page.locator('.g9-question details[open]').count(),0);
   results.push({scenario:'print_answers_sources_and_restore',route:id,lang,passed:true});
  }
  // Exact shared follow-ups on the original lesson surface.
  for(const route of ['/mocks/science-investigation','/november/b-transport','/november/c-rates','/chemistry/energy','/chemistry/acids-bases','/geography/resource-reliance','/geography/tourism','/french/units','/november/b-disease','/biology/immune']){
   await page.goto(base+route);const expectedHeading=legacyHeading(route,lang);await page.getByRole('heading',{level:1,name:expectedHeading,exact:true}).waitFor();
   await page.locator('main details').evaluateAll(nodes=>nodes.forEach(n=>n.open=true));
   await settle(page);
   const text=await page.locator('main').first().innerText();assert.ok(text.length>300);
   if(route==='/geography/resource-reliance')for(const id of ['g-indicators','g-aral-case'])assert.ok(await page.locator(`a[href$="/grade9/${id}"]`).count()>0);
   await page.screenshot({path:path.join(out,`legacy-${route.split('/').at(-1)}-${lang}.png`),fullPage:true});
   results.push({scenario:'legacy_followup_render',route,lang,expectedHeading,characters:text.length});
  }
  await context.close();
 }
 assert.equal(errors.length,0,'browser errors');
}catch(e){fatal=String(e.stack||e);throw e;}finally{save();await browser.close();await new Promise(r=>server.close(r));}
console.log(JSON.stringify({views:results.length,errors:errors.length,identity}));
