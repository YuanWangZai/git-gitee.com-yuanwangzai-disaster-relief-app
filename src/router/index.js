import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '重定向页',
    redirect:"/audit",
  },
  //审核
  {
    path: '/audit',
    name: '审核页',
    component: () =>import('../views/Manage.vue'),
    redirect:"/audit/ready",
    children:[
      {
        path: '/audit/ready',
        name: '待审核',
        component: () =>import('../views/Ready.vue')
      }
    ]
  },
  //知识管理
  {
    path: '/knowledge',
    name: '知识管理页',
    component: () =>import('../views/Manage.vue'),
    redirect:"/konwledge/showed",
    children:[
      {
        path: '/konwledge/showed',
        name: '知识查看',
        component: () =>import('../views/KnowledgeShowed.vue')
      }
    ]
  },
  {
    path:'/login',
    name:'登录',
    component: () =>import('../views/Login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
