<template>
    <Base>
        <template v-slot:content>
            <PageHeader 
                title=""
                header="Telnet"
                @buttonClicked="this.changeTelNetModalStatus"
            />

            <Modal
                v-if="this.getTelNetModalStatus"
                :title="this.getTelNetModalTitle"
                :description="this.getTelNetModalDescription"
                @closeCanvas="this.changeTelNetModalStatus"
            />

            <div class="page-body">
                <div class="container-xl">
                    <div class="row-cards">
                        <TerminalCard
                            v-for="card in this.getTelnetTerminals" :key="card.title"
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

            "getTelNetModalStatus",

            "getTelNetModalTitle",
            "getTelNetModalDescription",

            "getTelnetTerminals"

        ])
    },

	methods: {

        ...mapMutations([
            "changeTelNetModalStatus"
        ]),

    },

    created() {
      document.title = "Telnet"
    }

}

</script>
