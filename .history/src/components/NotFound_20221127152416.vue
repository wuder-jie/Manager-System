<template>
  <div class="_404">
        <h2 class="m-0">抱歉，页面未找到，<span>{{countDown}}</span>s后自动跳转到
            <a href="javascript:;" @click="goHome">首页</a>
        </h2>
        <img src="../assets/404.jpg" alt="页面未找到">
    </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  },
  components: {

  },
  methods: {

  },
}

</script>
<style lang='scss'>
</style>