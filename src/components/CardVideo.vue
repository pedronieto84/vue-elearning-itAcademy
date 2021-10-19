<template>
  <div>
    <YouTube
      class="mx-auto"
      :src="videoUrl"
      @ready="onReady"
      @state-change="stateChange"
      ref="youtube"
      :vars="playervars"
    />
    <div class="buttons mt-2">
      <button class="btn-success" @click="handleClick('playVideo')">
        Play
      </button>
      <button class="btn-warning" @click="handleClick('pauseVideo')">
        Pause
      </button>
      <button class="btn-danger" @click="handleClick('stopVideo')">
        Stop
      </button>
      <!-- 
        These buttons were used only for testing the object
        <button @click="handleClick('resetView')">
        Reset
      </button>
      <button @click="handleClick('mute')">
        Mute
      </button>
      <button @click="handleClick('unMute')">
        Unmute
      </button> -->
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

// npm vue-3-youtube plugin documentation https://github.com/NomNes/vue3-youtube
import YouTube from "vue3-youtube";

export default defineComponent({
  name: "cardVideo",
  props: ['videoUrl'],

  data() {
    return {
      playervars: {
        autoplay: 0,
        controls: 0,
      },
    };
  },
  components: { YouTube },
  methods: {
    onReady() {
      this.$refs.youtube.playVideo();

      //Next line goes the on-ready seekTo() with the time in seconds stored in localstore, if it doesn´t, then seekTo(0)
      this.$refs.youtube.seekTo(1);
    },
    handleClick(event) {
      this.$refs.youtube[event]();

      if (event == "pauseVideo") {
        let time = this.$refs.youtube.getCurrentTime();
        console.log("Video paused at: " + time.toFixed(2) + "s");
      }
    },
    stateChange(e) {
      if (e.data == 0) {
        console.log("Video ended!");
        let index = this.$store.getters.getActual;
        this.$store.dispatch("updateActual", index+1);
      }
    },
  },
});
</script>
