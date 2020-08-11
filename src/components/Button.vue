<template>
    <div>
        <Button @click="onClick">我是按钮</Button>
    </div>
</template>
<script lang='ts'>
import Button from '../lib/Button.vue'
export default {
    components:{Button:Button},
    setup(){
        const onClick=()=>{
            console.log('点击')
        }
        return {onClick}
    }
}
</script>