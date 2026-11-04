import {curriculumModules} from "./curriculum.js";
import {drugs} from "./drugs.js";
import {extendedQuestions} from "./extended-questions.js";
export const referencePortals=[
 {id:"dailymed",title:"DailyMed — current drug labeling",url:"https://dailymed.nlm.nih.gov/dailymed/",scope:"Product-specific prescribing information",kind:"reference portal"},
 {id:"drugsatfda",title:"FDA Drugs@FDA",url:"https://www.accessdata.fda.gov/scripts/cder/daf/",scope:"Approved drug products and labels",kind:"reference portal"},
 {id:"nabp",title:"NABP NAPLEX information",url:"https://nabp.pharmacy/programs/examinations/naplex/",scope:"Examination information and current candidate resources",kind:"reference portal"},
 {id:"cdc",title:"CDC immunization schedules",url:"https://www.cdc.gov/vaccines/hcp/imz-schedules/",scope:"Immunization schedules and updates",kind:"reference portal"}
];
const makeRecord=(id,title,type,portals)=>({id,title,type,status:"Review Needed",reviewer:null,verifiedAt:null,sourceClaims:[],portals,notes:"Research starting points only. No claim-level verification or qualified pharmacist sign-off has been completed."});
export const evidenceRegistry=[
 ...curriculumModules.map(m=>makeRecord("module:"+m.id,m.title,"Curriculum module",["dailymed","drugsatfda"])),
 ...drugs.map(d=>makeRecord("drug:"+d.id,d.generic,"Drug Atlas summary",["dailymed","drugsatfda"])),
 ...extendedQuestions.map(q=>makeRecord("question:"+q.id,q.topic,"Practice question",["nabp","dailymed"]))
];
const records=new Map(evidenceRegistry.map(x=>[x.id,x]));
export function getEvidence(id){return records.get(id)||null}
export function evidenceStats(){const counts={};for(const r of evidenceRegistry)counts[r.type]=(counts[r.type]||0)+1;return {total:evidenceRegistry.length,reviewed:evidenceRegistry.filter(r=>r.status==="Verified").length,pending:evidenceRegistry.filter(r=>r.status==="Review Needed").length,byType:counts}}
export function evidenceFor(type,id){return getEvidence(type+":"+id)}
export function validateEvidenceRegistry(){
 const portals=new Set(referencePortals.map(p=>p.id));
 return records.size===evidenceRegistry.length&&evidenceRegistry.every(r=>r.status==="Review Needed"&&r.verifiedAt===null&&r.reviewer===null&&r.portals.every(id=>portals.has(id)))&&referencePortals.every(p=>p.url.startsWith("https://"));
}
