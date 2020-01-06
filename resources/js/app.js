require('./bootstrap');
window.Vue = require('vue');

import router from './routes/routers'
import store from './vuex/store'


/**
 * Components Globais
 */

 Vue.component('admin-component', require('./components/admin/AdminComponent').default)
 Vue.component('preloader-component', require('./components/layouts/PreloaderComponent').default)

const app = new Vue({
    router,
    store,
    el: '#app',
});
