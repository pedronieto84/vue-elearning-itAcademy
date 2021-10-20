<template>
  <div class="fixed-bottom">
    <!-- Numeración topics -->
    <ul class="nav ml-1 mr-1 bg-white row flex-row flex-nowrap" style="overflow-x: auto;">
      <div v-for="(topic, index) in topics" :key="index">
        <li :class="status(index)" @click="switchStatus(index)">
          <a class="nav-link active text-white">{{ topic.topicId }}</a>
        </li>
      </div>
    </ul>
    <!-- Progreso & Backwards / Forward -->
    <BottomNavigation></BottomNavigation>
  </div>
</template>

<script>
import BottomNavigation from "./BottomNavigation.vue";

export default {
  name: "LeftNavigationMobile",
  components: {
    BottomNavigation,
  },
  data() {
    return {
      visit: [],
    };
  },
  computed: {
    topics: function () {
      return this.$store.getters.getTopics;
    },
    actual: function () {
      return this.$store.getters.getActual;
    },
  },
  watch: {
    actual: function (val) {
      this.visit[val] = "visited";
    },
  },
  methods: {
    status(index) {
      let status;
      if (this.actual == index) {
        status = "nav-item bg-success border border-light rounded m-1";
      } else if (this.visit[index] == "visited") {
        status = "nav-item bg-primary border border-light rounded m-1";
      } else {
        status = "nav-item bg-secondary border border-light rounded m-1";
      }
      return status;
    },
    switchStatus(index) {
      this.visit[index] = "visited";
      this.$store.dispatch("updateActual", index);
    },
  },
  mounted() {
    this.switchStatus(0);
  },
};
</script>