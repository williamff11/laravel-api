import axios from 'axios'
import { URL_BASE } from '../../../config/configs'

const RESOURCE = 'products'

export default {
    loadProducts(context, params) {
        context.commit('CHANGE_PRELOADER', true)

        axios.get(`${URL_BASE}${RESOURCE}`, { params })
            .then(response => context.commit('LOAD_PRODUCTS', response.data))
            .catch(errors => console.log(errors))
            .finally(() => context.commit('CHANGE_PRELOADER', false))
    },

    storeProduct(context, params) {
        context.commit('CHANGE_PRELOADER', true)

        return new Promise((resolve, reject) => {
            axios.post(`${URL_BASE}${RESOURCE}`, params)
                .then(response => resolve())
                .catch(error => reject(error))
                .finally(() => context.commit('CHANGE_PRELOADER', false))
        })
    },
}