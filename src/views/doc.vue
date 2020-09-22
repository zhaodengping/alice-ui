<template>
<div class="layout">
    <Topnav />
    <div class="content">
        <aside v-if='menuVisible'>
            <h3>介绍</h3>
            <h3>组件列表</h3>
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
                <li>
                    <router-link to='/doc/dialog'>dialog组件</router-link>
                </li>
            </ol>
        </aside>
        <main>
            <router-view />
        </main>
    </div>
</div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
import {
    inject
} from 'vue'
export default {
    setup() {
        const menuVisible = inject('showMenu')
        return {
            menuVisible
        }
    },
    components: {
        Topnav
    }
}
</script>

<style lang="scss" scoped>
.layout {
    height: 100vh;
    background-color: #fff;

    .content {
        display: flex;

        aside {
            padding: 100px 16px 0 16px;
            position: fixed;
            left: 0;
            top: 0;
            width: 200px;
            height: 100%;
            z-index: 20;
            border-right: 1px solid #f2f2f2;
            background-color: #fff;

            li {
                line-height: 50px;
            }

            a {
                text-decoration: none;
                color: #000;

                &:hover,
                &:focus,
                &:active {
                    color: #409eff;
                }
            }
        }

        main {
            padding: 100px 0 0 220px;
            background-color: #fff;
            width: 100%;
            height: 100vh;
            overflow: auto;
        }

        @media (max-width: 500px) {
            main {
                padding-left: 20px;
            }
        }
    }
}
</style>
