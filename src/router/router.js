import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from "@/public/pages/log-in.page.vue";
import RegisterAdminComponent from "@/public/pages/register-admin.page.vue";
import LogOutComponent from "@/public/component/log-out.component.vue";
import authService from "@/public/services/auth.service.js";
import DashboardComponent from "@/public/pages/dashboard.page.vue";
import AdminDashboardComponent from "@/admin/pages/admin-dashboard.page.vue";
import ChangePasswordComponent from "@/public/pages/change-password.page.vue";
import RegisterNewClientComponent from "@/admin/pages/create-new-client.page.vue";
import CreateNewClassComponent from "@/admin/pages/create-new-class.page.vue";
import CreateNewTrainerComponent from "@/admin/pages/create-new-trainer.page.vue";



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
        meta: { requiresAuth: false },
    },
    {
        path: '/admin-dashboard',
        name: 'admin-dashboard',
        component: AdminDashboardComponent,
        meta: { requiresAuth: false },
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
    },
    {
        path: '/register-client',
        name: 'register-client',
        component: RegisterNewClientComponent,
        meta: { requiresAuth: false },
    },
    {
        path: '/create-new-class',
        name: 'create-new-class',
        component: CreateNewClassComponent,
        meta: { requiresAuth: false },
    },
    {
        path: '/register-trainer',
        name: 'register-trainer',
        component: CreateNewTrainerComponent,
        meta: { requiresAuth: false },
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
