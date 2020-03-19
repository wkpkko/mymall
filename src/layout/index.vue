<template>
  <div class="app-layout">
    <Navbar></Navbar>
    <div class="center">
      <Header></Header>
      <Main></Main>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Header from './Header'
import Main from './Main'
export default {
  name:'Layout',
  data(){
    return {

    }
  },
  methods:{
    
  },
  components:{
    Navbar,
    Header,
    Main
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/styles/mixin.scss";
  .app-layout{
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    .center{
      flex: 1;
      background: pink;
      display: flex;
      flex-direction: column;
    }
  }
</style>