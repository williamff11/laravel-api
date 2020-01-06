import Vue from 'vue'
import Vuex from 'vuex'

import categories from './modules/categories/categories'
import preloader from './modules/preloader/preloader'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        categories,
        preloader
    }
})

export default store