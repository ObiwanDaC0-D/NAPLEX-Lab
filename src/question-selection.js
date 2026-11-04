// Pure, reusable selection helpers for the question engine.
export function missedQuestionIds(attempts=[]){
 const latest=new Map();
 for(const a of attempts)if(a&&typeof a.id==="string"&&typeof a.correct==="boolean")latest.set(a.id,a.correct);
 return new Set([...latest].filter(([,correct])=>!correct).map(([id])=>id));
}
export function selectQuestions(all,mode,attempts=[]){
 if(mode==="errors"){const missed=missedQuestionIds(attempts);return all.filter(q=>missed.has(q.id))}
 if(typeof mode==="string"&&mode.startsWith("lesson:")){const id=mode.slice(7);return all.filter(q=>q.lesson===id)}
 return all;
}
export function safeQuestionIndex(index,length){return length?Math.min(Math.max(Number.isInteger(index)?index:0,0),length-1):0}
