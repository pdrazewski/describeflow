<template>
	<div>
		{{gistId}} <br>
		<textarea>{{activeFile}}</textarea>
		{{activeLine}} <br><br><br>
		<textarea :value="input" @input="update"></textarea>
		<div v-html="compiledMarkdown" class="markdown-body"></div>
		{{newKey}}{{saved}}
		<button @click="save">Zapisz</button>
	</div>
</template>

<script>
	/* eslint-disable no-unused-vars, camelcase, func-call-spacing, no-unexpected-multiline */
	/* eslint quotes: [0, { "avoidEscape": true }] */
	import _ from 'underscore'
	import marked from 'marked'
	import firebase from '../firebase.js'
	export default {
		name: 'component-description',
		data () {
			return {
				input: '# hello',
				newKey: '',
				saved: ''
			}
		},
		created() {
			this.newKey = this.$route.params.id
		},
		computed: {
			compiledMarkdown() {
				return marked(this.input, { sanitize: true })
			},
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
		methods: {
			update: _.debounce(function (e) {
				this.input = e.target.value
			}, 300),
			save() {
				let data = {
					db: 'gists',
					key: this.newKey,
					data: {
						gistId: this.gistId,
						content: {
							file: this.activeFile,
							lineNumber: this.activeLine,
							data: this.input
						}
					}
				}
				firebase.helpers.push(data, "saved", this)
			}
		}
	}
</script>