const state = {

    terminalCards: [
        {
            title:  "Перед тем как перейти к использованию tcpdump нужно посмотреть какие сетевые интерфейсы вы можете использовать. Для этого запустите команду с опцией -D:",
            input:  "sudo tcpdump -D",
            output: `
                <pre>
                    1.en0 [Up, Running]
                    2.awdl0 [Up, Running]
                    3.llw0 [Up, Running]
                    4.utun0 [Up, Running]
                    5.ap1 [Up, Running]
                    6.utun1 [Up, Running]
                    7.utun2 [Up, Running]
                    8.utun3 [Up, Running]
                    9.utun4 [Up, Running]
                    10.utun5 [Up, Running]
                    11.lo0 [Up, Running, Loopback]
                    12.anpi0 [Up, Running]
                    13.bridge0 [Up, Running]
                    14.anpi1 [Up, Running]
                    15.en1 [Up, Running]
                    16.en2 [Up, Running]
                    17.en3 [Up, Running]
                    18.en4 [Up, Running]
                    19.gif0 [none]
                    20.stf0 [none]
                </pre>
            `
        },
        {
            title:  "Начнем рассматривать примеры tcpdump с захвата трафика на интерфейсе eth0, у меня это основной интерфейс, который подключен к интернету. Для работы программе необходимы права суперпользователя, поэтому не забудьте указать sudo:",
            input:  "sudo tcpdump -i en0",
            output: `
                <pre>
                    tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
                    listening on en0, link-type EN10MB (Ethernet), capture size 262144 bytes
                    07:30:11.550901 IP 172.20.10.8.64918 > 239.255.255.250.ssdp: UDP, length 176
                    07:30:11.555780 IP 172.20.10.8.54337 > 172.20.10.1.domain: 47699+ PTR? 8.10.20.172.in-addr.arpa. (42)
                    07:30:11.625835 IP 172.20.10.1.domain > 172.20.10.8.54337: 47699 NXDomain* 0/1/0 (96)
                    07:30:11.628290 IP 172.20.10.8.57325 > 172.20.10.1.domain: 61442+ PTR? 250.255.255.239.in-addr.arpa. (46)
                    07:30:11.688300 IP 172.20.10.1.domain > 172.20.10.8.57325: 61442 NXDomain 0/1/0 (103)
                    07:30:11.690547 IP 172.20.10.8.55744 > 172.20.10.1.domain: 57902+ PTR? 1.10.20.172.in-addr.arpa. (42)
                    07:30:11.738856 IP 172.20.10.1.domain > 172.20.10.8.55744: 57902 NXDomain* 0/1/0 (96)
                    07:30:12.551911 IP 172.20.10.8.64918 > 239.255.255.250.ssdp: UDP, length 176
                    ^C
                    8 packets captured
                    8 packets received by filter
                    0 packets dropped by kernel
                </pre>
            `
        },
        {
            title:  "Вы можете отобразить содержимое в формате HEX и ASCII для этого используйте -XX:",
            input:  "sudo tcpdump -XX -i en0",
            output: `
                <pre>
                    07:32:47.654912 IP ec2-44-226-51-4.us-west-2.compute.amazonaws.com.https > 172.20.10.8.51006: Flags [.], ack 33, win 248, options [nop,nop,TS val 2066142254 ecr 1020684120], length 0
                        0x0000:  3ca6 f62b 0b68 dadc 40e5 1964 0800 4500  <..+.h..@..d..E.
                        0x0010:  0034 0000 0000 d006 d4c1 2ce2 3304 ac14  .4........,.3...
                        0x0020:  0a08 01bb c73e 5f35 5bd1 d3dc 7779 8010  .....>_5[...wy..
                        0x0030:  00f8 9ce8 0000 0101 080a 7b26 d42e 3cd6  ..........{&..<.
                        0x0040:  6758                                     gX
                    07:32:47.656423 IP ec2-44-226-51-4.us-west-2.compute.amazonaws.com.https > 172.20.10.8.51005: Flags [.], ack 33, win 190, options [nop,nop,TS val 2066142256 ecr 212110107], length 0
                        0x0000:  3ca6 f62b 0b68 dadc 40e5 1964 0800 4500  <..+.h..@..d..E.
                        0x0010:  0034 7442 0000 d006 607f 2ce2 3304 ac14  .4tB....\`.,.3...
                        0x0020:  0a08 01bb c73d a0bc b9d6 4231 5fc1 8010  .....=....B1_...
                        0x0030:  00be b367 0000 0101 080a 7b26 d430 0ca4  ...g......{&.0..
                        0x0040:  8b1b                                     ..
                    07:32:48.308982 IP 143.244.210.202.https > 172.20.10.8.50996: Flags [.], seq 4292852926:4292854314, ack 3409950242, win 85, options [nop,nop,TS val 2181050125 ecr 1213139792], length 1388
                </pre>
            ` 
        },
    ]
    
}

const getters = {
    getTcpdumpTerminals: state => state.terminalCards
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

