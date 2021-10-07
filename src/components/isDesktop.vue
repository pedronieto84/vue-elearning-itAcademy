<template>
  <div>
    <h1>isDesktop</h1>
    <section class="section has-text-centered">
      <h1 class="title is-1">Your Window</h1>
      <h3>Width: {{ window.width }} px</h3>
      <br />
      <h3>Height: {{ window.height }} px</h3>
      <br />
    </section>
    <section>
      <h3>Is it really a desktop window?</h3>
      <h6>Width: 991 no, 992 yes</h6>
      <h4>{{ checkDesktopComputed }}</h4>
    </section>
    <section>
      <h6>Testing Getters</h6>
      <div v-if="isDesktop == true">Yes</div>
      <div v-else-if="isDesktop == false">No</div>
      <div>{{isDesktop2}}</div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "isDesktop",
  data() {
    return {
      window: {
        width: 0,
        height: 0,
      },
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    ...mapGetters(["isDesktop"]),
    isDesktop2: function () {
      return this.$store.getters.isDesktop;
    },
    checkDesktopComputed() {
      return this.window.width >= 992 ? "Yes" : "No";
    },
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
  },
};
</script>