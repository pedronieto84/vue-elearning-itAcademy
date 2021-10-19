<template>
  <div>
    <h1>Llista de modules del Course {{courseId}} </h1>
    <p>Aquí aniran els moduleCard</p>
    <div>
      <router-link :to="{name: 'Module', params: {courseId: courseId, moduleId: 1} }" class="btn btn-success">Module 1</router-link>
      <router-link :to="{name: 'Module', params: {courseId: courseId, moduleId: 2} }" class="btn btn-warning mx-2">Module 2</router-link>
      <router-link :to="{name: 'Module', params: {courseId: courseId, moduleId: 3} }" class="btn btn-danger">Module 3</router-link>
    </div>
    <button class="btn btn-primary" @click="this.$router.go(-1)">Back</button>
  </div>
</template>

<script>
  export default {
    name: "Modules",
    components: {
    },
    data(){
      return{
        courseId:0,
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
