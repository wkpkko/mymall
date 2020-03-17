<template>
  <div class="app-layout">
    <div class="left">

    </div>
    <div class="center">

    </div>
  </div>
</template>

<script>
export default {

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
    .left{
      width: 210px;
      background: pink;
    }
    .center{
      flex: 1;
      background: red;
    }
  }
</style>