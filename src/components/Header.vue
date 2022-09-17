<template>
    <header class="navbar navbar-expand-md navbar-light d-print-none">
        <div class="container-xl">
            <button 
                class="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbar-menu" 
                :aria-expanded="this.getHeaderButtonCollapseStatus"
                @click="changeHeaderNavBarCollapse"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-nav flex-row order-md-last">
                <div class="nav-item d-none d-md-flex me-3">
                    <div class="btn-list">
                        <a 
                            href="https://github.com/MakaroffAV/linux-networks-study.git" 
                            class="btn" 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            <Icon 
                                icon="akar-icons:github-fill"
                                width="20" 
                                height="20"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

import { mapGetters, mapMutations } from "vuex"

import { Icon } from "@iconify/vue"

export default {

    components: {
		Icon
	},

    computed: {
        ...mapGetters([
            "getHeaderButtonCollapseStatus"
        ])
    },

    methods: {
        ...mapMutations([
            "changeHeaderNavBarCollapse"
        ])
    }
    
}
</script>
