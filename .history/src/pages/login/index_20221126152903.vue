<template>
  <div id="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>登录</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "LoginItem",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
#login {
  .text {
    font-size: 14px;
  }
  .clearfix span {
    font-size: 22px;
    font-weight: 600;
    color: ;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }

  .box-card {
    width: 480px;
    margin: 200px auto;
  }
}
</style>
