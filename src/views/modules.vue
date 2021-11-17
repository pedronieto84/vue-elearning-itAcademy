<template>
  <div class="mt-5 container">
    <div class="text-center">
      <button
        class="btn btn-sm btn-primary col-1"
        @click="this.$router.go(-1)"
        style="text-decoration: none"
      >
        Back
      </button>
      <h1>Llista de modules del Course {{ courseId }}</h1>
      <StepperComponentH />
      <StepperComponentV />
    </div>

    <div class="container">
      <div class="row row-cols-4">
        <div v-for="(module, index) in modulesBBDD" :key="index" v-bind:class="getClass(modulesBBDD, index)">
          <ModuleCard :courseId="courseId" :module="module" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModuleCard from "../components/moduleList/moduleCard.vue";
import StepperComponentH from "../components/moduleList/stepperComponentH.vue";
//import StepperComponentV from "../components/moduleList/stepperComponentV.vue"

export default {
  name: "Modules",
  components: {
    ModuleCard,
    StepperComponentH,
    //StepperComponentV
  },
  data() {
    return {
      courseId: 0,
      defaultGrid: 9,
      currentGrid: 9,
      modules: [
        {
          id: 1,
          title: "primero",
        },
        {
          id: 2,
          title: "segundo",
        },
      ],
    };
  },
  computed: {
    modulesBBDD: function () {
      return this.$store.state.modules;
    },
  },
  created() {
    let vue = this;
    this.courseId = vue.$route.params.courseId;
    this.$store.dispatch("getModules", this.courseId);
  },
  mounted() {},
  updated() {},
  methods: {
    getClass(modulesBBDD, index) {
      const defaultClass = 'col-3 m-2';

      if (modulesBBDD[index+1] === undefined) {
        return defaultClass;
      }

      if (this.currentGrid < 0) {
        this.currentGrid = 9;
      }

      let current = this.currentGrid;

console.log(
  modulesBBDD[index+1]
);

      console.log('------------ GOOOOOOOOOO --------------');
          console.log("this.currentGrid = " + this.currentGrid); // 9
          console.log("current = "+current); // 9
          console.log("title +1 = " + modulesBBDD[index+1].title); // Module 2
          console.log('------------------ END -----------------');

      if (/^([0-9]{1}).1/.test(modulesBBDD[index+1].title) === true) {
        this.currentGrid = this.defaultGrid;

        console.log("ENTRA");

        return 'col-' + current + ' m-2';
      }

      this.currentGrid-= 3;
      console.log("NOW currentGrid is = " + this.currentGrid);
      
      return defaultClass; 
    }
  },
};
</script>