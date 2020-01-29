import { NAME_TOKEN } from '../../../config/configs'

const actions = {
    register(context, params) {
        context.commit('CHANGE_PRELOADER', true)

        return new Promise((resolve, reject) => {
            axios.post('/api/register', params)
            .then(response => {
                context.commit('AUTH_USER_OK', response.data.user)

                const token = response.data.token

                localStorage.setItem(NAME_TOKEN, token)
                window.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
                
                resolve()
            })
                .catch(error => reject(error.response.data))
                .finally(() => context.commit('CHANGE_PRELOADER', false))
        })
    },

    update(context, params) {
        context.commit('CHANGE_PRELOADER', true)

        return new Promise((resolve, reject) => {
            axios.put('/api/update', params)
            .then(response => {
                context.commit('AUTH_USER_OK', response.data.user)

                resolve()
            })
                .catch(error => reject(error.response.data))
                .finally(() => context.commit('CHANGE_PRELOADER', false))
        })
    }
}

export default {
    actions,
}