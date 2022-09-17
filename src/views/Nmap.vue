<template>
    <Base>
        <template v-slot:content>
            <PageHeader 
                title=""
                header="Nmap"
                @buttonClicked="this.changeNmapModalStatus"
            />

            <Modal
                v-if="this.getNmapModalStatus"
                :title="this.getNmapModalTitle"
                :description="this.getNmapModalDescription"
                @closeCanvas="this.changeNmapModalStatus"
            />

            <div class="page-body">
                <div class="container-xl">
                    <div class="row-cards">
                        <TerminalCard
                            v-for="card in this.getNmapTerminals" :key="card.title"
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

            "getNmapModalStatus",

            "getNmapModalTitle",
            "getNmapModalDescription",

            "getNmapTerminals"

        ])
    },

	methods: {

        ...mapMutations([
            "changeNmapModalStatus"
        ]),

  },

}

</script>
