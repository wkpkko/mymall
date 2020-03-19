<template>
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="menuOpend">
    <el-submenu index="1">
      <template slot="title"> 
        <i class="el-icon-menu"></i>
        <span slot="title">我的工作台</span>
      </template>
      <el-menu-item index="1-1">1111</el-menu-item>
      <el-menu-item index="1-2">222</el-menu-item>
      <el-menu-item index="1-3">333</el-menu-item>
      <el-menu-item index="1-4">444</el-menu-item>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name:'Navbar',
  computed:{
    ...mapGetters(['menuOpend']),
  },
  methods:{
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>