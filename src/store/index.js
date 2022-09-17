import { createStore } from 'vuex'


import headerConf from "./header/config"
import navBarOptions from "./navBar/options"

import pingCanvas from "./ping/canvas"
import terminalCards from "./ping/terminals"

export default createStore({
	state: {
	},
	getters: {
	},
	mutations: {
	},
	actions: {
	},
	modules: {
		navBarOptions,
		headerConf,
		pingCanvas,
		terminalCards,

	}
})
