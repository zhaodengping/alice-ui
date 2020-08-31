<template>
    <Button @click="open">打开dialog</Button>
    <Dialog v-model:visial="isVisial" :canClickOverlay="false" :ok='f1' :cancel="f2" :title='title'>
        <template v-slot>这是一段文字</template>
    </Dialog>
    <div>{{isVisial}}</div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue'
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
        const f1=()=>{
            return true
        }
        const f2=()=>{
            return false
        }
        return{
            isVisial,
            open,
            title
        }
    }
}
</script>
