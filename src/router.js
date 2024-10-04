// noinspection ES6UnusedImports

import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/views/Home.vue";
import store from '@/store/store.js';

const routes = [
    { path: '/', component: Home, name: 'Home'},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;