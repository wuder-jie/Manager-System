<template>
  <div class="_404">
    <h2 class="m-0">
      抱歉，页面未找到，<span>{{ countDown }}</span
      >s后自动跳转到
      <a href="javascript:;" @click="goHome">首页</a>
    </h2>
    <img src="https://img-blog.csdnimg.cn/20210219171021829.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ0ODg4NTcw,size_16,color_FFFFFF,t_70" alt="页面未找到" />
  </div>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    return {
      countDown: 5,
    };
  },
  components: {},
  methods: {
    goHome() {
      this.$router.push("/main/home");
    },
  },
  mounted() {
    setInterval(() => {
      this.countDown > 0 ? this.countDown-- : this.goHome()
    }, 1000);
  },
};
</script>
<style lang="scss">
body {
  background-color: #dceebc;
}

._404 {
  width: 30%;
  margin: 5rem auto;
}

._404 img {
  width: 30rem;
}

._404 a {
  color: #010101;
}

._404 a:hover {
  color: skyblue;
}
</style>
