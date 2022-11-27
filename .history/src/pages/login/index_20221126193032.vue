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
        <el-form-item
          label="用户名"
          prop="username"
          :rules="[
            { require: true, message: '请输入用户名', trigger: 'blur' },
            { min: 4, max: 10, message: '用户名在4-10位', trigger: 'blur' },
          ]"
        >
          <el-input
            type="username"
            v-model.trim="ruleForm.username"
            autocomplete="off"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
          :rules="[
            { require: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 12, message: '密码在6-12位', trigger: 'blur' },
          ]"
        >
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model.trim="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn-login" @click="login('ruleForm')"
            >登录</el-button
          >
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
    login(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("成功", valid);
        }
      });
    },
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
