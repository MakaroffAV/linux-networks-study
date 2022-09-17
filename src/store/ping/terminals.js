const state = {

    terminalCards: [
        {
            title:  "Для проверки работоспособности сети часто используется программа ping любого сайта, который всегда доступен, например, google.com или еще проще и короче ya.ru. Вам будет достаточно передать утилите в параметрах этот адрес, она сама найдет ip и сделает все нужное:",
            input:  "ping ya.ru",
            output: `
                PING ya.ru (87.250.250.242): 56 data bytes
                64 bytes from 87.250.250.242: icmp_seq=0 ttl=53 time=12.370 ms
                64 bytes from 87.250.250.242: icmp_seq=1 ttl=53 time=11.049 ms
                64 bytes from 87.250.250.242: icmp_seq=2 ttl=53 time=12.386 ms

                --- ya.ru ping statistics ---
                3 packets transmitted, 3 packets received, 0.0% packet loss
                round-trip min/avg/max/stddev = 11.049/11.935/12.386/0.627 ms
            `
        },
        {
            title:  "Если выполнение команды ping не остановить, то пакеты могут отправляться очень долгое время, это создает дополнительную нагрузку на сервер и поэтому не желательно. Вы можете сразу в вызове команды ограничить количество отправляемых пакетов с помощью опции -c:",
            input:  "ping -c 3 ya.ru",
            output: `
                PING ya.ru (87.250.250.242): 56 data bytes
                64 bytes from 87.250.250.242: icmp_seq=0 ttl=53 time=11.803 ms
                64 bytes from 87.250.250.242: icmp_seq=1 ttl=53 time=12.912 ms
                64 bytes from 87.250.250.242: icmp_seq=2 ttl=53 time=12.158 ms
                
                --- ya.ru ping statistics ---
                3 packets transmitted, 3 packets received, 0.0% packet loss
                round-trip min/avg/max/stddev = 11.803/12.291/12.912/0.462 ms
            `
        },
        {
            title:  "Точно так же как мы выполняем ping для домена, можно указать ip адрес напрямую. Это позволяет проверить есть ли сеть когда неверно настроены серверы DNS. Например:",
            input:  "ping -c 3 8.8.8.8",
            output: `
                PING 8.8.8.8 (8.8.8.8): 56 data bytes
                64 bytes from 8.8.8.8: icmp_seq=0 ttl=106 time=22.370 ms
                64 bytes from 8.8.8.8: icmp_seq=1 ttl=106 time=29.876 ms
                64 bytes from 8.8.8.8: icmp_seq=2 ttl=106 time=29.732 ms

                --- 8.8.8.8 ping statistics ---
                3 packets transmitted, 3 packets received, 0.0% packet loss
                round-trip min/avg/max/stddev = 22.370/27.326/29.876/3.505 ms
            ` 
        },
        {
            title:  "Следующий вид отправки ping сообщений, это ping флуд. С помощью таких пакетов можно выполнить нагрузочное тестирование канала или даже заглушить интернет соединение на одной из машин. Но эти функции можно использовать только с правами суперпользователя. Для организации ping флуда укажите опцию -f:",
            input:  "sudo ping -f ya.ru",
            output: `
                PING ya.ru (87.250.250.242): 56 data bytes
                ..Request timeout for icmp_seq 0
                ..Request timeout for icmp_seq 29
                ..Request timeout for icmp_seq 32
                ..Request timeout for icmp_seq 40
                ..Request timeout for icmp_seq 65
                ..Request timeout for icmp_seq 77
                ..Request timeout for icmp_seq 140
                ..Request timeout for icmp_seq 212
                ..Request timeout for icmp_seq 434
                ..Request timeout for icmp_seq 574
                ..Request timeout for icmp_seq 1538
                ..Request timeout for icmp_seq 1574
                ..Request timeout for icmp_seq 1587
                ..Request timeout for icmp_seq 1860
                ..Request timeout for icmp_seq 2196

                --- ya.ru ping statistics ---
                2380 packets transmitted, 2364 packets received, 0.7% packet loss
                round-trip min/avg/max/stddev = 10.471/12.640/20.913/1.039 ms
            `
        },
        {
            title:  "По умолчанию, в обычном режиме, каждый следующий пакет отправляется, когда получен ответ на предыдущий. Но вы можете сами установить интервал между отправкой пакетов -i:",
            input:  "ping -i 0.2 ya.ru",
            output: `
                PING ya.ru (185.4.64.197): 56 data bytes
                64 bytes from 185.4.64.197: icmp_seq=0 ttl=53 time=6.133 ms
                64 bytes from 185.4.64.197: icmp_seq=1 ttl=53 time=6.504 ms
                64 bytes from 185.4.64.197: icmp_seq=2 ttl=53 time=6.604 ms
                64 bytes from 185.4.64.197: icmp_seq=3 ttl=53 time=7.242 ms
                64 bytes from 185.4.64.197: icmp_seq=4 ttl=53 time=6.674 ms
                64 bytes from 185.4.64.197: icmp_seq=5 ttl=53 time=6.699 ms
                64 bytes from 185.4.64.197: icmp_seq=6 ttl=53 time=7.294 ms

                --- ya.ru ping statistics ---
                7 packets transmitted, 7 packets received, 0.0% packet loss
                round-trip min/avg/max/stddev = 6.133/6.736/7.294/0.379 ms
            `
        }
    ]
    
}

const getters = {
    getPingTerminalCards: state => state.terminalCards
}

const actions = {

}

const mutations = {

    changePingCanvasOpenStatus: function(state, payload) {

        state.canvasOpen = !state.canvasOpen

    }
    
}

export default {
    state, getters, actions, mutations
}

