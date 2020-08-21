<template>
     <div class="topnav">
        <div class="logo">
            <img src="../assets/logo.png" alt="logo" srcset="">
            <div>Vue3.js</div>
        </div>
        <div class="menu">
            <ul>
                <li>学习</li>
            </ul>
        </div>
        <div class="toggleAside"  @click="toggleMenu"></div>
    </div>
</template>
<script type='ts'>
import { inject } from 'vue'
export default {
    setup(){
        const menuVisible = inject('showMenu')
        const toggleMenu=()=>{
            menuVisible.value = !menuVisible.value
        }
        return {toggleMenu}
    }
}
</script>
<style lang="scss" scoped>
.topnav {
    position: fixed;
    top:0;
    background: #fff;
    display: flex;
    justify-content: space-between;
    justify-items: center;
    padding: 16px;
    z-index: 999;
    width: 100%;
    border-bottom: 1px solid #f2f2f2;
    .logo{
        display: flex;
        align-items: center;
        img{
            margin-right: 10px;
            width: 50px;
        }
    }
    .menu ul{
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;
        > li {
            margin:0 1em;
            color: #304455;
        }
    }
    .toggleAside{
        display: none;
        position: absolute;
        left: 10px;
        top: 10px;
        width: 40px;
        height: 40px;
        border-radius: 10px;
        background-color:#f2f2f2;
    }
    @media (max-width: 500px) {
        >.menu{
            display: none;
        }
        >.logo{
            margin: 0 auto;
        }
        >.toggleAside{
            display: block;
        }
    }
}
</style>