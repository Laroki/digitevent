import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import PageTwo from './components/PageTwo.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/pagetwo',
      name: 'page2',
      props:true,
      component: PageTwo,
      
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ]
});

export default router;
