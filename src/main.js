/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'

// store
import store from './store/store.js'

// routing
import index from './views/v-index'
import codeList from './views/v-code-list'
import codeView from './views/v-code-view'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{ path: '/', component: index },
		{ path: '/code-list', component: codeList },
		{ path: '/code-view', component: codeView }
	]
})

new Vue({
	store,
	router
}).$mount('#app')
