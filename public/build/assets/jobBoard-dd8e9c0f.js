import{a as j,S}from"./app-layout-b069f2a8.js";import{_ as V}from"./PageTitleBox-31010f1c.js";import{a as l}from"./api-5314060c.js";import{h as L}from"./moment-fbc5633a.js";import{_ as z,r as a,q as A,h as x,w as o,e as n,f as r,i as s,b as i,c as f,x as T,F as B,u as F,z as d}from"./app-1f23f49e.js";const J={components:{AppLayout:j,PageTitleBox:V,statusBtnVue:S},setup(){const h=a(!1),g=F(),u=a([]),e=a([]),p=a([]),m=a([]),_=a([]),k=t=>L(t).fromNow(),v=t=>{g.push(t)};l(0,t=>{u.value=t}),l(1,t=>{e.value=t}),l(2,t=>{p.value=t}),l(3,t=>{m.value=t}),l(4,t=>{_.value=t});const b=A(()=>[{title:"Pending Tasks",items:u.value},{title:"Accepted Tasks",items:e.value},{title:"Working Tasks",items:p.value},{title:"Submited Tasks",items:m.value},{title:"Completed Tasks",items:_.value}]);return{atNow:k,go:v,busy:h,tasks:b}}},P={class:"home-page job"},$={class:"card-header"},q={class:"recent-task-list"},D=["onClick"],E={class:"avatar-box"},I=["src"],R={class:"task-line"},W={class:"center"},G={class:"text-box"};function H(h,g,u,e,p,m){const _=n("page-title-box"),k=n("el-avatar"),v=n("el-card"),b=n("el-col"),t=n("el-row"),w=n("app-layout");return r(),x(w,{busy:e.busy},{default:o(()=>[s("div",null,[i(_,{title:"Job Board"})]),s("div",P,[i(t,{gutter:24},{default:o(()=>[(r(!0),f(B,null,T(e.tasks,(y,C)=>(r(),x(b,{sm:24,md:8,key:C},{default:o(()=>[i(v,{class:"box-card mb-3"},{header:o(()=>[s("div",$,[s("span",null,[s("b",null,d(y.title),1)])])]),default:o(()=>[s("ul",q,[(r(!0),f(B,null,T(y.items,(c,N)=>(r(),f("li",{key:N,onClick:K=>e.go({name:"job.task.show",params:{id:c.id}})},[s("div",E,[i(k,{size:25},{default:o(()=>[s("img",{src:c.assigner.avatar.url},null,8,I)]),_:2},1024)]),s("div",R,[s("b",null,d(c.assigner.name),1),s("small",W,d(e.atNow(c.created_at)),1)]),s("div",G,d(c.title),1)],8,D))),128))])]),_:2},1024)]),_:2},1024))),128))]),_:1})])]),_:1},8,["busy"])}const Y=z(J,[["render",H],["__scopeId","data-v-67c5d614"]]);export{Y as default};
