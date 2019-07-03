import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Dashboard from './views/Dashboard';
import Profile from './views/Profile';
import Login from './views/Login';

import SinglePost from './components/SinglePost.vue';
import AddBlog from './components/AddBlog.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/blogs/:id',
      name: 'singlePost',
      component: SinglePost
    },
    {
      path: '/blog/addblog',
      name: 'addBlog',
      component: AddBlog
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
});
