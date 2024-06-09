import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from "@/public/pages/log-in.page.vue";
import RegisterAdminComponent from "@/public/pages/register-admin.page.vue";
import LogOutComponent from "@/public/component/log-out.component.vue";
import authService from "@/public/services/auth.service.js";
import DashboardComponent from "@/public/pages/dashboard.page.vue";
import ChangePasswordComponent from "@/public/pages/change-password.page.vue";


const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'login',
        component: LoginComponent,
    },
    {
        path: '/register-admin',
        name: 'register-admin',
        component: RegisterAdminComponent,
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: DashboardComponent,
        meta: { requiresAuth: true },
    },
    {
        path: '/logout',
        name: 'logout',
        component: LogOutComponent,
    },
    {
        path: '/reset-password',
        name: 'reset-password',
        component: ChangePasswordComponent,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        // Route requires authentication
        if (authService.getCurrentUser()) {
            next(); // User is logged in, proceed to the route
        } else {
            next({ name: 'login' }); // Redirect to the login page
        }
    } else {
        next(); // No authentication required, proceed
    }
});

export default router;
