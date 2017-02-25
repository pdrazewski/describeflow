import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		gist: {
			active: '',
			line: ''
		}
	},
	mutations: {
		GIST_SET_ACTIVE (state, gist) {
			state.gist.active = gist
		},
		GIST_SET_LINE (state, line) {
			state.gist.line = line
		}
	},
	actions: {
		gistSetActive({commit}, gist) {
			commit('GIST_SET_ACTIVE', gist)
		},
		gistSetLine({commit}, line) {
			commit('GIST_SET_LINE', line)
		}
	}
})
