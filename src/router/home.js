import EmptyView from '../views/EmptyView.vue';
import HomeInfo from '../views/home/HomeInfo.vue';
import HomeView from '../views/home/HomeView.vue';

export default [
  {
    path: '/',
    name: 'home',
    component: EmptyView,
    redirect: {
      name: 'home',
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: HomeView,
      },
      {
        path: '/home/info',
        name: 'info',
        component: HomeInfo,
      },
    ],
  },
];
