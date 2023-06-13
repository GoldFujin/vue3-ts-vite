<template>
  <svg style="width: 100px; height: 100px;">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script  lang='ts' setup>
defineProps ({
  //xlink:herf属性值前缀
  prefix: {
    type: String,
    default: '#icon-'
  },
  //提供父组件的图标名字
  name: String,
  color:{
    type:String,
    default:''
  },
  //接受父组件传递过来的图标的宽度
  width:{
    type:String,
    default:'16px'
  },
  //接受父组件传递过来的图标的高度
  height:{
    type:String,
    default:'16px'
  },
})
</script>

<style lang="scss" scoped>
  
</style>