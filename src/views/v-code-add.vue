<template>
	<viewBase class="v-code">
		<template slot>
			<div class="b-mainWrapper_secondary">
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
	import viewBase from './v-base.vue'
	import componentCode from '../components/c-code.vue'
	import componentDescription from '../components/c-description.vue'
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
				newKey: null,
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
