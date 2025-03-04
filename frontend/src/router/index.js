//index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/HomePage/Home.vue';
import PageLogin from '@/components/LoginPage/PageLogin.vue';
import Register from '@/components/RegisterPage/Register.vue';
import PageStudent from '@/components/StudentPage/PageStudent.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'PageLogin',
    component: PageLogin
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/StudentDashboard',
    name: 'PageStudent',
    component: PageStudent
  },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  });
  

export default router;
