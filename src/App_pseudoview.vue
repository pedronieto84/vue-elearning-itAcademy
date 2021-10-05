<template>
  <div id="app">
    <TopNavigationTest></TopNavigationTest>
    <div class="d-none d-lg-block d-xl-block">
      <div class="row">
        <div class="col-2">
          <LeftNavigationTest></LeftNavigationTest>
        </div>
        <div class="col-10">
          <ContentTest></ContentTest>
        </div>
      </div>
    </div>
    <div class="d-lg-none d-xl-none">
      <div class="col-12">
        <LeftNavigationTest></LeftNavigationTest>
        <ContentTest></ContentTest>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavigationTest from "@/components/topNavigationTest.vue";
import LeftNavigationTest from "@/components/leftNavigationTest.vue";
import ContentTest from "@/components/contentTest.vue";

export default {
  name: "App",

  components: {
    TopNavigationTest,
    LeftNavigationTest,
    ContentTest,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
