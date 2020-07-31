<template>
    <div class="layout">
        <Topnav/>
        <div class="content">
            <aside v-if='menuVisible'>
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <router-link to='/doc/switch'>switch组件</router-link>
                    </li>
                    <li>
                        <router-link to='/doc/button'>button组件</router-link>
                    </li>
                    <li>
                        <router-link to='/doc/tabs'>tabs组件</router-link>
                    </li>
                </ol>
            </aside>
            <main>
                <router-view/>
            </main>
        </div>
    </div>
</template>
<script lang='ts'>
import Topnav from '../components/Topnav.vue'
import { inject } from 'vue'
export default {
    setup(){
        const menuVisible = inject('showMenu')
        return {menuVisible}
    },
    components:{Topnav}
}
</script>
<style lang="scss" scoped>
.layout{
    height: 100vh;
    .content{
        display: flex;
        aside {
            padding: 70px 16px 0 16px;
            position: fixed;
            left: 0;
            top: 0;
            background: lightblue;
            width: 200px;
            height: 100%;
            z-index: 88;
            a{
                text-decoration: none;
                color: #000;
                &:hover,&:active{
                    color: lightcoral;
                }
            }
        }
        main{
            position: fixed;
            left: 0;
            top: 0;
            padding: 70px 0 0 220px;
            background-color: #f2f2f2;
            width: 100%;
            height: 100vh;
            overflow: auto;
        }
        @media (max-width: 500px) {
            main{
                padding-left: 20px;
            }
        }
    }
}   
</style>