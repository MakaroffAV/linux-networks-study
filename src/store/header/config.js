const state = {
    headerButtonCollapsed: false
}

const getters = {
    getHeaderButtonCollapseStatus: state => state.headerButtonCollapsed
}

const actions = {
}

const mutations = {
    changeHeaderNavBarCollapse: function(state, payload) {
        state.headerButtonCollapsed = !state.headerButtonCollapsed
    }
}

export default {
    state, getters, actions, mutations
}
