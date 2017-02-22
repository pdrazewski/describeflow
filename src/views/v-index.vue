<template>
	<viewBase class="v-index">
		<template slot>
			<div class="b-mainWrapper_secondary">
				<component-editor></component-editor>
			</div>
			<div class="b-mainWrapper_primary">
				<h1>Sed rhoncus purus a ex lacinia blandit</h1>
				To add a new element to the HTML DOM, you must create the element (element node) first, and then append it to an existing element. <br> 

				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi nunc, rhoncus cursus ultricies a, egestas vel felis. Proin iaculis tellus orci, sollicitudin placerat est efficitur in. Quisque bibendum eget lectus id aliquet. Vivamus commodo tortor quis felis semper aliquam. Cras eget elit lorem. Suspendisse potenti. Praesent auctor maximus sem, quis feugiat magna gravida eu. <br><br>

Sed rhoncus purus a ex lacinia blandit. Nam non euismod est. Vivamus id accumsan eros. Suspendisse vitae mattis nisi. Nulla tincidunt, diam non tristique sodales, quam enim cursus dui, a euismod ipsum ante at nulla. Donec commodo nunc in neque placerat iaculis. Sed interdum risus mauris, placerat consequat ligula cursus a. Quisque sem dui, sollicitudin sit amet sodales in, vehicula in diam. Ut porta eros ac justo molestie, in semper orci viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer est nisl, imperdiet quis convallis sed, facilisis vel est. <br> <br >
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi nunc, rhoncus cursus ultricies a, egestas vel felis. Proin iaculis tellus orci, sollicitudin placerat est efficitur in. Quisque bibendum eget lectus id aliquet. Vivamus commodo tortor quis felis semper aliquam. Cras eget elit lorem. Suspendisse potenti. Praesent auctor maximus sem, quis feugiat magna gravida eu. <br><br>

Sed rhoncus purus a ex lacinia blandit. Nam non euismod est. Vivamus id accumsan eros. Suspendisse vitae mattis nisi. Nulla tincidunt, diam non tristique sodales, quam enim cursus dui, a euismod ipsum ante at nulla. Donec commodo nunc in neque placerat iaculis. Sed interdum risus mauris, placerat consequat ligula cursus a. Quisque sem dui, sollicitudin sit amet sodales in, vehicula in diam. Ut porta eros ac justo molestie, in semper orci viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer est nisl, imperdiet quis convallis sed, facilisis vel est.
			</div>
		</template>
	</viewBase>
</template>

<script>
	/* eslint-disable no-unused-vars, camelcase, func-call-spacing, no-unexpected-multiline */
	/* eslint quotes: [0, { "avoidEscape": true }] */
	import viewBase from './v-base'
	import componentEditor from '../components/c-codeEditor'
	import Firebase from 'firebase'
	const configFire = {
		apiKey: 'AIzaSyCt2O4Fffj_J8jxlC6yoJ1c1lqjJ1oCyDQ',
		authDomain: 'gistscription.firebaseapp.com',
		databaseURL: 'https://gistscription.firebaseio.com',
		storageBucket: 'gistscription.appspot.com',
		messagingSenderId: '219549841956'
	}
	const appFire = Firebase.initializeApp(configFire)
	export default {
		name: 'view-index',
		components: {
			viewBase,
			componentEditor
		},
		created() {
			console.log(appFire)
		}
	}
</script>
