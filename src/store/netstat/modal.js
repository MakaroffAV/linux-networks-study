const state = {

    modalOpen: false,

    modalTitle: "NETSTAT",
    modalDescription: `
        <p>Утилита netstat позволяет увидеть открытые в системе порты, а также открытые на данный момент сетевые соединения. Для отображения максимально подробной информации надо использовать опции:</p>
        <ul style="list-style-type: disc;">
            <li><strong>-l</strong> или<strong> --listening</strong> - посмотреть только прослушиваемые порты;</li>
            <li><strong>-p</strong> или <strong>--program</strong> - показать имя программы и ее PID;</li>
            <li><strong>-t</strong> или <strong>--tcp - </strong>показать tcp порты;</li>
            <li><strong>-u</strong> или <strong>--udp</strong> показать udp порты;</li>
            <li><strong>-n</strong> или <strong>--numeric</strong> показывать ip адреса в числовом виде.</li>
        </ul>
    `
    
}

const getters = {

    getNetstatModalStatus: state => state.modalOpen,

    getNetstatModalTitle: state => state.modalTitle,
    getNetstatModalDescription: state => state.modalDescription

}

const actions = {

}

const mutations = {

    changeNetstatModalStatus: function(state, payload) {

        state.modalOpen = !state.modalOpen

    }
    
}

export default {
    state, getters, actions, mutations
}

