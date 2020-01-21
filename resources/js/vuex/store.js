import Vue from 'vue'
import Vuex from 'vuex'

import categories from './modules/categories/categories'
import preloader from './modules/preloader/preloader'
import products from './modules/products/products'
import cart from './modules/Cart/cart'
import auth from './modules/auth/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        categories,
        preloader,
        products,
        cart,
        auth,
    }
})

export default store