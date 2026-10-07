import type { RouterOptions } from 'nuxt/schema'

export default {
    routes: _routes => [
        {
            name: 'index',
            path: '/',
            component: () => import('./pages/IndexHome.vue')
        }
    ]
} satisfies RouterOptions