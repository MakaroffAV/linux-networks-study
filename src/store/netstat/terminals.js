const state = {

    terminalCards: [
        {
            title:  "Перечислить все порты:",
            input:  "netstat -a",
            output: `
                <pre>
                Active Internet connections
                Proto Recv-Q Send-Q  Local Address          Foreign Address        (state)    
                tcp4       0      0  localhost.http-alt     localhost.49947        ESTABLISHED
                tcp4       0      0  localhost.49947        localhost.http-alt     ESTABLISHED
                tcp4       0      0  192.168.88.18.http-alt 192.168.88.18.49939    ESTABLISHED
                tcp4       0      0  192.168.88.18.49939    192.168.88.18.http-alt ESTABLISHED
                tcp4       0      0  localhost.http-alt     localhost.49933        ESTABLISHED
                tcp4       0      0  localhost.49933        localhost.http-alt     ESTABLISHED
                tcp4       0      0  localhost.http-alt     localhost.49931        ESTABLISHED
                tcp4       0      0  localhost.49931        localhost.http-alt     ESTABLISHED
                tcp4       0      0  192.168.88.18.49740    79.79.201.35.bc..https ESTABLISHED
                tcp4       0      0  192.168.88.18.64786    lu-in-f188.1e100.5228  ESTABLISHED
                tcp4       0      0  192.168.88.18.63505    149.154.167.50.https   ESTABLISHED
                tcp4       0      0  192.168.88.18.61194    192.168.88.16.63269    ESTABLISHED
                tcp4       0      0  192.168.88.18.59721    la-in-f188.1e100.5228  ESTABLISHED
                tcp4       0      0  192.168.88.18.59714    149.154.167.51.https   ESTABLISHED
                tcp4       0      0  192.168.88.18.61615    a99870867d269d5e.https ESTABLISHED
                </pre>
            `
        },
        {
            title:  "Перечислить все прослушиваемые порты:",
            input:  "netstat -l",
            output: `
                <pre>
                    Active Internet connections (only servers)
                    Proto Recv-Q Send-Q Local Address           Foreign Address         State
                    tcp        0      0 localhost:domain        *:*                     LISTEN
                    tcp6       0      0 [::]:ssh                [::]:*                  LISTEN
                    udp        0      0 192.168.128.134:ntp     *:* 
                </pre>
            `
        },
        {
            title:  "Показать статистику всех портов:",
            input:  "netstat -s",
            output: `
                <pre>
                    Ip:
                        11150 total packets received
                        1 with invalid addresses
                        0 forwarded
                        0 incoming packets discarded
                        11149 incoming packets delivered
                        11635 requests sent out
                    Icmp:
                        13791 ICMP messages received
                        12 input ICMP message failed.
                    Tcp:
                        15020 active connections openings
                        97955 passive connection openings
                        135 failed connection attempts
                    Udp:
                        2841 packets received
                        180 packets to unknown port received.
                    .....
                </pre>
            ` 
        },
        {
            title:  "Опция netstat -p добавит «PID/Program Name» в вывод netstat, и может быть совмещена с любым другим набором опций. Это очень полезно при отладке, для определения того, какая программа работает на определённом порту.",
            input:  "netstat -p",
            output: `
                <pre>
                    Active Internet connections (w/o servers)
                    Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
                    tcp        0      0 org-ru-putty.vm.udf:www 52-106.plus.kerch:55723 ESTABLISHED 9486/nginx: worker
                    tcp        0      0 org-ru-putty.vm.udf:www 52-106.plus.kerch:55757 ESTABLISHED 9486/nginx: worker
                </pre>
            `
        },
    ]
    
}

const getters = {
    getNetstatTerminals: state => state.terminalCards
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

