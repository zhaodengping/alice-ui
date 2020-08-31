<template>
    <button class="A-button" :class="classes" :disabled="disabled">
        <span v-if='loading' class="A-loadingIndicator"></span>
        <slot/>
    </button>
</template>
<script lang='ts'>
import { computed } from 'vue'
export default {
    props:{
        theme:{
          type:String,
          default:'button'
        },
        size:{
          type:String,
          default:'normal'
        },
        level:{
          type:String,
          default:"main"
        },
        disabled:{
          type:Boolean,
          default:false
        },
        loading:{
          type:Boolean,
          default:false
        }
    },
    setup(props){
      const {theme,size,level,loading}=props
      const classes=computed(()=>{
        return {
          [`A-theme-${theme}`]:theme,
          [`A-size-${size}`]:size,
          [`A-level-${level}`]:level,
        }
      })
      return {classes}
    }
}
</script>
<style lang="scss">
    $h:32px;
    $theme-color:#409eff;
    $white:#fff;
    $radius:4px;
    $warning:#e6a23c;
    $danger:#f56c6c;
    $primary-color:#9d9d9d;

    @mixin common{
      // 尺寸
        &.A-size-normal{
          padding: 0 20px;
          height: 40px;
        }
        &.A-size-big{
          padding: 0 18px;
          height: 36px;
        }
        &.A-size-medium{
          padding: 0 14px;
          height: 30px;
        }
        &.A-size-small{
          padding: 0 10px;
          height: 24px;
        }
        // 状态
        &.A-level-warning{
          background-color: $warning;
          color: $white;
          &:hover,
          &:focus{
            background-color: lighten($warning, 10%);
          }
          &[disabled]{
            cursor: not-allowed;
            background-color: lighten($warning, 10%);
          }
        }
        &.A-level-danger{
          &[disabled]{
            cursor: not-allowed;
            background-color: lighten($danger, 10%);
          }
          background-color: $danger;
          color: $white;
          &:hover,
          &:focus{
            background-color: lighten($danger, 10%);
          }
        }
    }
    .A-button{
      padding:0 10px;
      height: $h;
      border:0px solid transparent;
      border-radius: $radius;
      cursor: pointer;
      &:focus{
        outline: none;
      }
      &.A-theme-button{
        &[disabled]{
          cursor: not-allowed;
          background-color: lighten($theme-color, 10%);
        }
        
        background-color: $theme-color;
        color: $white;
        &:hover,
        &:focus{
          background-color: lighten($theme-color,10%);
          color: lighten($white, 10%);
        }

        @include common;
        
        > .A-loadingIndicator{
          display: inline-block;
          margin-right: 5px;
          width: 14px;
          height: 14px;
          border-radius: 8px;
          border-color: lighten($theme-color, $amount: 10%) lighten($theme-color, $amount: 10%) lighten($theme-color, $amount: 10%) transparent;
          border-style: solid;
          border-width: 2px;
          animation: spin 1s infinite linear;
        }
        @keyframes spin {
            0%{
              transform: rotate(0);
            }
            100%{
              transform: rotate(360deg);
            }
        }
       
      }
      &.A-theme-primary{
        border: 1px solid $primary-color;
        background-color:$white; 
        border-radius: $radius;
        color: $primary-color;
        &:hover,&:active,&:focus{
          background-color: lighten($theme-color, 30%);
          border-color: lighten($theme-color, 10%);
          color: $theme-color;
        }
        @include common;
      }
      &.A-theme-link{
        background-color: transparent;
        color: $theme-color;
        &:hover,
        &:focus{
          color: lighten($theme-color, 10%);
        }
      }
    }
    
</style>