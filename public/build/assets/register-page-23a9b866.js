import{_ as R,d as y,o as k,r as h,a as g,c as P,b as o,w as n,m as z,l as p,e as t,f as b,g as $,h as I,i as f,j as M,k as N}from"./app-aa4a02c0.js";const U=y({components:{Open:k},setup(){const e=h(),r=h(!1),c=g({name:"saiful islam",email:"test@gmail.com",password:"",password_confirmation:"",phone:""}),i=g({name:"",email:"",password:"",password_confirmation:"",phone:""}),_=g({name:[{required:!0,message:"Name Must be Required",trigger:"change"}],email:[{required:!0,message:"Email Must be Required",trigger:"change"}],phone:[{required:!0,message:"Phone Must be Required",trigger:"change"}],password:[{required:!0,message:"Password Must be Required",trigger:"change"}],password_confirmation:[{required:!0,message:"Password Must be Required",trigger:"change"}]});return{busy:r,ruleFormRef:e,ruleForm:c,rules:_,errors:i,login:async m=>{await m.validate(async(d,w)=>{if(d)try{const l="/register",{data:u}=await axios.post(l,c),s=z();this.$router.push({name:"login"})}catch(l){console.error(l);const u=l==null?void 0:l.response;if(u&&u.status==422){const s=u.data.errors;p.hasIn(s,"name")&&(i.name=s.name[0]),p.hasIn(s,"email")&&(i.email=s.email[0]),p.hasIn(s,"password")&&(i.password=s.password[0]),p.hasIn(s,"password_confirmation")&&(i.password_confirmation=s.password_confirmation[0]),p.hasIn(s,"phone")&&(i.phone=s.phone[0])}}})}}}}),B={class:"login-page"},C={class:"login-btn-box"},E=f("span",{class:"ml-2"},"Register",-1),D={class:"redirect-info"},j=f("b",null,"Login",-1);function A(e,r,c,i,_,V){const m=t("el-input"),d=t("el-form-item"),w=t("open"),l=t("el-icon"),u=t("el-button"),s=t("el-link"),F=t("el-form"),v=t("el-card"),q=N("loading");return b(),P("div",B,[o(v,null,{default:n(()=>[$((b(),I(F,{ref:"ruleFormRef",model:e.ruleForm,rules:e.rules,"label-position":"top"},{default:n(()=>[o(d,{label:"Name",prop:"name",error:e.errors.name},{default:n(()=>[o(m,{size:"large",modelValue:e.ruleForm.name,"onUpdate:modelValue":r[0]||(r[0]=a=>e.ruleForm.name=a)},null,8,["modelValue"])]),_:1},8,["error"]),o(d,{label:"Email",prop:"email",error:e.errors.email},{default:n(()=>[o(m,{size:"large",modelValue:e.ruleForm.email,"onUpdate:modelValue":r[1]||(r[1]=a=>e.ruleForm.email=a)},null,8,["modelValue"])]),_:1},8,["error"]),o(d,{label:"Phone",prop:"phone",error:e.errors.phone},{default:n(()=>[o(m,{size:"large",modelValue:e.ruleForm.phone,"onUpdate:modelValue":r[2]||(r[2]=a=>e.ruleForm.phone=a)},null,8,["modelValue"])]),_:1},8,["error"]),o(d,{label:"Password",prop:"password",error:e.errors.password},{default:n(()=>[o(m,{size:"large",modelValue:e.ruleForm.password,"onUpdate:modelValue":r[3]||(r[3]=a=>e.ruleForm.password=a)},null,8,["modelValue"])]),_:1},8,["error"]),o(d,{label:"Password",prop:"password_confirmation",error:e.errors.password_confirmation},{default:n(()=>[o(m,{size:"large",modelValue:e.ruleForm.password_confirmation,"onUpdate:modelValue":r[4]||(r[4]=a=>e.ruleForm.password_confirmation=a)},null,8,["modelValue"])]),_:1},8,["error"]),f("div",C,[o(u,{size:"large",type:"primary",onClick:r[5]||(r[5]=a=>e.login(e.ruleFormRef))},{default:n(()=>[o(l,null,{default:n(()=>[o(w)]),_:1}),E]),_:1})]),f("div",D,[M(" Already have an account? "),o(s,{href:"/"},{default:n(()=>[j]),_:1})])]),_:1},8,["model","rules"])),[[q,e.busy]])]),_:1})])}const O=R(U,[["render",A]]);export{O as default};