<template>
  <div>
    <Top id="top-row" />
    <div v-if="!isDesktop2()">
      <div class="col-12">
        <IsDesktop />
        <LeftBottom></LeftBottom>
      </div>
    </div>
    <div v-else-if="isDesktop2()">
        <div id="main-row" class="row">
        <div class="col-2 bg-dark">
          <Left />
        </div>
        <div class="col-10">
          <IsDesktop />
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
          <IsDesktop />
        </div>
      </div>
      <Bottom id="bottom-row" />
    </div>

    <div class="d-lg-none d-xl-none">
      <div class="col-12">
        <IsDesktop />
      </div>
    </div> -->
  </div>
</template>

<script>
import IsDesktop from "../components/isDesktop.vue";
import Top from "../components/TopNavigation.vue";
import Left from "../components/LeftNavigation.vue";
import Bottom from "../components/BottomNavigation.vue";
import LeftBottom from "../components/LeftNavigationMobile.vue";

export default {
  name: "checkDesktopScreen",
  components: {
    IsDesktop,
    Top,
    Left,
    Bottom,
    LeftBottom
  },
  methods: {
    isDesktop2: function () {
      return this.$store.getters.isDesktop;
    },
  },
};
</script>