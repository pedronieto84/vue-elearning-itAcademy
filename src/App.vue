<template>
  <div>

    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      Vue E-Learning With Bootstrap!
      <button type="button" class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <IsDesktop></IsDesktop>
    <!-- <cardList></cardList> -->
  </div> <!--
  <CardTest /> -->
</template>

<script>
//import "bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
//import HelloWorld from './components/HelloWorld.vue'
//import cardList from './components/cardList.vue'
import IsDesktop from './components/isDesktop.vue'
//import CardTest from './components/cardTest.vue'
//import bottomNavigation from '@/components/displayContenido_bottomNavigation.vue'

  
    <router-view></router-view>
  </div>

</template>

<script>




export default {
  name: "App",


  components: {
    //HelloWorld,
    //cardList,
    //CardTest,
    //bottomNavigation
    IsDesktop

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
