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
        <el-form-item label="用户名" prop="userName">
          <el-input
            type="userName"
            placeholder="请输入用户名"
            v-model.trim="ruleForm.userName"
            @blur="validateUserName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            placeholder="请输入密码"
            @blur="validatePassWord"
            v-model.trim="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click.prevent="submitForm('ruleForm')"
            class="btn-login"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { login } from "@/api/index.js";
import { setToken } from "@/utils/localStorage.js";
export default {
  name: "LoginItem",
  data() {
    return {
      ruleForm: {
        userName: "",
        password: "",
      },
      // 验证表单
    };
  },
  methods: {
    async submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          // 发送请求登录请求。
          const data = {
            username: this.ruleForm.userName,
            password: this.ruleForm.password,
          };
          const { data: result } = await login(data);
          if (result.status === 200) {
            setToken("TOKEN", JSON.stringify(result.token));
            setToken('USERNAME')
            this.$message({
              message: "登录成功",
              type: "success",
            });
            this.$router.push("/home");
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 验证用户名
    validateUserName() {
      let val1 = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
      if (this.ruleForm.userName === "") {
        this.$message({
          message: "用户名不能为空",
          type: "warning",
        });
      } else if (!val1.test(this.ruleForm.userName)) {
        this.$message({
          message: "你输入的手机号不符合规定，请重新输入",
          type: "warning",
        });
      }
    },
    // 验证密码
    validatePassWord() {
      // 大写字母、小写字母、数字、字符任选三项。
      let val2 =
        /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]/;
      if (this.ruleForm.password === "") {
        this.$message({
          message: "密码不能为空",
          type: "warning",
        });
      } else if (!val2.test(this.ruleForm.password)) {
        this.$message({
          message:
            "密码不符合规定，必须在大写字母、小写字母、数字、字符中任选三项",
          type: "warning",
        });
      }
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
