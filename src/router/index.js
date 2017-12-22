import Vue from 'vue'
import Router from 'vue-router'
import Ga from 'vue-ga'
import Meta from 'vue-meta'
import Home from '@/views/Home'
import About from '@/views/About'
import News from '@/views/News'
import Project from '@/views/Project'

Vue.use(Router)
Vue.use(Meta)

const Routes =  new Router({
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

Ga(Routes, `UA-111523583-1`)

export default Routes