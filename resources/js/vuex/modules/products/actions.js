import axios from 'axios'
import { URL_BASE } from '../../../config/configs'

const RESOURCE = 'products'

const CONFIGS = {
    headers: {
        'content-type': 'multipart/form-data',
    }
}

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

    storeProduct(context, formData) {
        context.commit('CHANGE_PRELOADER', true)

        return new Promise((resolve, reject) => {
            axios.post(`${URL_BASE}${RESOURCE}`, formData, CONFIGS)
                .then(response => resolve())
                .catch(error => {
                    context.commit('CHANGE_PRELOADER', false)
                    reject(error.response)
                })
        })
    },
    updateProduct(context, formData) {
        context.commit('CHANGE_PRELOADER', true)

        formData.append('_method', 'PUT')
        return new Promise((resolve, reject) => {
            axios.post(`${URL_BASE}${RESOURCE}/${formData.get('id')}`, formData)
                .then(response => resolve())
                .catch(error => {
                    context.commit('CHANGE_PRELOADER', false)
                    reject(error.response)
                })
            // .finally(() => context.commit('CHANGE_PRELOADER', false))
        })
    },

    deleteProduct(context, id) {
        context.commit('CHANGE_PRELOADER', true)
        return new Promise((resolve, reject) => {
            axios.delete(`${URL_BASE}${RESOURCE}/${id}`)
                .then(response => resolve())
                .catch(errors => reject(errors))
        })
    },
}