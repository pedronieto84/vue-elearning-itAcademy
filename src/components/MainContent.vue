<template>
  <div>
    <h1 class="mt-2">Content {{ actual }}</h1>
    <cardVideo />
  </div>
</template>

<script>
import cardVideo from "./CardVideo.vue";
export default {
  name: "mainContent",
  components: {
    cardVideo,
  },

  computed: {
    actual: function() {
      return this.$store.getters.getActual;
    },
  },
};
</script>
