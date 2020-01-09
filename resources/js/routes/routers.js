import Vue from 'vue'
import VueRouter from 'vue-router'

import AdminComponent from '../components/admin/AdminComponent'
import CategoriesComponent from '../components/admin/pages/categories/CategoriesComponent'
import DashboardComponent from '../components/admin/pages/dashboard/DashboardComponent'
import AddCategoriesComponent from '../components/admin/pages/categories/AddCategoriesComponent'
import EditCategoriesComponent from '../components/admin/pages/categories/EditCategoriesComponent'


Vue.use(VueRouter)

const routes = [
    {
        path: '/admin',
        component: AdminComponent,
        children: [
            { path: '', component: DashboardComponent, name: 'admin.dashboard' },
            { path: 'categorias', component: CategoriesComponent, name: 'admin.categories' },
            { path: 'categorias/create', component: AddCategoriesComponent, name: 'admin.categories.create' },
            { path: 'categorias/:id/edit', component: EditCategoriesComponent, name: 'admin.categories.edit', props: true },
        ]
    },
]

const router = new VueRouter({
    routes
})

export default router