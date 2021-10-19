import { createRouter, createWebHistory } from 'vue-router';
//import Home from '../views/Home.vue';

const routes = [{
        path: '/',
        redirect: '/module'
    },
    {
        path: '/module',
        name: 'Module',
        component: () =>
            import ('../views/modulePage.vue')
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