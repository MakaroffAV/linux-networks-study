<template>
    <div class="modal modal-blur fade show">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
						{{ this.title }}
					</h5>
                    <button type="button" class="btn-close" @click="closeModal">
					</button>
                </div>
                <div class="modal-body">
                	<div v-html="this.description">
            		</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {

	props: {
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		}
	},

	methods: {

		closeModal() {
			this.$emit("closeCanvas")
		}
	}

}

</script>

<style>
.modal {
	display: block;
	background: rgb(38, 38, 38);
	z-index: 99999;
	opacity: 0.95;	
}
</style>
