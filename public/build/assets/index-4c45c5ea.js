import{e as i,i as a,u as d,m as n}from"./icon-7c2f508c.js";import{l as f}from"./app-c6f1798b.js";class _{constructor(t,e){this.comment=t,this.auth_id=e,this.isLiked=t.reacts.findIndex(s=>s.id==e)>-1,this.popReactDom=this.reactPopUpBox(),this.el=this.button()}reactPopUpBox(){let t=i("div",{},[i("div",{},[a.create(a.like,24)])]);t.addEventListener("click",()=>this.doLike(this.comment,"like"));let e=i("div",{},[i("div",{},[a.create(a.disLike,24)])]);e.addEventListener("click",()=>this.doLike(this.comment,"disLike"));let s=i("div",{},[i("div",{},[a.create(a.love,24)])]);s.addEventListener("click",()=>this.doLike(this.comment,"love"));let o=i("div",{},[i("div",{},[a.create(a.sad,24)])]);return o.addEventListener("click",()=>this.doLike(this.comment,"sad")),i(".like-pop-up-box",{},[i(".like-pop-up",{},[t,e,s,o])])}updateLike(){this.isLiked?(this.el.classList.remove("active"),this.isLiked=!1):(this.el.classList.add("active"),this.isLiked=!0)}button(){let t=i("button",{class:"like-btn"},[a.create(a.like)]),e=i("div",{class:"like-box"},[this.popReactDom,t]);return this.comment.reactCount&&e.classList.add("show-count"),this.isLiked&&e.classList.add("active"),t.addEventListener("click",()=>{this.doLike(this.comment,"like")}),e}async doLike(t,e){try{this.updateLike();const s=route("comment.toggleLike",{comment:t.id});await axios.post(s,{prop:e})}catch(s){console.error(s)}}}class y{constructor(t){const{parentComment:e,model_type:s,model_id:o,parentDom:l}=t;try{if(!e)throw new Error("Parent Comment argument are missing");if(!s)throw new Error("model_type argument are missing");if(!o)throw new Error("model_id argument are missing");this.model_type=s,this.model_id=o,this.parentComment=e,this.parentDom=l,this.fileInputDom=this.fileUploadInput(),this.files=[],this.fileListDom=null,this.attachmentNode=this.fileUploadField(),this.el=this.card(),this.attachD="M4 19V7H16V19C16 20.1 15.1 21 14 21H6C4.9 21 4 20.1 4 19M6 9V19H14V9H6M13.5 4H17V6H3V4H6.5L7.5 3H12.5L13.5 4M19 17V15H21V17H19M19 13V7H21V13H19Z"}catch(r){console.error(r)}}async asyncPost(t,e){try{const s=new FormData,o=route("comment.store");s.append("model_id",this.model_id),s.append("model_type",this.model_type),s.append("parent_id",this.parentComment.id),s.append("text",t),e.forEach((l,r)=>{s.append(`attachments[${r}]`,l)}),await axios.post(o,s),console.log({text:t,files:e})}catch(s){console.error(s)}}card(){return i("div",{class:"reply-card animate__swing"},[i(".top-part",{},[i("h2","Title")]),this.middlePart(),this.bottomPart()])}middlePart(){let t=i("textarea");t.addEventListener("focus",()=>{this.el.classList.add("show-bottom"),t.classList.remove("is-invalid")});let e=i("button",{},"Send");return e.addEventListener("click",()=>{let s=f.trim(t.value);if(!s)return t.classList.add("is-invalid"),null;let o=this.files.map(l=>l.file);this.asyncPost(s,o),this.parentDom.removeModal()}),i(".middle-part",{},[t,e])}fileItem(t,e){let s=i("button",{class:"va-button va-button--normal va-button--icon-only",type:"button","aria-disabled":!1,"aria-label":"remove file",style:"background:red;"},[i("span",{class:"va-button__content"},[i("i",{class:"va-icon material-icons va-button__left-icon","aria-hidden":!0,style:"color: rgb(255, 255, 255); font-size: 24px; height: 24px; line-height: 24px;"},"clear")])]),o=i("div",{class:"va-list-item va-file-upload-list-item",role:"listitem",tabindex:e},[i("div",{class:"va-list-item__inner"},[i("div",{class:"va-list-item-section va-list-item-section--main"},[i("div",{class:"va-file-upload-list-item__content"},[i(".va-file-upload-list-item__name",t.name),i(".va-file-upload-list-item__size",`${t.size} KB`),s])])])]);return s.addEventListener("click",()=>{let l=this.files.findIndex(r=>r.index==e);l>-1&&this.files.splice(l,1),d(this.fileListDom,o),this.files.length||d(this.attachmentNode,this.fileListDom)}),o}fileList(t){return i("div",{class:"va-list va-file-upload-list va-file-upload-list--list"},t.map((e,s)=>this.fileItem(e,s)))}fileUploadInput(){let t=i("input",{style:{zIndex:2},type:"file",class:"va-file-upload__field__input",tabindex:"-1","aria-hidden":!0,accept:!0,multiple:!0});return t.addEventListener("change",e=>{let o=e.target.files;if(this.files=Array.prototype.map.call(o,(r,m)=>({index:m,file:r})),o.length){let r=Array.prototype.map.call(o,m=>{const{name:p,size:u,type:v}=m;return{name:p,size:u,type:v}});this.fileListDom=this.fileList(r),n(this.attachmentNode,this.fileListDom)}else this.fileListDom&&d(this.attachmentNode,this.fileListDom)}),t}fileUploadField(){return i(".va-file-upload",{},[i(".va-file-upload__field",{},[i("button",{class:"va-button va-button--small va-button--bordered va-file-upload__field__button",style:"border-color: rgb(21, 78, 193); color: rgb(21, 78, 193); background: transparent; --1b8929fa:#154EC1; --db0b68f0:0; --73abd112:transparent; --5fe12b1f:0;"},[i("span",{class:"va-button__content"},[a.create(a.attach,18),i("b","attachment")])])]),this.fileInputDom])}bottomPart(){return i(".bottom-part",{},[i(".inner",{},[this.attachmentNode])])}onmount(){}}class b{constructor(t){const{parentComment:e,model_type:s,model_id:o}=t;try{if(!e)throw new Error("Parent Comment argument are missing");if(!s)throw new Error("model_type argument are missing");if(!o)throw new Error("model_id argument are missing");this.model_type=s,this.model_id=o,this.parentComment=e,this.el=this.modal()}catch(l){console.error(l)}}removeModal(){let t=document.getElementById("commentLayout");d(t,this.el)}modal(){let t=i(".reply-overly");return t.addEventListener("click",()=>{this.removeModal()}),i("div",{class:"reply-modal",id:"replyModal"},[t])}onmount(){let t={parentComment:this.parentComment,model_type:this.model_type,model_id:this.model_id,parentDom:this},e=new y(t);n(this.el,e)}}class c{constructor(t){try{const{comment:e,model_type:s,model_id:o,auth_id:l}=t;if(this.comment=e,!s)throw new Error("model_type argument are missing");if(!o)throw new Error("model_id argument are missing");if(!l)throw new Error("auth_id argument are missing");this.model_type=s,this.model_id=o,this.auth_id=l,this.likeBtn=new _(e,l),this.childDom=this.childrenDom(e),this.el=this.commentItem(e)}catch(e){console.error(e)}}commentItem(t){return i(".comment-list-item",{},[this.innerBox(t),this.actionBar(t),this.childDom])}toggole(t){t?this.el.classList.remove("none"):this.el.classList.add("none")}realTimeReplyUpdate(t){try{window.Echo.join(`comment.reply.${t.id}`).listen("NewComment",e=>{let s={comment:e,model_type:this.model_type,model_id:this.model_id,auth_id:this.auth_id},o=new c(s);n(this.childDom,o)}),t.user.id!=this.auth_id&&window.Echo.join(`commentRemove.${t.id}`).listen("RemoveComment",e=>{this.toggole(!1)})}catch(e){console.log(e)}}onmount(){this.comment.replayes.forEach(t=>{let e={comment:t,model_type:this.model_type,model_id:this.model_id,auth_id:this.auth_id},s=new c(e);n(this.childDom,s)}),this.realTimeReplyUpdate(this.comment)}showReacts(t){return i("div",{class:"view-react-button"},[i("span",[a.create(a.like),a.create(a.disLike)]),i("b",t.reactCount)])}innerBox(t){return i(".inner",{},[i("div",{},[this.avaterBox(t)]),i(".text-box",{},[i("p",{},[i("span",{style:`display: flex;
                    justify-content: space-between;`},[i("b",t.user.name),this.showReacts(t)]),i("small",t.atNow)]),i("p",t.text)])])}childrenDom(){return i(".comment-list",{},[])}replyBtnEl(t){let e=i("button",{class:"replay-btn"},[a.create(a.reply)]);return e.addEventListener("click",()=>{let s=document.getElementById("commentLayout"),o={parentComment:t,model_type:this.model_type,model_id:this.model_id},l=new b(o);n(s,l)}),e}removeBtnEl(t){let e=i("span");return t.user.id==this.auth_id&&(e=i("button",{class:"remove-btn"},[a.create(a.remove)]),e.addEventListener("click",()=>{this.toggole(!1),this.remove(t)})),e}actionBar(t){return i(".action-bar",{},[i(".action-bar-inner",{},[i(".action-list",{},[this.likeBtn,this.replyBtnEl(t),this.removeBtnEl(t)]),this.attachBtn(t)])])}attachBtn(t){var e;return(e=t.attachments)!=null&&e.length?i("div",{},[i("button",{class:"show-attach-btn"},[a.create(a.attach),"Show Attach"])]):i("div")}avaterBox(t){let e=t.user.avatar;return e?i(".va-avatar",{"aria-hidden":!1,"aria-live":"polite",style:`color: rgb(255, 255, 255); 
            background-color: rgb(21, 141, 227); 
            font-size: 1rem; 
            width: 48px; 
            min-width: 48px; 
            height: 48px;`},[i("img",{src:e.url})]):i("div")}async remove(t){try{const e=route("comment.destroy",{comment:t.id});await axios.delete(e)}catch(e){console.error(e)}}}export{c as C};