<template>
    <div>
        <Topnav/>
        <div class="content">
            <aside v-if='menuVisible'>
                <h2>组件列表</h2>
                <ol>
                    <li>switch组件</li>
                </ol>
            </aside>
            <main></main>
        </div>
    </div>
</template>
<script lang='ts'>
import Topnav from '../components/Topnav.vue'
import { inject } from 'vue'
export default {
    setup(){
        const menuVisible = inject('showMenu')
        console.log(menuVisible)
        return {menuVisible}
    },
    components:{Topnav}
}
</script>
<style lang="scss" scoped>
aside {
  background: lightblue;
  width: 200px;
}
</style>