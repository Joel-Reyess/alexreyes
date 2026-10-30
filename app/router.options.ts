import type { RouterOptions } from 'nuxt/schema'

export default {
    routes: _routes => [
        {
            name: 'index',
            path: '/',
            component: () => import('./pages/IndexHome.vue')
        },
        {
            name: 'projects',
            path: '/projects',
            component: () => import('./pages/ProjectsMain.vue')
        },
        {
            name: 'contact',
            path: '/contact',
            component: () => import('./pages/ContactPage.vue')
        }
    ]
} satisfies RouterOptions