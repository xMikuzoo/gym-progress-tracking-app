import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/:pathMatch(.*)*',
		redirect: { path: '/home' },
	},
	{
		path: '/home',
		name: 'Home',
		component: () => import('@/views/home/Home.vue'),
		meta: {
			title: 'Strona Główna',
		},
	},
]

const router = createRouter({
	history: createWebHistory(import.meta.env.VITE_APP_PATH),
	routes,
})

export { router }
