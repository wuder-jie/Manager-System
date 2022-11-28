<template>
  <div id="home">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
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
<style lang="scss">
#home{
  height: 100%;
  w
  .el-aside{
    background-color: pink;
  }
}
</style>
