import { createRouter, createWebHistory } from "vue-router";
//import Home from '../views/Home.vue';

const routes = [{
        path: "/",
        name: "Courses",
        component: () =>
            import ("../views/courses.vue"),
    },
    {
        path: "/course/:courseId",
        name: "Modules",
        component: () =>
            import ("../views/modules.vue"),
    },
    {
        path: "/course/:courseId/:moduleId",
        name: "Module",
        component: () =>
            import ("../views/modulePage.vue"),
    },
    {
        path: "/tag",
        name: "Tag",
        component: () =>
            import ("../views/tag.vue"),
    },
    {
        path: "/tag/:tagId",
        name: "Tag",
        component: () =>
            import ("../views/tag.vue"),
    },
    {
        path: '/toDelete',
        name: 'toDelete',
        component: () =>
            import ('../views/toDelete.vue')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;