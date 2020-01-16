<template>
  <div>
    <br />
    <div class="container col-sm-11 offset-md">
      <div class="card border shadow">
        <div class="card-header">
          <h2 class="card-title">Listagem de Produtos</h2>
          <div class="row">
            <div class="col">
              <button class="btn btn-success" @click.prevent="create">Novo</button>

              <vodal
                :show="showModal"
                animation="fade"
                @hide="hideModal"
                :width="600"
                :height="600"
              >
                <productForm :product="product" :update="update" @success="success"></productForm>
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
                  <a href="#" @click.prevent="edit(product.id)" class="btn btn-info">Editar</a>
                  <buttonDelete :object="product" @destroy="deleteProduct"/>
                </td>
              </tr>
            </tbody>
          </table>

          <pagination :pagination="products" :offset="products.last_page" @paginate="loadProducts"></pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vodal from "vodal";

import ButtonDestroyComponent from "../../layouts/ButtonDestroyComponent";
import PaginationComponent from "../../../layouts/PaginationComponent";
import SearchComponent from "../../layouts/SearchComponent";
import ProductForm from "./partials/ProductForm";

export default {
  created() {
    this.loadProducts(1);
  },
  data() {
    return {
      search: "",
      showModal: false,
      product: {
        id: "",
        name: "",
        description: "",
        //   image: "",
        category_id: ""
      },
      update: false
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
    create() {
      this.update = false;

      this.reset();

      this.showModal = true;
    },
    edit(id) {
      this.reset();

      this.$store
        .dispatch("loadProduct", id)
        .then(response => {
          this.product = response;

          this.showModal = true;

          this.update = true;
        })
        .catch(() => {
          this.$snotify.error(this.errors.name[0], "Error");
        });
    },

    deleteProduct(product) {
      this.$store
        .dispatch("deleteProduct", product.id)
        .then(() => {
          this.$snotify.success(
            `Deletado com sucesso o Produto: ${product.name} `
          );
          this.loadProducts();
        })
        .catch(error => {
          this.$snotify.error("Error", "Error");
        });
    },
    searchForm(filter) {
      this.search = filter;

      this.loadProducts(1);
    },
    hideModal() {
      this.showModal = false;
    },
    success() {
      this.hideModal();

      this.loadProducts(1);
    },
    reset() {
      this.product = {
        id: "",
        name: "",
        description: "",
        //   image: "",
        category_id: ""
      };
    }
  },
  components: {
    pagination: PaginationComponent,
    search: SearchComponent,
    vodal: Vodal,
    productForm: ProductForm,
    buttonDelete: ButtonDestroyComponent
  }
};
</script>

<style scoped>
</style>