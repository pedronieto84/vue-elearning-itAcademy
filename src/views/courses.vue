<template>
  <div class="mt-5 container">
    <h1>Course List</h1>
    <div v-if="innerWidth() >= 1200">
      <div class="d-flex justify-content-center">
        <div class="row">
          <div v-for="(course, index) in courses" :key="index" class="col-4">
            <CourseCard class="m-2" :course="course" />
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="innerWidth() >= 992 && innerWidth() <= 1199">
      <div class="d-flex justify-content-center">
        <div class="col-12 pl-0 pr-0">
          <div
            v-for="(course, index) in coursesFiltered"
            :key="index"
            class="col-12"
          >
            <CourseCard
              class="mt-4 mb-4 ml-2 mr-2"
              :course="course"
              :snipNumber="4"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="innerWidth() <= 991">
      <div class="d-flex justify-content-center">
        <div class="col-12">
          <div
            v-for="(course, index) in coursesFiltered"
            :key="index"
            class="col-6"
          >
            <CourseCard class="m-2" :course="course" :snipNumber="7" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CourseCard from "../components/courseList/courseCard.vue";
export default {
  name: "Courses",
  watch: {
    $route(to, from) {
      console.log("watcher", to, from);
      this.tagId = to.params.tagId;
    },
  },
  components: {
    CourseCard,
  },
  computed: {
    coursesFiltered() {
      if (this.tagId === null) {
        return this.courses;
      } else {
        return this.courses.filter((course) => {
          return course.tags.some((tag) => {
            return tag.tagId == this.tagId;
          });
        });
      }
    },
  },
  data() {
    return {
      courses: [],
      tagId: null,
    };
  },
  methods: {
    innerWidth: function () {
      return this.$store.getters.innerWidth;
    },
  },
  mounted() {
    this.courses = this.$store.state.courses;
    this.coursesBBDD = this.$store.state.courses;
    console.log("mounted");
  },
  created() {
    this.courses = this.$store.state.courses;
    //this.$store.dispatch('getCourses');
  },
};
</script>