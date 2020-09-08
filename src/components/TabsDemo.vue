<template>
  <div>tabs</div>
  <Tabs>
    <Tab title='导航1'>组件1</Tab>
    <Tab title='导航2'>组件2</Tab>
  </Tabs>
</template>

<script lang='ts'>
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
export default {
    components:{
        Tabs,
        Tab
    }
}
</script>

<style>

</style>