import{a as R,S as U}from"./app-layout-43b1bc1f.js";import{_ as W}from"./PageTitleBox-1650170e.js";import{_ as G,p as J,n as K,r as u,q as O,s as Q,t as q,v as X,h as P,w as s,e as c,f as i,i as a,b as n,j as p,c as k,x,F as b,y as Y,u as Z,z as v,A as $,B as ee,C as oe,D as te}from"./app-3e66fce1.js";import{r as S}from"./api-f6d9a04f.js";import{h as se}from"./moment-fbc5633a.js";import{C as ae}from"./CreateButton-b07e114c.js";import{C as le}from"./Create-587cf1d0.js";import"./FormDialog-133ad460.js";import"./index-0f7b6e34.js";const ne={components:{Plus:J,CreateButton:ae,ArrowDown:K,AppLayout:R,PageTitleBox:W,statusBtnVue:U,AddTask:le},setup(){const h=u(!1),d=u(!1),V=u([]),t=u([]),j=Z(),B=u([]),N=u([]),f=u([]),g=u([]),m=u([]),y=e=>se(e).fromNow(),T=e=>{j.push(e)},w=(e=null,o=null)=>{console.log({employee:e,category:o}),S(0,r=>{B.value=r},e,o),S(1,r=>{N.value=r},e,o),S(2,r=>{f.value=r},e,o),S(3,r=>{g.value=r},e,o),S(4,r=>{m.value=r},e,o)};w(null,null);const D=O(()=>[{title:"Pending Tasks",items:B.value},{title:"Accepted Tasks",items:N.value},{title:"Working Tasks",items:f.value},{title:"Submited Tasks",isSubmit:!0,items:g.value},{title:"Completed Tasks",items:m.value}]),z=u([]);axios.get(route("taskType.index")).then(({data:e})=>{z.value=e});const C=u([]);axios.get(route("employeeProposal")).then(({data:e})=>{C.value=e});const E=async(e,o)=>{try{await axios.get(route("acceptProposal",{employee:e})),C.value.splice(o,1)}catch(r){console.error(r)}},L=async(e,o)=>{try{await axios.get(route("denyProposal",{employee:e})),C.value.splice(o,1)}catch(r){console.error(r)}},I=async(e,o,r,_)=>{try{const A=route("task.changeStatus",{task:o.id}),{data:M}=await axios.post(A,{status:e,notify:0});r.splice(_,1),e==4&&m.value.push(o)}catch(A){console.error(A)}},F=e=>{B.value.push(e),d.value=!1};return Q(()=>{q("employees",e=>{V.value=e}),q("categories",e=>{t.value=e})}),{atNow:y,go:T,push:F,changeStatus:I,doArchive:(e,o)=>{m.value.splice(o,1),axios.post(route("task.doArchive",{task:e.id}),{prop:"user_archive",do:e.user_archive?0:1})},loadTask:w,statusList:X,busy:h,employeeProposals:C,Accepted:E,Deny:L,showCreate:d,tasks:D,taskTypes:z,employees:V,categories:t}}},H=h=>(oe("data-v-a3c38e74"),h=h(),te(),h),re={class:"task-box-list"},ce=["md"],ie={class:"box-card"},de={class:"card-header"},ue={class:"recent-task-list"},_e={class:"avatar-box"},pe=["src"],me={class:"task-line"},ke={class:"center"},ve={class:"el-dropdown-link"},ye=["onClick"],he={class:"right-side-bar"},fe=H(()=>a("div",{class:"card-header"},[a("span",null,"Employee Proposal")],-1)),ge={class:"employee-proposals"},we=["onClick"],Ce={class:"line-one"},xe={style:{"text-align":"center"}},be=H(()=>a("div",null,"Send you Employee Proposal as empoyeee",-1)),Te={class:"line-two"};function Ae(h,d,V,t,j,B){const N=c("create-button"),f=c("arrow-down"),g=c("el-icon"),m=c("el-button"),y=c("el-dropdown-item"),T=c("el-dropdown-menu"),w=c("el-dropdown"),D=c("page-title-box"),z=c("el-avatar"),C=c("va-avatar"),E=c("el-link"),L=c("el-card"),I=c("add-task"),F=c("app-layout");return i(),P(F,{busy:t.busy},{default:s(()=>[a("div",null,[n(D,{title:"Home Board"},{default:s(()=>[n(N,{title:"Add Task",onClick:d[0]||(d[0]=l=>t.showCreate=!0)}),n(w,null,{dropdown:s(()=>[n(T,null,{default:s(()=>[n(y,{onClick:d[1]||(d[1]=l=>t.loadTask(null,null))},{default:s(()=>[p("All Categories")]),_:1}),(i(!0),k(b,null,x(t.categories,l=>(i(),P(y,{key:l.id,onClick:e=>t.loadTask(null,l.id)},{default:s(()=>[p(v(l.title),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),default:s(()=>[n(m,{type:"primary",style:{"margin-left":"15px"}},{default:s(()=>[p(" Categories"),n(g,{class:"el-icon--right"},{default:s(()=>[n(f)]),_:1})]),_:1})]),_:1}),n(w,null,{dropdown:s(()=>[n(T,null,{default:s(()=>[n(y,{onClick:d[2]||(d[2]=l=>t.loadTask(null))},{default:s(()=>[p("All Employees")]),_:1}),(i(!0),k(b,null,x(t.employees,l=>(i(),P(y,{key:l.id,onClick:e=>t.loadTask(l.id)},{default:s(()=>[p(v(l.name),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),default:s(()=>[n(m,{type:"primary",style:{"margin-left":"15px"}},{default:s(()=>[p(" Employees"),n(g,{class:"el-icon--right"},{default:s(()=>[n(f)]),_:1})]),_:1})]),_:1})]),_:1})]),a("div",{class:Y(["home-page admin",{hasProposal:!!t.employeeProposals.length}])},[a("div",re,[(i(!0),k(b,null,x(t.tasks,(l,e)=>(i(),k("div",{sm:24,md:4.8,key:e},[a("div",ie,[a("div",de,[a("span",null,[a("b",null,v(l.title),1)])]),a("ul",ue,[(i(!0),k(b,null,x(l.items,(o,r)=>(i(),k("li",{key:r,style:$({border:`1px solid ${o.category.color.border}`,color:o.category.color.text,backgroundColor:o.category.color.bg})},[a("div",_e,[n(z,{size:25},{default:s(()=>[a("img",{src:o.employee.model.avatar.url},null,8,pe)]),_:2},1024)]),a("div",me,[a("b",null,v(o.employee.model.name),1),a("small",ke,v(t.atNow(o.created_at)),1),n(w,null,{dropdown:s(()=>[n(T,null,{default:s(()=>[(i(!0),k(b,null,x(t.statusList.filter(_=>![0,1,2,3,6,7].includes(_.status)).filter(_=>_.status!=o.status),(_,A)=>(i(),P(y,{key:A,onClick:M=>t.changeStatus(_.status,o,l.items,r)},{default:s(()=>[p(v(_.title),1)]),_:2},1032,["onClick"]))),128)),o.status==4?(i(),P(y,{key:0,onClick:_=>t.doArchive(o,r)},{default:s(()=>[p(" Archive ")]),_:2},1032,["onClick"])):ee("",!0)]),_:2},1024)]),default:s(()=>[a("span",ve,[n(g,{class:"el-icon--right"},{default:s(()=>[n(f)]),_:1})])]),_:2},1024)]),a("div",{class:"text-box",onClick:_=>t.go({name:"task.show",params:{id:o.id}})},v(o.title),9,ye)],4))),128))])])],8,ce))),128))]),a("div",he,[n(L,{class:"box-card"},{header:s(()=>[fe]),default:s(()=>[a("ul",ge,[(i(!0),k(b,null,x(t.employeeProposals,(l,e)=>(i(),k("li",{key:e},[a("div",{class:"avatar-box",onClick:o=>t.go({name:"userProfile",params:{user:l.user.id}})},[n(C,{src:l.user.avatar.url,size:30},null,8,["src"])],8,we),a("div",Ce,[a("div",null,[n(E,{underline:!1,onClick:o=>t.go({name:"userProfile",params:{user:l.user.id}})},{default:s(()=>[a("b",null,v(l.user.name),1)]),_:2},1032,["onClick"]),a("small",xe,v(t.atNow(l.created_at)),1)]),be]),a("div",Te,[n(m,{size:"small",type:"primary",onClick:o=>t.Accepted(l,e)},{default:s(()=>[p(" Accepted ")]),_:2},1032,["onClick"]),n(m,{size:"small",type:"danger",onClick:o=>t.Deny(l,e)},{default:s(()=>[p(" Deny ")]),_:2},1032,["onClick"])])]))),128))])]),_:1})])],2),n(I,{show:t.showCreate,"onUpdate:show":d[3]||(d[3]=l=>t.showCreate=l),employees:t.employees,categories:t.categories,taskTypes:t.taskTypes,onPush:t.push},null,8,["show","employees","categories","taskTypes","onPush"])]),_:1},8,["busy"])}const Ie=G(ne,[["render",Ae],["__scopeId","data-v-a3c38e74"]]);export{Ie as default};