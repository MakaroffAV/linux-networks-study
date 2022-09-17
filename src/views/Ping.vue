<template>
    <Base>
        <template v-slot:content>
            <PageHeader 
                title=""
                header="Ping"
                @buttonClicked="this.changePingCanvasOpenStatus"
            />

            <Modal
                v-if="this.getPingCanvasOpen"
                :title="this.getPingCanvasTitle"
                :description="this.getPingCanvasDescription"
                @closeCanvas="this.changePingCanvasOpenStatus"
            />

            <div class="page-body">
                <div class="container-xl">
                    <div class="row-cards">
                        <TerminalCard
                            v-for="card in this.getPingTerminalCards" :key="card.title"
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
import PageHeader from "@/components/PageHeader.vue"
import TerminalCard from "@/components/TerminalCard.vue"
import Modal from "@/components/ModalInfo.vue"

export default {

	components: {
    Base,
    PageHeader,
    TerminalCard,
    Modal
},

    computed: {
        ...mapGetters([

            "getPingCanvasOpen",

            "getPingCanvasTitle",
            "getPingCanvasDescription",

            "getPingTerminalCards"

        ])
    },

	methods: {

        ...mapMutations([
            "changePingCanvasOpenStatus"
        ]),

    },

    created() {
      document.title = "Ping"
    }

}

</script>
