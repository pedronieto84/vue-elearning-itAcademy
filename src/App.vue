<template>

  <div>
    <img alt="Vue logo" src="./assets/logo.png" /><br>
    <button class="btn btn-warning" style="text-decoration: none"><router-link to="/module">MODUL</router-link></button>
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      Vue E-Learning With Bootstrap!
      <button type="button" class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
//import "bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import HelloWorld from './components/HelloWorld.vue'
import bottomNavigation from '@/components/displayContenido_bottomNavigation.vue'


export default {
  name: "App",

  components: {
    HelloWorld,
    bottomNavigation
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
  margin-top: 60px;
}
</style>
