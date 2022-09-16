/*
		* Author:	Makarov Aleksei
		* Target:	Navigation bar options storage
*/

const state = {
		navBarOptions: [
				{
						title: "Ping",
						sOpts: [
						]
				},
				{
						title: "Nmcli",
						sOpts: [
						]
				},
				{
						title: "Telnet",
						sOpts: [
						]
				},
				{
						title: "Netstat",
						sOpts: [
						]
				},
				{
						title: "Routing",
						sOpts: [
						]
				},
				{
						title: "Tcpdump",
						sOpts: [
						]
				},
				{
						title: "Traceroute",
						sOpts: [
						]
				},
				{
						title: "Create local network",
						sOpts: [
						]
				}
		]
}

const getters = {
		getNavBarOptions: state => state.navBarOptions
}

const actions = {
}

const mutations = {
}

export default {
		state, getters, actions, mutations
}

