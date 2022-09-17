<template>
    <div class="navbar-expand-md">
        <div :class="this.navBarClass">
            <div class="navbar navbar-light">
                <div class="container-xl">
                    <ul class="navbar-nav">
						<NavBarElement
							v-for="elem in this.getNavBarOptions"
							:key="elem.title"
							:title="elem.title"
						/>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters } from "vuex"

import NavBarElement from "../components/NavBarElement.vue"

export default {

	components: {
    	NavBarElement,
	},

	computed: {

		...mapGetters([
			"getNavBarOptions",
			"getHeaderButtonCollapseStatus"
		]),

		navBarClass: function() {
			return this.getHeaderButtonCollapseStatus ? "collapse navbar-collapse show" : "collapse navbar-collapse"
		}

	}

}

</script>
