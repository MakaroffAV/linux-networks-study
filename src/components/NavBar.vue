<template>
    <aside class="navbar navbar-vertical navbar-expand-lg navbar-dark">
        <div class="container-fluid">
        	<div class="collapse navbar-collapse">
				<ul class="navbar-nav pt-lg-3">

					<NavBarElement
						v-for="elem in this.getNavBarOptions" 
						:key="elem.title"
							:title="elem.title"
					/>

				</ul>
            </div>
        </div>
    </aside>
</template>

<script>

/*
	Author:	Makarov Aleksei
	Target:	Side bar app element
*/

import { mapGetters } from "vuex"

import NavBarElement from "../components/NavBarElement.vue"

export default {

	components: {
		NavBarElement
	},

	computed: {
		...mapGetters([
			"getNavBarOptions"	
		])
	}
}

</script>
