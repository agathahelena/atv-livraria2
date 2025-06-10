import { createRouter, createWebHistory } from 'vue-router';

import HomeView from "@/views/HomeView.vue";

const routes = [
        {
            path: '/' ,
            name: 'Home' ,
            component: HomeView
        },
        {
            path: '/equipe' ,
            name: 'Team' ,
            component: () => import(`@/views/TeamView.vue`),
        },
        {
            path: '/termo' ,
            name: 'Termo' ,
            component: () => import(`@/views/TermoView.vue`),
        },
        {
            path: '/envio' ,
            name: 'Envio' ,
            component: () => import(`@/views/EnvioView.vue`),
        },
        {
            path: '/devolucoes' ,
            name: 'Devoluções' ,
            component: () => import(`@/views/DevolucoesView.vue`),
        },
        {
            path: '/livro/:id',
            name: 'Book',
            component: () => import('@/views/BookView.vue'),
            props: true,
        },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;