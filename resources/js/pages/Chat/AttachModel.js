import { startsWith } from "lodash";
import { el, mount, unmount } from "redom";
import { icon } from "../../Plugins/icon";

export class AttachModel {
    constructor(parentDom, src, file,callBack,isImg) {
        this.parentDom = parentDom;
        this.src = src;
        this.file = file;
        this.captionText = "";
        this.callBack = callBack;
        this.isImg = isImg;
        this.attachIcon = "M16.61 13.5C15.81 13.85 15.11 14.36 14.54 15H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17V11.5H9.5C8.95 11.5 8.5 11.95 8.5 12.5S8.95 13.5 9.5 13.5H16.61M3.5 12.5C3.5 10.29 5.29 8.5 7.5 8.5H18C19.38 8.5 20.5 9.62 20.5 11C20.5 11.84 20.08 12.58 19.45 13.03C20.05 13.07 20.63 13.2 21.17 13.41C21.69 12.74 22 11.91 22 11C22 8.79 20.21 7 18 7H7.5C4.46 7 2 9.46 2 12.5S4.46 18 7.5 18H13.09C13.18 17.47 13.34 16.97 13.55 16.5H7.5C5.29 16.5 3.5 14.71 3.5 12.5M21.34 15.84L17.75 19.43L16.16 17.84L15 19L17.75 22L22.5 17.25L21.34 15.84Z";

        this.el = el(".attach-model", {}, [
            el(".attach-card", {}, [
                this.close(),
                this.file_box(),
                this.captionBox(),
                this.sendBox(),
            ]),
        ]);
    }

    close() {
        let btn = el("div", {class:'close-box'}, [icon.create(icon.close)]);

        btn.addEventListener("click", () => {
            this.el.remove();
        });

        return btn;
    }

    file_box() {
        let attachBox = el('div',{},[
            el('div',{
                style:`height: 100px;
                width: 100px;
                display: flex;
                justify-content: center;
                align-items: center;`
            },[icon.create(this.attachIcon,50)]),
            el('p',{},this.src),
            el('div',{},`Size:${this.file.size}`)
        ]);
        let inner = this.isImg?el("img", { src: this.src }):attachBox;
        let file_box = el(".file_box", {}, [inner]);
        return file_box;
    }

    captionBox() {
        let input = el("input", { placeholder: "Caption" });
        input.addEventListener("change", (event) => {
            let value = input.value;
            this.captionText = value;
        });
        return el("div", { class: "caption-box" }, [input]);
    }

    sendBox() {
        let btn = el("button", "send");
        btn.addEventListener("click", () => {
            const caption = this.captionText;
           
            this.callBack(caption,this.file);
            this.el.remove();
           
        });
        return el(".send-box", {}, [btn]);
    }
}

export const attachRender = (src,file,callBack,isImg) => {
    let dom = document.getElementById("chatMainBar");
    mount(dom, new AttachModel(dom, src,file,callBack,isImg));
};


const isImage = (file)=>{
    let type = file.type;
    console.log({type})
    return startsWith(type,'image');
}

export const attachLissen = (event,callBack) => {
 try {
  
    let target = event.target;
    let files = target.files;
    if (files.length) {
        let file = files[0];
       let isImg = isImage(file);
       console.log({isImg})

       const box = document.getElementById("attachBox");
       const inputDom = attachBox(callBack);
       box.removeChild(box.querySelector('input'));
       setTimeout(()=>{
           mount(
               box,
               inputDom
             )
       },3000)
       
       if(isImg){
        let fileReader = new FileReader();
        fileReader.onload = function () {
            let src = fileReader.result;
            attachRender(src, file,callBack,isImg);
           
            
        };
        fileReader.readAsDataURL(file);
       }else {
        attachRender(file.name,file,callBack,isImg);
       }

    }
 } catch (error) {
    console.error(error)
 }
};


export const attachBox = (callBack)=>{
    let input =  el('input',{
        class:'attach-input',
        type:'file'
    },[

    ]);

    input.addEventListener('change',(event)=>{
        attachLissen(event,callBack)
    });

    return input


}