import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DataBindingVue from '@/views/DataBinding.vue';
import ParentComponentVue from '@/views/ParentComponent.vue';
import CompositionAPI1Vue from '@/views/CompositionAPI1.vue';
import HelloWorld from '@/views/HelloWorld.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
	},
	{
		path: '/DataBinding',
		name: 'databinding',
		component: DataBindingVue,
	},
	{
		path: '/Parentcomponent',
		name: 'parentcomponent',
		component: ParentComponentVue,
	},
	{
		path: '/CompositionAPI1',
		name: 'compositionAPI1',
		component: CompositionAPI1Vue,
	},
	{
		path: '/HelloWorld',
		name: 'helloWorld',
		component: HelloWorld,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
