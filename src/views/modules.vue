<template>
  <div class="mt-5 container">
    <div class="text-center">
      <button class="btn btn-sm btn-primary col-1" @click="this.$router.go(-1)" style="text-decoration: none">Back</button>
      <h1>Llista de modules del Course {{courseId}} </h1>
    </div>
    <div class="d-flex justify-content-center">
      <div v-for="(module, index) in modulesBBDD" :key="index">
          <ModuleCard class="m-2" :courseId="courseId" :module="module" />
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
    computed: {
      modulesBBDD: function() {
        return this.$store.state.modules;
      }
    },
    created() {
      let vue = this;
      this.courseId = vue.$route.params.courseId;
      this.$store.dispatch('getModules', this.courseId);
    },
    mounted() {
      
    },
    updated() {

    },
    methods: {
    }
  };
</script>
