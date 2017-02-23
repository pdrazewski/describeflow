<template>
	<header class="b-header">
		<div class="b-header_primary">
			<div class="m-logo">
				<h1>Gistscription</h1>
			</div>
			<ul class="m-menu">
				<li class="m-menu_item">
					 <router-link v-for="(item, index) in menu" :to="'/' + item.path">
					 	<span>{{item.name}}</span>
					 </router-link>
					 <template v-if="!logged">
						<a href="#" v-on:click="signIn">Login</a>
					</template>
					<template v-else>
						<a href="#" v-on:click="signOut">Welcome {{user}}. Logout</a>
					</template>
				</li>
			</ul>
		</div>
	</header>
</template>

<script>
	/* eslint-disable no-unused-vars, camelcase, func-call-spacing, no-unexpected-multiline */
	/* eslint quotes: [0, { "avoidEscape": true }] */
	import {Firebase} from '../firebase'
	export default {
		name: 'header',
		data() {
			return {
				token: '',
				logged: false,
				user: false,
				menu: [{
					path: 'code-list',
					name: 'All docs'
				}, {
					path: 'code-add',
					name: 'Add new'
				}]
			}
		},
		methods: {
			signIn() {
				var provider = new Firebase.auth.GoogleAuthProvider()
				Firebase.auth().signInWithPopup(provider).then(function(result) {
					var token = result.credential.accessToken
					var user = result.user
					this.token = token
					this.user = user.displayName
					this.logged = true
					console.log(token, user)
				}.bind(this)).catch(function(error) {
					var errorCode = error.code
					var errorMessage = error.message
					var email = error.email
					var credential = error.credential
				})
			},
			signOut() {
				Firebase.auth().signOut().then(function() {
					this.logged = false
				}.bind(this))
			}
		}
	}
</script>

