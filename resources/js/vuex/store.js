import Vue from 'vue'
import Vuex from 'vuex'

import categories from './modules/categories/categories'
import preloader from './modules/preloader/preloader'
import products from './modules/products/products'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        categories,
        products,
        preloader
    }
})

export default store