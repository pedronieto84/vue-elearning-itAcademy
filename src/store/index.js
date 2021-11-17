import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state: {
        baseURL: "https://us-central1-elearning-vue-itacademy.cloudfunctions.net",
        actual: 1,
        courses: [{
                courseId: 1,
                modules: [],
                title: "JavaScript",
                description: "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
                imagUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
                route: "1",
                learners: 394,
                tags: [{
                        tagId: 1,
                        name: "Mentored",
                        col: "btn-outline-success",
                    },
                    {
                        tagId: 2,
                        name: "Final Test",
                        col: "btn-outline-secondary",
                    }
                ]
            },
            {
                courseId: 2,
                modules: [],
                title: "TypeScript",
                description: "TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.",
                imagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png",
                route: "2",
                learners: 859,
                tags: [{
                        tagId: 1,
                        name: "Mentored",
                        col: "btn-outline-success",
                    },
                    {
                        tagId: 2,
                        name: "Final Test",
                        col: "btn-outline-secondary",
                    },
                    {
                        tagId: 3,
                        name: "Free Certificate",
                        col: "btn-outline-warning",
                    },
                ],
            },
            {
                courseId: 3,
                modules: [],
                title: "Vue",
                description: "Vue.js (commonly referred to as Vue) is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.",
                imagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/555px-Vue.js_Logo_2.svg.png",
                route: "3",
                learners: 986,
                tags: [{
                        tagId: 1,
                        name: "Mentored",
                        col: "btn-outline-success",
                    },
                    {
                        tagId: 2,
                        name: "Final Test",
                        col: "btn-outline-secondary",
                    },
                    {
                        tagId: 3,
                        name: "Free Certificate",
                        col: "btn-outline-warning",
                    },
                ],
            },
            {
                courseId: 4,
                modules: [],
                title: "Angular",
                description: 'Angular (commonly referred to as "Angular 2+" or "Angular CLI") is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
                imagUrl: "https://seeklogo.com/images/A/angular-logo-B76B1CDE98-seeklogo.com.png",
                route: "4",
                learners: 5.453,
                tags: [{
                        tagId: 2,
                        name: "Final Test",
                        col: "btn-outline-secondary",
                    },
                    {
                        tagId: 4,
                        name: "Recently Added",
                        col: "btn-outline-danger",
                    },
                ],
            },
            {
                courseId: 5,
                modules: [],
                title: "React",
                description: "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.",
                imagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/539px-React.svg.png",
                route: "5",
                learners: 745,
                tags: [{
                    tagId: 4,
                    name: "Recently Added",
                    col: "btn-outline-danger",
                }, ],
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
        challenges: new Map()
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
    },
    actions: {
        /// Structure
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
            const user1 = { id: 1, name: 'Pedro', email: 'pedro@one.one', points: 100 };
            const user2 = { id: 2, name: 'Irene', email: 'irene@two.two', points: 125 };
            const user3 = { id: 3, name: 'Ferran', email: 'ferran@three.three', points: 95 };
            const user4 = { id: 4, name: 'David', email: 'david@four.four', points: 110 };
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
            const loserId = (challenge.challenger == data.winnerId) ? challenge.rival : challenge.challenger;
            const points = parseInt(challenge.points);
            console.log(`${loserId} gives ${points} points to ${data.winnerId} `);
            dispatch('addPoints', { userId: parseInt(data.winnerId), amount: points });
            dispatch('addPoints', { userId: parseInt(loserId), amount: 0 - points });
        },
        addPoints({ state }, data) {
            const user = state.users.get(data.userId);
            user.points += data.amount;
            state.users.set(data.userId, user);
        }
    }
})