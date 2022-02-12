import vueRouter from 'vue-router'


import User from './components/User'
import UserAuth from './components/UserAuth'
import UserContact from './components/UserContact'
import UserTransaction from './components/UserTransaction'
import App from './App'


const router = new vueRouter({
        mode: 'history',
        base: __dirname,
        routes: [
            {
                path: '/',
                name: "root",
                component: App
            },
            {
                path: '/user/:username',
                name: "user",
                component: User
            },
            {
                path: '/user/auth',
                name: "user_auth",
                component: UserAuth
            },
            {
                path: '/user/contact/:username',
                name: "user_contact",
                component: UserContact
            },
            {
                path: '/user/transaction/:username',
                name: "user_transaction",
                component: UserTransaction
            },
        ]
    })



export default router