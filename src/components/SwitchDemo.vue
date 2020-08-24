<template>
    <div>
        <h1 class="title">Switch</h1>
        <h3 class="title subTitle">基础用法</h3>
        <div class="basic-border">
            <Switch v-model:value="y"/>
            <div>{{y?'开':'关'}}</div>
        </div>
        <h3 class="title subTitle">禁用状态</h3>
        <div class="basic-border">
            <Switch v-model:value="initValueOpen" disabled/>
            <Switch v-model:value="initValueClose" disabled/>
        </div>
    </div>
</template>
<script lang='ts'>
import Switch from '../lib/Switch.vue'
import { ref } from 'vue'
export default {
    components:{
        Switch
    },
    setup(){
        const y=ref(false);
        const initValueOpen=ref(true)
        const initValueClose=ref(false)
        return {y,initValueOpen,initValueClose}
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
    .basic-border{
        padding: 24px;
        border: 1px solid $borderColor;
        border-radius: 4px;
        >button{
            margin-right: 10px;
        }
    }
</style>