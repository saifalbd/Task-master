import{A as Z,_ as F}from"./PageTitleBox-9be017fa.js";import{P as T}from"./Pagination-53b45834.js";import{F as B,r as N,u as j}from"./index-6f6f3ed4.js";import{_ as A,r as n,B as C,C as q,o as P,g as k,h as E,j as r,a as d,c as z,k as H,F as O,D as R,i as s,E as I,G as L,b as S}from"./app-fb8c1635.js";import{C as G}from"./CreateButton-a3f51907.js";import{R as J}from"./RemoveEditButton-08b4a9fb.js";const K={components:{FormDialog:B},props:{positions:{type:Array,required:!0},show:{type:Boolean,default:!1}},setup(m,{emit:o}){var w;let f=n(!1);const e=n(null),h=n(null);let p=n(""),i=n(""),v=n(""),u=n((w=C.head(m.positions))==null?void 0:w.id);q(m.positions,_=>{var l;_.length&&(u.value=(l=C.head(_))==null?void 0:l.id)});let y={title:[_=>!!_||"title are requies"]};const t=async()=>{let _=route("employee.store");if(!await h.value.validate())return null;try{const{data:c}=await axios.post(_,{name:p.value,email:i.value,phone:v.value,position:u.value});o("push",addProtos(c,{action:!0,showEdit:!1}))}catch(c){console.error(c),R(c)}};return{props:m,form:h,emit:o,changeEmail:async _=>{const{value:l}=_.target;if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(l))return null;try{const a=route("user.showByEmail",{email:l}),{data:V}=await axios.get(a),b=C.values(V)?V:null;e.value=b,b&&(p.value=b.name)}catch(a){console.log(a)}},rs:N,save:t,busy:f,rules:y,save:t,name:p,phone:v,email:i,position:u}}},M={class:"layout gutter--md"},Q={class:"row align-content--center"},W={class:"flex xs12"},X={class:"flex xs12 mt-2"},Y={class:"flex xs12 mt-2"},D={class:"flex xs12 mt-2"};function $(m,o,f,e,h,p){const i=s("va-input"),v=s("va-radio"),u=s("va-form"),y=s("form-dialog");return P(),k(y,{show:e.props.show,"onUpdate:show":o[4]||(o[4]=t=>e.emit("update:show",t)),busy:e.busy,title:"Create User",onAdd:e.save,fullscreen:""},{default:E(()=>[r(u,{ref:"form"},{default:E(()=>[d("div",M,[d("div",Q,[d("div",W,[r(i,{modelValue:e.name,"onUpdate:modelValue":o[0]||(o[0]=t=>e.name=t),label:"Name *",placeholder:"Name Here",rules:e.rs("Name",!0)},null,8,["modelValue","rules"])]),d("div",X,[r(i,{modelValue:e.email,"onUpdate:modelValue":o[1]||(o[1]=t=>e.email=t),label:"Email *",placeholder:"Email Here",onChange:e.changeEmail,rules:e.rs("Email",{required:!0,email:!0})},null,8,["modelValue","onChange","rules"])]),d("div",Y,[r(i,{modelValue:e.phone,"onUpdate:modelValue":o[2]||(o[2]=t=>e.phone=t),label:"Phone",placeholder:"Phone Here",rules:e.rs("Phone",!0)},null,8,["modelValue","rules"])]),d("div",D,[(P(!0),z(O,null,H(e.props.positions,(t,x)=>(P(),k(v,{key:x,modelValue:e.position,"onUpdate:modelValue":o[3]||(o[3]=w=>e.position=w),label:t.title,option:t.id},null,8,["modelValue","label","option"]))),128))])])])]),_:1},512)]),_:1},8,["show","busy","onAdd"])}const ee=A(K,[["render",$]]),oe={components:{FormDialog:B},props:{positions:{type:Array,required:!0},show:{type:Boolean,default:!1},item:{type:Object,required:!0}},setup(m,{emit:o}){var _;let f=n(!1);const e=n(null),h=n(null);let p=n(m.item.name),i=n(m.item.email),v=n(m.item.phone),u=n(m.item);q(m.item,l=>{u.value=l});let y=n((_=m.item.position)==null?void 0:_.id),t={title:[l=>!!l||"title are requies"]};const x=async()=>{let l=route("employee.update",{employee:u.value.id});if(!await h.value.validate())return null;try{const{data:g}=await axios.put(l,{name:p.value,email:i.value,phone:v.value,position:y.value});o("replace",addProtos(g,{action:!0,showEdit:!1}))}catch(g){console.error(g),R(g)}};return{props:m,form:h,emit:o,changeEmail:async l=>{const{value:c}=l.target;if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(c))return null;try{const V=route("user.showByEmail",{email:c}),{data:b}=await axios.get(V),U=C.values(b)?b:null;e.value=U,U&&(p.value=U.name)}catch(V){console.log(V)}},rs:N,save:x,busy:f,rules:t,save:x,name:p,phone:v,email:i,position:y}}},te={class:"layout gutter--md"},le={class:"row align-content--center"},ae={class:"flex xs12"},ne={class:"flex xs12 mt-2"},se={class:"flex xs12 mt-2"},ie={class:"flex xs12 mt-2"};function re(m,o,f,e,h,p){const i=s("va-input"),v=s("va-radio"),u=s("va-form"),y=s("form-dialog");return P(),k(y,{show:e.props.show,"onUpdate:show":o[4]||(o[4]=t=>e.emit("update:show",t)),busy:e.busy,title:"Edit User","is-edit":"",onAdd:e.save},{default:E(()=>[r(u,{ref:"form"},{default:E(()=>[d("div",te,[d("div",le,[d("div",ae,[r(i,{modelValue:e.name,"onUpdate:modelValue":o[0]||(o[0]=t=>e.name=t),label:"Name *",placeholder:"Name Here",rules:e.rs("Name",!0)},null,8,["modelValue","rules"])]),d("div",ne,[r(i,{modelValue:e.email,"onUpdate:modelValue":o[1]||(o[1]=t=>e.email=t),label:"Email *",placeholder:"Email Here",onChange:e.changeEmail,rules:e.rs("Email",{required:!0,email:!0})},null,8,["modelValue","onChange","rules"])]),d("div",se,[r(i,{modelValue:e.phone,"onUpdate:modelValue":o[2]||(o[2]=t=>e.phone=t),label:"Phone",placeholder:"Phone Here",rules:e.rs("Phone",!0)},null,8,["modelValue","rules"])]),d("div",ie,[(P(!0),z(O,null,H(e.props.positions,(t,x)=>(P(),k(v,{key:x,modelValue:e.position,"onUpdate:modelValue":o[3]||(o[3]=w=>e.position=w),label:t.title,option:t.id},null,8,["modelValue","label","option"]))),128))])])])]),_:1},512)]),_:1},8,["show","busy","onAdd"])}const de=A(oe,[["render",re]]);const me={components:{AppLayout:Z,PageTitleBox:F,Pagination:T,Create:ee,CreateButton:G,Edit:de,RemoveEditButton:J},setup(){const m=n(!0),o=j(),f=n([]),e=n([]),h=n(!1),p=n([]),i=n(10),v=n("name"),u=[{key:"id",sortable:!0,sortingOptions:["desc","asc"]},{key:"name",sortable:!0},{key:"email",sortable:!0},{key:"phone",sortable:!0},{key:"position.title",label:"Position",sortable:!0},{key:"action",thAlign:"right"}],y=n("asc"),t=async l=>{const c=route("employee.index",{perPage:i.value,page:l}),{data:g}=await axios.get(c);p.value=g.links,f.value=addProtos(g.data,{action:!0,showEdit:!1}),m.value=!1};t(1);const x=(l,c)=>{h.value=!1,f.value.splice(c,1,l)},w=l=>{h.value=!1,f.value.push(l)};return axios.get(route("positions")).then(({data:l})=>e.value=l),{busy:m,showCreate:h,perPage:i,sortingOrder:y,items:f,positions:e,columns:u,sortBy:v,remove:async(l,c)=>{if(!await I(l,"Employee","email"))return null;try{const a=route("employee.destroy",{employee:l.id});await axios.delete(a),f.value.splice(c,1),L(o)}catch(a){console.log(a)}},push:w,replace:x,fetchItems:t,links:p}}},ce={class:"row mt-4"},ue={class:"flex md6"},_e={class:"item"},pe={class:"flex lg6"},ve={class:"item right"};function fe(m,o,f,e,h,p){const i=s("create-button"),v=s("page-title-box"),u=s("va-select"),y=s("va-icon"),t=s("va-input"),x=s("edit"),w=s("remove-edit-button"),_=s("va-data-table"),l=s("pagination"),c=s("create"),g=s("app-layout");return P(),k(g,{busy:e.busy},{default:E(()=>[d("div",null,[r(v,{title:"Employees"},{default:E(()=>[r(i,{title:"Add Employee",onClick:o[0]||(o[0]=a=>e.showCreate=!0)})]),_:1})]),d("div",ce,[d("div",ue,[d("div",_e,[r(u,{class:"flex mb-2 md6",label:"Per Page",modelValue:e.perPage,"onUpdate:modelValue":o[1]||(o[1]=a=>e.perPage=a),options:[10,20,30,40,50]},null,8,["modelValue"])])]),d("div",pe,[d("div",ve,[r(t,{class:"flex mb-2 md6",label:"Search"},{prepend:E(()=>[r(y,{class:"material-icons"},{default:E(()=>[S("search")]),_:1})]),_:1})])])]),r(_,{items:e.items,columns:e.columns,hoverable:!0,"sort-by":e.sortBy,"onUpdate:sortBy":o[2]||(o[2]=a=>e.sortBy=a),"sorting-order":e.sortingOrder,"onUpdate:sortingOrder":o[3]||(o[3]=a=>e.sortingOrder=a)},{"cell(action)":E(({rowData:a,rowIndex:V})=>[r(w,{onEditClick:b=>a.showEdit=!0,onRemoveClick:b=>e.remove(a,V)},{default:E(()=>[r(x,{show:a.showEdit,"onUpdate:show":b=>a.showEdit=b,positions:e.positions,item:a,onReplace:b=>e.replace(b,V)},null,8,["show","onUpdate:show","positions","item","onReplace"])]),_:2},1032,["onEditClick","onRemoveClick"])]),_:1},8,["items","columns","sort-by","sorting-order"]),r(l,{links:e.links,onPage:e.fetchItems},null,8,["links","onPage"]),r(c,{show:e.showCreate,"onUpdate:show":o[4]||(o[4]=a=>e.showCreate=a),positions:e.positions,onPush:e.push},null,8,["show","positions","onPush"])]),_:1},8,["busy"])}const Ee=A(me,[["render",fe],["__scopeId","data-v-1fb2f5c5"]]);export{Ee as default};