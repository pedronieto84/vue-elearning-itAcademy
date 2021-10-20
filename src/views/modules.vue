<template>
  <div class="mt-5 container">
    <div class="text-center">
      <button class="btn btn-sm btn-primary col-1" @click="this.$router.go(-1)" style="text-decoration: none">Back</button>
      <h1>Llista de modules del Course {{courseId}} </h1>
    </div>
    <div class="d-flex justify-content-center">
      <div v-for="(moduleId, index) in modules" :key="index">
          <ModuleCard class="m-2" :courseId="courseId" :moduleId="moduleId" />
      </div>
    </div>
    
  </div>
</template>

<script>
import ModuleCard from "../components/moduleList/moduleCard.vue"

  export default {
    name: "Modules",
    components: {
      ModuleCard
    },
    data(){

      return{

        courseId:0,
        modules: [{
          id: 1,
          title: 'primero'
        },
        {
          id: 2,
          title: 'segundo'
        }]
      }
    },
    mounted() {
      let vue = this;
      this.courseId = vue.$route.params.courseId; 
    },
    methods: {
    }
  };
</script>
