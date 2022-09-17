<template>
    <li class="nav-item active">
        <router-link class="nav-link" :to="{ name: this.title}">
            <span class="nav-link-icon d-md-none d-lg-inline-block">
                <Icon icon="carbon:condition-wait-point" width="20" height="20" />
            </span>
            <span class="nav-link-title">
                {{ this.title }}
            </span>
        </router-link>
    </li>
</template>

<script>

import { Icon } from "@iconify/vue"

export default {

    props: {
        title: {
            type: String,
            required: true
        }
    },

    components: {
		Icon,
	},

}

</script>
