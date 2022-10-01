import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue'),
        },
        {
            path: '/news/:id',
            name: 'newsDetail',
            component: () => import('../views/NewsPage.vue'),
        },
    ],
})

export default router
