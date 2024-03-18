import { pages } from '../views'
import { RouteRecordRaw } from 'vue-router'
import  LoginForm  from '../components/Authorization/LoginForm.vue'
import RegistrationForm from '../components/Authorization/RegistrationForm.vue'

export const routes: RouteRecordRaw[] = [
    {
        path: '/auth', component: pages.Authorization, name: 'auth', children: [
            {
                path: 'login', component: LoginForm, name:'login'
            },
            {
                path: 'reg', component: RegistrationForm, name:'reg'
            },
        ]
    },
    {
        path: '/me', component: pages.UserAccount, meta: {
            requiresAuth: true
        }
    }

]