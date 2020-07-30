<template>
     <div class="topnav">
        <div class="logo" @click="toggleMenu">logo</div>
        <div class="menu">
            <ul>
                <li>菜单1</li>
                <li>菜单2</li>
            </ul>
        </div>
    </div>
</template>
<script type='ts'>
import { inject } from 'vue'
export default {
    setup(){
        const menuVisible = inject('showMenu')
        const toggleMenu=()=>{
            menuVisible.value = !menuVisible.value
            console.log(menuVisible.value)
        }
        console.log(menuVisible)
        return {toggleMenu}
    }
}
</script>
<style lang="scss" scoped>
.topnav {
    background: pink;
    display: flex;
    justify-content: space-between;
    padding: 16px;
    .menu ul{
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;
        > li {
            margin:0 1em;
        }
    }
}
</style>