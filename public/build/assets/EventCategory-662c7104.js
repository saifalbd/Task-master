import{a as H}from"./app-layout-64dac59a.js";import{_ as N}from"./PageTitleBox-8fee726d.js";import{P as O}from"./Pagination-d150a4e5.js";import{_ as B,r as d,a as F,f as i,h as P,w as b,b as a,i as l,c as v,B as f,A as w,e as s,C as j,D,Y as L,a0 as q,a1 as z,a2 as Y,j as G}from"./app-5a52a3e4.js";import{F as S}from"./FormDialog-027f7880.js";import{r as I}from"./index-5bff91aa.js";import{C as J}from"./CreateButton-7cd52cfe.js";import{R as K}from"./RemoveEditButton-550c1672.js";import{u as M}from"./useToast-80c443f6.js";const Q={components:{FormDialog:S},props:{show:{type:Boolean,default:!1}},setup(r,{emit:e}){let _=d(!1);const o=d(null);let p=d(""),h=d(!1),m=F({time:"#262824",cat:"#262824",title:"#262824",bg:"#FFFFFF",border:"#767C88"}),y=route("eventCategory.store");return{props:r,form:o,showColor:h,emit:e,rs:I,save:async()=>{if(!await o.value.validate())return null;try{const{data:u}=await axios.post(y,{title:p.value,color:m});e("push",addProtos(u,{action:!0,showEdit:!1}))}catch(u){console.error(u),validErorrs(u)}},title:p,busy:_,color:m}}},U=r=>(j("data-v-7ddb6621"),r=r(),D(),r),W={class:"layout gutter--md"},X={class:"row align-content--center"},Z={class:"flex xs12"},$={class:"flex xs12 mt-2",style:{display:"flex","align-items":"center"}},oo={key:0,class:"flex xs12 md4 mt-2"},eo=U(()=>l("label",{for:""},"Background Color",-1)),to={key:1,class:"flex xs12 md4 mt-2"},lo=U(()=>l("label",{for:""},"Border Color Color",-1)),ao={key:2,class:"flex xs12 md4 mt-2"},so=U(()=>l("label",{for:""},"Time Color",-1)),ro={key:3,class:"flex xs12 md4 mt-2"},no=U(()=>l("label",{for:""},"Cat Color",-1)),io={key:4,class:"flex xs12 md4 mt-2"},co=U(()=>l("label",{for:""},"Title Color",-1)),mo={key:5,class:"flex xs12 mt-4"};function _o(r,e,_,o,p,h){const m=s("va-input"),y=s("va-switch"),n=s("va-color-input"),c=s("va-form"),u=s("form-dialog");return i(),P(u,{show:o.props.show,"onUpdate:show":e[7]||(e[7]=t=>o.emit("update:show",t)),busy:o.busy,title:"Create Event Cetegory",onAdd:o.save},{default:b(()=>[a(c,{ref:"form"},{default:b(()=>[l("div",W,[l("div",X,[l("div",Z,[a(m,{modelValue:o.title,"onUpdate:modelValue":e[0]||(e[0]=t=>o.title=t),label:"Title",placeholder:"Title Here",rules:o.rs("title",!0)},null,8,["modelValue","rules"])]),l("div",$,[a(y,{modelValue:o.showColor,"onUpdate:modelValue":e[1]||(e[1]=t=>o.showColor=t),"true-inner-label":"Hide Color","false-inner-label":"Show Color",class:"mr-6"},null,8,["modelValue"])]),o.showColor?(i(),v("div",oo,[eo,a(n,{modelValue:o.color.bg,"onUpdate:modelValue":e[2]||(e[2]=t=>o.color.bg=t)},null,8,["modelValue"])])):f("",!0),o.showColor?(i(),v("div",to,[lo,a(n,{modelValue:o.color.border,"onUpdate:modelValue":e[3]||(e[3]=t=>o.color.border=t)},null,8,["modelValue"])])):f("",!0),o.showColor?(i(),v("div",ao,[so,a(n,{modelValue:o.color.time,"onUpdate:modelValue":e[4]||(e[4]=t=>o.color.time=t)},null,8,["modelValue"])])):f("",!0),o.showColor?(i(),v("div",ro,[no,a(n,{modelValue:o.color.cat,"onUpdate:modelValue":e[5]||(e[5]=t=>o.color.cat=t)},null,8,["modelValue"])])):f("",!0),o.showColor?(i(),v("div",io,[co,a(n,{modelValue:o.color.title,"onUpdate:modelValue":e[6]||(e[6]=t=>o.color.title=t)},null,8,["modelValue"])])):f("",!0),o.showColor?(i(),v("div",mo,[l("div",{class:"custom-card",style:w({border:`2px solid ${o.color.border}`,backgroundColor:o.color.bg})},[l("span",{style:w({color:o.color.time}),class:"pr-2"},"Time:",4),l("span",{style:w({color:o.color.cat}),class:"pr-2"},"Category:",4),l("span",{style:w({color:o.color.title})},"Event Title",4)],4)])):f("",!0)])])]),_:1},512)]),_:1},8,["show","busy","onAdd"])}const uo=B(Q,[["render",_o],["__scopeId","data-v-7ddb6621"]]),vo={components:{FormDialog:S},props:{show:{type:Boolean,default:!1},item:{type:Object,required:!0}},setup(r,{emit:e}){let _=d(!1);const o=d(null);let p=d(r.item),h=d(r.item.title),m=F(r.item.color);L(r.item,c=>{p.value=c,h.value=c.title});let y=d(!0);return{props:r,form:o,emit:e,save:async()=>{let c=route("eventCategory.update",{event_category:p.value.id});if(!await o.value.validate())return null;try{const{data:t}=await axios.put(c,{title:h.value,color:m});e("replace",addProtos(t,{action:!0,showEdit:!1}))}catch(t){q(t)}},rs:I,title:h,busy:_,showColor:y,color:m}}},fo={class:"layout gutter--md"},po={class:"row align-content--center"},ho={class:"flex xs12"},yo={class:"flex xs12 mt-2",style:{display:"flex","align-items":"center"}},bo={key:0,class:"flex xs12 md4 mt-2"},Co=l("label",{for:""},"Background Color",-1),go={key:1,class:"flex xs12 md4 mt-2"},wo=l("label",{for:""},"Border Color Color",-1),xo={key:2,class:"flex xs12 md4 mt-2"},Vo=l("label",{for:""},"Time Color",-1),ko={key:3,class:"flex xs12 md4 mt-2"},Eo=l("label",{for:""},"Cat Color",-1),Uo={key:4,class:"flex xs12 md4 mt-2"},Bo=l("label",{for:""},"Title Color",-1),Po={key:5,class:"flex xs12 mt-4"};function To(r,e,_,o,p,h){const m=s("va-input"),y=s("va-switch"),n=s("va-color-input"),c=s("va-form"),u=s("form-dialog");return i(),P(u,{show:o.props.show,"onUpdate:show":e[7]||(e[7]=t=>o.emit("update:show",t)),busy:o.busy,title:"Edit Cetegory","is-edit":"",onAdd:o.save},{default:b(()=>[a(c,{ref:"form"},{default:b(()=>[l("div",fo,[l("div",po,[l("div",ho,[a(m,{modelValue:o.title,"onUpdate:modelValue":e[0]||(e[0]=t=>o.title=t),label:"Title",placeholder:"Title Here",rules:o.rs("title",!0)},null,8,["modelValue","rules"])]),l("div",yo,[a(y,{modelValue:o.showColor,"onUpdate:modelValue":e[1]||(e[1]=t=>o.showColor=t),"true-inner-label":"Hide Color","false-inner-label":"Show Color",class:"mr-6"},null,8,["modelValue"])]),o.showColor?(i(),v("div",bo,[Co,a(n,{modelValue:o.color.bg,"onUpdate:modelValue":e[2]||(e[2]=t=>o.color.bg=t)},null,8,["modelValue"])])):f("",!0),o.showColor?(i(),v("div",go,[wo,a(n,{modelValue:o.color.border,"onUpdate:modelValue":e[3]||(e[3]=t=>o.color.border=t)},null,8,["modelValue"])])):f("",!0),o.showColor?(i(),v("div",xo,[Vo,a(n,{modelValue:o.color.time,"onUpdate:modelValue":e[4]||(e[4]=t=>o.color.time=t)},null,8,["modelValue"])])):f("",!0),o.showColor?(i(),v("div",ko,[Eo,a(n,{modelValue:o.color.cat,"onUpdate:modelValue":e[5]||(e[5]=t=>o.color.cat=t)},null,8,["modelValue"])])):f("",!0),o.showColor?(i(),v("div",Uo,[Bo,a(n,{modelValue:o.color.title,"onUpdate:modelValue":e[6]||(e[6]=t=>o.color.title=t)},null,8,["modelValue"])])):f("",!0),o.showColor?(i(),v("div",Po,[l("div",{class:"custom-card",style:w({border:`2px solid ${o.color.border}`,backgroundColor:o.color.bg})},[l("span",{style:w({color:o.color.time}),class:"pr-2"},"Time:",4),l("span",{style:w({color:o.color.cat}),class:"pr-2"},"Category:",4),l("span",{style:w({color:o.color.title})},"Event Title",4)],4)])):f("",!0)])])]),_:1},512)]),_:1},8,["show","busy","onAdd"])}const Ao=B(vo,[["render",To]]);const Fo={components:{AppLayout:H,PageTitleBox:N,Pagination:O,Create:uo,Edit:Ao,CreateButton:J,RemoveEditButton:K},setup(){const r=d(!1),e=M(),_=d([]),o=d(!1),p=d([]),h=d(10),m=d("title"),y=[{key:"id",sortable:!0,sortingOptions:["desc","asc"]},{key:"title",sortable:!0},{key:"action",thAlign:"right",tdAlign:"right"}],n=d("asc"),c=async C=>{r.value=!0;const x=route("eventCategory.index",{perPage:h.value,page:C}),{data:V}=await axios.get(x);p.value=V.links,_.value=addProtos(V.data,{action:!0,showEdit:!1}),r.value=!1};return c(1),{showCreate:o,perPage:h,sortingOrder:n,items:_,columns:y,sortBy:m,push:C=>{o.value=!1,_.value.push(C)},replace:(C,x)=>{o.value=!1,_.value.splice(x,1,C)},fetchItems:c,remove:async(C,x)=>{if(!await z(C,"Event Category"))return null;try{const k=route("eventCategory.destroy",{category:C.id});await axios.delete(k),_.value.splice(x,1),Y(e)}catch(k){console.log(k)}},links:p,busy:r}}},So={class:"row mt-4"},Io={class:"flex md6"},Ro={class:"item"},Ho={class:"flex lg6"},No={class:"item right"};function Oo(r,e,_,o,p,h){const m=s("create-button"),y=s("page-title-box"),n=s("va-select"),c=s("va-icon"),u=s("va-input"),t=s("el-table-column"),T=s("edit"),C=s("remove-edit-button"),x=s("el-table"),V=s("pagination"),k=s("create"),R=s("app-layout");return i(),P(R,{busy:o.busy},{default:b(()=>[l("div",null,[a(y,{title:"Event Categories"},{default:b(()=>[a(m,{title:"Add Event Category",onClick:e[0]||(e[0]=g=>o.showCreate=!0)})]),_:1})]),l("div",So,[l("div",Io,[l("div",Ro,[a(n,{class:"flex mb-2 md6",label:"Per Page",modelValue:o.perPage,"onUpdate:modelValue":e[1]||(e[1]=g=>o.perPage=g),options:[10,20,30,40,50]},null,8,["modelValue"])])]),l("div",Ho,[l("div",No,[a(u,{class:"flex mb-2 md6",label:"Search"},{prepend:b(()=>[a(c,{class:"material-icons"},{default:b(()=>[G("search")]),_:1})]),_:1})])])]),a(x,{data:o.items,border:"",style:{width:"100%"}},{default:b(()=>[a(t,{prop:"id",label:"serial"}),a(t,{prop:"title",label:"title"}),a(t,{fixed:"right",label:"Operations",width:"120"},{default:b(({row:g,$index:A})=>[a(C,{onEditClick:E=>g.showEdit=!0,onRemoveClick:E=>o.remove(g,A)},{default:b(()=>[a(T,{show:g.showEdit,"onUpdate:show":E=>g.showEdit=E,item:g,onReplace:E=>o.replace(E,A)},null,8,["show","onUpdate:show","item","onReplace"])]),_:2},1032,["onEditClick","onRemoveClick"])]),_:1})]),_:1},8,["data"]),a(V,{links:o.links,onPage:o.fetchItems},null,8,["links","onPage"]),a(k,{show:o.showCreate,"onUpdate:show":e[2]||(e[2]=g=>o.showCreate=g),onPush:o.push},null,8,["show","onPush"])]),_:1},8,["busy"])}const Mo=B(Fo,[["render",Oo],["__scopeId","data-v-a902098b"]]);export{Mo as default};
