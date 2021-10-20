import { createRouter, createWebHistory } from 'vue-router';
//import Home from '../views/Home.vue';

const routes = [{
        path: '/',
        name: 'Courses',
        component: () =>
            import ('../views/courses.vue')
    },
    {
        path: '/course/:courseId',
        name: 'Modules',
        component: () =>
            import ('../views/modules.vue')
    },
    {
        path: '/course/:courseId/:moduleId',
        name: 'Module',
        component: () =>
            import ('../views/modulePage.vue')
    },
    {
        path: '/toDeleteFerranTest',
        name: 'TO DELETE LATER - TESTS BY FERRAN',
        component: () =>
            import ('../views/toDeleteFerranTest.vue')
    },
    {
        path: '/toDeleteModuleCard',
        name: 'moduleCard',
        component: () =>
            import ('../views/toDeleteModuleCard.vue')
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;