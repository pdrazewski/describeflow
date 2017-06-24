<template>
	<div class="b-mainWrapper">
		<block-header></block-header>
		<div class="b-mainWrapper_content is-content">
			<slot></slot>
		</div>
		<block-footer></block-footer>
	</div>
</template>

<script>
	import blockHeader from '../blocks/b-header.vue'
	import blockFooter from '../blocks/b-footer.vue'
	export default {
		name: 'view-base',
		components: {
			blockHeader,
			blockFooter
		}
	}
</script>
