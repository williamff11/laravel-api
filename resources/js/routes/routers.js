import Vue from 'vue'
import VueRouter from 'vue-router'

import AdminComponent from '../components/admin/AdminComponent'
import CategoriesComponent from '../components/admin/pages/categories/CategoriesComponent'
import DashboardComponent from '../components/admin/pages/dashboard/DashboardComponent'
import AddCategoriesComponent from '../components/admin/pages/categories/AddCategoriesComponent'
import EditCategoriesComponent from '../components/admin/pages/categories/EditCategoriesComponent'
import ProductsComponent from '../components/admin/pages/products/ProductsComponent'
import SiteComponent from '../components/frontend/SiteComponent'
import HomeComponent from '../components/frontend/pages/home/HomeComponent'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: SiteComponent,
        children: [
            {path: '', component: HomeComponent, name: 'home'}
        ]
    },
    {
        path: '/admin',
        component: AdminComponent,
        children: [
            { path: '', component: DashboardComponent, name: 'admin.dashboard' },
            { path: 'categorias', component: CategoriesComponent, name: 'admin.categories' },
            { path: 'categorias/create', component: AddCategoriesComponent, name: 'admin.categories.create' },
            { path: 'categorias/:id/edit', component: EditCategoriesComponent, name: 'admin.categories.edit', props: true },

            { path: 'products', component: ProductsComponent, name: 'admin.products' }
        ]
    },
]

const router = new VueRouter({
    routes
})

export default router