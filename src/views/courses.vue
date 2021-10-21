<template>
  <div class="mt-5 container">
    <h1>Course List</h1>
    <div v-if="innerWidth() >= 1200">
      <div class="d-flex justify-content-center">
        <div class="row">
          <div v-for="(courseId, index) in courses" :key="index" class="col-4">
            <CourseCard class="m-2" :courseId="courseId" :snipNumber="7" />
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="innerWidth() <= 992">
      <div class="d-flex justify-content-center">
        <div class="col-12 pl-0 pr-0">
          <div v-for="(courseId, index) in courses" :key="index" class="col-12">
            <CourseCard
              class="mt-4 mb-4 ml-2 mr-2"
              :courseId="courseId"
              :snipNumber="4"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="innerWidth() >= 993 && innerWidth() <= 1199">
      <div class="d-flex justify-content-center">
        <div class="col-12">
          <div v-for="(courseId, index) in courses" :key="index" class="col-6">
            <CourseCard class="m-2" :courseId="courseId" :snipNumber="7" />
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
          tags: [
            {
              name: "Mentored",
              col: "btn-outline-success",
            },
            {
              name: "Final Test",
              col: "btn-outline-secondary",
            },
          ],
        },
        {
          name: "Vue",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/555px-Vue.js_Logo_2.svg.png",
          altImg:
            "The Vue logo is composed by a couple of V letters, one on top of the other, and both are painted green: the big and bottom one is light green, the top and small one is dark green.",
          description:
            "Vue.js (commonly referred to as Vue; pronounced /vjuː/, like 'view'[4]) is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.[11] It was created by Evan You, and is maintained by him and the rest of the active core team members.[12]",
          learners: "7.9M learners",
          tags: [
            {
              name: "Mentored",
              col: "btn-outline-success",
            },
            {
              name: "Final Test",
              col: "btn-outline-secondary",
            },
            {
              name: "Free Certificate",
              col: "btn-outline-warning",
            },
          ],
        },
        {
          name: "Angular",
          logo: "https://seeklogo.com/images/A/angular-logo-B76B1CDE98-seeklogo.com.png",
          altImg:
            "The Angular logo is a red hexahedron with a big capital letter A inside it.",
          description:
            'Angular (commonly referred to as "Angular 2+" or "Angular CLI")[4][5] is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
          learners: "4.7M learners",
          tags: [
            {
              name: "Final Test",
              col: "btn-outline-secondary",
            },
            {
              name: "Recently Added",
              col: "btn-outline-danger",
            },
          ],
        },
        {
          name: "React",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/539px-React.svg.png",
          altImg:
            "React logo radiates a lot, that is why there is not yet any logo.",
          description: "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3] for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.[7]",
          learners: "10.2M learners",
          tags: [
            {
              name: "Recently Added",
              col: "btn-outline-danger",
            },
          ],
        },
        {
          name: "Svelte",
          logo: "https://raw.githubusercontent.com/sveltejs/branding/master/svelte-logo.png",
          altImg: "",
          description: "This is pretty new!",
          learners: "0.6M learners",
          tags: [
            {
              name: "Coming Soon",
              col: "btn-outline-info",
            },
          ],
        },
        {
          name: "Swift",
          logo: "https://developer.apple.com/swift/images/swift-logo.svg",
          altImg: "",
          description:
            "Swift is a powerful and intuitive programming language for iOS, iPadOS, macOS, tvOS, and watchOS. Writing Swift code is interactive and fun, the syntax is concise yet expressive, and Swift includes modern features developers love. Swift code is safe by design, yet also produces software that runs lightning-fast.",
          learners: "2.3M learners",
          tags: [
            {
              name: "Coming Soon",
              col: "btn-outline-info",
            },
            {
              name: "Free Certificate",
              col: "btn-outline-warning",
            },
          ],
        },
        {
          name: "HTML 5",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png",
          altImg: "",
          description:
            "HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last[3] major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard. It is maintained by the Web Hypertext Application Technology Working Group (WHATWG), a consortium of the major browser vendors (Apple, Google, Mozilla, and Microsoft).",
          learners: "1.1M learners",
          tags: [
            {
              name: "Coming Soon",
              col: "btn-outline-info",
            },
            {
              name: "Free Certificate",
              col: "btn-outline-warning",
            },
          ],
        },
        {
          name: "CSS 3",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png",
          altImg: "",
          description:
            "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.[2]",
          learners: "2.2M learners",
          tags: [
            {
              name: "Coming Soon",
              col: "btn-outline-info",
            },
            {
              name: "Free Certificate",
              col: "btn-outline-warning",
            },
          ],
        },
        {
          name: "Ruby on Rails",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/1024px-Ruby_On_Rails_Logo.svg.png",
          altImg: "",
          description:
            'Ruby is an interpreted, high-level, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan. Ruby is dynamically typed and uses garbage collection and just-in-time compilation. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. According to the creator, Ruby was influenced by Perl, Smalltalk, Eiffel, Ada, BASIC, and Lisp.[11][3]',
          learners: "3.3M learners",
          tags: [
            {
              name: "Coming Soon",
              col: "btn-outline-info",
            },
            {
              name: "Mentored",
              col: "btn-outline-success",
            },
          ],
        },
        {
          name: "PHP",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/640px-PHP-logo.svg.png",
          altImg: "",
          description:
            "PHP is a general-purpose scripting language geared towards web development.[7] It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994.[8] The PHP reference implementation is now produced by The PHP Group.[9] PHP originally stood for Personal Home Page,[8] but it now stands for the recursive initialism PHP: Hypertext Preprocessor.[10]",
          learners: "4.4M learners",
          tags: [
            {
              name: "Coming Soon",
              col: "btn-outline-info",
            },
            {
              name: "Mentored",
              col: "btn-outline-success",
            },
          ],
        },
        {
          name: "Java",
          logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/420px-Java_programming_language_logo.svg.png",
          altImg: "",
          description:
            "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA),[17] meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.[18] Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but has fewer low-level facilities than either of them. The Java runtime provides dynamic capabilities (such as reflection and runtime code modification) that are typically not available in traditional compiled languages. As of 2019, Java was one of the most popular programming languages in use according to GitHub,[19][20] particularly for client-server web applications, with a reported 9 million developers.[21]",
          learners: "5.5M learners",
          tags: [
            {
              name: "Coming Soon",
              col: "btn-outline-info",
            },
            {
              name: "Mentored",
              col: "btn-outline-success",
            },
          ],
        },
      ],
    };
  },
  mounted() {},
  methods: {
    innerWidth: function () {
      return this.$store.getters.innerWidth;
    },
  },
};
</script>