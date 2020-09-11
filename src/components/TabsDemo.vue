<template>
<h1 class="title">Tabs按钮</h1>
<Tabs v-model:selected="x">
    <Tab title='导航1'>组件1</Tab>
    <Tab title='导航22222'>组件22222</Tab>
</Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import {
    ref
} from 'vue'
export default {
    components: {
        Tabs,
        Tab
    },
    setup() {
        const x = ref('导航1');
        return {
            x
        }
    }
}
</script>

<style lang="scss" scoped>
.title {
    margin-bottom: 20px;
    color: #1f2f3d;
    font-weight: 400;
}
</style>
