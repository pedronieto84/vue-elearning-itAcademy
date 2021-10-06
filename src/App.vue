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

    <cardList :listArray ="listPadre" ></cardList>
  </div>
</template>

<script>
//import "bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import HelloWorld from './components/HelloWorld.vue'
import cardList from './components/cardList.vue'

export default {
  name: "App",

  components: {
    HelloWorld,
    cardList
  },
  data(){
    return{
      pointsArray: [1,2,3,4,5],
      currentPointFather: Number, 
      listPadre: ["Fdklsjfadlkfjdjfajdjfl jdhfkashkjfdah jfkdfjhaljknfjkdkfld jkdjfhs jkdhfda iqowqu ioqww` jdkhkf jdhaf qioqw m iwodqoie jdskha laos sadoa iouireor dsaidjld dafjdkahfjahfdafkdah", 
            "kaskjdajsh jdhfkashkjfdah jfkdfjhaljknfjkdkfld jkdjfhs jkdhfda iqowqu ioqww` jdkhkf jdhaf qioqw m iwodqoie jdskha laos sadoa iouireor dsaidjld dafjdkahfjahfdafkdah" , 
            "sjkhasda" , 
            "sjhdka" , 
            "Sajhkdsdka jdskhadhasj hoa que tal ccvfs fsgsg gdsgsf sgsf ro."],
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
