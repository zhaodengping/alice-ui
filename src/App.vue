<template>
  <div>
    <router-view/>
  </div>
  
</template>
<script lang='ts'>
import { ref, provide } from 'vue'
export default {  
  setup(){
    const menuVisible=ref(false)
    provide('showMenu',menuVisible)
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,
ol {
  list-style: none;
}
</style>