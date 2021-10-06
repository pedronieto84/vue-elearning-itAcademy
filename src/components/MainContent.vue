<template>
  <div>
    <h1 class="mt-2">Content {{actual}}</h1>
    <Snippet />
    <cardVideo />
  </div>
</template>

<script>
import Snippet from '../components/CodeSnippet.vue'
import cardVideo from "./CardVideo.vue";
export default {
  name: "mainContent",
  components: {
    Snippet,
    cardVideo
  },
  data() {
    return {
      
    }
  },

  computed: {
    actual: function() {
      return this.$store.getters.getActual;
    },
  },
};
</script>
