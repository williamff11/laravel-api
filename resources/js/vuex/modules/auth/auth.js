import { NAME_TOKEN } from '../../../config/configs'

export default {
    state: {
        user: {},
        authenticated: false,
        urlBack: 'home',
    },

    mutations: {
        AUTH_USER_OK(state, user) {
            state.authenticated = true,
                state.user = user
        },

        CHANGE_URL_BACK(state, url) {
            state.urlBack = url
        },
    },

    actions: {
        login(context, params) {
            context.commit('CHANGE_PRELOADER', true)

            return axios.post('/api/auth', params)
                .then(response => {
                    context.commit('AUTH_USER_OK', response.data.user)

                    localStorage.setItem(NAME_TOKEN, response.data.token)
                })
                .catch(errors => reject(errors))
                .finally(() => context.commit('CHANGE_PRELOADER', false))
        },

        checkLogin(context) {
            context.commit('CHANGE_PRELOADER', true)

            return new Promise((resolve, reject) => {
                const token = localStorage.getItem(NAME_TOKEN)
                if (!token)
                    return reject()

                axios.get('/api/me')
                    .then(response => {
                        context.commit('AUTH_USER_OK', response.data.user)

                        resolve()
                    })
                    .catch(() => reject())
                    .finally(() => context.commit('CHANGE_PRELOADER', false))
            })
        }
    }
}