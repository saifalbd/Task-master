import {
    createRouter,
    createWebHashHistory,
    createWebHistory,
} from "vue-router";
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
        path: "/forgot-password",
        name: "forgotPassword",
        component: () => import("../pages/Authorize/forgotPassword.vue"),
    },

    
    {
        path: "/home",
        name: "home",
        component: () => import("../pages/Home/index.vue"),
    },
    {
        path: "/home-job",
        name: "job.home",
        component: () => import("../pages/Home/jobBoard.vue"),
    },
    {
        path: "/categories",
        name: "category",
        component: () => import("../pages/Category/index.vue"),
    },
    {
        path: "/task-types",
        name: "taskType",
        component: () => import("../pages/Category/TaskTypes.vue"),
    },
    {
        path:'/contacts',
        name:'contact',
        component: () => import("../pages/Contact/index.vue"),
    },
    {
        path: "/departments",
        name: "department",
        component: () => import("../pages/Department/index.vue"),
    },
    {
        path: "/designations",
        name: "designation",
        component: () => import("../pages/Designation/index.vue"),
    },
    {
        path: "/employees",
        name: "employee",
        component: () => import("../pages/Employee/index.vue"),
    },
    {
        path: "/clients",
        name: "client",
        component: () => import("../pages/Client/index.vue"),
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
        path: "/projects/:id",
        name: "project.show",
        component: () => import("../pages/Project/show.vue"),
        props: (route) => ({ id: route.params.id }),
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
        props: (route) => ({ id: route.params.id }),
    },
    {
        path:'/task-archives',
        name:'task.archive',
        component:()=>import("../pages/Task/archives.vue")
    },

    /**Start My Jobs */

    {
        path: "/jobs/projects",
        name: "job.project",
        component: () => import("../pages/MyJob/Project/index.vue"),
    },
    {
        path: "/jobs/projects/:id",
        name: "job.project.show",
        component: () => import("../pages/MyJob/Project/show.vue"),
        props: (route) => ({ id: route.params.id }),
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
        props: (route) => ({ id: route.params.id }),
    },

    {
        path:'/jobs/task-archives',
        name:'job.task.archive',
        component:()=>import("../pages/MyJob/Task/Archives.vue")
    },
  
    {
        path: "/chats",
        name: "chat",
        component: () => import("../pages/Chat/index.vue"),
    },
    {
        path:'/profile',
        name:'profile',
        component:()=>import('../pages/Profile/index.vue')
    },
    {
        path:'/user-profile/:user',
        name:'userProfile',
        component:()=>import('../pages/Profile/index.vue'),
        props: (route) => ({ user_id: route.params.user }),
    },
    {
        path:'/to-do-list',
        name:'toDoList',
        component:()=>import('../pages/ToDoList/index.vue'),
        
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((from, to) => {
    let main = mainStore();
    let token = main.token;
    let guestPath = ["/", "/register"];
    if(to.name){
        if (!guestPath.includes(from.path) && !to.name) {
            return { name: "login" };
        } else if (guestPath.includes(to.path)) {
            return true;
        } else {
            if (token) {
                return true;
            } else {
                return { name: "login" };
            }
        }
    }
   
});

export default router;
