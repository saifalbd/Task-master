import{R as f,S as m,T as h,U as g,l as i}from"./app-aa4a02c0.js";const x=()=>{var e;const t=(e=f())==null?void 0:e.appContext,s=[];return{init:r=>{const o=m(r,t);return o&&s.push(o),o},close:r=>h(r),closeAll:(r=!1)=>g(r?void 0:t),closeAllCreatedInThisHook:()=>{s.forEach(r=>h(r))}}},d=e=>typeof e=="number"?!0:e==null||e==""||i.isUndefined(e)?!1:i.isBoolean(e)?!0:i.isPlainObject(e)?!!i.keys(e).length:Array.isArray(e)?!!e.length:!!e,p={message:"",validate:d,valid(e){return this.message=`${e} should be must`,t=>this.validate(t)||this.message}},v={message:"",validate(e){return d(e)?/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e):!0},valid(e){return this.message=`${e} Not Valid Email`,t=>this.validate(t)||this.message}},y={message:"",validate(e,t){return String(e).length>=t},valid(e,t){return this.message=`The ${e} must be at least ${t} characters`,s=>this.validate(s,t)||this.message}},A={message:"",validate(e,t){return String(e).length<=t},valid(e,t){return this.message=`The ${e} may not be greater than ${t} characters`,s=>this.validate(s,t)||this.message}},T={message:"value should be Numeric",validate(e){return!isNaN(e)},valid(e){return t=>this.validate(t)||this.message}},u={required:p,numeric:T,email:v,minLength:y,maxLength:A},b=(e,t)=>{let s=[];if(i.isBoolean(t))return t&&s.push(Object.create(u.required).valid(e)),s;try{for(const l in t){let a=l;if(!Object.prototype.hasOwnProperty.call(u,a))throw`prop ${a} not are Register Validating Functions`;let n=t[a],c=i.isBoolean(n),r=Object.create(u[a]);a=="required"?n&&s.push(r.valid(e)):c&&n?s.push(r.valid(e)):s.push(r.valid(e,n))}}catch(l){console.error(l)}return s};export{b as r,x as u};