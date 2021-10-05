<template>
  <div>
    <h1 class="mt-2">Content {{actual}}</h1>
    <Snippet />
  </div>
</template>

<script>
import Snippet from '../components/CodeSnippet.vue'

export default {
  name: "contentTest",
  components: {
    Snippet
  },
  data() {
    return {
      
    }
  },
  computed: {
    actual: function() {
      return this.$store.getters.getActual;
    },
  }
};
</script>