import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './home.js';
import About from './about.js';
import GetStarted from './get-started';

Vue.use(VueRouter);

const routes = [...Home, ...About, ...GetStarted];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
