<template>
  <div class="mt-5 container">
    <router-link
      :to="{
        name: 'Courses',
      }"
      class="btn btn-primary"
      >Back To Courses</router-link
    >
    <h1>Llista de cursos amb la tag {{ tagId }}</h1>
    <div v-for="index in courses" :key="index">
      <div v-for="tag in index.tags" :key="tag">
        <div v-if="tagId == tag.tagId">
          {{ tag.name }}
        </div>
      </div>
    </div>
    <div v-if="innerWidth() >= 1200">
      <div class="d-flex justify-content-center">
        <div class="row">
          <div v-for="(course, index) in courses" :key="index" class="col-4">
            <div v-for="tag in course.tags" :key="tag">
              <div v-if="tagId == tag.tagId">
                <CourseCard class="m-2" :course="course" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="innerWidth() <= 991">
      <div class="d-flex justify-content-center">
        <div class="col-12 pl-0 pr-0">
          <div v-for="(course, index) in courses" :key="index" class="col-12">
            <div v-for="tag in course.tags" :key="tag">
              <div v-if="tagId == tag.tagId">
                <CourseCard class="mt-4 mb-4 ml-2 mr-2" :course="course" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="innerWidth() >= 992 && innerWidth() <= 1199">
      <div class="d-flex justify-content-center">
        <div class="col-12">
          <div v-for="(course, index) in courses" :key="index" class="col-12">
            <div v-for="tag in course.tags" :key="tag">
              <div v-if="tagId == tag.tagId">
                <CourseCard class="m-2" :course="course" />
              </div>
            </div>
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
  components: {
    CourseCard,
  },
  data() {
    return {
      coursesBBDD: [],
      //courses: [1, 2, 3],
    };
  },
  methods: {
    innerWidth: function () {
      return this.$store.getters.innerWidth;
    },
  },
  created() {
    this.courses = this.$store.state.courses;
    this.tags = this.$store.state.courses.tags;
    this.tagId = this.$route.params.tagId;
  },
  mounted() {
    this.coursesBBDD = this.$store.state.courses;
  },
};
</script>