<template>
	<header class="b-header">
		<div class="b-header_primary is-content">
			<div class="m-logo">
				<h1><router-link to="/">_ DESCRIBE <span>flow</span></router-link></h1>
			</div>
			<ul class="m-menu">
				<li class="m-menu_item" v-for="(item, index) in menu">
					 <router-link  :to="'/' + item.path">
					 	<span>{{item.name}}</span>
					 </router-link>
				</li>
			</ul>
			<ul class="m-menu m-menu_user">
					<template v-if="!logged">
						<li class="m-menu_item">
							<router-link  :to="'code-add'">
						 		Add new description
						 	</router-link>
					 	</li>
						<li class="m-menu_item"><a href="#" v-on:click.prevent="signIn">Login</a></li>
					</template>
					<template v-else>
						<li class="m-menu_item"><p>Welcome {{logged}}</p></li>
						<li class="m-menu_item">
							<router-link  :to="'code-add'">
						 		Add new description
						 	</router-link>
					 	</li>
					 	<li class="m-menu_item">
							<router-link  :to="'code-add'">
						 		Your profile
						 	</router-link>
					 	</li>
						<li class="m-menu_item"><a href="#" class="is-secondary" v-on:click.prevent="signOut">Logout</a></li>
					</template>
				</li>
			</ul>
			<a href="#" class="header_menu" @click="toggleMenu()">
		        <div class="header_menu_line"></div>
		        <div class="header_menu_line"></div>
		        <div class="header_menu_line"></div>
		    </a>
		</div>
		<div class="header_nav">
            <ul>                             
                <li class="mobile-only">
                    <ul> 
                        <li><a class="header_sign_in_link sign_in_link" href="https://app.pluralsight.com/id?redirectTo=/">Sign in</a></li>
                        <li><a class="header_sign_up_link" href="/pricing" data-aa-title="nav-signup-cta">Sign up</a></li>
                        <li><a href="/browse">Browse courses</a></li>
                        <li><a href="/learn">For individuals</a></li>
                        <li><a href="/business">For business</a></li>
                        <li><a href="http://help.pluralsight.com/help">Support</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/careers">Careers</a></li>
                        <li><a href="/thehub">Resource Center</a></li>
                    </ul>
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
				mobileMenu: false,
				menu: [{
					path: 'code-list',
					name: 'Most popular'
				}, {
					path: 'code-list',
					name: 'Newest'
				}, {
					path: 'code-add',
					name: 'Categories'
				}, {
					path: 'code-add',
					name: 'Tags'
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
					this.$store.dispatch('userSetId', user.displayName)
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
			},
			toggleMenu() {
				let body = document.getElementsByTagName('body')[0]
				if (!this.mobileMenu) {
					body.classList.add('header-menu-open')
					this.mobileMenu = true
				} else {
					body.classList.remove('header-menu-open')
					this.mobileMenu = false
				}
			}
		}
	}
</script>

