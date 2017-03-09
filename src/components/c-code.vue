<template>
	<div class="c-codeEditor">
		<div class="c-codeEditor_gistForm">
			<input type="text" v-model="gistId" class="c-codeEditor_gistId"/>
			<button v-on:click="getGist" class="c-codeEditor_gistSubmit">Load gist</button>
		</div>
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
		name: 'component-code',
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
				let numbers = document.querySelectorAll('.js-line-number')
				numbers.forEach(function(nr) {
					nr.parentElement.classList.remove('is-active-row')
				})
				number.parentElement.classList.add('is-active-row')
				this.$store.dispatch('gistSetLine', number.dataset.lineNumber)
				this.$store.dispatch('gistSetLineContent', number.parentElement.innerText.trim())
				this.$store.dispatch('gistSetFile', number.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.gist-meta a').getAttribute('href'))
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
						this.$store.dispatch('gistSetActive', this.gistId)
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