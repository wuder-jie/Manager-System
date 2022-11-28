<template>
  <div id="home">
    <h3>我是home首页</h3>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "HomeItem",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
#home {
  background-color: yellow;
  .el-button {
    color: red;
  }
}
</style>
