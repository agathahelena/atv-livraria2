import HomeView from "@/views/HomeView.vue";
import { createWebHistory, createRouter } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/" ,
            name: "Home" ,
            component: HomeView 
        },
        {
            path: "/equipe" ,
            name: 'Team' ,
            component: () => import(`@/views/TeamView.vue`),
        },
        {
            path: "/termos" ,
            name: 'Termo' ,
            component: () => import('@/views/TermoView.vue'),
        },
        {
            path: "/Envio" ,
            name: 'Envio' ,
            component: () => import('@/views/EnvioView.vue'),
        },
        {
            path: "/Devolucoes" ,
            name: 'Devolucoes',
            component: () => import('@/views/DevolucoesView.vue'),
        }
    ]
});

export default router;