<template>
	<viewBase class="v-index">
		<template slot>
			<div class="b-mainWrapper_secondary">
				{{newKey}}{{saved}}
				<button @click="save">ZApisz</button>
				<component-code></component-code>
			</div>
			<div class="b-mainWrapper_primary">
				<component-description></component-description>
			</div>
		</template>
	</viewBase>
</template>

<script>
	/* eslint-disable no-unused-vars, camelcase, func-call-spacing, no-unexpected-multiline */
	/* eslint quotes: [0, { "avoidEscape": true }] */
	import viewBase from './v-base'
	import componentCode from '../components/c-code'
	import componentDescription from '../components/c-description'
	import firebase from '../firebase.js'
	export default {
		name: 'view-code-add',
		components: {
			viewBase,
			componentCode,
			componentDescription
		},
		data() {
			return {
				newKey: '',
				saved: ''
			}
		},
		computed: {
			gistId() {
				return this.$store.state.gist.active
			},
			activeLine() {
				return this.$store.state.gist.line
			},
			activeFile() {
				return this.$store.state.gist.file
			}
		},
		created() {
			this.newKey = this.$route.params.id
		},
		methods: {
			save() {
				let data = {
					db: 'gists',
					key: this.newKey,
					data: {
						gistId: this.gistId,
						activeLine: this.activeLine,
						activeFile: this.activeFile
					}
				}
				firebase.helpers.push(data, "saved", this)
			}
		}
	}
</script>
