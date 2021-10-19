<template>
  <div>
    <Top id="top-row" />
    <div v-if="!isDesktop2()">
      <div class="col-12">
        <Main />
        <LeftBottom />
      </div>
    </div>
    <div v-else-if="isDesktop2()">
      <div id="main-row" class="row">
        <div class="col-2 bg-dark">
          <Left />
        </div>
        <div class="col-10">
          <Main />
        </div>
      </div>
      <Bottom id="bottom-row" />
    </div> <!--
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
    </div> -->
    
  </div>
</template>

<script>
import Top from "../components/TopNavigation.vue";
import Left from "../components/LeftNavigation.vue";
import Main from "../components/MainContent.vue";
import Bottom from "../components/BottomNavigation.vue";
import LeftBottom from "../components/LeftNavigationMobile.vue";

export default {
  name: "App",
  components: {
    Top,
    Left,
    Main,
    Bottom,
    LeftBottom
  },
  data(){
    return{
    }
  },
  mounted() {
    this.$store.dispatch('getTopics');
  },
  methods: {
    isDesktop2: function () {
      return this.$store.getters.isDesktop;
    }
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
