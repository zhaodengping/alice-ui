<template>
    <div>
        <h1 class="title">Button按钮</h1>
        <h3 class="title subTitle">基础用法</h3>
        <div class="basic-button">
            <ul>
                <li>
                    <Button @click="onClick">我是按钮</Button>
                </li>
                <li>
                    <Button theme='primary'>我是按钮</Button>
                </li>
                <li>
                    <Button theme='link'>我是按钮</Button>
                </li>
            </ul>
        </div>

        <h3 class="title subTitle">不同尺寸</h3>
        <div class="basic-button">
            <ul>
                <li>
                    <Button>默认按钮</Button>
                </li>
                <li>
                   <Button size='big'>大型按钮</Button>
                </li>
                <li>
                   <Button size='medium'>中等按钮</Button>
                </li>
                <li>
                    <Button size='small'>小型按钮</Button>
                </li>
            </ul>
        </div>

        <h3 class="title subTitle">不同状态</h3>
        <div class="basic-button">
            <ul>
                <li>
                    <Button level='main'>默认按钮</Button>
                </li>
                <li>
                   <Button level='warning'>警告按钮</Button>
                </li>
                <li>
                   <Button level='danger'>危险按钮</Button>
                </li>
            </ul>
        </div>

        <h3 class="title subTitle">禁用状态</h3>
        <div class="basic-button">
            <ul>
                <li>
                    <Button level='main' disabled>我是按钮</Button>
                </li>
                <li>
                   <Button level='warning' disabled>我是按钮</Button>
                </li>
                <li>
                   <Button level='danger' disabled>我是按钮</Button>
                </li>
            </ul>
        </div>
   

        <h3 class="title subTitle">loding状态</h3>
        <div class="basic-button">
            <ul>
                <li>
                    <Button loading>加载中</Button>
                </li> 
            </ul>
        </div>
    </div>
</template>
<script lang='ts'>
import Button from '../lib/Button.vue'
export default {
    components:{Button},
    setup(){
        const onClick=()=>{
            console.log('点击')
        }
        return {onClick}
    }
}
</script>
<style lang="scss" scoped>
    $borderColor:#ebebeb;
    .title{
        color: #1f2f3d;
        font-weight: 400;;
    } 
    .subTitle{
        margin: 50px 0 20px 0;
    }
    .basic-button{
        padding: 24px;
        border: 1px solid #ebebeb;
        border-radius: 4px;
        ul{
            display: flex;
            li{
                margin-left: 5px;
            }
        }
    }
</style>