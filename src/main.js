/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'

// store
import store from './store/store.js'

// routing
import index from './views/v-index'
import codeList from './views/v-code-list'
import codeView from './views/v-code-view'
import codeAdd from './views/v-code-add'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{ path: '/', component: index },
		{ path: '/code-list', component: codeList },
		{ path: '/code-view', component: codeView },
		{ path: '/code-add/:id?', component: codeAdd }
	]
})

new Vue({
	store,
	router
}).$mount('#app')

/*
Logowanie w store
Zapisywanie wpisów po name i id
Powiązanie wpisu z gist ID
Gist ID line numbers powiązane z komentarzami oraz disqus
Publiczne, prywatne gisty
Publish link
*/
