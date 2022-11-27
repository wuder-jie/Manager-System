<template>
  <div id="app">
    <h1>我是app根组件</h1>
   
    <Home></Home>
  </div>
</template>

<script>
import Home from '@/pages/home';
export default {
  name: "app",
  data() {
    return {};
  },
  components: {Home},
  methods: {},
};
</script>
<style lang="scss">
.suc{
  background-color: red;
}
</style>
