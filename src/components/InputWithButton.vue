<template>
    <div class="input-group mb-2">
        <input
            type="text"
            class="form-control"
            v-model="this.input"
            :placeholder="this.placeholder"
            @keyup.enter="submitInput"
        />
        <button 
            class="btn" 
            type="button"
            @click="submitInput"
        >
            Run!
        </button>
        <div 
            class="invalid-feedback" 
            style="display: block"
            v-if="this.invalidInput"
        >
            Ошибка ввода! Должно быть: {{ this.placeholder }}
        </div>
    </div>
</template>


<script>

export default {

    props: {
        placeholder: {
            type: String,
            required: true
        },
        invalidInput: {
            type: Boolean,
            required: true
        }
    },

    data() {
        return {
            input: ""
        }
    },

    methods: {
        submitInput() {
            this.$emit("submit", this.input)
        }
    }

}

</script>
