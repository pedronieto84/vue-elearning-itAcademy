import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        baseURL: 'https://us-central1-asamblea-27a8d.cloudfunctions.net/',
        actual: 1,
        topics: [
            {
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
                cardType:  'text'
            }
        ],
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
        },
        updateTopics(state, payload) {
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