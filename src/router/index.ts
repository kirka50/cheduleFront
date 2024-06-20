import {createRouter, createWebHistory} from 'vue-router'
import {routes} from "./routes";
import {useUserStore} from "../store/user/model/userStore";
const router = createRouter({
    history: createWebHistory(),
    routes,
})
router.beforeEach((to,from, next) => {
    const userStore = useUserStore()
    if (to.meta.requiresAuth && !userStore.isUserAuth) {
        console.log(userStore.isUserAuth)
        console.log('da')
        next('/auth/login')
    } else (next())
})
export default router