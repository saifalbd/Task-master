import{a as se,S as ne}from"./app-layout-b069f2a8.js";import{_ as re}from"./PageTitleBox-31010f1c.js";import{P as ie}from"./Pagination-7c96924b.js";import{R as ce}from"./RemoveEditButton-10adca12.js";import{C as de}from"./Create-000dd647.js";import{E as _e}from"./Edit-81665dca.js";import{C as ue}from"./CreateButton-15a388a2.js";import{_ as pe,a6 as U,a7 as F,ap as H,ai as me,aj as fe,ag as ve,ak as ye,H as ke,a9 as he,aq as ge,ar as be,r as m,t as M,h as w,w as t,u as Ce,l as we,a1 as xe,a2 as Ee,e as a,f as v,i as c,b as e,j as y,c as j,x as q,F as I,z as g}from"./app-1f23f49e.js";import{h as Pe}from"./moment-fbc5633a.js";import{u as Se}from"./useToast-519e3e80.js";import"./FormDialog-74f276fc.js";import"./index-b1f930e8.js";const Ae={components:{Delete:U,Edit:F,Download:H,AppLayout:se,PageTitleBox:re,Pagination:ie,Create:de,EditVue:_e,List:me,Box:fe,CreateButton:ue,RemoveEditButton:ce,StatusBtn:ne,More:ve,Search:ye,Collection:ke,Expand:he,Star:ge,StarFilled:be},setup(){const z=m(!1),n=m(!0),B=Se(),l=Ce(),f=m([]),x=m([]),b=m([]),k=m(!1),r=m([]),d=m(50),E=[{key:"user_star",label:"Star",sortable:!0},{key:"id",sortable:!0,sortingOptions:["desc","asc"]},{key:"title",sortable:!0},{key:"category.title",label:"Category",sortable:!0},{key:"employeeName",label:"Employee",sortable:!0},{key:"start",label:"Start",sortable:!0},{key:"end",label:"Dead Line",sortable:!0},{key:"created_at",label:"AtNow",sortable:!0},{key:"status",sortable:!0},{key:"action",thAlign:"right",tdAlign:"right"}],P=m("asc"),S=s=>{l.push(s)};M("employees",s=>{x.value=s}),M("categories",s=>{b.value=s});const C=async s=>{try{const i=route("task.index",{perPage:d.value,page:s}),{data:h}=await axios.get(i);r.value=h.links,f.value=we.sortBy(addProtos(h.data,{action:!0,showEdit:!1}),"user_star").reverse().map(_=>(_.employeeName=_.employee.model.name,_))}catch(i){console.error(i)}n.value=!1};return C(1),{Delete:U,Edit:F,Download:H,busy:n,showCreate:k,perPage:d,sortingOrder:P,items:f,columns:E,push:s=>{k.value=!1,f.value.push(s)},replace:(s,i)=>{k.value=!1,f.value.splice(i,1,s)},fetchItems:C,employees:x,categories:b,remove:async(s,i)=>{if(!await xe(s,"Task","title"))return null;try{const _=route("task.destroy",{task:s.id});await axios.delete(_),f.value.splice(i,1),Ee(B)}catch(_){console.log(_)}},addStar:s=>{s.user_star=!s.user_star,axios.post(route("task.changeStar",{task:s.id}),{prop:"user_star",star:s.user_star?1:0})},doArchive:(s,i)=>{f.value.splice(i,1),axios.post(route("task.doArchive",{task:s.id}),{prop:"user_archive",do:s.user_archive?0:1})},atNow:s=>Pe(s).fromNow(),links:r,router:l,go:S,isCardWise:z}}},ze={class:"filter-row mt-2"},Be={class:"left-side"},Ne={class:"item"},Te={class:"right-side"},Ve={class:"item right mr-3"},Le={class:"item right"},Re=["innerHTML"],We={class:"ml-1"},Oe={style:{"min-width":"100px"}};function Ue(z,n,B,l,f,x){const b=a("create-button"),k=a("download"),r=a("el-icon"),d=a("el-button"),E=a("page-title-box"),P=a("el-option"),S=a("collection"),C=a("el-select"),N=a("list"),T=a("box"),V=a("el-button-group"),L=a("search"),R=a("el-input"),W=a("el-divider"),s=a("el-descriptions-item"),i=a("status-btn"),h=a("delete"),_=a("more"),D=a("el-descriptions"),G=a("el-card"),J=a("el-col"),K=a("el-row"),O=a("el-link"),Q=a("star-filled"),X=a("el-avatar"),Y=a("expand"),A=a("el-dropdown-item"),Z=a("el-dropdown-menu"),$=a("el-dropdown"),ee=a("edit-vue"),te=a("va-data-table"),oe=a("pagination"),le=a("create"),ae=a("app-layout");return v(),w(ae,{busy:l.busy},{default:t(()=>[c("div",null,[e(E,{title:"Task"},{default:t(()=>[e(b,{title:"Add Task",onClick:n[0]||(n[0]=o=>l.showCreate=!0)}),e(d,{type:"primary",onClick:n[1]||(n[1]=o=>l.router.push({name:"task.archive"}))},{default:t(()=>[e(r,null,{default:t(()=>[e(k)]),_:1}),y(" Archives ")]),_:1})]),_:1})]),c("div",ze,[c("div",Be,[c("div",Ne,[e(C,{modelValue:l.perPage,"onUpdate:modelValue":n[2]||(n[2]=o=>l.perPage=o),placeholder:"Per Page"},{prefix:t(()=>[e(r,{class:"el-input__icon"},{default:t(()=>[e(S)]),_:1})]),default:t(()=>[(v(),j(I,null,q([10,20,30,40,50,70,100],o=>e(P,{key:o,label:o,value:o},null,8,["label","value"])),64))]),_:1},8,["modelValue"])])]),c("div",Te,[c("div",Ve,[e(V,null,{default:t(()=>[e(d,{type:l.isCardWise?"info":"primary",onClick:n[3]||(n[3]=o=>l.isCardWise=!1)},{default:t(()=>[e(r,null,{default:t(()=>[e(N)]),_:1})]),_:1},8,["type"]),e(d,{type:l.isCardWise?"primary":"info",onClick:n[4]||(n[4]=o=>l.isCardWise=!0)},{default:t(()=>[e(r,null,{default:t(()=>[e(T)]),_:1})]),_:1},8,["type"])]),_:1})]),c("div",Le,[e(R,{placeholder:"Type something"},{prefix:t(()=>[e(r,{class:"el-input__icon"},{default:t(()=>[e(L)]),_:1})]),_:1})])])]),e(W),l.isCardWise?(v(),w(K,{key:0,class:"card-list",gutter:24},{default:t(()=>[(v(!0),j(I,null,q(l.items,(o,u)=>(v(),w(J,{sm:24,md:12,key:u},{default:t(()=>[e(G,null,{default:t(()=>[e(D,{title:o.title,direction:"horizontal",column:1,size:"small",border:""},{default:t(()=>[e(s,{label:"Assgned To:"},{default:t(()=>[y(g(o.employee.model.name),1)]),_:2},1024),e(s,{label:"Dead Line:"},{default:t(()=>[y(g(o.end),1)]),_:2},1024),e(s,{label:"Status:"},{default:t(()=>[e(i,{status:o.status,size:"small"},null,8,["status"])]),_:2},1024),e(s,{label:"Delete:"},{default:t(()=>[e(d,{size:"small",type:"danger",plain:"",onClick:p=>l.remove(o,u)},{default:t(()=>[e(r,null,{default:t(()=>[e(h)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024),e(s,{label:"View:"},{default:t(()=>[e(d,{size:"small",type:"info",plain:"",onClick:p=>l.router.push({name:"task.show",params:{id:o.id}})},{default:t(()=>[e(r,null,{default:t(()=>[e(_)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["title"]),c("div",{class:"description",innerHTML:o.description},null,8,Re)]),_:2},1024)]),_:2},1024))),128))]),_:1})):(v(),w(te,{key:1,items:l.items,columns:l.columns,hoverable:!0,"sorting-order":l.sortingOrder,"onUpdate:sortingOrder":n[5]||(n[5]=o=>l.sortingOrder=o)},{"cell(created_at)":t(({value:o})=>[c("span",null,g(l.atNow(o)),1)]),"cell(title)":t(({rowData:o})=>[e(O,{onClick:u=>l.go({name:"task.show",params:{id:o.id}})},{default:t(()=>[c("b",null,g(o.title),1)]),_:2},1032,["onClick"])]),"cell(user_star)":t(({rowData:o})=>[e(d,{onClick:u=>l.addStar(o),size:"small",type:o.user_star?"warning":"",plain:"",round:""},{default:t(()=>[e(r,null,{default:t(()=>[e(Q)]),_:1})]),_:2},1032,["onClick","type"])]),"cell(employeeName)":t(({rowData:o})=>[e(O,{underline:!1,onClick:u=>l.router.push({name:"userProfile",params:{user:o.employee.model.id}})},{default:t(()=>[e(X,{size:25,src:o.employee.model.avatar.url},null,8,["src"]),c("b",We,g(o.employee.model.name),1)]),_:2},1032,["onClick"])]),"cell(status)":t(({value:o})=>[e(i,{status:o,size:"small"},null,8,["status"])]),"cell(action)":t(({rowData:o,rowIndex:u})=>[c("div",Oe,[e($,{"split-button":"",type:"info",size:"small"},{dropdown:t(()=>[e(Z,null,{default:t(()=>[e(A,{icon:l.Edit,onClick:p=>o.showEdit=!0},{default:t(()=>[y("Edit")]),_:2},1032,["icon","onClick"]),e(A,{icon:l.Delete,onClick:p=>l.remove(o,u)},{default:t(()=>[y("Remove")]),_:2},1032,["icon","onClick"]),e(A,{icon:l.Download,onClick:p=>l.doArchive(o,u)},{default:t(()=>[y("Archive")]),_:2},1032,["icon","onClick"])]),_:2},1024)]),default:t(()=>[e(r,{size:20,onClick:p=>l.go({name:"task.show",params:{id:o.id}})},{default:t(()=>[e(Y)]),_:2},1032,["onClick"])]),_:2},1024),e(ee,{show:o.showEdit,"onUpdate:show":p=>o.showEdit=p,item:o,employees:l.employees,categories:l.categories,onReplace:p=>l.replace(p,u)},null,8,["show","onUpdate:show","item","employees","categories","onReplace"])])]),_:1},8,["items","columns","sorting-order"])),e(oe,{links:l.links,onPage:l.fetchItems},null,8,["links","onPage"]),e(le,{show:l.showCreate,"onUpdate:show":n[6]||(n[6]=o=>l.showCreate=o),employees:l.employees,categories:l.categories,onPush:l.push},null,8,["show","employees","categories","onPush"])]),_:1},8,["busy"])}const Ye=pe(Ae,[["render",Ue],["__scopeId","data-v-9d6e2e40"]]);export{Ye as default};
