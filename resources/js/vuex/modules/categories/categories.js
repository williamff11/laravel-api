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
        loadCategories (context) {
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
        }
    },
    getters: {

    }
}