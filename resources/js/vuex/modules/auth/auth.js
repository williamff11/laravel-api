export default {
    state: {
        user: {},
        authenticated: false,
    },

    mutations: {
        AUTH_USER_OK(state, user) {
            state.authenticated = true,
                state.user = user
        }
    },

    actions: {
        login(context, params) {
            context.commit('CHANGE_PRELOADER', true)

            return axios.post('/api/auth', params)
                .then(response => {
                    context.commit('AUTH_USER_OK', response.data.user)
                })
                .catch(errors => reject(errors))
                .finally(() => context.commit('CHANGE_PRELOADER', false))
        },
    }
}