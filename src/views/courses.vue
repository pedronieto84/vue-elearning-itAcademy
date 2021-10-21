<template>
  <div class="mt-5 container">
    <h1>Course List</h1>
    <div class="d-flex justify-content-center">
      <div v-for="(course, index) in coursesBBDD" :key="index">
        <CourseCard class="m-2" :course="course" />
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
        coursesBBDD: [],
        courses: [1,2,3]
      }
    },
    created() {
      this.$store.dispatch('getCourses');
    },
    mounted() {
      this.coursesBBDD = this.$store.state.courses;
    },
    methods: {
    }
  };
</script>
