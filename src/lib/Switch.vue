<template>
  <button :class="{checked:value}" @click="toggle" :disabled="disabled">
    <span></span>
  </button>
</template>
<script>
import { ref, computed } from 'vue'
export default {
    props:{
        value:{
          type:Boolean,
          default:false
        },
        disabled:{
          type:Boolean,
          default:false
        }
    },
    setup(props,context){
        const {value,disabled}=props 
        const toggle=()=>{
            context.emit('update:value',!props.value)
        }
        return {toggle}
    }
}
</script>
<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
$theme-color:#1890ff;
$disabled-color:#bfbfbf;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: $disabled-color;
  border-radius: $h/2;
  position: relative;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 250ms;
  }
  &[disabled]{
    background-color: lighten($disabled-color,10%);
  }
  &.checked {
    background: #1890ff;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
    &[disabled]{
      background-color: lighten($theme-color, 10%);
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
