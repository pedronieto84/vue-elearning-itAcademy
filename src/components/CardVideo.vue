<template>
  <div>
    <YouTube
      class="mx-auto"
      src="https://www.youtube.com/watch?v=ubL0PpKmGYQ"
      @ready="onReady"
      @state-change="stateChange"
      ref="youtube"
      :vars="playervars"
    />
    <div class="buttons mt-2">
      <button @click="handleClick('playVideo')">
        Play
      </button>
      <button @click="handleClick('pauseVideo')">
        Pause
      </button>
      <button @click="handleClick('stopVideo')">
        Stop
      </button>
      <!-- <button @click="handleClick('resetView')">
        Reset
      </button> -->
      <button @click="handleClick('mute')">
        Mute
      </button>
      <button @click="handleClick('unMute')">
        Unmute
      </button>
    </div>
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
      playervars: {
        autoplay: 0,
        controls: 1,
      },
    };
  },
  components: { YouTube },
  methods: {
    onReady() {
      this.$refs.youtube.playVideo();
      console.log(this.$refs.youtube);
      //Here goes the on load Seekto() with the time in seconds stored in localstore
      this.$refs.youtube.seekTo(40);
    },
    handleClick(event) {
      console.log("entro a handleClick");
      this.$refs.youtube[event]();

      if (event == "pauseVideo") {
        // console.log("pausa");
        // console.log(event);
        let time = this.$refs.youtube.getCurrentTime();
        alert("Video paused at: " + time);
      }
    },
    stateChange(e) {
      // @state-change="stateChange"
      // this.$refs.youtube.playVideo();
      // console.log("Holi, state change");
      // console.log(e);
      if (e.data == 0) {
        alert("Video ended!");
      }
      // else if (e.data == 1) {
      //   console.log("Holi, pause state change");
      //   let time = this.$refs.youtube.getCurrentTime();
      //   alert("Video paused at: " + time);
      // }
    },
  },
});
</script>
