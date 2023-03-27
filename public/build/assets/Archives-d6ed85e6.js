import{a as j,S as D}from"./app-layout-5035e93c.js";import{_ as F}from"./PageTitleBox-2c2a24fa.js";import{_ as L,ak as T,$ as N,ai as E,r as p,h as R,w as s,e as o,f as h,i as e,b as t,j as $,c as S,q,F as M,u as U,v as i,x as G,y as H}from"./app-6441ea8f.js";import{B as J}from"./BackButton-c0350832.js";const K={components:{AppLayout:j,PageTitleBox:F,BackButtonVue:J,StatusBtn:D,StarFilled:T,Expand:N,Download:E},setup(){const r=U(),_=p(!0),d=p([]),n=p([]),f=p(10),b=l=>{r.push(l)};return(async()=>{try{const l=route("my.task.archives"),{data:c}=await axios.get(l);d.value=c.data,n.value=c.links}catch(l){console.error(l)}_.value=!1})(),{items:d,links:n,perPage:f,busy:_,go:b,doArchive:(l,c)=>{d.value.splice(c,1),axios.post(route("task.doArchive",{task:l.id}),{prop:"employee_archive",do:l.employee_archive?0:1})},addStar:l=>{const{employee_star:c}=l;l.employee_star=!c,axios.post(route("task.changeStar",{task:l.id}),{prop:"employee_star",star:c?0:1})}}}},O=r=>(G("data-v-efb0a656"),r=r(),H(),r),Q={class:"row mt-4"},W={class:"flex md6"},X={class:"item"},Y={class:"flex lg6"},Z={class:"item right"},ee={class:"va-table-responsive"},te={class:"va-table"},ae=O(()=>e("thead",null,[e("tr",null,[e("th",null,"Star"),e("th",null,"ID"),e("th",null,"Title"),e("th",null,"Category"),e("th",null,"Assigner"),e("th",null,"Start"),e("th",null,"DeadLine"),e("th",null,"Status"),e("th",null,"Show")])],-1)),oe={class:"ml-1"};function le(r,_,d,n,f,b){const y=o("back-button-vue"),k=o("page-title-box"),g=o("va-select"),l=o("va-icon"),c=o("va-input"),w=o("star-filled"),m=o("el-icon"),v=o("el-button"),x=o("el-link"),C=o("el-avatar"),A=o("status-btn"),B=o("download"),V=o("expand"),I=o("el-button-group"),P=o("app-layout");return h(),R(P,{busy:n.busy},{default:s(()=>[e("div",null,[t(k,{title:"My Task Archives (jobs)"},{default:s(()=>[t(y)]),_:1})]),e("div",Q,[e("div",W,[e("div",X,[t(g,{class:"flex mb-2 md6",label:"Per Page",modelValue:n.perPage,"onUpdate:modelValue":_[0]||(_[0]=a=>n.perPage=a),options:[10,20,30,40,50]},null,8,["modelValue"])])]),e("div",Y,[e("div",Z,[t(c,{class:"flex mb-2 md6",label:"Search"},{prepend:s(()=>[t(l,{class:"material-icons"},{default:s(()=>[$("search")]),_:1})]),_:1})])])]),e("div",ee,[e("table",te,[ae,e("tbody",null,[(h(!0),S(M,null,q(n.items,(a,z)=>(h(),S("tr",{key:a.id},[e("td",null,[t(v,{onClick:u=>n.addStar(a),size:"small",type:a.employee_star?"warning":"",plain:"",round:""},{default:s(()=>[t(m,null,{default:s(()=>[t(w)]),_:1})]),_:2},1032,["onClick","type"])]),e("td",null,i(a.id),1),e("td",null,[t(x,{onClick:u=>n.go({name:"job.task.show",params:{id:a.id}})},{default:s(()=>[e("b",null,i(a.title),1)]),_:2},1032,["onClick"])]),e("td",null,i(a.category.title),1),e("td",null,[t(x,{underline:!1,onClick:u=>n.go({name:"userProfile",params:{user:a.assigner.id}})},{default:s(()=>[t(C,{size:25,src:a.assigner.avatar.url},null,8,["src"]),e("b",oe,i(a.assigner.name),1)]),_:2},1032,["onClick"])]),e("td",null,i(a.start),1),e("td",null,i(a.end),1),e("td",null,[t(A,{status:a.status,size:"small"},null,8,["status"])]),e("td",null,[t(I,null,{default:s(()=>[t(v,{type:"primary",size:"small",title:"Restore From Archive",onClick:u=>n.doArchive(a,z)},{default:s(()=>[t(m,null,{default:s(()=>[t(B)]),_:1})]),_:2},1032,["onClick"]),t(v,{type:"primary",size:"small",onClick:u=>n.go({name:"job.task.show",params:{id:a.id}}),title:"Show"},{default:s(()=>[t(m,null,{default:s(()=>[t(V)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)])]))),128))])])])]),_:1},8,["busy"])}const ie=L(K,[["render",le],["__scopeId","data-v-efb0a656"]]);export{ie as default};
