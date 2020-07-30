<template>
    <div class="home">
        <Topnav/>
        <div class="banner">
            <h1>Alice UI</h1>
            <h2>这是一个简单的轮子UI</h2>
            <p class="actions">
                <router-link to='/doc'>查看文档</router-link>
                <a href="https://github.com/zhaodengping/alice-ui">github</a>
            </p>
        </div>
    </div>
</template>
<script lang='ts'>
import Topnav from '../components/Topnav.vue'
export default {
    components:{Topnav}
}
</script>