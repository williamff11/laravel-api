export default {
    state: {
        items: {
            data: []
        },
    },
    mutations: {
        LOAD_CATEGORIES(state, categories) {
            state.items = categories
        }
    },
    actions: {
        loadCategories(context) {
            context.commit('CHANGE_PRELOADER', true)

            axios
                .get("/api/v1/categories")
                .then(response => {
                    console.log(response);

                    context.commit('LOAD_CATEGORIES', response)
                })
                .catch(errors => {
                    console.log(errors);
                })
                .finally(() => context.commit('CHANGE_PRELOADER', false))
        },

        loadCategory (context, id) {
            context.commit('CHANGE_PRELOADER', true)

            return new Promise((resolve, reject) => {
                axios.get(`/api/v1/categories/${id}`)
                    .then(response => resolve(response.data))
                    .catch(errors => reject(errors))
                    .finally(() => context.commit('CHANGE_PRELOADER', false))
            })
        },

        storeCategory(context, params) {
            context.commit('CHANGE_PRELOADER', true)

            return new Promise((resolve, reject) => {
                axios.post('/api/v1/categories', params)
                    .then(response => resolve())
                    .catch(errors => reject(errors))
                    .finally(() => context.commit('CHANGE_PRELOADER', false))
            })
        },

        updateCategory(context, params) {
            context.commit('CHANGE_PRELOADER', true)

            return new Promise((resolve, reject) => {
                axios.put(`/api/v1/categories/${params.id}`, params)
                    .then(response => resolve())
                    .catch(errors => reject(errors))
                    .finally(() => context.commit('CHANGE_PRELOADER', false))
            })
        },
    },
    getters: {

    }
}