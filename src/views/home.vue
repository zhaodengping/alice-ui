<template>
    <div>
        <Topnav/>
        <div class="banner">
            <h1>Alice UI</h1>
            <h2>这是一个简单的轮子UI</h2>
            <p class="actions">
                <a href="#">github</a>
                <a href="#">开始</a>
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