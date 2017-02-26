<template>
	<div>
		{{gistId}} <br>
		{{activeFile}}: {{activeLine}} <br><br><br>
		<textarea :value="input" @input="update"></textarea>
		<div v-html="compiledMarkdown" class="markdown-body"></div>
	</div>
</template>

<script>
	import _ from 'underscore'
	import marked from 'marked'
	export default {
		name: 'component-description',
		data () {
			return {
				input: '# hello'
			}
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
			}, 300)
		}
	}
</script>