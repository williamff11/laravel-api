export default {
    state: {
        spinner: false,
    },
    mutations: {
        CHANGE_PRELOADER(state, status) {
            state.spinner = status
        }
    },
}