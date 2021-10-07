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
}
</style>
