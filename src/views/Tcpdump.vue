<template>
    <Base>
        <template v-slot:content>
            <PageHeader 
                title=""
                header="Tcpdump"
                @buttonClicked="this.changeTcpDumpModalStatus"
            />

            <Modal
                v-if="this.getTcpDumpModalStatus"
                :title="this.getTcpDumpModalTitle"
                :description="this.getTcpDumpModalDescription"
                @closeCanvas="this.changeTcpDumpModalStatus"
            />

            <div class="page-body">
                <div class="container-xl">
                    <div class="row-cards">
                        <TerminalCard
                            v-for="card in this.getTcpdumpTerminals" :key="card.title"
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
    Modal,
    PageHeader,
    TerminalCard,
},

    computed: {
        ...mapGetters([

            "getTcpDumpModalStatus",

            "getTcpDumpModalTitle",
            "getTcpDumpModalDescription",

            "getTcpdumpTerminals"

        ])
    },

	methods: {

        ...mapMutations([
            "changeTcpDumpModalStatus"
        ]),

    },

    created() {
      document.title = "Tcpdump"
    }

}

</script>
