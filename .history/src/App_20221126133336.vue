<template>
  <div id="app">
    <h1>我是app根组件</h1>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>
import moduleName from '@/components/';
export default {
  name: "app",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style lang="scss">
.suc{
  background-color: red;
}
</style>
