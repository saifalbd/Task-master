import{_ as z,r as v,a as P,f as b,h as q,w as o,i as g,b as e,j as c,e as a,V as N,W as T,c as k,n as A,F as B,E,ab as G,ac as L,G as j,ad as O,ae as W,m as H,t as C,p as J,q as K}from"./app-aa4a02c0.js";import{a as Q}from"./app-layout-fab3e0f7.js";const X={props:{show:{type:Boolean,default:!1},item:{type:Object,required:!0}},setup(i,{emit:t}){const V=v(),l=v(!1),w=r=>{r(),t("update:show",!1)},m=P({birth_date:i.item.birth_date,address:i.item.address,gender:i.item.gender}),y=P({birth_date:[{required:!0,message:"Birth Date Required",trigger:"change"}],address:[{required:!0,message:"Address Required",trigger:"change"}],gender:[{required:!0,message:"Gender Required",trigger:"change"}]});return{props:i,dialogVisible:l,formFields:m,rules:y,ruleFormRef:V,handleClose:w,submit:async r=>{try{if(!r)return;await r.validate(async(s,u)=>{s&&(await axios.put(route("updateProfile"),m),t("update:show",!1))})}catch(s){console.error(s)}}}}},Y={class:"dialog-footer"};function Z(i,t,V,l,w,m){const y=a("el-date-picker"),d=a("el-form-item"),r=a("el-option"),s=a("el-select"),u=a("el-input"),p=a("el-form"),_=a("el-button"),n=a("el-dialog");return b(),q(n,{"model-value":l.props.show,title:"Profile Information","before-close":l.handleClose,style:{"max-width":"470px"}},{footer:o(()=>[g("span",Y,[e(_,{onClick:t[3]||(t[3]=f=>l.handleClose(()=>{}))},{default:o(()=>[c("Cancel")]),_:1}),e(_,{type:"primary",onClick:t[4]||(t[4]=f=>l.submit(l.ruleFormRef))},{default:o(()=>[c(" Confirm ")]),_:1})])]),default:o(()=>[e(p,{"label-position":"right","label-width":"100px",model:l.formFields,rules:l.rules,ref:"ruleFormRef",style:{"max-width":"460px"}},{default:o(()=>[e(d,{label:"Birth Date",prop:"birth_date"},{default:o(()=>[e(y,{modelValue:l.formFields.birth_date,"onUpdate:modelValue":t[0]||(t[0]=f=>l.formFields.birth_date=f),type:"date",placeholder:"Pick a day"},null,8,["modelValue"])]),_:1}),e(d,{label:"Gender",prop:"gender"},{default:o(()=>[e(s,{modelValue:l.formFields.gender,"onUpdate:modelValue":t[1]||(t[1]=f=>l.formFields.gender=f),placeholder:"Select"},{default:o(()=>[e(r,{label:"Male",value:"male"}),e(r,{label:"Female",value:"female"})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"Address",prop:"address"},{default:o(()=>[e(u,{autosize:"",type:"textarea",modelValue:l.formFields.address,"onUpdate:modelValue":t[2]||(t[2]=f=>l.formFields.address=f)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["model-value","before-close"])}const $=z(X,[["render",Z]]),ee={props:{show:{type:Boolean,default:!1},item:{type:Object,required:!0}},setup(i,{emit:t}){const V=v(),l=v(!1),w=r=>{r(),t("update:show",!1)},m=P({nationality:i.item.nationality,religion:i.item.religion,marital_status:i.item.marital_status}),y=P({nationality:[{required:!0,message:"nationality Required",trigger:"change"}],religion:[{required:!0,message:"religion Required",trigger:"change"}],marital_status:[{required:!0,message:"marital status Required",trigger:"change"}]});return{props:i,dialogVisible:l,formFields:m,rules:y,ruleFormRef:V,handleClose:w,submit:async r=>{try{if(!r)return;await r.validate(async(s,u)=>{s&&(await axios.put(route("updatePersonalInformation"),m),t("update:show",!1))})}catch(s){console.error(s)}}}}},le={class:"dialog-footer"};function oe(i,t,V,l,w,m){const y=a("el-input"),d=a("el-form-item"),r=a("el-option"),s=a("el-select"),u=a("el-form"),p=a("el-button"),_=a("el-dialog");return b(),q(_,{"model-value":l.props.show,title:"Personal Information","before-close":l.handleClose,style:{"max-width":"470px"}},{footer:o(()=>[g("span",le,[e(p,{onClick:t[3]||(t[3]=n=>l.handleClose(()=>{}))},{default:o(()=>[c("Cancel")]),_:1}),e(p,{type:"primary",onClick:t[4]||(t[4]=n=>l.submit(l.ruleFormRef))},{default:o(()=>[c(" Confirm ")]),_:1})])]),default:o(()=>[e(u,{"label-position":"right","label-width":"150px",model:l.formFields,rules:l.rules,ref:"ruleFormRef",style:{"max-width":"460px"}},{default:o(()=>[e(d,{label:"Nationality",prop:"nationality"},{default:o(()=>[e(y,{modelValue:l.formFields.nationality,"onUpdate:modelValue":t[0]||(t[0]=n=>l.formFields.nationality=n)},null,8,["modelValue"])]),_:1}),e(d,{label:"Religion",prop:"religion"},{default:o(()=>[e(s,{modelValue:l.formFields.religion,"onUpdate:modelValue":t[1]||(t[1]=n=>l.formFields.religion=n),placeholder:"Select"},{default:o(()=>[e(r,{label:"Islam",value:"islam"}),e(r,{label:"Christianity",value:"christianity"}),e(r,{label:"Hinduism",value:"hinduism"})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"Marital Status",prop:"marital_status"},{default:o(()=>[e(s,{modelValue:l.formFields.marital_status,"onUpdate:modelValue":t[2]||(t[2]=n=>l.formFields.marital_status=n),placeholder:"Select"},{default:o(()=>[e(r,{label:"married",value:"married"}),e(r,{label:"un married",value:"un married"})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["model-value","before-close"])}const te=z(ee,[["render",oe]]),ae={components:{Delete:N,More:T},props:{show:{type:Boolean,default:!1},items:{type:Array,required:!0}},setup(i,{emit:t}){const V=v(),l=v(!1),w=n=>{n(),t("update:show",!1)},m=P({items:[]});return i.items.forEach(n=>{m.items.push({type:n.type,relationship:n.relationship,phone:n.phone,name:n.name})}),{props:i,dialogVisible:l,formFields:m,nameRules:{required:!0,message:"Type Required",trigger:"blur"},typeRules:{required:!0,message:"Type Required",trigger:"blur"},relationshipRules:{required:!0,message:"Relationship Required",trigger:"blur"},phoneRules:{required:!0,message:"Phone Required",trigger:"blur"},ruleFormRef:V,handleClose:w,submit:async n=>{try{if(!n)return;await n.validate(async(f,U)=>{f&&(await axios.put(route("emergencyContactUpdate"),m),t("update:show",!1))})}catch(f){console.error(f)}},more:n=>{m.items.push({type:"secondary",relationship:"",phone:"",name:""})},remove:n=>{m.items.splice(n,1)}}}},ne={key:0,class:"edit-circle"},re={key:0,class:"mt-2",style:{width:"100%","text-align":"center"}},se={class:"dialog-footer"};function ie(i,t,V,l,w,m){const y=a("delete"),d=a("el-icon"),r=a("el-button"),s=a("el-option"),u=a("el-select"),p=a("el-form-item"),_=a("el-input"),n=a("el-card"),f=a("more"),U=a("el-form"),I=a("el-dialog");return b(),q(I,{"model-value":l.props.show,title:"Emergency Contacts","before-close":l.handleClose,style:{"max-width":"470px"}},{footer:o(()=>[g("span",se,[e(r,{onClick:t[1]||(t[1]=x=>l.handleClose(()=>{}))},{default:o(()=>[c("Cancel")]),_:1}),e(r,{type:"primary",onClick:t[2]||(t[2]=x=>l.submit(l.ruleFormRef))},{default:o(()=>[c(" Confirm ")]),_:1})])]),default:o(()=>[e(U,{"label-position":"right","label-width":"100px",model:l.formFields,ref:"ruleFormRef",style:{"max-width":"460px"}},{default:o(()=>[(b(!0),k(B,null,A(l.formFields.items,(x,R)=>(b(),q(n,{key:R,class:"box-card mb-2"},{default:o(()=>[R>0?(b(),k("div",ne,[e(r,{type:"danger",size:"small",circle:"",onClick:F=>l.remove(R)},{default:o(()=>[e(d,null,{default:o(()=>[e(y)]),_:1})]),_:2},1032,["onClick"])])):E("",!0),e(p,{label:"Type",prop:`items.${R}.type`,rules:l.typeRules},{default:o(()=>[e(u,{modelValue:x.type,"onUpdate:modelValue":F=>x.type=F,disabled:!0},{default:o(()=>[e(s,{label:"Primary",value:"primary"}),e(s,{label:"Secondary",value:"secondary"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"]),e(p,{label:"Name",prop:`items.${R}.name`,rules:l.nameRules},{default:o(()=>[e(_,{modelValue:x.name,"onUpdate:modelValue":F=>x.name=F},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"]),e(p,{label:"Relationship",prop:`items.${R}.relationship`,rules:l.relationshipRules},{default:o(()=>[e(u,{modelValue:x.relationship,"onUpdate:modelValue":F=>x.relationship=F},{default:o(()=>[e(s,{label:"Father",value:"father"}),e(s,{label:"Mother",value:"mother"}),e(s,{label:"Wife",value:"wife"}),e(s,{label:"Brother",value:"brother"}),e(s,{label:"Cousin",value:"cousin"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"]),e(p,{label:"Phone",prop:`items.${R}.phone`,rules:l.phoneRules},{default:o(()=>[e(_,{modelValue:x.phone,"onUpdate:modelValue":F=>x.phone=F},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])]),_:2},1024))),128)),l.formFields.items.length<2?(b(),k("div",re,[e(r,{onClick:t[0]||(t[0]=x=>l.more(i.i))},{default:o(()=>[e(d,null,{default:o(()=>[e(f)]),_:1}),c(" More ")]),_:1})])):E("",!0)]),_:1},8,["model"])]),_:1},8,["model-value","before-close"])}const de=z(ae,[["render",ie]]);const ce={components:{CircleCloseFilled:G,UploadFilled:L},props:{show:{type:Boolean,default:!1},src:{type:String,required:!0}},setup(i,{emit:t}){const V=v(!1),l=v(!0),w=v(i.src),m=v(null),y=u=>{let p=u.target.files;if(p.length){let _=p[0];m.value=_;let n=new FileReader;n.onload=()=>{let f=n.result;w.value=f},n.readAsDataURL(_)}},d=()=>{t("update:show",!1)};return{props:i,visible:l,busy:V,src:w,fileChange:y,upload:async()=>{if(m.value)try{const u=new FormData;u.append("avatar",m.value);const{data:p}=await axios.post(route("avatar"),u);d(),t("update:src",p.url)}catch(u){console.error(u)}else d()},handleClose:u=>{u(),d()}}}},ue={class:"my-header"},me=["id"],_e={class:"center"},fe={class:"center"},pe={class:"input-box"},he={class:"dialog-footer"};function ye(i,t,V,l,w,m){const y=a("CircleCloseFilled"),d=a("el-icon"),r=a("el-button"),s=a("el-avatar"),u=a("UploadFilled"),p=a("el-dialog");return b(),q(p,{"model-value":l.props.show,"before-close":l.handleClose,"show-close":!1,style:{"min-width":"350px"}},{header:o(({close:_,titleId:n,titleClass:f})=>[g("div",ue,[g("h4",{id:n,class:j(f)},"Change Avatar!",10,me),e(r,{type:"danger",onClick:_},{default:o(()=>[e(d,{class:"el-icon--left"},{default:o(()=>[e(y)]),_:1}),c(" Close ")]),_:2},1032,["onClick"])])]),footer:o(()=>[g("span",he,[e(r,{type:"primary",onClick:l.upload},{default:o(()=>[e(d,null,{default:o(()=>[e(u)]),_:1}),c(" Upload ")]),_:1},8,["onClick"])])]),default:o(()=>[g("div",_e,[e(s,{size:200,src:l.src},null,8,["src"])]),g("div",fe,[g("div",pe,[g("input",{type:"file",onChange:t[0]||(t[0]=(..._)=>l.fileChange&&l.fileChange(..._))},null,32),e(r,{type:"primary"},{default:o(()=>[e(d,null,{default:o(()=>[e(u)]),_:1}),c(" Add Image")]),_:1})])])]),_:1},8,["model-value","before-close"])}const ge=z(ce,[["render",ye],["__scopeId","data-v-7c98ee1a"]]);const be={props:{user_id:{type:[Number,String]}},components:{AppLayout:Q,Edit:O,Camera:W,EditProfileVue:$,PersonalInformationEditVue:te,EmergencyContactEditVue:de,ChangeAvatar:ge},setup(i){const t=i.user_id,V=H();let l=v(!1),w=v(!1),m=v(!1),y=v(!1);const d=v(!0),r=v(null);return axios.get(route("profile",{user:i.user_id?i.user_id:V.auth_id})).then(({data:s})=>{r.value=s,d.value=!1}),{d:r,busy:d,showProfileEdit:l,showPersonalInfoEdit:w,showEmergencyConEdit:m,showAvatarModel:y,user_id:t}}},ve=i=>(J("data-v-cc9bccb8"),i=i(),K(),i),we={key:1,class:"profile"},Ce={class:"top-section"},Ve={key:0,class:"edit-circle"},xe={class:"avatar-box"},Fe={class:"inner"},Re={style:{"text-align":"center"},class:"mt-3"},ke={class:"mt-3"},qe={key:0,class:"edit-circle"},Ue={key:0,class:"edit-circle"},Ee=ve(()=>g("h3",{class:"mb-2"},"Emergency Contacts",-1));function Pe(i,t,V,l,w,m){const y=a("el-progress"),d=a("edit"),r=a("el-icon"),s=a("el-button"),u=a("el-avatar"),p=a("camera"),_=a("el-col"),n=a("el-descriptions-item"),f=a("el-descriptions"),U=a("el-row"),I=a("el-card"),x=a("edit-profile-vue"),R=a("personal-information-edit-vue"),F=a("emergency-contact-edit-vue"),S=a("change-avatar"),M=a("app-layout");return b(),q(M,{busy:!1},{default:o(()=>[l.busy?(b(),q(y,{key:0,percentage:100,status:"success",indeterminate:!0,duration:5})):(b(),k("div",we,[g("section",Ce,[l.user_id?E("",!0):(b(),k("div",Ve,[e(s,{type:"primary",size:"small",circle:"",onClick:t[0]||(t[0]=h=>l.showProfileEdit=!0)},{default:o(()=>[e(r,null,{default:o(()=>[e(d)]),_:1})]),_:1})])),e(U,{class:"s-body",gutter:24},{default:o(()=>[e(_,{class:"left-side",sm:24,md:12},{default:o(()=>[e(U,{gutter:24},{default:o(()=>[e(_,{sm:24,md:6},{default:o(()=>[g("div",xe,[g("div",Fe,[e(u,{size:120,src:l.d.avatar.url},null,8,["src"]),l.user_id?E("",!0):(b(),k("div",{key:0,class:"camera-icon",onClick:t[1]||(t[1]=h=>l.showAvatarModel=!0)},[e(s,{type:"info",circle:""},{default:o(()=>[e(r,null,{default:o(()=>[e(p)]),_:1})]),_:1})]))])])]),_:1}),e(_,{sm:24,md:18},{default:o(()=>[e(f,{direction:"horizontal",column:1,size:"large",border:""},{default:o(()=>[e(n,{label:"Name:"},{default:o(()=>[c(C(l.d.name),1)]),_:1}),e(n,{label:"Designation:"},{default:o(()=>[c("Designation")]),_:1}),e(n,{label:"Joining Date:"},{default:o(()=>[c(C(l.d.created_at),1)]),_:1})]),_:1}),g("div",Re,[e(s,{type:"primary"},{default:o(()=>[e(r,null,{default:o(()=>[e(d)]),_:1}),c(" Message ")]),_:1})])]),_:1})]),_:1})]),_:1}),e(_,{class:"right-side",sm:24,md:12},{default:o(()=>[e(f,{direction:"horizontal",column:1,size:"large",border:""},{default:o(()=>[e(n,{label:"Phone:"},{default:o(()=>[c(C(l.d.phone),1)]),_:1}),e(n,{label:"Email:"},{default:o(()=>[c(C(l.d.email),1)]),_:1}),e(n,{label:"Birthday:"},{default:o(()=>[c(C(l.d.profile.birth_date),1)]),_:1}),e(n,{label:"Address:"},{default:o(()=>[c(C(l.d.profile.address),1)]),_:1}),e(n,{label:"Gender:"},{default:o(()=>[c(C(l.d.profile.gender),1)]),_:1})]),_:1})]),_:1})]),_:1})]),g("section",ke,[e(U,{gutter:24},{default:o(()=>[e(_,{sm:24,md:12},{default:o(()=>[g("div",null,[e(I,{class:"box-card"},{default:o(()=>[l.user_id?E("",!0):(b(),k("div",qe,[e(s,{type:"primary",size:"small",circle:"",onClick:t[2]||(t[2]=h=>l.showPersonalInfoEdit=!0)},{default:o(()=>[e(r,null,{default:o(()=>[e(d)]),_:1})]),_:1})])),e(f,{title:"Personal Informations",direction:"horizontal",column:1,size:"large",border:""},{default:o(()=>[e(n,{label:"Nationality:"},{default:o(()=>[c(C(l.d.personal_information.nationality),1)]),_:1}),e(n,{label:"Religion:"},{default:o(()=>[c(C(l.d.personal_information.religion),1)]),_:1}),e(n,{label:"Birthday:"},{default:o(()=>[c(C(l.d.profile.birth_day),1)]),_:1}),e(n,{label:"Marital status:"},{default:o(()=>[c(C(l.d.personal_information.marital_status),1)]),_:1})]),_:1})]),_:1})])]),_:1}),e(_,{sm:24,md:12},{default:o(()=>[g("div",null,[e(I,{class:"box-card"},{default:o(()=>[l.user_id?E("",!0):(b(),k("div",Ue,[e(s,{type:"primary",size:"small",circle:"",onClick:t[3]||(t[3]=h=>l.showEmergencyConEdit=!0)},{default:o(()=>[e(r,null,{default:o(()=>[e(d)]),_:1})]),_:1})])),Ee,(b(!0),k(B,null,A(l.d.emergency_contacts,(h,D)=>(b(),q(f,{key:D,title:h.type,direction:"horizontal",column:1,size:"large",border:""},{default:o(()=>[e(n,{label:"Type:"},{default:o(()=>[c(C(h.type),1)]),_:2},1024),e(n,{label:"Name:"},{default:o(()=>[c(C(h.name),1)]),_:2},1024),e(n,{label:"Relationship:"},{default:o(()=>[c(C(h.relationship),1)]),_:2},1024),e(n,{label:"Phone:"},{default:o(()=>[c(C(h.phone),1)]),_:2},1024)]),_:2},1032,["title"]))),128))]),_:1})])]),_:1})]),_:1})]),e(x,{show:l.showProfileEdit,"onUpdate:show":t[4]||(t[4]=h=>l.showProfileEdit=h),item:l.d.profile},null,8,["show","item"]),e(R,{show:l.showPersonalInfoEdit,"onUpdate:show":t[5]||(t[5]=h=>l.showPersonalInfoEdit=h),item:l.d.personal_information},null,8,["show","item"]),e(F,{show:l.showEmergencyConEdit,"onUpdate:show":t[6]||(t[6]=h=>l.showEmergencyConEdit=h),items:l.d.emergency_contacts},null,8,["show","items"]),e(S,{show:l.showAvatarModel,"onUpdate:show":t[7]||(t[7]=h=>l.showAvatarModel=h),src:l.d.avatar.url,"onUpdate:src":t[8]||(t[8]=h=>l.d.avatar.url=h)},null,8,["show","src"])]))]),_:1})}const Ae=z(be,[["render",Pe],["__scopeId","data-v-cc9bccb8"]]);export{Ae as default};
