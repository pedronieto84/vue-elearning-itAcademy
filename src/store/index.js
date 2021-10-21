import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        baseURL: 'https://us-central1-elearning-vue-itacademy.cloudfunctions.net',
        actual: 1,
        courses: [
            {
                courseId: 1,
                modules: [],
                title: 'Course 1: JavaScript',
                description: "Description 1 (from Vue store, not from backend or database)",
                imagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
                route: '1'
            },
            {
                courseId: 2,
                modules: [],
                title: 'Course 2: TypeScript',
                description: "Description 2 (from Vue store, not from backend or database)",
                imagUrl: 'https://andygeek.com/media/ts.png',
                route: '2'
            }
        ],
        modules: [
            {
                moduleId: 1,
                topics: [],
                title: 'Module 1',
                description: 'Description 1  (from Vue store, not from backend or database)',
                imagUrl: 'image url',
                route: '1'
            },
            {
                moduleId: 2,
                topics: [],
                title: 'Module 2',
                description: 'Description 2  (from Vue store, not from backend or database)',
                imagUrl: 'image url',
                route: '2'
            }
        ],
        topics: [
            {
                topicId: 1,
                title: 'Topic 1',
                position: 1,
                moduleId: 1,
                cardId: 1,
                cardType: 'video',
                card: {
                    videoUrl: 'https://www.youtube.com/watch?v=iXoViMla9fc'
                }
            },
            {
                topicId: 2,
                title: 'Topic 2',
                position: 2,
                moduleId: 1,
                cardId: 1,
                cardType: 'test',
                card: {
                    testId: 1,
                    title: 'Title de test',
                    subtitle: 'Ens referim a tota l`area metropolitana',
                    question: 'Pregunta quants habitants te Barcelona?',
                    items: [{
                            answer: '100 milió',
                            right: false
                        },
                        {
                            answer: '10 milions',
                            right: false
                        }, {
                            answer: '3 milions',
                            right: true
                        }, {
                            answer: '100 mil',
                            right: false
                        },
                    ]
                }
            },
            {
                topicId: 3,
                title: 'Topic 3',
                position: 3,
                moduleId: 1,
                cardId: 1,
                cardType: 'list',
                card: {
                    items: ["Fdklsjfadlkfjdjfajdjfl jdhfkashkjfdah jfkdfjhaljknfjkdkfld jkdjfhsjkdhfda iqowqu ioqww` jdkhkf jdhaf qioqw m iwodqoie jdskha laos sadoa iouireordsaidjld dafjdkahfjahfdafkdah", "kaskjdajsh jdhfkashkjfdah jfkdfjhaljknfjkdkfldjkdjfhs jkdhfda iqowqu ioqww` jdkhkf jdhaf qioqw m iwodqoie jdskha laos sadoaiouireor dsaidjld dafjdkahfjahfdafkdah", "sjkhasda", "sjhdka", "Sajhkdsdkajdskhadhasj hoa que tal ccvfs fsgsg gdsgsf sgsf ro."]
                }
            },
            {
                topicId: 4,
                title: 'Topic 4',
                position: 4,
                moduleId: 1,
                cardId: 1,
                cardType: 'text'
            },
            {
                topicId: 5,
                title: 'Topic 5',
                position: 5,
                moduleId: 1,
                cardId: 1,
                cardType: 'text'
            },
            {
                topicId: 6,
                title: 'Topic 6',
                position: 6,
                moduleId: 1,
                cardId: 1,
                cardType: 'text'
            },
            {
                topicId: 7,
                title: 'Topic 7',
                position: 7,
                moduleId: 1,
                cardId: 1,
                cardType: 'text'
            },
            {
                topicId: 8,
                title: 'Topic 8',
                position: 8,
                moduleId: 1,
                cardId: 1,
                cardType: 'text'
            },
            {
                topicId: 9,
                title: 'Topic 9',
                position: 9,
                moduleId: 1,
                cardId: 1,
                cardType: 'text'
            },
            {
                topicId: 10,
                title: 'Topic 10',
                position: 10,
                moduleId: 1,
                cardId: 1,
                cardType: 'text'
            },
        ]
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
        }
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
        }
    },
    actions: {
        updateActual({ commit }, actual) {
            commit('updateActual', actual);
        },
        async getCourses({ state, commit }) {
            try{
                const courses = await axios.get(state.baseURL + '/getCourses');
                console.log(courses.data);
                commit('setCourses', courses.data);
            } catch(e) {
                console.log(e);
            }
        },
        async getModules({ state, commit }, courseId) {
            try{
                const modules = await axios({method: 'GET', url: state.baseURL+'/getModules?courseId='+courseId});

                //const modules = await axios.get(state.baseURL+'/getModules?courseId='+courseId);
                //const modules = await axios({method: 'POST', url: state.baseURL+'/getModules', data: {courseId: 1} });
                
                console.log('BBDD: ');
                console.log(modules.data);
                commit('setModules', modules.data);
            } catch(e) {
                console.log(e);
            }
        },
        async getTopics({ state, commit }, courseId, moduleId) {
            const topics = await axios.get(state.baseURL + '/getTopics?courseId=' + courseId + '&moduleId=' + moduleId);
            commit('setTopics', topics.data);
        },
        async getCourse({state}, courseId) {
            const course = await axios.get(state.baseURL + '/getCourse' + courseId);
            return course.data;
        },
        async getModule({state}, courseId, moduleId) {
            const module = await axios.get(state.baseURL + '/getModule?courseId=' + courseId + '&moduleId=' + moduleId);
            return module.data;
        },
        async getTopic({state}, courseId, moduleId, topicId) {
            const topic = await axios.get(state.baseURL + '/getTopic?courseId=' + courseId + '&moduleId=' + moduleId + '&topicId=' + topicId);
            return topic.data;
        }
    }
});