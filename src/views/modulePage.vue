<template>
  <div>
    <Top id="top-row" />
    <div class="d-none d-lg-block d-xl-block">
      <div id="main-row" class="row">
        <div class="col-2 bg-dark">
          <Left />
        </div>
        <div class="col-10">
          <Main />
        </div>
      </div>
      <Bottom id="bottom-row" />
    </div>

    
    <div class="d-lg-none d-xl-none">
      <div class="col-12">
        <Left />
        <Main />
      </div>
    </div>
    
  </div>
</template>

<script>
import Top from "../components/TopNavigation.vue";
import Left from "../components/LeftNavigation.vue";
import Main from "../components/MainContent.vue";
import Bottom from "../components/BottomNavigation.vue"

export default {
  name: "App",
  components: {
    Top,
    Left,
    Main,
    Bottom
  },
  data(){
    return{
    }
  },
  mounted() {
    this.$store.dispatch('getTopics');
  }
};
</script>

<style>
/*html,
body {
  height: calc(100vh - 60px);
  width: calc(100vw - 30px);
}*/
#top-row {
  height: 10vh;
}
#main-row {
  height: 80vh;
}
#bottom-row {
  height: 10vh;
}
</style>
