import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Dashboard from './views/Dashboard';
import Profile from './views/Profile';
import General from './views/General';
import Account from './views/Account';
import Security from './views/Security';
import Email from './views/Email';
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
      component: Profile,
      children: [
        {
          path: 'general',
          name: 'general',
          component: General
        },
        {
          path: 'account',
          name: 'account',
          component: Account
        },
        {
          path: 'security',
          name: 'security',
          component: Security
        },
        {
          path: 'email',
          name: 'email',
          component: Email
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
});
