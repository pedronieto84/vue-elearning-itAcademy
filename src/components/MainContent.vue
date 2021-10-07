<template>
  <div>
    <h1 class="mt-2">Content {{ arrayTest[actual]}}</h1>
   
  </div>
</template>

<script>

export default {
  name: "mainContent",
  components: {
  
  },
  data() {
    return {
      arrayTest: [
        'uno', 'dos', 'tres', 'cuatro'
      ],
      
    }
  },

  computed: {
    actual: function() {
      return this.$store.getters.getActual;
    },
  },
};
</script>
