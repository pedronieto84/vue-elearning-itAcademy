<template>
  <div class="mt-5 container">
    <h1>Course List</h1>
    <div v-if="isDesktop2()">
      <div class="d-flex justify-content-center">
        <div class="row">
          <div v-for="(courseId, index) in courses" :key="index" class="col-4">
              <CourseCard class="m-2" :courseId="courseId" />
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="!isDesktop2()">
      <div class="d-flex justify-content-center">
        <div class="col-12">
          <div v-for="(courseId, index) in courses" :key="index">
            <CourseCard class="m-2" :courseId="courseId" />
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
      courses: [
        {
          name: "JavaScript",
          logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
          altImg:
            "The JavaScript logo is a yellow square with the letters JS written on it in black. JS stands for JavaScript",
          description:
            "JavaScript (/ˈdʒɑːvəˌskrɪpt/),[9] often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.[10] JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
          learners: "3.7M learners",
        },
        {
          name: "Vue",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/555px-Vue.js_Logo_2.svg.png",
          altImg:
            "The Vue logo is composed by a couple of V letters, one on top of the other, and both are painted green: the big and bottom one is light green, the top and small one is dark green.",
          description:
            "Vue.js (commonly referred to as Vue; pronounced /vjuː/, like 'view'[4]) is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.[11] It was created by Evan You, and is maintained by him and the rest of the active core team members.[12]",
          learners: "7.9M learners",
        },
        {
          name: "Angular",
          logo: "https://seeklogo.com/images/A/angular-logo-B76B1CDE98-seeklogo.com.png",
          altImg:
            "The Angular logo is a red hexahedron with a big capital letter A inside it.",
          description: 'Angular (commonly referred to as "Angular 2+" or "Angular CLI")[4][5] is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
          learners: "4.7M learners",
        },
        {
          name: "React",
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/539px-React.svg.png',
          altImg:
            "React logo radiates a lot, that is why there is not yet any logo.",
          description: "Hold on a sec, we are building the React course",
          learners: "10.2M learners",
        },
        {
          name: "Svelte",
          logo: 'https://raw.githubusercontent.com/sveltejs/branding/master/svelte-logo.png',
          description: "This is pretty new!",
          learners: "0.6M learners",
        },
        {
          name: "Swift",
          logo: 'https://developer.apple.com/swift/images/swift-logo.svg',
          description: "Swift is a powerful and intuitive programming language for iOS, iPadOS, macOS, tvOS, and watchOS. Writing Swift code is interactive and fun, the syntax is concise yet expressive, and Swift includes modern features developers love. Swift code is safe by design, yet also produces software that runs lightning-fast.",
          learners: '2.3M learners'
        }
      ],
    };
  },
  mounted() {},
  methods: {
    isDesktop2: function () {
      return this.$store.getters.isDesktop;
    },
  },
};
</script>
