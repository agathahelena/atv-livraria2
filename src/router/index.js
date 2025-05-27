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
        }
    ]
});

export default router;