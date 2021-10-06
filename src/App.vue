<template>
  <CardTest />
</template>

<script>
//import "bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import CardTest from './components/cardTest.vue'
//import bottomNavigation from '@/components/displayContenido_bottomNavigation.vue'


export default {
  name: "App",

  components: {
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
