/*
		* Author:	Makarov Aleksei
		* Target:	Navigation bar options storage
*/

const state = {
	navBarCollapsed: false,
	navBarOptions: [
		{
			title: "Ping",
		},
		{
			title: "Nmap",
		},
		{
			title: "Telnet",
		},
		{
			title: "Netstat",
		},
		{
			title: "Tcpdump",
		},
	]
}

const getters = {
	getNavBarOptions: state => state.navBarOptions,
	getNavBarCollapseStatus: state => state.navBarCollapsed
}

const actions = {
}

const mutations = {
}

export default {
		state, getters, actions, mutations
}

