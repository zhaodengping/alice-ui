<template>
<h1 class="title">Tabs</h1>
<h2 class="subTitle">基础用法</h2>
<Tabs v-model:selected="selectDemo1">
    <Tab title='导航1'>组件1</Tab>
    <Tab title='导航22222'>组件22222</Tab>
</Tabs>

<h2 class="subTitle">选项卡</h2>
<Tabs v-model:selected="selectDemo2" theme="card">
    <Tab title='导航1'>组件1</Tab>
    <Tab title='导航22222'>组件22222</Tab>
    <Tab title='导航333'>组件333</Tab>
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
        const selectDemo1 = ref('导航1');
        const selectDemo2 = ref('导航1')
        return {
            selectDemo1,
            selectDemo2
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

.subTitle {
    margin: 50px 0 20px 0;
}
</style>
