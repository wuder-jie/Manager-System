<template>
  <div id="home">
    <el-container>
      <el-aside width="200px"><Aside></Aside></el-aside>
      <el-container>
        <el-header><Header></Header></el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue';
import Aside from '@/components/common/Aside.vue';
export default {
  name: "HomeItem",
  data() {
    return {};
  },
  components: {Header,Aside},
  methods: {},
};
</script>
<style lang="scss">
#home {
  height: 100%;
  width: 100%;
  .el-container {
    height: 100%;
    width: 100%;
    .el-aside {
      background-color: pink;
      height: 100%;
    }
    .el-header{
      background-color: antiquewhite;
    }
    .el-main {
      background-color: aqua;
    }
    .el-footer{
      background-color: purple;
    }
  }
}
</style>
