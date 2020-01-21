export default {
    state: {
        user: {},
        authenticated: false,
    },

    mutations: {

    },

    actions: {
        login (context, params) {
            context.commit('CHANGE_PRELOADER', true)

                axios.post('/api/auth', params)
                    .then(response => console.log(response))
                    .catch(errors => reject(errors))
                    .finally(() => context.commit('CHANGE_PRELOADER', false))
        },
    }
}