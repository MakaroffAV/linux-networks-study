<template>
    <Base>
        <template v-slot:content>
            <PageHeader 
                title=""
                header="Netstat"
                @buttonClicked="this.changeNetstatModalStatus"
            />

            <Modal
                v-if="this.getNetstatModalStatus"
                :title="this.getNetstatModalTitle"
                :description="this.getNetstatModalDescription"
                @closeCanvas="this.changeNetstatModalStatus"
            />

            <div class="page-body">
                <div class="container-xl">
                    <div class="row-cards">
                        <TerminalCard
                            v-for="card in this.getNetstatTerminals" :key="card.title"
                            :title="card.title"
                            :input="card.input"
                            :output="card.output"
                        />
                    </div>
                </div>
            </div>
        </template>
    </Base>
</template>


<script>

import { mapGetters, mapMutations } from "vuex"

import Base from "../layouts/Base.vue"
import Modal from "@/components/ModalInfo.vue"
import PageHeader from "@/components/PageHeader.vue"
import TerminalCard from "@/components/TerminalCard.vue"

export default {

	components: {
    Base,
    PageHeader,
    TerminalCard,
    Modal
},

    computed: {
        ...mapGetters([

            "getNetstatModalStatus",

            "getNetstatModalTitle",
            "getNetstatModalDescription",

            "getNetstatTerminals"

        ])
    },

	methods: {

        ...mapMutations([
            "changeNetstatModalStatus"
        ]),

    },

    created() {
        document.title = "Netstat"
    }

}

</script>
