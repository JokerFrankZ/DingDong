import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/store' //在vue-router中使用vuex，需要再次引入，并且使用store就可以获取到了，无需加$
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      component: () => import('@/views/user/login'),
      meta: {
        title: '欢迎登录-叮咚网'
      }
    },
    {
      path: '/register',
      component: () => import('@/views/user/register'),
      meta: {
        title: '用户注册-叮咚网'
      }
    },
    {
      path: '/home',
      component: () => import('@/views/home/home'),
      meta: {
        title: '首页-叮咚网'
      }
    },
    {
      path: '/search',
      component: () => import('@/views/search/searchResult'),
      meta: {
        title: '商品搜索-叮咚网'
      }
    },
    {
      path: '/detailGoods',
      component: () => import('@/views/goods/detailGoods'),
      meta: {
        title: '商品详细-叮咚网'
      }
    },
    {
      path: '/shoppingCart',
      component: () => import('@/views/shoppingCart/shoppingCart'),
      meta: {
        title: '购物车-叮咚网'
      }
    }
  ]
})

export default router

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  if (to.path === '/login' || to.path === '/register') {
    next()
  } else {
    let token = window.localStorage.getItem('token')
    if (token === null || token === '') {
      next('/login')
    } else {
      next()
    }
  }
})
