import{a as S}from"./app-layout-5d9798fd.js";import{_ as v}from"./PageTitleBox-f6019cab.js";import{S as B}from"./index-446bdd34.js";import{S as M}from"./statusBtn-f8051637.js";import{_ as b,ah as C,f as p,h,w as a,b as o,i as c,t as u,e,m as z,r as k,ai as L,c as N,G as V}from"./app-3e67fe59.js";import"./FormDialog-a9fe4070.js";import"./index-1c21caeb.js";import"./moment-fbc5633a.js";import"./icon-7c2f508c.js";import"./index-e6491f03.js";import"./useToast-a0cdd154.js";const Y={components:{DArrowLeft:C},props:{title:{type:String,default:"Back"}},setup(s,{emit:m}){return{props:s,back:()=>{history.go(-1)}}}};function A(s,m,i,t,r,f){const n=e("d-arrow-left"),l=e("el-icon"),d=e("el-button");return p(),h(d,{type:"primary",onClick:t.back},{default:a(()=>[o(l,null,{default:a(()=>[o(n)]),_:1}),c("span",null,u(t.props.title),1)]),_:1},8,["onClick"])}const F=b(Y,[["render",A]]),T={props:{id:{type:[String,Number],required:!0}},components:{AppLayout:S,PageTitleBox:v,ShowTask:B,StatusBtn:M,BackButton:F},setup(s){const i=z().auth_id,t=k(null),r=k(!0);return(async()=>{r.value=!0;try{const n=route("task.show",{task:s.id}),{data:l}=await axios.get(n);t.value=l}catch(n){console.error(n)}r.value=!1})(),{busy:r,auth_id:i,id:s.id,task:t,useDateFormat:L}}},E={key:0},j={style:{"font-size":"15px","margin-left":"5px"}};function q(s,m,i,t,r,f){const n=e("back-button"),l=e("page-title-box"),d=e("el-avatar"),y=e("el-link"),_=e("el-descriptions-item"),w=e("status-btn"),D=e("el-descriptions"),g=e("show-task"),x=e("app-layout");return p(),h(x,{busy:t.busy},{default:a(()=>[c("div",null,[o(l,{title:"Show Task no job"},{default:a(()=>[o(n)]),_:1})]),t.task?(p(),N("div",E,[o(g,{auth_id:t.auth_id,id:t.id,task:t.task},{default:a(()=>[o(D,{direction:"horizontal",column:1,size:"large",border:""},{default:a(()=>[o(_,{label:"Employe:"},{default:a(()=>[o(y,null,{default:a(()=>[o(d,{size:25,src:t.task.employee.model.avatar.url},null,8,["src"]),c("b",j,u(t.task.employee.model.name),1)]),_:1})]),_:1}),o(_,{label:"Status:"},{default:a(()=>[o(w,{status:t.task.status},null,8,["status"])]),_:1}),o(_,{label:"Asigned Date:"},{default:a(()=>[c("b",null,u(t.useDateFormat(new Date(t.task.start),"DD MMM YY")),1)]),_:1}),o(_,{label:"DeadLine Date:"},{default:a(()=>[c("b",null,u(t.useDateFormat(new Date(t.task.end),"DD MMM YY")),1)]),_:1})]),_:1})]),_:1},8,["auth_id","id","task"])])):V("",!0)]),_:1},8,["busy"])}const X=b(T,[["render",q]]);export{X as default};
