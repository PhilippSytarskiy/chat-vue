import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
Vue.use(VueRouter)


const routes = [
    {   name: 'login',
        path: '/',
        component: () => import('./components/Login')
    },
    {
        name: 'chat',
        path: '/chat',
        component: () => import('./components/Chat')
    }
]


 const router = new VueRouter({
    mode: 'history',
    routes
})

export default router