
import { RouteRecordRaw } from 'vue-router'
export const routes: RouteRecordRaw[] = [
    {
        path: '/auth', component: () => import('../views/Authorization.vue'), name: 'auth', children: [
            {
                path: 'login', component: () => import('../components/Authorization/LoginForm.vue'), name:'login'
            },
            {
                path: 'reg', component: () => import('../components/Authorization/RegistrationForm.vue'), name:'reg'
            },
        ]
    },
    {
        path: '/me', component: () => import('../views/UserAccount.vue'),
        meta: {
            requiresAuth: true
        },
        children: [
            {path: 'personal', component: () => import('../views/Me/Personal.vue'),
                meta: {
                    requiresAuth: true
                },
            },
            {path: 'schedule', component: () => import('../views/Me/PersonalSchedule.vue'),
                meta: {
                    requiresAuth: true
                },
            },
            {path: '', component: () => import('../views/Me/Main.vue'),
                meta: {
                    requiresAuth: true
                },
            },
            {path: 'record', component: () => import('../views/Me/PersonalRecords.vue'),
                meta: {
                    requiresAuth: true
                },
            },
            {path: 'jobs', component: () => import('../views/Me/PersonalRecords.vue'),
                meta: {
                    requiresAuth: true
                },
            },
        ]
    },
    {
        path: '/', redirect: '/me'
    },
    {path: '/schedule', component: () => import('../views/Schedule.vue'),
        meta: {
            requiresAuth: true
        },
    },
    {path: '/journal', component: () => import('../views/test/TestPage.vue'),
        meta: {
            requiresAuth: true
        },
    },
    {path: '/hub', component: () => import('../views/Hub.vue'),
        meta: {
            requiresAuth: true
        },
    },
    {path: '/test', component: () => import('../views/test/TestPage.vue'),
    },
    {path: '/Anal', component: () => import('../views/Analytics/AnalyticPage.vue'),
    },

]