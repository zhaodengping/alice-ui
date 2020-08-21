<template>
    <div>
        <div>******* 不同的主题 *******</div>
        <Button>我是按钮</Button>
        <Button theme='link'>我是按钮</Button>

        <div>******* 不同的大小 *******</div>
        <Button size='small'>我是按钮</Button>
        <Button size='medium'>我是按钮</Button>
        <Button size='big'>我是按钮</Button>

        <div>******* 不同的状态 *******</div>
        <Button level='main'>我是按钮</Button>
        <Button level='danger'>我是按钮</Button>
        <Button level='warning'>我是按钮</Button>

        <div>******* 不能点击状态 *******</div>
        <Button disabled theme='link'>我是按钮</Button>

        <div>******* loading状态 *******</div>
        <Button loading theme='link'>我是按钮</Button>
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