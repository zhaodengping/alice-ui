<template> 
    <template v-if="visial">
        <Teleport to='body'>
            <div class="A-dialog">
                <div class="A-dialog-overlay" @click="clickOverlay"></div>
                <div class="A-dialog-wrapper">
                    <header>
                        {{title}}
                        <span class="A-dialog-close" @click="closeDialog"></span>
                    </header>
                    <main>
                        <slot name='content'/>
                    </main>
                    <footer>
                        <Button theme='primary' @click="cancel">取消</Button>
                        <Button @click="sureDialog">确定</Button>
                    </footer>
                </div>
            </div>
        </Teleport>
    </template>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import { ref } from 'vue'
export default {
    components: {
        Button
    },
    props:{
        title:{
            type:String,
            default:"标题"
        },
        visial:{
            type:Boolean,
            default:false
        },
        canClickOverlay:{
            type:Boolean,
            default:true
        },
        ok:{
            type:Function
        },
        close:{
            type:Function
        }
    },
    setup(props,context){
        const closeDialog=()=>{
            context.emit('update:visial',false)
        }
        const clickOverlay=()=>{
            if(props.canClickOverlay){
                closeDialog()
            }
        } 
        const sureDialog=()=>{
            if(props.ok?.()===true){
                console.log('确定')
                closeDialog()
            }
        }
        const cancel=()=>{
            if(props.close?.()===false){
                console.log('关闭');
                closeDialog()
            }
        }
        return{
            closeDialog,
            clickOverlay,
            sureDialog,
            cancel
        }
    }
}
</script>

<style lang="scss">
.A-dialog {
    &-overlay{
        position: fixed;
        background-color: fade_out(black, 0.5);
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        z-index: 60;
        box-shadow: 0,0,3px fade_out(black, 0.5);
    }
    &-wrapper {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        padding: 20px;
        background-color: #fff;
        width: 70%;
        height: 200px;
        border-radius: 4px;
        z-index: 70;
        >header{
            display: flex;
            justify-content: space-between;
            font-size: 20px;
            cursor: pointer;
        }
        >main{
            margin: 20px 0;
        }
        >footer{
            position: absolute;
            bottom: 20px;
            right: 20px;
            >button{
                margin-right: 20px;
            }
        }
    }
    &-close{
        position: relative;
        display: inline-block;
        width: 16px;
        height: 16px;
        &::before,&::after{
            content: "";
            position: absolute;
            left: 50%;
            top: 50%;
            height: 1px;
            width: 100%;
            background: #000;
        }
        &::before{
            transform: translate(-50%,-50%) rotate(-45deg);
        }
        &::after{
            transform: translate(-50%,-50%) rotate(45deg);
        }
    }
}
</style>
