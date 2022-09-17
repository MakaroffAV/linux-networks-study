const state = {

    terminalCards: [
        {
            title:  "Утилита все еще может быть полезной при поверке доступности узла, для этого просто передайте ей ip адрес или имя хоста:",
            input:  "telnet ya.ru",
            output: `
                <pre>
                    Trying 87.250.250.242...
                    Timeout
                </pre>
            `
        },
        {
            title:  "C помощью telnet мы можем проверить доступность порта на узле, а это уже может быть очень полезным. Чтобы проверить порт telnet выполните:",
            input:  "telnet ya.ru 443",
            output: `
                <pre>
                    Trying 87.250.250.242...
                    Connected to ya.ru.
                    Escape character is '^]'.
                </pre>
            `
        },
    ]
    
}

const getters = {
    getTelnetTerminals: state => state.terminalCards
}

const actions = {

}

const mutations = {
    
}

export default {
    state, getters, actions, mutations
}

