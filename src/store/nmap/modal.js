const state = {

    modalOpen: false,

    modalTitle: "NMAP",
    modalDescription: `
        <p>Команда запуска Nmap очень проста для этого достаточно передать ей в параметрах целевой IP адрес или сеть, а также указать опции при необходимости:</p>
        <p><strong><span style="color: #99cc00;">$ nmap</span><span style="color: #ff9900;"> опции</span> <span style="color: #3366ff;">адрес</span></strong></p>
        <ul>
            <li><strong>-sL</strong> - просто создать список работающих хостов, но не сканировать порты nmap;</li>
            <li><strong>-sP</strong> - только проверять доступен ли хост с помощью ping;</li>
            <li><strong>-PN</strong> - считать все хосты доступными, даже если они не отвечают на ping;</li>
            <li><strong>-sS/sT/sA/sW/sM</strong> - TCP сканирование;</li>
            <li><strong>-sU</strong> - UDP сканирование nmap;</li>
            <li><strong>-sN/sF/sX</strong> - TCP NULL и FIN сканирование;</li>
            <li><strong>-sC</strong> - запускать скрипт по умолчанию;</li>
            <li><strong>-sI</strong> - ленивое Indle сканирование;</li>
            <li><strong> -p</strong> - указать диапазон портов для проверки;</li>
            <li><strong>-sV</strong> - детальное исследование портов для определения версий служб;</li>
            <li><strong>-O</strong> - определять операционную систему;</li>
            <li><strong>-T[0-5]</strong> - скорость сканирования, чем больше, тем быстрее;</li>
            <li><strong>-D</strong> - маскировать сканирование с помощью фиктивных IP;</li>
            <li><strong>-S</strong> - изменить свой IP адрес на указанный;</li>
            <li><strong>-e</strong> - использовать определенный интерфейс;</li>
            <li><strong>--spoof-mac</strong> - установить свой MAC адрес;</li>
            <li><strong>-A</strong> - определение операционной системы с помощью скриптов.</li>
        </ul>
    `
    
}

const getters = {

    getNmapModalStatus: state => state.modalOpen,

    getNmapModalTitle: state => state.modalTitle,
    getNmapModalDescription: state => state.modalDescription

}

const actions = {

}

const mutations = {

    changeNmapModalStatus: function(state, payload) {

        state.modalOpen = !state.modalOpen

    }
    
}

export default {
    state, getters, actions, mutations
}

