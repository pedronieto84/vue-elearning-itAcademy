<template>

<div class="container">
  <stepper-component-v>
    <div class="row mt-9 spacing-up" v-for="(item, index) in arrayPreformed" v-bind:key="item">
        <div class="col-sm mt-9 spacing-up" v-for="(module) in arrayPreformed[index]" v-bind:key="module">

          <ModuleCard :courseId="module.courseId" :module="module" />
        </div>
    </div>
  </stepper-component-v>

</div>
  
</template>

<script>
//let rows =modules.data[modules.data.length - 1].title.split('.')[0]

//console.log('rows', rows)

import ModuleCard from "../components/moduleList/moduleCard.vue";
import StepperComponentV from '../components/moduleList/stepperComponentV.vue';


export default {
  name: "Modules",
  components: {
    StepperComponentV,
    ModuleCard
  },
  data() {
    return {
      courseId: 0,
      defaultGrid: 9,
      currentRow: 0,
      currentGrid: 9
      
    };
  },
  computed: {
    modulesBBDD: function () {
      return this.$store.state.modules;
    },


    arrayPreformed: function( ){

      const arrayFinal = [];
      this.$store.state.modules.forEach((item)=>{
        const myRow = parseInt(item.title.split('.')[0]) - 1
        if(arrayFinal[myRow] === undefined) {
          arrayFinal[myRow] = [item]
        }else{
              arrayFinal[myRow].push(item)
        }
      })

      return arrayFinal
    }

  },
 created() {
    let vue = this;
    this.courseId = vue.$route.params.courseId;
    this.$store.dispatch("getModules", this.courseId);
    



  },
  mounted() {

   
      



  },
  updated() {},
  methods: {

  
  },
};
</script>
<style>
.spacing-up{
margin-top: 9px
}
</style>