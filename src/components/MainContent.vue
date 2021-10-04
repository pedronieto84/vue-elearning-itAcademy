<template>
  <div>
    <div class="progress mt-2">
      <div
        class="progress-bar"
        role="progressbar"
        style="width: 25%"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        25%
      </div>
    </div>
    <h1 class="mt-2">Content {{actual}}</h1>
  </div>
</template>

<script>
export default {
  name: "contentTest",
  data() {
    return {
      
    }
  },
  computed: {
    actual: function() {
      return this.$store.getters.getActual;
    },
  },
  beforeMount() {
    this.actual = this.$store.getters.getActual;
  },
  update() {
    this.actual = this.$store.getters.getActual;
  }
};
</script>