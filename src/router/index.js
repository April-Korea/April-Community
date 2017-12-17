import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Home from '@/views/Home'
import About from '@/views/About'
import News from '@/views/News'
import Project from '@/views/Project'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    },
    { path: '*', redirect: '/home' }
  ]
})
