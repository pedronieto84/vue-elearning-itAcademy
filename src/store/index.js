import { createStore } from 'vuex';

export default createStore({
    state: {
        topics: [
            {topicId: 1, title: 'One'},
            {topicId: 2, title: 'Two'},
            {topicId: 3, title: 'Three'},
            {topicId: 4, title: 'Four'},
            {topicId: 5, title: 'Five'},
            {topicId: 6, title: 'Six'},
            {topicId: 7, title: 'Seven'}
        ],
        actual: 0
    },
    getters: {
        getActual(state) {
            return state.actual;
        },
        getTopics(state) {
            return state.topics;
        }
    },
    mutations: {
        updateActual(state, nouActual){
            state.actual = nouActual;
        }
    },
    actions: {
        updateActual({ commit }, actual) {
            commit('updateActual', actual);
        }
    }
});