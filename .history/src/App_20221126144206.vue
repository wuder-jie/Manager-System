<template>
  <div id="app">
    <h3>我是app根组件</h3>
    <router-view name="path"></router-view>
  </div>
</template>

<script>
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
.suc {
  background-color: red;
}
</style>
