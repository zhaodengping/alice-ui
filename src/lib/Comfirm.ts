import Dialog from './Dialog.vue'
import { createApp, h } from 'vue';

const Confirm=(options)=>{
    const {title,content,ok,close}=options
    const div=document.createElement('div');
    document.body.appendChild(div);

    const closeDialog=()=>{
        app.unmount(div);
        div.remove()
    }

    const app=createApp({
        render(){
            return h(
                Dialog,{
                    visial:true,
                    "onUpdate:visial":(newVal)=>{
                        if(!newVal){
                            closeDialog()
                        }
                    },
                    ok:()=>{
                        return true
                    },
                    close:()=>{
                        return false
                    }
                },{
                    title,
                    content
                }
            )
        }
    })
    app.mount(div)
}

export default Confirm