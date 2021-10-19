import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [{
        path: '/',
        name: 'Courses',
        //redirect: '/module',
        component: Home
    },
    {
        path: '/course/id',
        name: 'Course',
        component: () => import ('../views/modulePage.vue')
    },
    {
        path: '/course/id/id',
        name: 'Module',
        component: () => import ('../views/modulePage.vue')
    },
    {
        path: '/toDelete',
        name: 'to Delete',
        component: () => import ('../views/toDelete.vue')
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;