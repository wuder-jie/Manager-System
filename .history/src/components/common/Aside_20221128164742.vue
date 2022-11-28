<template>
  <div id="aside">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1">
        <i class="el-icon-user-solid"></i>
        <span slot="title">学生列表</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-s-operation"></i>
        <span slot="title">信息列表</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-chat-dot-round"></i>
        <span slot="title">信息管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-takeaway-box"></i>
        <span slot="title">作业列表</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-set-up"></i>
        <span slot="title">作业管理</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="fa fa-tripadvisor"></i>
        <span slot="title" style="margin-left: 8px;">数据分析</span>
      </el-menu-item>
      <el-menu-item index="7">
        <i class="el-icon-s-check"></i>
        <span slot="title">用户中心</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "AsideItem",
  data() {
    return {};
  },
  components: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="scss">
#aside {
  height: 100%;
  .el-menu-vertical-demo {
    height: 100%;
  }
}
</style>
