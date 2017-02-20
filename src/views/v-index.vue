<template>
	<viewBase class="v-index">
		<template slot>
			<div class="b-mainWrapper_secondary">
				<component-editor></component-editor>
			</div>
			<div class="b-mainWrapper_primary">
				To add a new element to the HTML DOM, you must create the element (element node) first, and then append it to an existing element.
			</div>
		</template>
	</viewBase>
</template>

<script>
	import viewBase from './v-base'
	import componentEditor from '../components/c-codeEditor'
	export default {
		name: 'view-index',
		components: {
			viewBase,
			componentEditor
		}
	}
</script>
