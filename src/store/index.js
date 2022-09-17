import { createStore } from 'vuex'

import nmapModal from "./nmap/modal"
import nmapTerminals from "./nmap/terminals"

import headerConf from "./header/config"
import navBarOptions from "./navBar/options"

import pingModal from "./ping/modal"
import pingTerminals from "./ping/terminals"

import telnetModal from "./telnet/modal"
import telnetTerminals from "./telnet/terminals"

import netstatModal from "./netstat/modal"
import netstatTerminals from "./netstat/terminals"

import tcpdumpModal from "./tcpdump/modal"
import tcpdumpTerminals from "./tcpdump/terminals"
 
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

		pingModal,
		pingTerminals,

		netstatModal,
		netstatTerminals,

		nmapModal,
		nmapTerminals,

		telnetModal,
		telnetTerminals,

		tcpdumpModal,
		tcpdumpTerminals
		
	}
})
