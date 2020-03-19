<template>
  <div class="header">
    <el-button style="margin-left:20px" type="info" @click="toggleMenu">click</el-button>
  </div>
</template>

<script>
export default {
  name:'Header',
  methods:{
    toggleMenu(){
      this.$store.dispatch('app/collapseMenu')
    }
  }
}
</script>

<style lang="scss" scoped>
  .header{
    height: 60px;
    background: sandybrown;
  }
</style>