/*
    * Author:	Makarov Aleksei
    * Target:	Storage for Ping command canvas
*/

const state = {

    canvasOpen: false,

    canvasTitle: "КОМАНДА PING",
    canvasDescription: `
        <p>Синтаксис довольно прост:</p>
        <p><strong><span style="color: #ff9900;">$ ping</span> <span style="color: #99cc00;">опции</span> <span style="color: #3366ff;">адрес_узла</span></strong></p>
        <p>Формат команды ping очень прост. В качестве адреса узла можно передавать как ip адрес, так и доменное имя. Опции настраивают поведение утилиты. Рассмотрим основные из них:</p>
        <ul>
            <li><strong>-4</strong> - использовать только ipv4 (по умолчанию);</li>
            <li><strong>-6</strong> - использовать только ipv6;</li>
            <li><strong>-A</strong> - адаптивный режим, время между отправками пакета адаптируется к времени передачи и приема пакета, но не меньше чем 200мс;</li>
            <li><strong>-b</strong> - разрешить ping широковещательного адреса;</li>
            <li><strong>-с</strong> - количество пакетов, которые нужно отправить;</li>
            <li><strong>-D</strong> - выводить время в виде UNIX timestamp;</li>
            <li><strong>-f</strong> - режим флуда, в этом режиме пакеты передаются без задержек, может использоваться для совершения DoS атак на отдельные узлы. Количество точек, которые выводит утилита обозначает количество потерянных пакетов;</li>
            <li><strong>-i</strong> - интервал в секундах между отправкой пакетов;</li>
            <li><strong>-I</strong> - использовать этот сетевой интерфейс для отправки пакетов;</li>
            <li><strong>-l</strong> - режим перегрузки, отправляется очень много пакетов и система не следит за ответными пакетами;</li>
            <li><strong>-n</strong> - не получать домены для ip адресов;</li>
            <li><strong>-r</strong> - игнорировать таблицы маршрутизации и отправить пакет на указанный интерфейс;</li>
            <li><strong>-s</strong> - размер одного пакета;</li>
            <li><strong>-t</strong> - установить TTL вручную;</li>
            <li><strong>-v</strong> - более подробный вывод.</li>
        </ul>
    `
    
}

const getters = {

    getPingCanvasOpen: state => state.canvasOpen,

    getPingCanvasTitle: state => state.canvasTitle,
    getPingCanvasDescription: state => state.canvasDescription

}

const actions = {

}

const mutations = {

    changePingCanvasOpenStatus: function(state, payload) {

        /*
            Author: Makarov Aleksei
            Target: Change ping canvas open status
        */

        state.canvasOpen = !state.canvasOpen

    }
    
}

export default {
    state, getters, actions, mutations
}

