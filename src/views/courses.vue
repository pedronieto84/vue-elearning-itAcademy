<template>
  <div class="mt-5 container">
    <h1>Course List</h1>
    <div class="d-flex justify-content-center">
      <div v-for="(courseId, index) in courses" :key="index">
        <CourseCard class="m-2" :courseId="courseId" />
      </div>
    </div>
  </div>
</template>

<script>
import CourseCard from '../components/courseList/courseCard.vue'
  export default {
    name: "Courses",
    components: {
      CourseCard
    },
    data(){
      return{
        courses: [1,2,3]
      }
    },
    mounted() { 
    },
    methods: {
    }
  };
</script>
