<template>
     <div class="topnav">
        <div class="logo">logo</div>
        <div class="menu">
            <ul>
                <li>菜单1</li>
                <li>菜单2</li>
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
    background: pink;
    display: flex;
    justify-content: space-between;
    padding: 16px;
    z-index: 999;
    width: 100%;
    .menu ul{
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;
        > li {
            margin:0 1em;
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