const state = {

    modalOpen: false,

    modalTitle: "TelNet",
    modalDescription: `
        <p>Эта утилита предназначена для создания интерактивного соединения между удаленными компьютерами. Она работает по протоколу TELNET, но этот протокол поддерживается многими сервисами, поэтому ее можно использовать для управления ими. Протокол работает на основе TCP, и позволяет передавать обычные строковые команды на другое устройство. Он может использоваться не только для ручного управления но и для взаимодействия между процессами.</p>
        <p>Для работы с этим протоколом мы будем использовать утилиту telnet, ею очень просто пользоваться. Давайте рассмотрим синтаксис telnet:</p>
        <p><strong><span style="color: #ff9900;">$ telnet</span> <span style="color: #99cc00;">опции</span> <span style="color: #3366ff;">хост</span> <span style="color: #993366;">порт</span></strong></p>
        <p>Хост - это домен удаленного компьютера, к которому следует подключиться, а порт - порт на этом компьютере. А теперь давайте рассмотрим основные опции:</p>
        <ul>
            <li><strong>-4</strong> - принудительно использовать адреса ipv4;</li>
            <li><strong>-6</strong> - принудительно использовать адреса ipv6;</li>
            <li><strong>-8</strong> - использовать 8-битную кодировку, например, Unicode;</li>
            <li><strong>-E</strong> - отключить поддержку Escape последовательностей;</li>
            <li><strong>-a</strong> - автоматический вход, берет имя пользователя из переменной окружения USER;</li>
            <li><strong>-b</strong> - использовать локальный сокет;</li>
            <li><strong>-d</strong> - включить режим отладки;</li>
            <li><strong>-р</strong> - режим эмуляции rlogin;</li>
            <li><strong>-e</strong> - задать символ начала Escape последовательности;</li>
            <li><strong>-l</strong> - пользователь для авторизации на удаленной машине.</li>
        </ul>
    `
    
}

const getters = {

    getTelNetModalStatus: state => state.modalOpen,

    getTelNetModalTitle: state => state.modalTitle,
    getTelNetModalDescription: state => state.modalDescription

}

const actions = {

}

const mutations = {

    changeTelNetModalStatus: function(state, payload) {

        state.modalOpen = !state.modalOpen

    }
    
}

export default {
    state, getters, actions, mutations
}

