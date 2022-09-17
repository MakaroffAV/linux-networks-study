const state = {

    terminalCards: [
        {
            title:  "Дальше рассмотрим примеры nmap. Сначала давайте рассмотрим как найти все подключенные к сети устройства, для этого достаточно использовать опцию -sL и указать маску нашей сети. в моем случае это 192.168.1.1/24. Маску вашей локальной сети вы можете найти, выполнив команду:",
            input:  "ip addr show",
            output: `
                <pre>
                lo0: flags=8049<UP,LOOPBACK,RUNNING,MULTICAST> mtu 16384
                    inet 127.0.0.1/8 lo0
                    inet6 ::1/128
                    inet6 fe80::1/64 scopeid 0x1
                anpi1: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
                    ether c6:43:13:43:a4:f5
                    inet6 fe80::c443:13ff:fe43:a4f5/64 scopeid 0x4
                anpi0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
                    ether c6:43:13:43:a4:f4
                    inet6 fe80::c443:13ff:fe43:a4f4/64 scopeid 0x5
                en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
                    ether 3c:a6:f6:2b:0b:68
                    inet6 fe80::1c5e:c7d4:70b9:9df2/64 secured scopeid 0xb
                    inet 172.20.10.8/28 brd 172.20.10.15 en0
                </pre>
            `
        },
        {
            title:  "Из вывода для используемого интерфейса возьмите число после слеша, а до слэша укажите ip вашего роутера. Команда на сканирование сети nmap будет выглядеть вот так:",
            input:  "nmap -sL 192.168.1.1/8",
            output: `
                <pre>
                    Starting Nmap 7.93 ( https://nmap.org ) at 2022-09-17 06:37 MSK
                    Nmap scan report for 192.168.1.0
                    Nmap scan report for 192.168.1.1
                    Nmap scan report for 192.168.1.2
                    Nmap scan report for 192.168.1.3
                    Nmap scan report for 192.168.1.4
                    ....
                    Nmap scan report for 192.168.1.254
                    Nmap scan report for 192.168.1.255
                    Nmap done: 256 IP addresses (0 hosts up) scanned in 2.56 seconds
                </pre>
            `
        },
        {
            title:  "Иногда это сканирование может не дать никаких результатов, потому что некоторые операционные системы имеют защиту от сканирования портов. Но это можно обойти, просто использовав для сканирования ping всех ip адресов сети, для этого есть опция -sn:",
            input:  "nmap -sn 192.168.1.1/24",
            output: `
                <pre>
                    Starting Nmap 7.93 ( https://nmap.org ) at 2022-09-17 06:37 MSK
                    Nmap scan report for 192.168.1.0
                    Nmap scan report for 192.168.1.1
                    Nmap scan report for 192.168.1.2
                    Nmap scan report for 192.168.1.3
                    Nmap scan report for 192.168.1.4
                    ....
                    Nmap scan report for 192.168.1.254
                    Nmap scan report for 192.168.1.255
                    Nmap done: 256 IP addresses (1 hosts up) scanned in 2.76 seconds
                </pre>
            ` 
        },
        {
            title:  "Чтобы узнать более подробную информацию о машине и запущенных на ней сервисах вы можете использовать опцию -sV. Утилита подключится к каждому порту и определит всю доступную информацию:",
            input:  "sudo nmap -sV 51.250.75.32",
            output: `
                <pre>
                    Starting Nmap 7.93 ( https://nmap.org ) at 2022-09-17 06:44 MSK
                    Nmap scan report for 51.250.75.32
                    Host is up (0.070s latency).
                    Not shown: 994 closed tcp ports (reset)
                    PORT     STATE    SERVICE        VERSION
                    21/tcp   open     tcpwrapped
                    22/tcp   open     ssh            OpenSSH 8.2p1 Ubuntu 4ubuntu0.4 (Ubuntu Linux; protocol 2.0)
                    80/tcp   open     http           Golang net/http server (Go-IPFS json-rpc or InfluxDB API)
                    443/tcp  open     ssl/http       Golang net/http server (Go-IPFS json-rpc or InfluxDB API)
                    1244/tcp filtered isbconference1
                    1248/tcp filtered hermes
                    Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel
                    
                    Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
                    Nmap done: 1 IP address (1 host up) scanned in 38.29 seconds
                </pre>
            `
        },
    ]
    
}

const getters = {
    getNmapTerminals: state => state.terminalCards
}

const actions = {

}

const mutations = {
    
}

export default {
    state, getters, actions, mutations
}

