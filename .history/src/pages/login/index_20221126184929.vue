<template>
  <div id="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>登录</span>
      </div>
      <el-form
        :model="ruleForm"
        status-icon
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            type="username"
            v-model="ruleForm.username"
            autocomplete="off"
            @blur="verUsername"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn-login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "LoginItem",
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    // 对用户名验证。
    verUsername(){
      const ver
    }
  },

};
</script>
<style lang="scss">
#login {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: antiquewhite;
  .btn-login {
    width: 100%;
  }
  .text {
    font-size: 14px;
  }
  .clearfix span {
    font-size: 22px;
    font-weight: 600;
    color: aquamarine;
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
