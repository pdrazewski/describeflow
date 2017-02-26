import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		gist: {
			active: '',
			line: '',
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
		gistSetFile({commit}, file) {
			commit('GIST_SET_FILE', file)
		}
	}
})
