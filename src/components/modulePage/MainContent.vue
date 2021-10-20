<template>
  <div>
    <p>Router course {{courseId}} module {{moduleId}}</p>
    <h1 class="mt-2">Content {{ topics[actual].title}}</h1>
    <div v-if="topics[actual].cardType === 'test'">
      <CardTest :testData="topics[actual].card" />
    </div>
    <div v-if="topics[actual].cardType === 'list'">
      <CardList :listArray="topics[actual].card.items" />
    </div>
    <div v-if="topics[actual].cardType === 'text'">
      text
    </div>
    <div v-if="topics[actual].cardType === 'video'">
      <CardVideo :videoUrl="topics[actual].card.videoUrl"/>
    </div>
  </div>
</template>

<script>
import CardList from './cards/cardList.vue'
import CardTest from './cards/cardTest.vue'
import CardVideo from './cards/cardVideo.vue'

export default {
  name: "mainContent",
  components: {
    CardList, CardVideo, CardTest
  },
  data() {
    return {
      courseId:0,
      moduleId:0
    }
  },
  computed: {
    actual: function() {
      return this.$store.getters.getActual;
    },
    topics: function() {
      return this.$store.getters.getTopics;
    }

  },
  mounted() {
      let vue = this;
      this.courseId = vue.$route.params.courseId; 
      this.moduleId = vue.$route.params.moduleId; 
    },
};
</script>
