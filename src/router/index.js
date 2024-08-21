import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Courses from '../views/Courses.vue';
import CourseDetail from '../views/CourseDetail.vue';
import Signup from '../views/Signup.vue';
import Dashboard from '../views/Dashboard.vue';
import Certificate from '../views/Certificate.vue';
import Quiz from '../views/Quiz.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/courses', name: 'Courses', component: Courses },
  { path: '/courses/:id', name: 'CourseDetail', component: CourseDetail },
  { path: '/signup', name: 'Signup', component: Signup },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/certificate', name: 'Certificate', component: Certificate },
  { path: '/quiz', name: 'Quiz', component: Quiz },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
