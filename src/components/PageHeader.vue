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
            </div>
        </div>
    </div>
</template>

<script>

/*
    Author: Makarov Aleksei
    Target: Page header component
*/

export default {

    props: {
        title: {
            type: String,
            required: true
        },
        header: {
            type: String,
            required: true
        }
    }

}

</script>
