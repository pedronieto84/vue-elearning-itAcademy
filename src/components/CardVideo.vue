<template>
  <div>
    <YouTube
      class="mx-auto"
      src="https://www.youtube.com/watch?v=ubL0PpKmGYQ"
      @ready="onReady"
      ref="youtube"
      :vars="playervars"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
// npm vue-3-youtube plugin documentation https://github.com/NomNes/vue3-youtube
import YouTube from "vue3-youtube";

export default defineComponent({
  name: "cardVideo",
  data() {
    return {
      playervars: { autoplay: 0 },
    };
  },
  components: { YouTube },
  methods: {
    onReady() {
      this.$refs.youtube.playVideo();
    },
  },
});
</script>
