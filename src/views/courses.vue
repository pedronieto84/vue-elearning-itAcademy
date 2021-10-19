<template>
  <div>
    <h1>Course List</h1>
    <p>Aqui aniran els courseCard</p>
    <div>
      <router-link :to="{name: 'Modules', params: {courseId: 1} }" class="btn btn-success">Course 1</router-link>
      <router-link :to="{name: 'Modules', params: {courseId: 2} }" class="btn btn-warning mx-2">Course 2</router-link>
      <router-link :to="{name: 'Modules', params: {courseId: 3} }" class="btn btn-danger">Course 3</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Courses",
    components: {
    },
    data(){
      return{
      }
    },
    mounted() { 
    },
    methods: {
    }
  };
</script>
