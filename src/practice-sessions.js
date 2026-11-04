// Small-bank exam-style practice sessions, NOT a simulated NAPLEX administration.
export const sessionSizes=[5,10,20];
export function buildSession(pool,size=10,seed=1,domain="all"){
 if(!Array.isArray(pool))throw Error("Question pool required");
 const filtered=pool.filter(q=>domain==="all"||q.domain===domain);
 const n=Math.min(filtered.length,Math.max(1,Math.floor(Number(size)||10)));
 let x=(Math.floor(Number(seed))>>>0)||1;
 const a=[...filtered];
 for(let i=a.length-1;i>0;i--){x=(Math.imul(x,1664525)+1013904223)>>>0;const j=x%(i+1);[a[i],a[j]]=[a[j],a[i]]}
 return a.slice(0,n).map(q=>q.id);
}
export function sessionSummary(ids,answers,pool){
 const byId=new Map(pool.map(q=>[q.id,q]));
 const results=ids.map(id=>{const q=byId.get(id),selected=answers[id];return {id,domain:q?.domain||"Unknown",answered:Number.isInteger(selected),correct:!!q&&Number.isInteger(selected)&&selected===q.answer,answer:q?.answer,selected}});
 const answered=results.filter(x=>x.answered),correct=answered.filter(x=>x.correct);
 const byDomain={};for(const r of results){byDomain[r.domain]??={answered:0,correct:0};if(r.answered){byDomain[r.domain].answered++;if(r.correct)byDomain[r.domain].correct++}}
 return {count:results.length,answered:answered.length,correct:correct.length,accuracy:answered.length?Math.round(correct.length/answered.length*100):null,byDomain,results}
}
export function validSession(s,pool){
 if(!s||!Array.isArray(s.ids)||!s.ids.length||!s.answers||typeof s.answers!=="object"||Array.isArray(s.answers))return false;
 const m=new Map(pool.map(q=>[q.id,q]));if(new Set(s.ids).size!==s.ids.length)return false;
 return s.ids.every(id=>m.has(id))&&Object.entries(s.answers).every(([id,v])=>s.ids.includes(id)&&Number.isInteger(v)&&v>=0&&v<m.get(id).options.length);
}
