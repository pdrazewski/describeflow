<template>
	<viewBase class="v-index">
		<template slot>
		</template>
	</viewBase>
</template>

<script>
	import viewBase from './v-base'
	export default {
		name: 'view-code-view',
		data() {
			return {
				code: {
					name,
					gist,
					docs: {
						line: 12,
						content: '123'
					}
				}
			}
		},
		components: {
			viewBase
		}
	}
</script>
