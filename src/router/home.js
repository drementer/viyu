import EmptyView from '../views/EmptyView.vue';
import Info from '../views/home/Info.vue';
import Input from '../views/home/Input.vue';

export default [
  {
    path: '/home',
    alias: '/',
    name: 'home',
    component: EmptyView,
    redirect: {
      name: 'input',
    },
    children: [
      {
        path: 'input',
        name: 'input',
        component: Input,
      },
      {
        path: 'info',
        name: 'info',
        component: Info,
      },
    ],
  },
];
