<template>
    <div class="container-xl">
        <div class="page-header d-print-none">
            <div class="row g-2 align-items-center">
                <div class="col">
                    <div class="page-pretitle">
                        {{ this.title }}
                    </div>
                    <h2 class="page-title">
                        {{ this.header }}
                    </h2>
                </div>
                <div class="col-12 col-md-auto ms-auto d-print-none">
                    <div class="btn-list">
                        <a href="#" class="btn btn-primary d-none d-sm-inline-block" @click="this.buttonClicked">
                            <Icon icon="ant-design:info-circle-filled" width="20" height="20" />
                            Справка
                        </a>

                        <a href="#" class="btn btn-primary d-sm-none btn-icon" @click="this.buttonClicked">
                            <Icon icon="ant-design:info-circle-filled" width="20" height="20" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

import { Icon } from "@iconify/vue"

export default {

    emits: [
        "buttonClicked"
    ],

    props: {
        title: {
            type: String,
            required: true
        },
        header: {
            type: String,
            required: true
        }
    },

    components: {
		Icon,
	},

    methods: {

        buttonClicked() {
            this.$emit("buttonClicked")
        }
    
    }

}

</script>
