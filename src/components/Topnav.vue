<template>
     <div class="topnav">
        <div class="logo">logo</div>
        <div class="menu">菜单</div>
    </div>
</template>
<script type='ts'>
export default {
    
}
</script>
<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px 0;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>