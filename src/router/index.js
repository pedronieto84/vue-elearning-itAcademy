import { createRouter, createWebHistory } from "vue-router";
//import Home from '../views/Home.vue';

const routes = [{
        path: "/",
        name: "Home",
        component: () =>
            import ("../views/Home.vue"),
    },
    {
        path: "/courses",
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
        path: '/toDelete',
        name: 'toDelete',
        component: () =>
            import ('../views/toDelete.vue')
    },
    {
        path: "/tag",
        name: "Tag",
        component: () =>
            import ("../views/courses.vue"),
    },
    {
        path: "/tag/:tagId",
        name: "Tags",
        component: () =>
            import ("../views/courses.vue"),
    },
    {
        path: "/competition",
        name: "Competition",
        component: () =>
            import ("../views/competition.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import ("../views/login.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;