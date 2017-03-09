import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		gist: {
			active: '',
			line: '',
			content: '',
			file: ''
		}
	},
	mutations: {
		GIST_SET_ACTIVE (state, gist) {
			state.gist.active = gist
		},
		GIST_SET_LINE (state, line) {
			state.gist.line = line
		},
		GIST_SET_LINE_CONTENT (state, content) {
			state.gist.content = content
		},
		GIST_SET_FILE (state, file) {
			state.gist.file = file
		}
	},
	actions: {
		gistSetActive({commit}, gist) {
			commit('GIST_SET_ACTIVE', gist)
		},
		gistSetLine({commit}, line) {
			commit('GIST_SET_LINE', line)
		},
		gistSetLineContent({commit}, content) {
			commit('GIST_SET_LINE_CONTENT', content)
		},
		gistSetFile({commit}, file) {
			commit('GIST_SET_FILE', file)
		}
	}
})
