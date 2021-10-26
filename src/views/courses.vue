<template>
  <div class="mt-5 container">
    <h1>Course List</h1>
    <div v-if="innerWidth() >= 1200">
      <div class="d-flex justify-content-center">
        <div class="row">
          <div v-for="(course, index) in courses" :key="index" class="col-4">
            <CourseCard class="m-2" :course="course" :snipNumber="7" />
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="innerWidth() <= 992">
      <div class="d-flex justify-content-center">
        <div class="col-12 pl-0 pr-0">
          <div v-for="(course, index) in courses" :key="index" class="col-12">
            <CourseCard
              class="mt-4 mb-4 ml-2 mr-2"
              :course="course"
              :snipNumber="4"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="innerWidth() >= 993 && innerWidth() <= 1199">
      <div class="d-flex justify-content-center">
        <div class="col-12">
          <div v-for="(course, index) in courses" :key="index" class="col-6">
            <CourseCard class="m-2" :course="course" :snipNumber="7" />
          </div>
        </div>
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
    methods: {
      innerWidth: function () {
        return this.$store.getters.innerWidth;
      },
    },
    created() {
      this.courses = this.$store.state.courses;
      //this.$store.dispatch('getCourses');
    },
    mounted() {
      this.coursesBBDD = this.$store.state.courses;
      console.log('mounted');
    },
  }
</script>