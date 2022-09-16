<template>
    <Base>
        <template v-slot:content>
            <PageHeader title="Приветствие" header="Информация о приложении" />
            <div class="page-body">
                <div class="container-xl d-flex flex-column justify-content-center">
                    <div class="empty">
                        <p class="empty-title">No results found</p>
                        <p class="empty-subtitle text-muted">
                            Try adjusting your search or filter to find what you're looking for.
                        </p>
                    </div>
                </div>
            </div>
        </template>
    </Base>
</template>


<script>

/*
	Author:	Makarov Aleksei
	Target:	Welcome study app page
*/

import Base from "../layouts/Base.vue"
import PageHeader from "@/components/PageHeader.vue";

export default {

	components: {
    	Base,
    	PageHeader,
	},

}

</script>
