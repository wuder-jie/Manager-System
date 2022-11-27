<template>
  <div id="app">
   
    <router-view name="path"></router-view>
  </div>
</template>

<script>
import Home from "@/pages/home";
export default {
  name: "app",
  data() {
    return {};
  },
  components: { Home },
  methods: {},
};
</script>
<style lang="scss">
.suc {
  background-color: red;
}
</style>
