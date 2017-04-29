<template>
	<header class="b-header">
		<div class="b-header_primary">
			<div class="m-logo">
				<h1><router-link to="/">Gistscription</router-link></h1>
			</div>
			<ul class="m-menu">
				<li class="m-menu_item">
					 <router-link v-for="(item, index) in menu" :to="'/' + item.path">
					 	<span>{{item.name}}</span>
					 </router-link>
					 <template v-if="!logged">
						<a href="#" v-on:click.prevent="signIn">Login</a>
					</template>
					<template v-else>
						<a href="#" v-on:click.prevent="signOut">Welcome {{logged}}. Logout</a>
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
	import firebase from '../firebase.js'
	export default {
		name: 'header',
		data() {
			return {
				token: '',
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
		computed: {
			logged() {
				return this.$store.state.user.id
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
					let userData = {
						provider: provider.providerId,
						name: user.displayName,
						email: user.email,
						token: token
					}
					this.$store.dispatch('userSetId', user.uid)
					firebase.appFire.database().ref('users/' + user.uid).set(userData)
					console.log(result)
				}.bind(this)).catch(function(error) {
					var errorCode = error.code
					var errorMessage = error.message
					var email = error.email
					var credential = error.credential
					console.log(error)
				})
			},
			signOut() {
				Firebase.auth().signOut().then(function() {
					this.$store.dispatch('userSetId', false)
				}.bind(this))
			}
		}
	}
</script>

