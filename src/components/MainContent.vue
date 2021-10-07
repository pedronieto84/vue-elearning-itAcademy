<template>
  <div>
    <h1 class="mt-2">Content {{actual}}</h1>
   
  </div>
</template>

<script>

export default {
  name: "mainContent",
  components: {
  
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
