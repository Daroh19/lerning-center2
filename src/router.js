import { createRouter, createWebHistory } from 'vue-router'
import registrationRoutes from './registration/presentation/registration-routes.js'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        {
            path: '/home',
            component: () => import('./shared/presentation/views/home.component.vue')
        },
        ...registrationRoutes,
        {
            path: '/:pathMatch(.*)*',
            component: () => import('./shared/presentation/views/page-not-found.component.vue')
        }
    ]
})

export default router