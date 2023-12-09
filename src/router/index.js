import { createRouter, createWebHistory } from 'vue-router';
import AppTodoListView from '@/views/TodoListView.vue';

const routes = [
  {
    path: '/',
    name: 'TodoList',
    component: AppTodoListView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
