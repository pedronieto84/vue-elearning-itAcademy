<template>
  <div>
    <p>Router course {{courseId}} module {{moduleId}}</p>
    <h1 class="mt-2">
    
    Content {{ topics[actual].title}}
    </h1>
    
    <div v-if="topics[actual].cardType === 'test'">
   <cardTest :testData="topics[actual].card" />


    </div>

    <div v-if="topics[actual].cardType === 'list'"
>
<cardList :listArray="topics[actual].card.items" />

    </div>

    <div v-if="topics[actual].cardType === 'text'"
>
text
    </div>

    <div v-if="topics[actual].cardType === 'video'">
<CardVideo :videoUrl="topics[actual].card.videoUrl"
 />
    </div>

    
   
  </div>
</template>

<script>

import cardList from '../components/cardList.vue'
import CardVideo from '../components/CardVideo.vue'
import cardTest from '../components/cardTest.vue'


export default {
  name: "mainContent",
  components: {
    cardList, CardVideo, cardTest
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
