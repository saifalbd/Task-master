import{a as R}from"./app-layout-62a20c1a.js";import{_ as q}from"./PageTitleBox-34f8655b.js";import{P as H}from"./Pagination-0fa3f7a5.js";import{_ as B,r as n,a as T,f as b,h as E,w as f,b as l,i as s,c as y,B as x,A as F,e as a,C as L,D as O,Z as j,a1 as D,a2 as z,a3 as Z,j as G}from"./app-fc468544.js";import{F as S}from"./FormDialog-3370bb78.js";import{r as I}from"./index-dc654618.js";import{C as J}from"./CreateButton-8d1e5d7b.js";import{R as K}from"./RemoveEditButton-6c02efb2.js";import{u as M}from"./useToast-70ffcdc4.js";const Q={components:{FormDialog:S},props:{show:{type:Boolean,default:!1}},setup(r,{emit:e}){let m=n(!1);const o=n(null);let _=n(""),v=n(!1),d=T({text:"#262824",bg:"#FFFFFF",border:"#767C88"}),p=route("category.store");return{props:r,form:o,showColor:v,emit:e,rs:I,save:async()=>{if(!await o.value.validate())return null;try{const{data:u}=await axios.post(p,{title:_.value,color:d});e("push",addProtos(u,{action:!0,showEdit:!1}))}catch(u){console.error(u),validErorrs(u)}},title:_,busy:m,color:d}}},P=r=>(L("data-v-bc78a89e"),r=r(),O(),r),W={class:"layout gutter--md"},X={class:"row align-content--center"},Y={class:"flex xs12"},$={class:"flex xs12 mt-2",style:{display:"flex","align-items":"center"}},oo={key:0,class:"flex xs12 md4 mt-2"},eo=P(()=>s("label",{for:""},"Background Color",-1)),to={key:1,class:"flex xs12 md4 mt-2"},lo=P(()=>s("label",{for:""},"Text Color",-1)),ao={key:2,class:"flex xs12 md4 mt-2"},so=P(()=>s("label",{for:""},"Border Color Color",-1)),ro={key:3,class:"flex xs12 mt-4"};function no(r,e,m,o,_,v){const d=a("va-input"),p=a("va-switch"),c=a("va-color-input"),i=a("va-form"),u=a("form-dialog");return b(),E(u,{show:o.props.show,"onUpdate:show":e[5]||(e[5]=t=>o.emit("update:show",t)),busy:o.busy,title:"Create Cetegory",onAdd:o.save},{default:f(()=>[l(i,{ref:"form"},{default:f(()=>[s("div",W,[s("div",X,[s("div",Y,[l(d,{modelValue:o.title,"onUpdate:modelValue":e[0]||(e[0]=t=>o.title=t),label:"Title",placeholder:"Title Here",rules:o.rs("title",!0)},null,8,["modelValue","rules"])]),s("div",$,[l(p,{modelValue:o.showColor,"onUpdate:modelValue":e[1]||(e[1]=t=>o.showColor=t),"true-inner-label":"Hide Color","false-inner-label":"Show Color",class:"mr-6"},null,8,["modelValue"])]),o.showColor?(b(),y("div",oo,[eo,l(c,{modelValue:o.color.bg,"onUpdate:modelValue":e[2]||(e[2]=t=>o.color.bg=t)},null,8,["modelValue"])])):x("",!0),o.showColor?(b(),y("div",to,[lo,l(c,{modelValue:o.color.text,"onUpdate:modelValue":e[3]||(e[3]=t=>o.color.text=t)},null,8,["modelValue"])])):x("",!0),o.showColor?(b(),y("div",ao,[so,l(c,{modelValue:o.color.border,"onUpdate:modelValue":e[4]||(e[4]=t=>o.color.border=t)},null,8,["modelValue"])])):x("",!0),o.showColor?(b(),y("div",ro,[s("div",{class:"custom-card",style:F({border:`2px solid ${o.color.border}`,color:o.color.text,backgroundColor:o.color.bg})}," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus eveniet ad eligendi molestiae doloribus. Explicabo obcaecati rem laboriosam voluptatibus aperiam veniam, asperiores voluptatem ea, recusandae voluptates quos tempora officiis quae? ",4)])):x("",!0)])])]),_:1},512)]),_:1},8,["show","busy","onAdd"])}const io=B(Q,[["render",no],["__scopeId","data-v-bc78a89e"]]),co={components:{FormDialog:S},props:{show:{type:Boolean,default:!1},item:{type:Object,required:!0}},setup(r,{emit:e}){let m=n(!1);const o=n(null);let _=n(r.item),v=n(r.item.title),d=T(r.item.color);j(r.item,i=>{_.value=i,v.value=i.title});let p=n(!0);return{props:r,form:o,emit:e,save:async()=>{let i=route("category.update",{category:_.value.id});if(!await o.value.validate())return null;try{const{data:t}=await axios.put(i,{title:v.value,color:d});e("replace",addProtos(t,{action:!0,showEdit:!1}))}catch(t){D(t)}},rs:I,title:v,busy:m,showColor:p,color:d}}},mo={class:"layout gutter--md"},uo={class:"row align-content--center"},_o={class:"flex xs12"},vo={class:"flex xs12 mt-2",style:{display:"flex","align-items":"center"}},po={key:0,class:"flex xs12 md4 mt-2"},fo=s("label",{for:""},"Background Color",-1),bo={key:1,class:"flex xs12 md4 mt-2"},ho=s("label",{for:""},"Text Color",-1),go={key:2,class:"flex xs12 md4 mt-2"},yo=s("label",{for:""},"Border Color Color",-1),xo={key:3,class:"flex xs12 mt-4"};function wo(r,e,m,o,_,v){const d=a("va-input"),p=a("va-switch"),c=a("va-color-input"),i=a("va-form"),u=a("form-dialog");return b(),E(u,{show:o.props.show,"onUpdate:show":e[5]||(e[5]=t=>o.emit("update:show",t)),busy:o.busy,title:"Edit Cetegory","is-edit":"",onAdd:o.save},{default:f(()=>[l(i,{ref:"form"},{default:f(()=>[s("div",mo,[s("div",uo,[s("div",_o,[l(d,{modelValue:o.title,"onUpdate:modelValue":e[0]||(e[0]=t=>o.title=t),label:"Title",placeholder:"Title Here",rules:o.rs("title",!0)},null,8,["modelValue","rules"])]),s("div",vo,[l(p,{modelValue:o.showColor,"onUpdate:modelValue":e[1]||(e[1]=t=>o.showColor=t),"true-inner-label":"Hide Color","false-inner-label":"Show Color",class:"mr-6"},null,8,["modelValue"])]),o.showColor?(b(),y("div",po,[fo,l(c,{modelValue:o.color.bg,"onUpdate:modelValue":e[2]||(e[2]=t=>o.color.bg=t)},null,8,["modelValue"])])):x("",!0),o.showColor?(b(),y("div",bo,[ho,l(c,{modelValue:o.color.text,"onUpdate:modelValue":e[3]||(e[3]=t=>o.color.text=t)},null,8,["modelValue"])])):x("",!0),o.showColor?(b(),y("div",go,[yo,l(c,{modelValue:o.color.border,"onUpdate:modelValue":e[4]||(e[4]=t=>o.color.border=t)},null,8,["modelValue"])])):x("",!0),o.showColor?(b(),y("div",xo,[s("div",{class:"custom-card",style:F({border:`2px solid ${o.color.border}`,color:o.color.text,backgroundColor:o.color.bg})}," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus eveniet ad eligendi molestiae doloribus. Explicabo obcaecati rem laboriosam voluptatibus aperiam veniam, asperiores voluptatem ea, recusandae voluptates quos tempora officiis quae? ",4)])):x("",!0)])])]),_:1},512)]),_:1},8,["show","busy","onAdd"])}const Co=B(co,[["render",wo]]);const Vo={components:{AppLayout:R,PageTitleBox:q,Pagination:H,Create:io,Edit:Co,CreateButton:J,RemoveEditButton:K},setup(){const r=n(!1),e=M(),m=n([]),o=n(!1),_=n([]),v=n(10),d=n("title"),p=[{key:"id",sortable:!0,sortingOptions:["desc","asc"]},{key:"title",sortable:!0},{key:"action",thAlign:"right",tdAlign:"right"}],c=n("asc"),i=async h=>{r.value=!0;const w=route("category.index",{perPage:v.value,page:h}),{data:C}=await axios.get(w);_.value=C.links,m.value=addProtos(C.data,{action:!0,showEdit:!1}),r.value=!1};return i(1),{showCreate:o,perPage:v,sortingOrder:c,items:m,columns:p,sortBy:d,push:h=>{o.value=!1,m.value.push(h)},replace:(h,w)=>{o.value=!1,m.value.splice(w,1,h)},fetchItems:i,remove:async(h,w)=>{if(!await z(h,"Category"))return null;try{const V=route("category.destroy",{category:h.id});await axios.delete(V),m.value.splice(w,1),Z(e)}catch(V){console.log(V)}},links:_,busy:r}}},ko={class:"row mt-4"},Bo={class:"flex md6"},Eo={class:"item"},Po={class:"flex lg6"},Uo={class:"item right"};function Ao(r,e,m,o,_,v){const d=a("create-button"),p=a("page-title-box"),c=a("va-select"),i=a("va-icon"),u=a("va-input"),t=a("el-table-column"),U=a("edit"),h=a("remove-edit-button"),w=a("el-table"),C=a("pagination"),V=a("create"),N=a("app-layout");return b(),E(N,{busy:o.busy},{default:f(()=>[s("div",null,[l(p,{title:"Categories"},{default:f(()=>[l(d,{title:"Add Category",onClick:e[0]||(e[0]=g=>o.showCreate=!0)})]),_:1})]),s("div",ko,[s("div",Bo,[s("div",Eo,[l(c,{class:"flex mb-2 md6",label:"Per Page",modelValue:o.perPage,"onUpdate:modelValue":e[1]||(e[1]=g=>o.perPage=g),options:[10,20,30,40,50]},null,8,["modelValue"])])]),s("div",Po,[s("div",Uo,[l(u,{class:"flex mb-2 md6",label:"Search"},{prepend:f(()=>[l(i,{class:"material-icons"},{default:f(()=>[G("search")]),_:1})]),_:1})])])]),l(w,{data:o.items,border:"",style:{width:"100%"}},{default:f(()=>[l(t,{prop:"id",label:"serial"}),l(t,{prop:"title",label:"title"}),l(t,{fixed:"right",label:"Operations",width:"120"},{default:f(({row:g,$index:A})=>[l(h,{onEditClick:k=>g.showEdit=!0,onRemoveClick:k=>o.remove(g,A)},{default:f(()=>[l(U,{show:g.showEdit,"onUpdate:show":k=>g.showEdit=k,item:g,onReplace:k=>o.replace(k,A)},null,8,["show","onUpdate:show","item","onReplace"])]),_:2},1032,["onEditClick","onRemoveClick"])]),_:1})]),_:1},8,["data"]),l(C,{links:o.links,onPage:o.fetchItems},null,8,["links","onPage"]),l(V,{show:o.showCreate,"onUpdate:show":e[2]||(e[2]=g=>o.showCreate=g),onPush:o.push},null,8,["show","onPush"])]),_:1},8,["busy"])}const Oo=B(Vo,[["render",Ao],["__scopeId","data-v-85c5f6e7"]]);export{Oo as default};