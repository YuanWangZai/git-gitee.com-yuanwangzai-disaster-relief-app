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
    component: () =>import('../views/Audit.vue'),
    redirect:"/audit/ready",
    children:[
      {
        path: '/audit/ready',
        name: '待审批',
        component: () =>import('../views/Ready.vue')
      },
      {
        path: '/audit/approval',
        name: '已审批',
        component: () =>import('../views/Approval.vue')
      },
      {
        path: '/audit/helped',
        name: '已救助',
        component: () =>import('../views/Helped.vue')
      },
      {
        path: '/audit/cancel',
        name: '已取消',
        component: () =>import('../views/Cancel.vue')
      },
      {
        path: '/audit/refused',
        name: '未通过',
        component: () =>import('../views/Refused.vue')
      },
    ]
  },
  //知识管理
  {
    path: '/knowledge',
    name: '知识管理页',
    component: () =>import('../views/Knowledge.vue'),
    redirect:"/knowledge/showed",
    children:[
      {
        path: '/knowledge/showed',
        name: '知识查看',
        component: () =>import('../views/KnowledgeShowed.vue')
      },
      {
        path: '/knowledge/hidden',
        name: '已隐藏',
        component: () =>import('../views/KnowledgeHidden.vue')
      },
      {
        path: '/knowledge/edit',
        name: 'edit',
        component: () =>import('../views/KnowledgeEdit.vue')
      }
    ]
  },
  //救援队管理
  {
    path: '/team',
    name: '救援队管理',
    component: () =>import('../views/Team.vue'),
    redirect:"/team/table",
    children:[
      {
        path: '/team/table',
        name: '知识查看',
        component: () =>import('../views/TeamTable.vue')
      },
      {
        path: '/team/details',
        name: '已隐藏',
        component: () =>import('../views/Details.vue')
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
