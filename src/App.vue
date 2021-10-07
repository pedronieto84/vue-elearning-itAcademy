<template>

  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      Vue E-Learning With Bootstrap!
      <button type="button" class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <cardList></cardList>
    <router-view></router-view>
  </div>
  <CardTest />

</template>

<script>
//import "bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import cardList from './components/cardList.vue'

import CardTest from './components/cardTest.vue'
//import bottomNavigation from '@/components/displayContenido_bottomNavigation.vue'



export default {
  name: "App",

  components: {
    cardList,
    CardTest,
    //bottomNavigation

  },
  data(){
    return{
      pointsArray: [1,2,3,4,5],
      currentPointFather: Number, 
    }
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
