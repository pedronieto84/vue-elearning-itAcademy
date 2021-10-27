<template>
  <div class="mt-5 container">
    <h1>Course List</h1>

    <div v-if="this.tagId == null">Tots els cursos</div>
    <div v-else-if="this.tagId != null">
      Cursos amb l'etiqueta {{ this.tagId }} <!-- Ha de retornar tagName i no tagId - filtrar tags i relacionar ID amb Name -->
    </div>

    <div class="d-flex justify-content-center">
      <div
        :class="
          innerWidth() >= 1200
            ? 'row'
            : innerWidth() >= 992 && innerWidth() <= 1199
            ? 'col-12 pl-0 pr-0'
            : innerWidth() <= 991
            ? 'col-12'
            : ''
        "
      >
        <div
          v-for="(course, index) in coursesFiltered"
          :key="index"
          :class="
            innerWidth() >= 1200
              ? 'col-4'
              : innerWidth() <= 1199
              ? 'col-12'
              : ''
          "
        >
          <CourseCard
            :class="
              innerWidth() >= 1200
                ? 'm-2'
                : innerWidth() >= 992 && innerWidth() <= 1199
                ? 'mt-4 mb-4 ml-2 mr-2'
                : innerWidth() <= 991
                ? 'm-2'
                : ''
            "
            :course="course"
          ></CourseCard>
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
      tagName: null,
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