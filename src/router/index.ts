import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Scene01 from "../views/Scene01.vue";
import Scene02 from "../views/Scene02.vue";
import Scene03 from "../views/Scene03.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/scene_01",
    name: "scene_01",
    component: Scene01,
  },
  {
    path: "/scene_02",
    name: "scene_02",
    component: Scene02,
  },
  {
    path: "/scene_03",
    name: "scene_03",
    component: Scene03,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
