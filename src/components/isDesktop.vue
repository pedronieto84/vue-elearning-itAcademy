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
      <h6>Watchers in Component</h6>
      <h4>{{ checkDesktopComputed }}</h4>
    </section>
    <section>
      <h6>Testing Getters (refresh page)</h6>
      <div>{{ isDesktop2 }}</div>
    </section>
  </div>
</template>

<script>
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
  },
};
</script>