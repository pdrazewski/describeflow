<template>
	<viewBase class="v-index">
		<template slot>
			<router-link class="m-code_add" :to="/code-add/ + newKey">Add new code</router-link>
		</template>
	</viewBase>
</template>

<script>
	import viewBase from './v-base'
	import firebase from '../firebase.js'
	export default {
		name: 'view-code-list',
		components: {
			viewBase
		},
		data() {
			return {
				newKey: ''
			}
		},
		created() {
			this.newKey = firebase.helpers.generateKey({
				db: 'gists'
			})
		}
	}
</script>
