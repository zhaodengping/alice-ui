<template>
    <h1 class="title">弹出框</h1>
    <h3 class="title subTitle">dialog</h3>
    <div class="basic">
        <Button @click="open">打开dialog</Button>
        <Dialog v-model:visial="isVisial" :canClickOverlay="false" :title='title' :ok='ok' :close='close'>
            <template v-slot:content>这是一段文字</template>
        </Dialog>
    </div>
    <h3 class="title subTitle">confirm</h3>
    <div class="basic">
        <Button @click="openConfirm">打开confirm</Button>
    </div>
    
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import Confirm from '../lib/Comfirm'
import { ref, h } from 'vue'
export default {
    components: {
        Dialog,
        Button
    },
    setup(){
        let isVisial=ref(false)
        const title=ref('这是标题')
        const open=()=>{
            isVisial.value=true
        } 
        const ok=()=>{
            console.log('确定demo')
            return true
        }
        const close=()=>{
            console.log('取消demo')
            return false
        }
        const openConfirm=()=>{
            Confirm({
                title:"标题",
                content:'正文',
                ok:()=>{
                    console.log('ok')
                },
                close:()=>{
                    console.log('cancel')
                }
            })
        
        }
        
        return{
            isVisial,
            open,
            title, 
            openConfirm,
            ok,
            close
        }
    }
}
</script>
<style lang="scss" scoped>
    .title{
        color: #1f2f3d;
        font-weight: 400;;
    } 
    .subTitle{
        margin: 50px 0 20px 0;
    }
    .basic{
        margin-top: 20px;
        padding: 24px;
        border: 1px solid #ebebeb;
        border-radius: 4px; 
    }
</style>