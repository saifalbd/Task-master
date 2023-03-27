import{a as ae,S as ne}from"./app-layout-5035e93c.js";import{_ as re}from"./PageTitleBox-2c2a24fa.js";import{P as ie}from"./Pagination-84119699.js";import{R as ce}from"./RemoveEditButton-0508b1ca.js";import{C as de,E as _e}from"./Edit-dd442aa1.js";import{C as ue}from"./CreateButton-55d26947.js";import{_ as pe,X as O,Y as U,ai as F,aa as me,ab as fe,a8 as ve,ac as ye,A as ke,$ as he,aj as ge,ak as be,r as u,ad as M,h as w,w as t,u as Ce,l as we,R as xe,S as Ee,e as s,f as v,i as c,b as e,j as y,c as j,q as H,F as q,v as g}from"./app-6441ea8f.js";import{h as Pe}from"./moment-fbc5633a.js";import{u as Se}from"./useToast-31be6915.js";import"./FormDialog-52448d67.js";import"./index-d2820a07.js";const Ae={components:{Delete:O,Edit:U,Download:F,AppLayout:ae,PageTitleBox:re,Pagination:ie,Create:de,EditVue:_e,List:me,Box:fe,CreateButton:ue,RemoveEditButton:ce,StatusBtn:ne,More:ve,Search:ye,Collection:ke,Expand:he,Star:ge,StarFilled:be},setup(){const x=u(!1),n=u(!0),B=Se(),l=Ce(),m=u([]),E=u([]),b=u([]),k=u(!1),i=u([]),d=u(50),P=[{key:"user_star",label:"Star",sortable:!0},{key:"id",sortable:!0,sortingOptions:["desc","asc"]},{key:"title",sortable:!0},{key:"category.title",label:"Category",sortable:!0},{key:"employee",label:"Employee",sortable:!0},{key:"start",label:"Start",sortable:!0},{key:"end",label:"Dead Line",sortable:!0},{key:"created_at",label:"AtNow",sortable:!1},{key:"status",sortable:!0},{key:"action",thAlign:"right",tdAlign:"right"}],S=u("asc");M("employees",a=>{E.value=a}),M("categories",a=>{b.value=a});const C=async a=>{try{const r=route("task.index",{perPage:d.value,page:a}),{data:f}=await axios.get(r);i.value=f.links,m.value=we.sortBy(addProtos(f.data,{action:!0,showEdit:!1}),"user_star").reverse()}catch(r){console.error(r)}n.value=!1};return C(1),{Delete:O,Edit:U,Download:F,busy:n,showCreate:k,perPage:d,sortingOrder:S,items:m,columns:P,push:a=>{k.value=!1,m.value.push(a)},replace:(a,r)=>{k.value=!1,m.value.splice(r,1,a)},fetchItems:C,employees:E,categories:b,remove:async(a,r)=>{if(!await xe(a,"Task","title"))return null;try{const h=route("task.destroy",{task:a.id});await axios.delete(h),m.value.splice(r,1),Ee(B)}catch(h){console.log(h)}},addStar:a=>{a.user_star=!a.user_star,axios.post(route("task.changeStar",{task:a.id}),{prop:"user_star",star:a.user_star?1:0})},doArchive:(a,r)=>{m.value.splice(r,1),axios.post(route("task.doArchive",{task:a.id}),{prop:"user_archive",do:a.user_archive?0:1})},atNow:a=>Pe(a).fromNow(),links:i,router:l,isCardWise:x}}},Be={class:"filter-row mt-2"},ze={class:"left-side"},Te={class:"item"},Ve={class:"right-side"},Le={class:"item right mr-3"},Ne={class:"item right"},Re=["innerHTML"],We={class:"ml-1"},Oe={style:{"min-width":"100px"}};function Ue(x,n,B,l,m,E){const b=s("create-button"),k=s("download"),i=s("el-icon"),d=s("el-button"),P=s("page-title-box"),S=s("el-option"),C=s("collection"),z=s("el-select"),T=s("list"),V=s("box"),L=s("el-button-group"),N=s("search"),R=s("el-input"),a=s("el-divider"),r=s("el-descriptions-item"),f=s("status-btn"),h=s("delete"),D=s("more"),I=s("el-descriptions"),X=s("el-card"),Y=s("el-col"),G=s("el-row"),W=s("el-link"),J=s("star-filled"),K=s("el-avatar"),Q=s("expand"),A=s("el-dropdown-item"),Z=s("el-dropdown-menu"),$=s("el-dropdown"),ee=s("edit-vue"),te=s("va-data-table"),oe=s("pagination"),le=s("create"),se=s("app-layout");return v(),w(se,{busy:l.busy},{default:t(()=>[c("div",null,[e(P,{title:"Task"},{default:t(()=>[e(b,{title:"Add Task",onClick:n[0]||(n[0]=o=>l.showCreate=!0)}),e(d,{type:"primary",onClick:n[1]||(n[1]=o=>l.router.push({name:"task.archive"}))},{default:t(()=>[e(i,null,{default:t(()=>[e(k)]),_:1}),y(" Archives ")]),_:1})]),_:1})]),c("div",Be,[c("div",ze,[c("div",Te,[e(z,{modelValue:l.perPage,"onUpdate:modelValue":n[2]||(n[2]=o=>l.perPage=o),placeholder:"Per Page"},{prefix:t(()=>[e(i,{class:"el-input__icon"},{default:t(()=>[e(C)]),_:1})]),default:t(()=>[(v(),j(q,null,H([10,20,30,40,50,70,100],o=>e(S,{key:o,label:o,value:o},null,8,["label","value"])),64))]),_:1},8,["modelValue"])])]),c("div",Ve,[c("div",Le,[e(L,null,{default:t(()=>[e(d,{type:l.isCardWise?"info":"primary",onClick:n[3]||(n[3]=o=>l.isCardWise=!1)},{default:t(()=>[e(i,null,{default:t(()=>[e(T)]),_:1})]),_:1},8,["type"]),e(d,{type:l.isCardWise?"primary":"info",onClick:n[4]||(n[4]=o=>l.isCardWise=!0)},{default:t(()=>[e(i,null,{default:t(()=>[e(V)]),_:1})]),_:1},8,["type"])]),_:1})]),c("div",Ne,[e(R,{placeholder:"Type something"},{prefix:t(()=>[e(i,{class:"el-input__icon"},{default:t(()=>[e(N)]),_:1})]),_:1})])])]),e(a),l.isCardWise?(v(),w(G,{key:0,class:"card-list",gutter:24},{default:t(()=>[(v(!0),j(q,null,H(l.items,(o,_)=>(v(),w(Y,{sm:24,md:12,key:_},{default:t(()=>[e(X,null,{default:t(()=>[e(I,{title:o.title,direction:"horizontal",column:1,size:"small",border:""},{default:t(()=>[e(r,{label:"Assgned To:"},{default:t(()=>[y(g(o.employee.model.name),1)]),_:2},1024),e(r,{label:"Dead Line:"},{default:t(()=>[y(g(o.end),1)]),_:2},1024),e(r,{label:"Status:"},{default:t(()=>[e(f,{status:o.status,size:"small"},null,8,["status"])]),_:2},1024),e(r,{label:"Delete:"},{default:t(()=>[e(d,{size:"small",type:"danger",plain:"",onClick:p=>l.remove(o,_)},{default:t(()=>[e(i,null,{default:t(()=>[e(h)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024),e(r,{label:"View:"},{default:t(()=>[e(d,{size:"small",type:"info",plain:"",onClick:p=>l.router.push({name:"task.show",params:{id:o.id}})},{default:t(()=>[e(i,null,{default:t(()=>[e(D)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["title"]),c("div",{class:"description",innerHTML:o.description},null,8,Re)]),_:2},1024)]),_:2},1024))),128))]),_:1})):(v(),w(te,{key:1,items:l.items,columns:l.columns,hoverable:!0,"sorting-order":l.sortingOrder,"onUpdate:sortingOrder":n[5]||(n[5]=o=>l.sortingOrder=o)},{"cell(created_at)":t(({value:o})=>[c("span",null,g(l.atNow(o)),1)]),"cell(title)":t(({rowData:o})=>[e(W,{onClick:_=>x.go({name:"task.show",params:{id:o.id}})},{default:t(()=>[c("b",null,g(o.title),1)]),_:2},1032,["onClick"])]),"cell(user_star)":t(({rowData:o})=>[e(d,{onClick:_=>l.addStar(o),size:"small",type:o.user_star?"warning":"",plain:"",round:""},{default:t(()=>[e(i,null,{default:t(()=>[e(J)]),_:1})]),_:2},1032,["onClick","type"])]),"cell(employee)":t(({rowData:o})=>[e(W,{underline:!1,onClick:_=>l.router.push({name:"userProfile",params:{user:o.employee.model.id}})},{default:t(()=>[e(K,{size:25,src:o.employee.model.avatar.url},null,8,["src"]),c("b",We,g(o.employee.model.name),1)]),_:2},1032,["onClick"])]),"cell(status)":t(({value:o})=>[e(f,{status:o,size:"small"},null,8,["status"])]),"cell(action)":t(({rowData:o,rowIndex:_})=>[c("div",Oe,[e($,{"split-button":"",type:"info",size:"small"},{dropdown:t(()=>[e(Z,null,{default:t(()=>[e(A,{icon:l.Edit,onClick:p=>o.showEdit=!0},{default:t(()=>[y("Edit")]),_:2},1032,["icon","onClick"]),e(A,{icon:l.Delete,onClick:p=>l.remove(o,_)},{default:t(()=>[y("Remove")]),_:2},1032,["icon","onClick"]),e(A,{icon:l.Download,onClick:p=>l.doArchive(o,_)},{default:t(()=>[y("Archive")]),_:2},1032,["icon","onClick"])]),_:2},1024)]),default:t(()=>[e(i,{size:20},{default:t(()=>[e(Q)]),_:1})]),_:2},1024),e(ee,{show:o.showEdit,"onUpdate:show":p=>o.showEdit=p,item:o,employees:l.employees,categories:l.categories,onReplace:p=>l.replace(p,_)},null,8,["show","onUpdate:show","item","employees","categories","onReplace"])])]),_:1},8,["items","columns","sorting-order"])),e(oe,{links:l.links,onPage:l.fetchItems},null,8,["links","onPage"]),e(le,{show:l.showCreate,"onUpdate:show":n[6]||(n[6]=o=>l.showCreate=o),employees:l.employees,categories:l.categories,onPush:l.push},null,8,["show","employees","categories","onPush"])]),_:1},8,["busy"])}const Ke=pe(Ae,[["render",Ue],["__scopeId","data-v-47aa0125"]]);export{Ke as default};
