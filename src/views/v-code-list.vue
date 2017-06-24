<template>
	<viewBase class="v-index">
		<template slot>
			<router-link class="m-code_add" :to="/code-add/ + newKey">Add new code</router-link>
			{{userId}}
			<div v-for="(gist, index) in gists" class="m-team_item">
			{{gist}}
			</div>
		</template>
	</viewBase>
</template>

<script>
	import viewBase from './v-base.vue'
	import firebase from '../firebase.js'
	export default {
		name: 'view-code-list',
		components: {
			viewBase
		},
		data() {
			return {
				newKey: '',
				gists: {}
			}
		},
		computed: {
			userId() {
				return this.$store.state.user.id
			}
		},
		created() {
			if (this.userId) {
				this.gists = firebase.helpers.fetchDB('data/private/' + this.userId + '/gists')
			}
			this.newKey = firebase.helpers.generateKey({
				db: 'gists'
			})
		}
	}
</script>
