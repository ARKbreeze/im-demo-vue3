<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button type="primary" size="default">
      <el-icon>
        <i-ep-search></i-ep-search>
      </el-icon>
      搜索
    </el-button>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String,
    },
    setup() {},
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
