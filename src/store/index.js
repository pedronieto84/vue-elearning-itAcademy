import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    user: null,
    baseURL: "https://us-central1-elearning-vue-itacademy.cloudfunctions.net",
    actual: 1,
    courses: [
      {
        courseId: 1,
        modules: [],
        title: "JavaScript",
        description:
          "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
        imagUrl:
          "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        route: "1",
        learners: 394,
        tags: [
          {
            tagId: 1,
            name: "Mentored",
            col: "btn-outline-success",
          },
          {
            tagId: 2,
            name: "Final Test",
            col: "btn-outline-secondary",
          },
        ],

        topics: [{
                topicId: 1,
                title: "Topic 1",
                position: 1,
                moduleId: 1,
                cardId: 1,
                cardType: "video",
                card: {
                    videoUrl: "https://www.youtube.com/watch?v=iXoViMla9fc",
                },
            },
            {
                topicId: 2,
                title: "Topic 2",
                position: 2,
                moduleId: 1,
                cardId: 1,
                cardType: "test",
                card: {
                    testId: 1,
                    title: "Title de test",
                    subtitle: "Ens referim a tota l`area metropolitana",
                    question: "Pregunta quants habitants te Barcelona?",
                    items: [{
                            answer: "100 milió",
                            right: false,
                        },
                        {
                            answer: "10 milions",
                            right: false,
                        },
                        {
                            answer: "3 milions",
                            right: true,
                        },
                        {
                            answer: "100 mil",
                            right: false,
                        },
                    ],
                },
            },
            {
                topicId: 3,
                title: "Topic 3",
                position: 3,
                moduleId: 1,
                cardId: 1,
                cardType: "list",
                card: {
                    items: [
                        "Fdklsjfadlkfjdjfajdjfl jdhfkashkjfdah jfkdfjhaljknfjkdkfld jkdjfhsjkdhfda iqowqu ioqww` jdkhkf jdhaf qioqw m iwodqoie jdskha laos sadoa iouireordsaidjld dafjdkahfjahfdafkdah",
                        "kaskjdajsh jdhfkashkjfdah jfkdfjhaljknfjkdkfldjkdjfhs jkdhfda iqowqu ioqww` jdkhkf jdhaf qioqw m iwodqoie jdskha laos sadoaiouireor dsaidjld dafjdkahfjahfdafkdah",
                        "sjkhasda",
                        "sjhdka",
                        "Sajhkdsdkajdskhadhasj hoa que tal ccvfs fsgsg gdsgsf sgsf ro.",
                    ],
                },
            },
            {
                topicId: 4,
                title: "Topic 4",
                position: 4,
                moduleId: 1,
                cardId: 1,
                cardType: "text",
            },
            {
                topicId: 5,
                title: "Topic 5",
                position: 5,
                moduleId: 1,
                cardId: 1,
                cardType: "text",
            },
            {
                topicId: 6,
                title: "Topic 6",
                position: 6,
                moduleId: 1,
                cardId: 1,
                cardType: "text",
            },

            {
              answer: "100 milió",
              right: false,
            },
            {
              answer: "10 milions",
              right: false,
            },
            {
              answer: "3 milions",
              right: true,
            },
            {
              answer: "100 mil",
              right: false,
            },
          ],
        },
      },
      {
        topicId: 3,
        title: "Topic 3",
        position: 3,
        moduleId: 1,
        cardId: 1,
        cardType: "list",
        card: {
          items: [
            "Fdklsjfadlkfjdjfajdjfl jdhfkashkjfdah jfkdfjhaljknfjkdkfld jkdjfhsjkdhfda iqowqu ioqww` jdkhkf jdhaf qioqw m iwodqoie jdskha laos sadoa iouireordsaidjld dafjdkahfjahfdafkdah",
            "kaskjdajsh jdhfkashkjfdah jfkdfjhaljknfjkdkfldjkdjfhs jkdhfda iqowqu ioqww` jdkhkf jdhaf qioqw m iwodqoie jdskha laos sadoaiouireor dsaidjld dafjdkahfjahfdafkdah",
            "sjkhasda",
            "sjhdka",
            "Sajhkdsdkajdskhadhasj hoa que tal ccvfs fsgsg gdsgsf sgsf ro.",
          ],
        },
      },
      {
        topicId: 4,
        title: "Topic 4",
        position: 4,
        moduleId: 1,
        cardId: 1,
        cardType: "text",
      },
      {
        topicId: 5,
        title: "Topic 5",
        position: 5,
        moduleId: 1,
        cardId: 1,
        cardType: "text",
      },
      {
        topicId: 6,
        title: "Topic 6",
        position: 6,
        moduleId: 1,
        cardId: 1,
        cardType: "text",
      },
      {
        topicId: 7,
        title: "Topic 7",
        position: 7,
        moduleId: 1,
        cardId: 1,
        cardType: "text",
      },
      {
        topicId: 8,
        title: "Topic 8",
        position: 8,
        moduleId: 1,
        cardId: 1,
        cardType: "text",
      },
      {
        topicId: 9,
        title: "Topic 9",
        position: 9,
        moduleId: 1,
        cardId: 1,
        cardType: "text",
      },
      {
        topicId: 10,
        title: "Topic 10",
        position: 10,
        moduleId: 1,
        cardId: 1,
        cardType: "text",
      },
    ],
    users: new Map(),
    challenges: new Map(),
  },
  getters: {
    getActual(state) {
      return state.actual;
    },
    getCourses(state) {
      return state.courses;
    },
    getModules(state) {
      return state.modules;
    },
    getTopics(state) {
      return state.topics;
    },
    isDesktop() {
      if (window.innerWidth >= 992) {
        return true;
      } else if (window.innerWidth < 991) {
        return false;
      }
    },
    innerWidth() {
      return window.innerWidth;
    },
    getUser(state) {
      return state.user;
    },
  },
  mutations: {
    updateActual(state, nouActual) {
      state.actual = nouActual;
    },
    setCourses(state, payload) {
      state.courses = payload;
    },
    setModules(state, payload) {
      state.modules = payload;
    },
    setTopics(state, payload) {
      state.topics = payload;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    /// Structure
    login({ commit }, user) {
      // la de JOSE

      // hacer la peticion AXIOS


      commit("setUser", user);
    },
    crateUser({ commit }, user) {
      // la de FERRAN

      // hacer la peticion AXIOS

      commit("setUser", user);
    },
    updateActual({ commit }, actual) {
      commit("updateActual", actual);
    },
    async getCourses({ state, commit }) {
      try {
        const courses = await axios.get(state.baseURL + "/getCourses");
        console.log(courses.data);
        commit("setCourses", courses.data);
      } catch (e) {
        console.log(e);
      }
    },
    async getModules({ state, commit }, courseId) {
      try {
        const modules = await axios({
          method: "GET",
          url: state.baseURL + "/getModules?courseId=" + courseId,
        });

        //const modules = await axios.get(state.baseURL+'/getModules?courseId='+courseId);
        //const modules = await axios({method: 'POST', url: state.baseURL+'/getModules', data: {courseId: 1} });

        console.log("BBDD: ");
        console.log(modules.data);
        commit("setModules", modules.data);
      } catch (e) {
        console.log(e);
      }
    },
    async getTopics({ state, commit }, courseId, moduleId) {
      const topics = await axios.get(
        state.baseURL +
          "/getTopics?courseId=" +
          courseId +
          "&moduleId=" +
          moduleId
      );
      commit("setTopics", topics.data);
    },
    async getCourse({ state }, courseId) {
      const course = await axios.get(state.baseURL + "/getCourse" + courseId);
      return course.data;
    },
    async getModule({ state }, courseId, moduleId) {
      const module = await axios.get(
        state.baseURL +
          "/getModule?courseId=" +
          courseId +
          "&moduleId=" +
          moduleId
      );
      return module.data;
    },
    async getTopic({ state }, courseId, moduleId, topicId) {
      const topic = await axios.get(
        state.baseURL +
          "/getTopic?courseId=" +
          courseId +
          "&moduleId=" +
          moduleId +
          "&topicId=" +
          topicId
      );
      return topic.data;
    },
    /// Challenges
    addUsers({ state }) {
      const user1 = {
        id: 1,
        name: "Pedro",
        email: "pedro@one.one",
        points: 100,
      };
      const user2 = {
        id: 2,
        name: "Irene",
        email: "irene@two.two",
        points: 125,
      };
      const user3 = {
        id: 3,
        name: "Ferran",
        email: "ferran@three.three",
        points: 95,
      };
      const user4 = {
        id: 4,
        name: "David",
        email: "david@four.four",
        points: 110,
      };
      state.users.set(1, user1);
      state.users.set(2, user2);
      state.users.set(3, user3);
      state.users.set(4, user4);
    },
    createChallenge({ state }, data) {
      const challenge = {
        challenger: data.challengerId,
        rival: data.rivalId,
        points: data.betPoints,
      };
      let challengeId = data.challengeId;
      state.challenges.set(challengeId, challenge);
      return challengeId;
    },
    endChallenge({ state, dispatch }, data) {
      const challenge = state.challenges.get(data.challengeId);
      const loserId =
        challenge.challenger == data.winnerId
          ? challenge.rival
          : challenge.challenger;
      const points = parseInt(challenge.points);
      console.log(`${loserId} gives ${points} points to ${data.winnerId} `);
      dispatch("addPoints", {
        userId: parseInt(data.winnerId),
        amount: points,
      });
      dispatch("addPoints", { userId: parseInt(loserId), amount: 0 - points });
    },
    addPoints({ state }, data) {
      const user = state.users.get(data.userId);
      user.points += data.amount;
      state.users.set(data.userId, user);
    },
  },
});

