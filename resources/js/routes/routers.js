import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../vuex/store'

import AdminComponent from '../components/admin/AdminComponent'
import CategoriesComponent from '../components/admin/pages/categories/CategoriesComponent'
import DashboardComponent from '../components/admin/pages/dashboard/DashboardComponent'
import AddCategoriesComponent from '../components/admin/pages/categories/AddCategoriesComponent'
import EditCategoriesComponent from '../components/admin/pages/categories/EditCategoriesComponent'
import ProductsComponent from '../components/admin/pages/products/ProductsComponent'
import ProductReports from '../components/admin/pages/reports/ProductReports'
import SiteComponent from '../components/frontend/SiteComponent'
import HomeComponent from '../components/frontend/pages/home/HomeComponent'
import ContactComponent from '../components/frontend/pages/contact/ContactComponent'
import ProductDetail from '../components/frontend/pages/product/ProductDetail'
import CartComponent from '../components/frontend/pages/cart/CartComponent'
import LoginComponent from '../components/frontend/pages/auth/LoginComponent'
import RegisterComponent from '../components/frontend/pages/user/RegisterComponent'
import ProfileComponent from '../components/frontend/pages/user/ProfileComponent'

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        component: SiteComponent,
        children: [
            { path: 'login', component: LoginComponent, name: 'login', meta: { auth: false } },
            { path: 'register', component: RegisterComponent, name: 'register', meta: { auth: false } },
            { path: 'meu-perfil', component: ProfileComponent, name: 'profile', meta: { auth: true } },
            { path: 'carrinho', component: CartComponent, name: 'cart' },
            { path: 'produto/:id', component: ProductDetail, name: 'product.datail', props: true },
            { path: '', component: HomeComponent, name: 'home' },
            { path: 'contact', component: ContactComponent, name: 'contact' },

        ]
    },
    {
        path: '/admin',
        component: AdminComponent,
        meta: { auth: true },
        children: [
            { path: '', component: DashboardComponent, name: 'admin.dashboard' },
            { path: 'categorias', component: CategoriesComponent, name: 'admin.categories' },
            { path: 'categorias/create', component: AddCategoriesComponent, name: 'admin.categories.create' },
            { path: 'categorias/:id/edit', component: EditCategoriesComponent, name: 'admin.categories.edit', props: true },

            { path: 'products', component: ProductsComponent, name: 'admin.products' },
            { path: 'products-reports', component: ProductReports, name: 'products.reports' }
        ]
    },
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.auth && !store.state.auth.authenticated) {
        store.commit('CHANGE_URL_BACK', to.name)

        return router.push({ name: 'login' })
    }

    if (to.matched.some(record => record.meta.auth) && !store.state.auth.authenticated) {
        store.commit('CHANGE_URL_BACK', to.name)

        return router.push({ name: 'login' })
    }

    if (to.meta.hasOwnProperty('auth') && !to.meta.auth && store.state.auth.authenticated) {
        return router.push({ name: 'admin.dashboard' })

    }

    next()
})


export default router