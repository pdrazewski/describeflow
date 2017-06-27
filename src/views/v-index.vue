<template>
	<viewBase class="v-index">
		<template slot>
			<div class="hero">
				<div class="hero_content">
					Describe your <span class="hero_contentType">{{flow}}</span> <span class="hero_contentFlow">flow</span>
				</div>
			</div>
			<div class="b-mainWrapper_content is-content">
				<div class="timeline-card">
					<span class="category">CSS</span>
					<p class="card-title">CSS Coding standards </p>
					<p class="desc">This is a chronology of events as they occur in the Final timeline as of the end of BTTF3 (i.e. the 'Eastwood' timeline)</p>
				</div>
				<div class="timeline-card">
					<span class="category">JS</span>
					<p class="card-title">JS Module pattern</p>
					<p class="desc">This is a chronology of events as they occur in the Final timeline as of the end of BTTF3 (i.e. the 'Eastwood' timeline)</p>
				</div>
				<div class="timeline-card">
					<span class="category">JS</span>
					<p class="card-title">JS Singleton pattern</p>
					<p class="desc">This is a chronology of events as they occur in the Final timeline as of the end of BTTF3 (i.e. the 'Eastwood' timeline)</p>
				</div>
				<div class="timeline-card">
					<span class="category">Cinema</span>
					<p class="card-title">Back to The Future Final Timeline</p>
					<p class="desc">This is a chronology of events as they occur in the Final timeline as of the end of BTTF3 (i.e. the 'Eastwood' timeline)</p>
				</div>
				<div class="timeline-card">
					<span class="category">Cinema</span>
					<p class="card-title">Back to The Future Final Timeline</p>
					<p class="desc">This is a chronology of events as they occur in the Final timeline as of the end of BTTF3 (i.e. the 'Eastwood' timeline)</p>
				</div>
				<div class="timeline-card">
					<span class="category">Cinema</span>
					<p class="card-title">Back to The Future Final Timeline</p>
					<p class="desc">This is a chronology of events as they occur in the Final timeline as of the end of BTTF3 (i.e. the 'Eastwood' timeline)</p>
				</div>
				<div class="timeline-card">
					<span class="category">CSS</span>
					<p class="card-title">CSS Coding standards </p>
					<p class="desc">This is a chronology of events as they occur in the Final timeline as of the end of BTTF3 (i.e. the 'Eastwood' timeline)</p>
				</div>
				<div class="timeline-card">
					<span class="category">JS</span>
					<p class="card-title">JS Module pattern</p>
					<p class="desc">This is a chronology of events as they occur in the Final timeline as of the end of BTTF3 (i.e. the 'Eastwood' timeline)</p>
				</div>
				<div class="timeline-card">
					<span class="category">JS</span>
					<p class="card-title">JS Singleton pattern</p>
					<p class="desc">This is a chronology of events as they occur in the Final timeline as of the end of BTTF3 (i.e. the 'Eastwood' timeline)</p>
				</div>
				<div class="timeline-card">
					<span class="category">Cinema</span>
					<p class="card-title">Back to The Future Final Timeline</p>
					<p class="desc">This is a chronology of events as they occur in the Final timeline as of the end of BTTF3 (i.e. the 'Eastwood' timeline)</p>
				</div>
				<div class="timeline-card">
					<span class="category">Cinema</span>
					<p class="card-title">Back to The Future Final Timeline</p>
					<p class="desc">This is a chronology of events as they occur in the Final timeline as of the end of BTTF3 (i.e. the 'Eastwood' timeline)</p>
				</div>
				<div class="timeline-card">
					<span class="category">Cinema</span>
					<p class="card-title">Back to The Future Final Timeline</p>
					<p class="desc">This is a chronology of events as they occur in the Final timeline as of the end of BTTF3 (i.e. the 'Eastwood' timeline)</p>
				</div>
			</div>
		</template>
	</viewBase>
</template>
 
<script>
	/* eslint-disable no-unused-vars, camelcase, func-call-spacing, no-unexpected-multiline */
	/* eslint quotes: [0, { "avoidEscape": true }] */
	import blockHeader from '../blocks/b-header.vue'
	import blockFooter from '../blocks/b-footer.vue'
	import viewBase from './v-base.vue'
	export default {
		name: 'view-index',
		components: {
			blockHeader,
			blockFooter,
			viewBase
		},
		data() {
			return {
				items: ['Programming', 'Cooking', 'Coding', 'Learning', 'Training'],
				flow: 'Programming',
				start: 0
			}
		},
		methods: {
			flowItem() {
				if (this.start === 4) {
					this.start = 0
				} else {
					this.start++
				}
				this.flow = this.items[this.start]
			}
		},
		created() {
			setInterval(this.flowItem, 3000)
		}
	}
</script>
