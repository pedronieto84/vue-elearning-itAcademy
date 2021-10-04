<template>
  <div>
    <TopNavigation />
    <div class="d-none d-lg-block d-xl-block">
      <div class="row">
        <div class="col-2">
          <LeftNavigation />
        </div>
        <div class="col-10">
          <ContentTest />
        </div>
      </div>
    </div>
    <div class="d-lg-none d-xl-none">
      <div class="col-12">
        <LeftNavigation />
        <ContentTest/>
      </div>
    </div>
  </div>
</template>

<script>
import TopNavigation from "../components/TopNavigation.vue";
import LeftNavigation from "../components/LeftNavigation.vue";
import ContentTest from "../components/contentTest.vue";

export default {
  name: "App",
  components: {
    TopNavigation,
    LeftNavigation,
    ContentTest,
  },
};
</script>

<style>
html,
body {
  height: calc(100vh - 60px);
  width: calc(100vw - 30px);
}
</style>
