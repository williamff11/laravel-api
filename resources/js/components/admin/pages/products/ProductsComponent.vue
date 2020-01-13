<template>
  <div>
    <br />
    <div class="container col-sm-11 offset-md">
      <div class="card border shadow">
        <div class="card-header">
          <h2 class="card-title">Listagem de Produtos</h2>
          <div class="row">
              <div class="col">
                  <button class="btn btn-success" @click.prevent="showModal = true">Novo</button>

                  <vodal
                  :show="showModal"
                  animation="fade"
                  @hide="hideModal"
                  :width="600"
                  :height="500">
                  <productForm></productForm>
                  </vodal>
              </div>
            <div class="col">
              <search @search="searchForm"></search>
            </div>
          </div>
        </div>
        <div class="card-body">
          <table class="table table-hover">
            <thead class="thead-light">
              <tr>
                <th scope="col">Imagem</th>
                <th scope="col">Nome</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in products.data" :key="index">
                <td>...</td>
                <td>{{ product.name }}</td>
                <td>
                  <a href="#" class="btn btn-info">Editar</a>
                  <a href="#" class="btn btn-danger">Deletar</a>
                </td>
              </tr>
            </tbody>
          </table>

          <pagination :pagination="products" :offset="6" @paginate="loadProducts"></pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vodal from 'vodal'


import PaginationComponent from "../../../layouts/PaginationComponent";
import SearchComponent from "../../layouts/SearchComponent";
import ProductForm from './partials/ProductForm'

export default {
  created() {
    this.loadProducts(1);
  },
  data() {
    return {
      search: "",
      showModal: false,
    };
  },
  computed: {
    products() {
      return this.$store.state.products.items;
    },
    params() {
      return {
        page: this.products.current_page,
        filter: this.search
      };
    }
  },
  methods: {
    loadProducts(page) {
      this.$store.dispatch("loadProducts", { ...this.params, page });
    },
    searchForm(filter) {
      this.search = filter;

      this.loadProducts(1);
    },
    hideModal () {
        this.showModal = false
    }
  },
  components: {
    pagination: PaginationComponent,
    search: SearchComponent,
    vodal: Vodal,
    productForm: ProductForm,
  }
};
</script>

<style scoped>
</style>