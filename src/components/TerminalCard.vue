<template>
    <div class="col-lg">
        <div class="card">
            <div class="ribbon ribbon-top bg-green" v-if="this.valid">
                <Icon icon="akar-icons:star" width="20" height="20" />
            </div>
            <div class="card-body" >
                <p class="text-muted">
                    {{ this.title }}
                </p>
            </div>
            <div class="card-footer">
                <InputWithButton
                    :placeholder="this.input"
                    :invalidInput="this.showError"
                    @submit="this.checkInput"
                />
            </div>
            <div class="card-body" v-if="this.valid">
                <p class="text-muted">
                    {{ this.output }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>

import { Icon } from '@iconify/vue'

import InputWithButton from "@/components/InputWithButton.vue"

export default {

    props: {

        title: {
            type: String,
            required: true
        },
        input: {
            type: String,
            required: true
        },
        output: {
            type: String,
            required: true
        }

    },

    components: {
        Icon,
        InputWithButton
    },

    data() {
        return {
            valid: false,
            showError: false
        }
    },

    methods: {

        checkInput(userInput) {

            if (userInput.toLowerCase() === this.input) {
                this.valid = true
                this.showError = false
            } else {
                this.valid = false
                this.showError = true
            }
        }

    }

}

</script>

<style scoped>
    .col-lg {
        margin-bottom: 40px;
    }
</style>

