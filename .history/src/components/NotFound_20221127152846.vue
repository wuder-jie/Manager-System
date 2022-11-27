<template>
  <div class="_404">
    <h2 class="m-0">
      抱歉，页面未找到，<span>{{ countDown }}</span
      >s后自动跳转到
      <a href="javascript:;" @click="goHome">首页</a>
    </h2>
    <img src="../assets/404.jpg" alt="页面未找到" />
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
  mounted(){
    setInterval(() => {
      
    }, interval);
  }
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
