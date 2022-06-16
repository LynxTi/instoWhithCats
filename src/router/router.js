import Home from '@/pages/Home.vue';
import Upload from '@/pages/Upload.vue';
import View from '@/pages/View.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/cats/new',
        component: Upload
    },
    {
        path: '/cats/my',
        component: View
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;