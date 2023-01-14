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
