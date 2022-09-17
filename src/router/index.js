import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: "/ping",
		name: "Ping",
		component: () => import("../views/Ping.vue") 
	},
	{
		path: "/nmap",
		name: "Nmap",
		component: () => import("../views/Nmap.vue") 
	},
	{
		path: "/nmcli",
		name: "Nmcli",
		component: () => import("../views/Nmcli.vue") 
	},
	{
		path: "/telnet",
		name: "Telnet",
		component: () => import("../views/Telnet.vue") 
	},
	{
		path: "/netstat",
		name: "Netstat",
		component: () => import("../views/Netstat.vue") 
	},
	{
		path: "/routing",
		name: "Routing",
		component: () => import("../views/Routing.vue") 
	},
	{
		path: "/tcpdump",
		name: "Tcpdump",
		component: () => import("../views/Tcpdump.vue") 
	},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
