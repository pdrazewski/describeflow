<template>
	<div class="c-codeEditor">
		<textarea id="myomy">.b-rootBlock {
		    display: none; 
		    @include breakpoint(tablet) {
		        display: block;
		    }
		    &_child {
		        display: none;
		        font-size: 12px;
		        list-style: none;
		        &:hover {
		            color: $cl-primary;
		            font-family: $font-primary;
		            cursor: pointer;
		        }
		    }
		    &_childElement {
		        font-size: 12px;
		        list-style: none;
		    }
		    .is-stateSelector {
		        display: none;
		    }
		</textarea>
	</div>
</template>

<script>
	// import jsonp from 'jsonp'
	import codemirror from 'codemirror'
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
				let numbers = document.querySelectorAll('.CodeMirror-linenumber')
				numbers.forEach(function(nr) {
					nr.parentElement.parentElement.classList.remove('is-active-row')
				})
				number.parentElement.parentElement.classList.add('is-active-row')
				this.$store.dispatch('gistSetLine', number.dataset.lineNumber)
				this.$store.dispatch('gistSetLineContent', number.parentElement.innerText.trim())
				this.$store.dispatch('gistSetFile', 'testfile')
			},
			lineClickMapper() {
				let numbers = document.querySelectorAll('.CodeMirror-linenumber')
				console.log(numbers)
				numbers.forEach(function(number) {
					number.addEventListener('click', function() {
						this.lineClickHandler(number)
					}.bind(this))
				}.bind(this))
			}
			// getGist(event) {
			// 	console.log(event)
			// 	this.show = false
			// 	jsonp('https://gist.github.com/' + this.gistId + '.json', null, function (err, data) {
			// 		if (err) {
			// 			console.error(err.message)
			// 		} else {
			// 			this.gistContent = data.div
			// 			this.gistStyle = data.stylesheet
			// 			this.$store.dispatch('gistSetActive', this.gistId)
			// 		}
			// 		this.show = true
			// 	}.bind(this))
			// }
		},
		created() {
			setTimeout(function() {
				let code = document.getElementById('myomy')
				console.log(code)
				codemirror.fromTextArea(code, {
					lineNumbers: true,
					readOnly: true
				})
				this.lineClickMapper()
			}.bind(this), 1000)
		}
	}
</script>