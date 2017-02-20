<template>
	<div class="b-mainWrapper">
		<block-header></block-header>
		<div class="b-mainWrapper_content">
			<slot></slot>
		</div>
		<block-footer></block-footer>
	</div>
</template>

<script>
	import blockHeader from '../blocks/b-header'
	import blockFooter from '../blocks/b-footer'
	export default {
		name: 'view-base',
		components: {
			blockHeader,
			blockFooter
		}
	}
</script>

<style lang="scss">
	@import "../assets/css/style.scss";
</style>
