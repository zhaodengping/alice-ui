<template>
  <div>
    <router-view/>
  </div>
</template>
<script lang='ts'>
import { ref, provide } from 'vue'
import {router} from './router'
export default {  
  setup(){
    const width=document.documentElement.clientWidth
    const menuVisible=ref(width<=500?false:true)
    provide('showMenu',menuVisible)

    router.afterEach(()=>{
      if(width<=500){
        menuVisible.value=false
      }
    })

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