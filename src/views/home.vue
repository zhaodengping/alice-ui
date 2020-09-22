<template>
<div class="home">
    <Topnav />
    <div class="banner">
        <div class="content">
            <h1>Alice UI</h1>
            <h2>这是一个简单的轮子UI</h2>
            <div class="actions">
                <router-link to='/doc'>查看文档</router-link>
                <a href="https://github.com/zhaodengping/alice-ui">github</a>
            </div>
        </div>

    </div>
    <div class="feature">
        <div class="content">
            <svg class="icon logo" aria-hidden="true">
                <use xlink:href="#icon-Vue"></use>
            </svg>
            <div>
                <h3>vue3.js</h3>
                <p>骄傲地使用了 Vue 3 Composition API</p>
            </div>
        </div>
        <div class="content">
            <svg class="icon logo" aria-hidden="true">
                <use xlink:href="#icon-typescript"></use>
            </svg>
            <div>
                <h3>基于 TypeScript </h3>
                <p>源代码采用 TypeScript 书写</p>
            </div>
        </div>
        <div class="content">
            <svg class="icon logo" aria-hidden="true">
                <use xlink:href="#icon-light"></use>
            </svg>
            <div>
                <h3>代码易读</h3>
                <p>每个组件的源代码都极其简洁</p>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
    components: {
        Topnav
    }
}
</script>

<style lang="scss" scoped>
.banner {
    padding: 100px 0;
    margin-top: 80px;
    background-color: #ecf5ff;
    clip-path: ellipse(80% 60% at 50% 40%);

    >.content {
        text-align: center;

        .actions {
            margin: 20px 0 0 0;

            a {
                margin: 0 10px;
                padding: 8px 20px;
                border-radius: 4px;
                text-decoration: none;
                color: #fff;
                background-color: #409eff;

                &:hover,
                &:focus {
                    background-color: lighten(#409eff, 10%);
                }
            }
        }
    }
}

.feature {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 50px;

    >.content {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        padding: 20px;
        width: 49%;
        border-radius: 4px;

        .logo {
            margin-right: 20px;
            font-size: 4em;
        }
    }
}

@media (max-width: 500px) {
    .feature {
        display: block;

        >.content {
            width: 100%;
        }
    }
}
</style>
