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
      <h6>Computed properties in Component</h6>
      <h4>{{ checkDesktopComputed }}</h4>
      <hr>
    </section>
    <section>
      <h6>Testing Getters (refresh page)</h6>
      <b>{{ isDesktop2 }}</b>
      <hr>
    </section>
    <section>
      <h6>Testing <i>Vue Screen</i></h6>
      <div>
        <p>Screen width is <b>{{ screen.width }}</b></p>
        <p>Screen height is <b>{{ screen.height }}</b></p>
        <p>Current breakpoint is <b>{{ grid.breakpoint }}</b></p>
      </div>
    </section>
    <div v-if="grid.breakpoint.sm == true">
      Hey! It's small!
    </div>
    <hr>
    <div v-if="checkTrueDesktop() == true">
      YES, it is a desktop!
    </div>
    <div v-if="checkTrueDesktop() == false">
      It is NOT a desktop!
    </div>
  </div>
</template>

<script>
import { useScreen, useGrid } from "vue-screen";

export default {
  name: "isDesktop",
  setup() {
    const screen = useScreen();
    const grid = useGrid("bootstrap");

    return {
      screen,
      grid,
    };
  },
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
    checkDesktopComputed() {
      return this.window.width >= 992 ? "Yes" : "No";
    },
    isDesktop2: function () {
      return this.$store.getters.isDesktop;
    },
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    checkTrueDesktop() {
      return this.window.width >= 992 ? true : false;
    }
  },
};
</script>