import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        baseURL: 'https://us-central1-asamblea-27a8d.cloudfunctions.net/',
        courses: [],
        overlay: false,
        course: {
            courseId: '',
            title: '',
            description: '',
            imagUrl: '',
            route: '',
            modules: []
        },
        module: {
            moduleId: '',
            title: '',
            description: '',
            imageUrl: '',
            route: '',
            topics: []
        },
        topic: {
            topicId: '',
            title: '',
            cardType: '',
            cardId: '',
            position: '',
            moduleId: '',
        }
    },
    getters: {
        getCourse(state, id) {
            return state.courses[id];
        },
        getModules(state) {
            return state.course.modules;
        },
        getTopics(state, modul) {
            return state.course.modules[modul].topics;
        },
    },
    mutations: {
        SET_COURSES(state, payload) {
            state.courses = payload;
        },
        SET_OVERLAY(state, payload) {
            state.overlay = payload;
        },
    },
    actions: {
        async getCourses({ state, commit }) {
            const courses = await axios.get(state.baseURL + 'getCourses');
            commit('SET_COURSES', courses.data);
            commit('SET_OVERLAY', false);
          },
    }
});