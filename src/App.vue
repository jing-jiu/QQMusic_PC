<template>
  <div id="app">
    <Aside/>
    <Main/>
  </div>
</template>

<style lang="less">
  #app{
    display: flex;
    position: absolute;
    width: 1200px;
    height: 710px;
    top: 50%;
    right: 50%;
    transform: translateX(50%) translateY(-50%);
    // background-image: url("./assets/img/bg.jpg");
    // background-size: contain;
  }
</style>

<script>
import Aside from './components/aside/Aside'
import Main from './components/main/Main'
export default {
    components:{
      Aside,Main
    }
}
</script>
