<template>
	<viewBase class="v-index">
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
	import viewBase from './v-base'
	import componentCode from '../components/c-code'
	import componentDescription from '../components/c-description'
	export default {
		name: 'view-code-add',
		components: {
			viewBase,
			componentCode,
			componentDescription
		}
	}
</script>
