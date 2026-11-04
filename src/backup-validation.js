// Version 10 reliability: validate backups before replacing persistent local progress.
const isRecord=x=>x!==null&&typeof x==="object"&&!Array.isArray(x);
const safeList=x=>Array.isArray(x)&&x.length<=100000;
const validAttempt=a=>isRecord(a)&&typeof a.id==="string"&&a.id.length<200&&typeof a.correct==="boolean"&&Number.isFinite(a.at);
export function validateBackup(payload){
 if(!isRecord(payload)||payload.version!==1||!isRecord(payload.data))return {ok:false,error:"Unsupported backup format."};
 const d=payload.data;
 if(!safeList(d.completed)||!d.completed.every(x=>typeof x==="string"&&x.length<200))return {ok:false,error:"Invalid completed lessons."};
 if(!safeList(d.attempts)||!d.attempts.every(validAttempt))return {ok:false,error:"Invalid practice attempts."};
 if(!isRecord(d.reviews)||Object.keys(d.reviews).length>10000)return {ok:false,error:"Invalid review schedule."};
 for(const r of Object.values(d.reviews))if(!isRecord(r)||!Number.isFinite(r.due)||!Number.isFinite(r.interval)||!Number.isFinite(r.streak))return {ok:false,error:"Invalid review entry."};
 for(const k of ["mathAttempts","clinicalAttempts","curriculumAttempts"]){if(d[k]!==undefined&&(!safeList(d[k])||!d[k].every(x=>isRecord(x)&&typeof x.correct==="boolean"&&Number.isFinite(x.at))))return {ok:false,error:"Invalid "+k+"."}}
 if(d.curriculumCompleted!==undefined&&(!safeList(d.curriculumCompleted)||!d.curriculumCompleted.every(x=>typeof x==="string")))return {ok:false,error:"Invalid curriculum completion data."};
 if(d.conceptReviews!==undefined){if(!isRecord(d.conceptReviews))return {ok:false,error:"Invalid concept reviews."};for(const r of Object.values(d.conceptReviews))if(!isRecord(r)||!Number.isFinite(r.due)||!Number.isFinite(r.interval)||!Number.isFinite(r.streak))return {ok:false,error:"Invalid concept review entry."}}
 if(d.studyMinutes!==undefined&&(!Number.isFinite(d.studyMinutes)||d.studyMinutes<10||d.studyMinutes>600))return {ok:false,error:"Invalid daily study target."};
 if(d.examDate!==undefined&&typeof d.examDate!=="string")return {ok:false,error:"Invalid exam date."};
 return {ok:true,data:d};
}
