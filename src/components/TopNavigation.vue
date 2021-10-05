<template>
  <nav class=" navbar bg-primary text-light ">
    E-learning Course
    <div class="row mr-2">
      <ol class="breadcrumb bg-primary text-light mb-0">
        <li class="breadcrumb-item">{{ actual }}</li>
        <li class="breadcrumb-item">{{ totaltopics }}</li>
      </ol>
      <button
        type="button"
        class="close text-light"
        data-dismiss="alert"
        aria-label="Close"
        @click="returnToMainMenu()"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      totaltopics: 0,
    };
  },
  computed: {
    actual: function() {
      return this.$store.getters.getActual;
    },
    topics: function() {
      return this.$store.getters.getTopics;
    }
  },
  methods: {
    actualTopic(index) {
      let status;
      if (this.actual == index) {
        status = "bg-success";
      } else if (this.visit[index] == "visited") {
        status = "bg-primary";
      } else {
        status = "bg-secondary";
      }
      return status;
    },
    totalTopics() {
      this.totaltopics = this.topics.length;
    },
    returnToMainMenu() {
      alert("Returning to main menu!");
    },
  },
  beforeMount() {
    this.totalTopics();
  }
};
</script>
