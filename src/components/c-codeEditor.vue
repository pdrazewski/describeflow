<template>
	<div class="c-codeEditor">
		<input type="text" v-model="gistId" />
		<button v-on:click="getGist">Load gist</button>
		<div v-if="show">
			<code v-html="gistContent"></code>
		</div>
		<div v-else>
			Loading...
		</div>
		<link :href="gistStyle" rel="stylesheet" />
	</div>
</template>

<script>
	import jsonp from 'jsonp'
	export default {
		name: 'component-codeEditor',
		data () {
			return {
				show: false,
				gistContent: '',
				gistStyle: '',
				gistId: 'c8bb3a6039cfd6b66341d6b0af793191'
			}
		},
		methods: {
			lineClickHandler(number) {
				console.log(number)
			},
			lineClickMapper() {
				let numbers = document.querySelectorAll('.js-line-number')
				numbers.forEach(function(number) {
					number.addEventListener('click', function() {
						this.lineClickHandler(number)
					}.bind(this))
				}.bind(this))
			},
			getGist(event) {
				console.log(event)
				this.show = false
				jsonp('https://gist.github.com/' + this.gistId + '.json', null, function (err, data) {
					if (err) {
						console.error(err.message)
					} else {
						this.gistContent = data.div
						this.gistStyle = data.stylesheet
						setTimeout(this.lineClickMapper, 500)
					}
					this.show = true
				}.bind(this))
			}
		},
		created() {
			this.getGist()
		}
	}
</script>