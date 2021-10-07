<template>
  <div>

 <router-view></router-view>
    <!-- <cardList></cardList> -->
  </div> <!--
  <CardTest /> -->
</template>

<script>
//import "bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
//import HelloWorld from './components/HelloWorld.vue'
//import cardList from './components/cardList.vue'
//import CardTest from './components/cardTest.vue'
//import bottomNavigation from '@/components/displayContenido_bottomNavigation.vue'


  
  





export default {
  name: "App",


  components: {
    //HelloWorld,
    //cardList,
    //CardTest,
    //bottomNavigation

  },

  

  data(){
    return{
      pointsArray: [1,2,3,4,5],
      
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
