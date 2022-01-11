import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Location from '../views/Location.vue';
import Map from '../views/Map.vue';
import Appointment from '../views/Appointment.vue';
import Qrcode from '../views/Qrcode.vue';
import Instruction from '../views/Instruction.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/location',
    name: 'Location',
    component: Location,
  },
  {
    path: '/map',
    name: 'Map',
    component: Map,
  },
  {
    path: '/appointment',
    name: 'Appointment',
    component: Appointment,
  },
  {
    path: '/qrcode',
    name: 'Qrcode',
    component: Qrcode,
  },
  {
    path: '/instruction',
    name: 'Instruction',
    component: Instruction,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
