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

    loadProduct(context, id) {
        context.commit('CHANGE_PRELOADER', true)
        return new Promise((resolve, reject) => {
            axios.get(`${URL_BASE}${RESOURCE}/${id}`)
                .then(response => resolve(response.data))
                .catch(errors => reject())
                .finally(() => context.commit('CHANGE_PRELOADER', false))

        })
    },

    storeProduct(context, params) {
        context.commit('CHANGE_PRELOADER', true)

        return new Promise((resolve, reject) => {
            axios.post(`${URL_BASE}${RESOURCE}`, params)
                .then(response => resolve())
                .catch(error => {
                    context.commit('CHANGE_PRELOADER', false)
                    reject(error.response)
                })
        })
    },
    updateProduct(context, params) {
        context.commit('CHANGE_PRELOADER', true)

        return new Promise((resolve, reject) => {
            axios.put(`${URL_BASE}${RESOURCE}/${params.id}`, params)
                .then(response => resolve())
                .catch(error => {
                    context.commit('CHANGE_PRELOADER', false)
                    reject(error.response)
                })
            // .finally(() => context.commit('CHANGE_PRELOADER', false))
        })
    },
}