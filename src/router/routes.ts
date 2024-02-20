import type { RouteRecordRaw } from 'vue-router';

export default <RouteRecordRaw[]>[
  {
    name: 'home',
    path: '/',
    component: () => import('@/views/HomeView.vue')
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('@/views/AboutView.vue')
  },
  {
    name: 'item',
    path: '/item/:id',
    props: route => ({
      id: Number(route.params.id),
      type:'mobile'
    }),
    component: () => import('@/views/ItemView.vue')
  },
  {
    name: 'itemComp',
    path: '/itemComp/:id',
    props: route => ({
      id: Number(route.params.id),
      type:'comp'
    }),
    component: () => import('@/views/ItemView.vue')
  },
  {
    name: 'cotalog',
    path: '/cotalog',
    component: () => import('@/views/CatalogView.vue'),
    children: [
      {
        name: "cotalogAll",
        path: '/cotalog/',
        component: () => import('@/views/cotalog/CotalogAllView.vue'),

      },
      {
        name: "laptop",
        path: 'laptop',
        component: () => import('@/views/cotalog/LaptopView.vue'),

      },
      {
        name: "smartphones",
        path: 'smartphones',
        component: () => import('@/views/cotalog/SmartphonesView.vue'),

      },
      {
        name: "tablets",
        path: 'tablets',
        component: () => import('@/views/cotalog/TabletsView.vue'),

      },
      {
        name: "pc",
        path: 'pc',
        component: () => import('@/views/cotalog/PcView.vue'),
      },
      {
        name: "camera",
        path: 'camera',
        component: () => import('@/views/cotalog/CameraView.vue'),
      },
      {
        name: "tv",
        path: 'tv',
        component: () => import('@/views/cotalog/TvView.vue'),
      },
      {
        name: "headphones",
        path: 'headphones',
        component: () => import('@/views/cotalog/HeadphonesView.vue'),
      },

    ]
  },

]