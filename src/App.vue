<template>
  <h2>im</h2>
  <router-link to="/login" #> <el-button type="primary" size="default">登录</el-button> </router-link>
  <router-link to="/home"><el-button type="primary" size="default" @click="">首页</el-button> </router-link>
  <router-view></router-view>
</template>

<script>
  export default {
    name: 'App',
    components: {},
  };
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
