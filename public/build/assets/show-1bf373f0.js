import{a as S}from"./app-layout-b5cf8580.js";import{_ as g}from"./PageTitleBox-aaded2a2.js";import{S as v}from"./index-4a593197.js";import{S as x}from"./statusBtn-5eed707e.js";import{_ as B,r as b,m as L,ac as T,h as C,w as m,e as i,f as c,i as a,b as p,c as k,j as u,t as l,F as N,n as V,E}from"./app-44c844f3.js";import{u as F}from"./useToast-c6130b9b.js";import"./FormDialog-b0635048.js";import"./index-261a8ab4.js";import"./moment-fbc5633a.js";import"./icon-7c2f508c.js";import"./index-6eb68a20.js";const A={props:{id:{type:[String,Number],required:!0}},components:{AppLayout:S,PageTitleBox:g,ShowTask:v,StatusBtn:x},setup(n){const r=b(null),d=b(!0),h=L().auth_id,{init:f}=F();(async()=>{try{const s=route("my.task.show",{task:n.id}),{data:o}=await axios.get(s);r.value=o}catch(s){console.error(s)}d.value=!1})();const _=async s=>{try{const o=route("task.changeStatus",{task:n.id}),{data:e}=await axios.post(o,{status:s});r.value.status=s,f({message:"Succsess Fully Update Status",color:"#432c50",closeable:!0,duration:4e3})}catch(o){console.error(o)}};return{busy:d,auth_id:h,id:n.id,task:r,changeStatus:_,statusList:T}}},D={key:0},j={class:"status-dropdown"},q=["onClick"];function P(n,r,d,t,h,f){const y=i("page-title-box"),_=i("status-btn"),s=i("show-task"),o=i("app-layout");return c(),C(o,{busy:t.busy},{default:m(()=>[a("div",null,[p(y,{title:"Show Task"})]),t.task?(c(),k("div",D,[p(s,{auth_id:t.auth_id,id:t.id,task:t.task},{default:m(()=>[a("div",null,[a("h1",null,[u(" Employe: "),a("b",null,l(t.task.assigner.name),1)]),a("div",null,[u(" Task Assin: "),a("b",null,l(t.task.start),1)]),a("div",null,[u(" DeadLine: "),a("b",null,l(t.task.end),1)]),a("div",null,[u(" Status: "),p(_,{dropdown:!0,status:t.task.status},{default:m(()=>[a("ul",j,[(c(!0),k(N,null,V(t.statusList.filter(e=>e.status!=t.task.status),(e,w)=>(c(),k("li",{key:w,onClick:U=>t.changeStatus(e.status)},l(e.title),9,q))),128))])]),_:1},8,["status"])])])]),_:1},8,["auth_id","id","task"])])):E("",!0)]),_:1},8,["busy"])}const X=B(A,[["render",P]]);export{X as default};
