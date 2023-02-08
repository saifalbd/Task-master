import { createRouter, createWebHashHistory } from "vue-router";
import { mainStore } from "../store";
const routes = [
    {
        path: "/",
        component: () => import("../pages/Authorize/login-page.vue"),
        name: "login",
    },
    {
        path: "/register",
        name: "register",
        component: () => import("../pages/Authorize/register-page.vue"),
    },
    {
        path: "/home",
        name: "home",
        component: () => import("../pages/home.vue"),
    },
    {
        path: "/categories",
        name: "category",
        component: () => import("../pages/Category/index.vue"),
    },
    {
        path: "/employees",
        name: "employee",
        component: () => import("../pages/Employee/index.vue"),
    },
    {
        path: "/teams",
        name: "team",
        component: () => import("../pages/Team/index.vue"),
    },
    {
        path: "/projects",
        name: "project",
        component: () => import("../pages/Project/index.vue"),
    },
    {
        path: "/tasks",
        name: "task",
        component: () => import("../pages/Task/index.vue"),
    },
    {
        path: "/tasks/:id",
        name: "task.show",
        component: () => import("../pages/Task/task.vue"),
        props: route => ({ id: route.params.id })
    },

    /**Start My Jobs */

    {
        path: "/jobs/projects",
        name: "job.project",
        component: () => import("../pages/MyJob/Project/index.vue"),
    },
    {
        path: "/jobs/tasks",
        name: "job.task",
        component: () => import("../pages/MyJob/Task/index.vue"),
    },
    {
        path: "/jobs/tasks/:id",
        name: "job.task.show",
        component: () => import("../pages/MyJob/Task/show.vue"),
        props: route => ({ id: route.params.id })
    },

];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

// router.beforeEach((from, to) => {
//     let main = mainStore();
//     let token = main.token;
//     let guestPath = ["/", "/register"];

//     if (!guestPath.includes(from.path) && !to.name) {
//         return { name: "login" };
//     } else if (guestPath.includes(to.path)) {
//         return true;
//     } else {
//         if (token) {
//             return true;
//         } else {
//             return { name: "login" };
//         }
//     }
// });

export default router;
