<template>
  <div>
    <h1 class="mt-2">
    
    Content {{ topics[actual].title}}
    </h1>
    
    <div v-if="topics[actual].cardType === 'test'">
   <cardTest />


    </div>

    <div v-if="topics[actual].cardType === 'list'"
>
<cardList />

    </div>

    <div v-if="topics[actual].cardType === 'text'"
>
text
    </div>

    <div v-if="topics[actual].cardType === 'video'">
<CardVideo />
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
};
</script>
