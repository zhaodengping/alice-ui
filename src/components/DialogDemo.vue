<template>
    <Button @click="open">打开dialog</Button>
    <Dialog v-model:visial="isVisial" :canClickOverlay="false" :ok='f1' :cancel="f2">
        <template v-slot:title>标题</template>
        <template v-slot:content>这是一段文字</template>
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
            open
        }
    }
}
</script>
