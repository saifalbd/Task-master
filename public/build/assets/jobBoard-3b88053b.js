import{a as j,S}from"./app-layout-d1a0a4ef.js";import{_ as V}from"./PageTitleBox-570dae93.js";import{a as l}from"./api-5314060c.js";import{h as L}from"./moment-fbc5633a.js";import{_ as A,r as a,n as F,h as T,w as o,e as n,f as r,i as s,b as i,c as f,p as x,F as B,u as J,t as d}from"./app-c6f1798b.js";const P={components:{AppLayout:j,PageTitleBox:V,statusBtnVue:S},setup(){const h=a(!1),g=J(),u=a([]),e=a([]),p=a([]),m=a([]),_=a([]),k=t=>L(t).fromNow(),v=t=>{g.push(t)};l(0,t=>{u.value=t}),l(1,t=>{e.value=t}),l(2,t=>{p.value=t}),l(3,t=>{m.value=t}),l(4,t=>{_.value=t});const b=F(()=>[{title:"Pending Tasks",items:u.value},{title:"Accepted Tasks",items:e.value},{title:"Working Tasks",items:p.value},{title:"Submited Tasks",items:m.value},{title:"Completed Tasks",items:_.value}]);return{atNow:k,go:v,busy:h,tasks:b}}},$={class:"home-page job"},z={class:"card-header"},D={class:"recent-task-list"},E=["onClick"],I={class:"avatar-box"},R=["src"],W={class:"task-line"},q={class:"center"},G={class:"text-box"};function H(h,g,u,e,p,m){const _=n("page-title-box"),k=n("el-avatar"),v=n("el-card"),b=n("el-col"),t=n("el-row"),w=n("app-layout");return r(),T(w,{busy:e.busy},{default:o(()=>[s("div",null,[i(_,{title:"Job Board"})]),s("div",$,[i(t,{gutter:24},{default:o(()=>[(r(!0),f(B,null,x(e.tasks,(y,C)=>(r(),T(b,{sm:24,md:8,key:C},{default:o(()=>[i(v,{class:"box-card mb-3"},{header:o(()=>[s("div",z,[s("span",null,[s("b",null,d(y.title),1)])])]),default:o(()=>[s("ul",D,[(r(!0),f(B,null,x(y.items,(c,N)=>(r(),f("li",{key:N,onClick:K=>e.go({name:"job.task.show",params:{id:c.id}})},[s("div",I,[i(k,{size:25},{default:o(()=>[s("img",{src:c.assigner.avatar.url},null,8,R)]),_:2},1024)]),s("div",W,[s("b",null,d(c.assigner.name),1),s("small",q,d(e.atNow(c.created_at)),1)]),s("div",G,d(c.title),1)],8,E))),128))])]),_:2},1024)]),_:2},1024))),128))]),_:1})])]),_:1},8,["busy"])}const Y=A(P,[["render",H],["__scopeId","data-v-67c5d614"]]);export{Y as default};
