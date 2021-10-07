import { createStore } from 'vuex';

export default createStore({
    state: {
        /*
                topics: [
                    { topicId: 1, title: 'One' },
                    { topicId: 2, title: 'Two' },
                    { topicId: 3, title: 'Three' },
                    { topicId: 4, title: 'Four' },
                    { topicId: 5, title: 'Five' },
                    { topicId: 6, title: 'Six' },
                    { topicId: 7, title: 'Seven' }
                ],
                actual: 0, */

        topics: [{
                topicId: 1,
                title: 'Titulo 1',

                position: 1,
                moduleId: 1,
                cardId: 1,
                cardType: 'video'
            },
            {
                topicId: 2,
                title: 'Titulo 2',

                position: 2,
                moduleId: 1,
                cardId: 1,
                cardType: 'test'
            },
            {
                topicId: 1,
                title: 'Titulo 3',

                position: 3,
                moduleId: 1,
                cardId: 1,
                cardType: 'list'
            },
            {
                topicId: 1,
                title: 'Titulo 4',
                position: 4,
                moduleId: 1,
                cardId: 1,
                cardType: 'text'
            },

        ],
        actual: 1,
        innerWidth: window.innerWidth,
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
        }
    },
    mutations: {
        updateActual(state, nouActual) {
            state.actual = nouActual;
        }
    },
    actions: {
        updateActual({ commit }, actual) {
            commit('updateActual', actual);
        }
    }
});