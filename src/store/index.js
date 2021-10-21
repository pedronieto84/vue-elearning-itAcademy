import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        baseURL: 'https://us-central1-asamblea-27a8d.cloudfunctions.net/',
        topics: [{
                topicId: 1,
                title: 'Titulo 1',
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
                title: 'Titulo 2',
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
                title: 'Titulo 3',
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
                title: 'Titulo 4',
                position: 4,
                moduleId: 1,
                cardId: 1,
                cardType: 'text'
            },
            {
                topicId: 5,
                title: 'Titulo 5',
                position: 5,
                moduleId: 1,
                cardId: 1,
                cardType: 'text'
            },
            {
                topicId: 6,
                title: 'Titulo 6',
                position: 6,
                moduleId: 1,
                cardId: 1,
                cardType: 'text'
            },
            {
                topicId: 7,
                title: 'Titulo 7',
                position: 7,
                moduleId: 1,
                cardId: 1,
                cardType: 'text'
            },
            {
                topicId: 8,
                title: 'Titulo 8',
                position: 8,
                moduleId: 1,
                cardId: 1,
                cardType: 'text'
            },
            {
                topicId: 9,
                title: 'Titulo 9',
                position: 9,
                moduleId: 1,
                cardId: 1,
                cardType: 'text'
            },
            {
                topicId: 10,
                title: 'Titulo 10',
                position: 10,
                moduleId: 1,
                cardId: 1,
                cardType: 'text'
            },
        ],
        actual: 1
    },
    getters: {
        getActual(state) {
            return state.actual;
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
        }
    },
    mutations: {
        updateActual(state, nouActual) {
            state.actual = nouActual;
        },
        updateTopics(state, payload) {
            console.log(payload);
            state.topics = payload;
        }
    },
    actions: {
        updateActual({ commit }, actual) {
            commit('updateActual', actual);
        },
        async getTopics({ state, commit }) {
            const topics = await axios.get(state.baseURL + 'getTopics');
            commit('updateTopics', topics);
        },
    }
});