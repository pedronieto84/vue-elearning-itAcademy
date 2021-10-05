import { createStore } from 'vuex';

export default createStore({
    state: {
        pointsArray: [1,2,3,4,5],
        currentPointFather: Number,
        topics: [
            {topicId: 0, title: 'Zero'},
            {topicId: 1, title: 'U'},
            {topicId: 2, title: 'Dos'},
            {topicId: 3, title: 'Tres'},
            {topicId: 4, title: 'Quatre'},
            {topicId: 5, title: 'Cinc'},
            {topicId: 6, title: 'Sis'}
        ],
        actual: 0
    },
    getters: {
        getActual(state) {
            return state.actual;
        },
        getTopics(state) {
            return state.topics;
        },
        getPointsArray(state) {
            return state.pointsArray;
        },
        getCurrentPointFather(state) {
            return state.currentPointFather;
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