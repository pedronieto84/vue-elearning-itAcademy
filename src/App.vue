<template>

  <div>
  
    <router-view></router-view>
  </div>

</template>

<script>



export default {
  name: "App",
  
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
