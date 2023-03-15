import{a as A}from"./app-layout-b5cf8580.js";import{_ as O}from"./PageTitleBox-aaded2a2.js";import{P as T}from"./Pagination-fc4f803b.js";import{_ as b,r as l,f as x,h as P,w as v,b as a,i as u,e as o,M as R,N,O as j,P as D,j as F}from"./app-44c844f3.js";import{F as E}from"./FormDialog-b0635048.js";import{r as U}from"./index-261a8ab4.js";import{C as H}from"./CreateButton-6467a51e.js";import{R as I}from"./RemoveEditButton-d8b70e6f.js";import{u as L}from"./useToast-c6130b9b.js";const S={components:{FormDialog:E},props:{show:{type:Boolean,default:!1}},setup(i,{emit:e}){let c=l(!1);const t=l(null);let m=l(""),_=route("designation.store");return{props:i,form:t,emit:e,rs:U,save:async()=>{if(!await t.value.validate())return null;try{const{data:d}=await axios.post(_,{title:m.value});e("push",addProtos(d,{action:!0,showEdit:!1}))}catch(d){console.error(d),validErorrs(d)}},title:m,busy:c}}},q={class:"layout gutter--md"},M={class:"row align-content--center"},z={class:"flex xs12"};function G(i,e,c,t,m,_){const f=o("va-input"),r=o("va-form"),d=o("form-dialog");return x(),P(d,{show:t.props.show,"onUpdate:show":e[1]||(e[1]=s=>t.emit("update:show",s)),busy:t.busy,title:"Create Designation",onAdd:t.save},{default:v(()=>[a(r,{ref:"form"},{default:v(()=>[u("div",q,[u("div",M,[u("div",z,[a(f,{modelValue:t.title,"onUpdate:modelValue":e[0]||(e[0]=s=>t.title=s),label:"Title",placeholder:"Title Here",rules:t.rs("title",!0)},null,8,["modelValue","rules"])])])])]),_:1},512)]),_:1},8,["show","busy","onAdd"])}const J=b(S,[["render",G]]),K={components:{FormDialog:E},props:{show:{type:Boolean,default:!1},item:{type:Object,required:!0}},setup(i,{emit:e}){let c=l(!1);const t=l(null);let m=l(i.item),_=l(i.item.title);return R(i.item,r=>{m.value=r,_.value=r.title}),{props:i,form:t,emit:e,save:async()=>{let r=route("designation.update",{designation:m.value.id});if(!await t.value.validate())return null;try{const{data:s}=await axios.put(r,{title:_.value});e("replace",addProtos(s,{action:!0,showEdit:!1}))}catch(s){N(s)}},rs:U,title:_,busy:c}}},Q={class:"layout gutter--md"},W={class:"row align-content--center"},X={class:"flex xs12"};function Y(i,e,c,t,m,_){const f=o("va-input"),r=o("va-form"),d=o("form-dialog");return x(),P(d,{show:t.props.show,"onUpdate:show":e[1]||(e[1]=s=>t.emit("update:show",s)),busy:t.busy,title:"Edit Designation","is-edit":"",onAdd:t.save},{default:v(()=>[a(r,{ref:"form"},{default:v(()=>[u("div",Q,[u("div",W,[u("div",X,[a(f,{modelValue:t.title,"onUpdate:modelValue":e[0]||(e[0]=s=>t.title=s),label:"Title",placeholder:"Title Here",rules:t.rs("title",!0)},null,8,["modelValue","rules"])])])])]),_:1},512)]),_:1},8,["show","busy","onAdd"])}const Z=b(K,[["render",Y]]);const $={components:{AppLayout:A,PageTitleBox:O,Pagination:T,Create:J,Edit:Z,CreateButton:H,RemoveEditButton:I},setup(){const i=l(!1),e=L(),c=l([]),t=l(!1),m=l([]),_=l(10),f=l("title"),r=[{key:"id",sortable:!0,sortingOptions:["desc","asc"]},{key:"title",sortable:!0},{key:"action",thAlign:"right",tdAlign:"right"}],d=l("asc"),s=async p=>{i.value=!0;const g=route("designation.index",{perPage:_.value,page:p}),{data:h}=await axios.get(g);m.value=h.links,c.value=addProtos(h.data,{action:!0,showEdit:!1}),i.value=!1};return s(1),{showCreate:t,perPage:_,sortingOrder:d,items:c,columns:r,sortBy:f,push:p=>{t.value=!1,c.value.push(p)},replace:(p,g)=>{t.value=!1,c.value.splice(g,1,p)},fetchItems:s,remove:async(p,g)=>{if(!await j(p,"Designation"))return null;try{const y=route("designation.destroy",{designation:p.id});await axios.delete(y),c.value.splice(g,1),D(e)}catch(y){console.log(y)}},links:m,busy:i}}},tt={class:"row mt-4"},et={class:"flex md6"},ot={class:"item"},st={class:"flex lg6"},nt={class:"item right"};function at(i,e,c,t,m,_){const f=o("create-button"),r=o("page-title-box"),d=o("va-select"),s=o("va-icon"),C=o("va-input"),k=o("edit"),V=o("remove-edit-button"),p=o("va-data-table"),g=o("pagination"),h=o("create"),y=o("app-layout");return x(),P(y,{busy:t.busy},{default:v(()=>[u("div",null,[a(r,{title:"Designations"},{default:v(()=>[a(f,{title:"Add Designation",onClick:e[0]||(e[0]=n=>t.showCreate=!0)})]),_:1})]),u("div",tt,[u("div",et,[u("div",ot,[a(d,{class:"flex mb-2 md6",label:"Per Page",modelValue:t.perPage,"onUpdate:modelValue":e[1]||(e[1]=n=>t.perPage=n),options:[10,20,30,40,50]},null,8,["modelValue"])])]),u("div",st,[u("div",nt,[a(C,{class:"flex mb-2 md6",label:"Search"},{prepend:v(()=>[a(s,{class:"material-icons"},{default:v(()=>[F("search")]),_:1})]),_:1})])])]),a(p,{items:t.items,columns:t.columns,hoverable:!0,"sort-by":t.sortBy,"onUpdate:sortBy":e[2]||(e[2]=n=>t.sortBy=n),"sorting-order":t.sortingOrder,"onUpdate:sortingOrder":e[3]||(e[3]=n=>t.sortingOrder=n)},{"cell(action)":v(({rowData:n,rowIndex:B})=>[a(V,{onEditClick:w=>n.showEdit=!0,onRemoveClick:w=>t.remove(n,B)},{default:v(()=>[a(k,{show:n.showEdit,"onUpdate:show":w=>n.showEdit=w,item:n,onReplace:w=>t.replace(w,B)},null,8,["show","onUpdate:show","item","onReplace"])]),_:2},1032,["onEditClick","onRemoveClick"])]),_:1},8,["items","columns","sort-by","sorting-order"]),a(g,{links:t.links,onPage:t.fetchItems},null,8,["links","onPage"]),a(h,{show:t.showCreate,"onUpdate:show":e[4]||(e[4]=n=>t.showCreate=n),onPush:t.push},null,8,["show","onPush"])]),_:1},8,["busy"])}const vt=b($,[["render",at],["__scopeId","data-v-362fd010"]]);export{vt as default};
