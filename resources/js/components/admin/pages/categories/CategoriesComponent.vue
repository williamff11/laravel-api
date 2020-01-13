<template>
  <div>
    <br />
    <div class="container col-sm-11 offset-md">
      <div class="card border shadow">
        <div class="card-header linha">
          <h2 class="card-title col">Listagem das Categorias</h2>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col">
              <router-link :to="{name: 'admin.categories.create'}" class="btn btn-success">Cadastrar</router-link>
            </div>
            <div class="col">
              <search @searchCategoryComponent="search"></search>
            </div>
          </div>
          <table class="table table-hover">
            <thead class="thead-light">
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th width="200px">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(category, index) in categories.data" :key="index">
                <td>{{ category.id }}</td>
                <td>{{ category.name }}</td>
                <td>
                  <router-link
                    :to="{name: 'admin.categories.edit', params: {id: category.id}}"
                    class="btn btn-info"
                  >Editar</router-link>
                  <button
                    type="submit"
                    @click.prevent="confirmDeleteCategory(category)"
                    :to="{name: 'admin.categories.delete', params: {id: category.id}}"
                    class="btn btn-danger"
                  >Deletar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import SearhCategoriesComponent from "./partials/SearhCategoriesComponent";

export default {
  data() {
    return {
      name: ""
    };
  },
  created() {
    this.loadCategories();
  },
  computed: {
    categories() {
      return this.$store.state.categories.items;
    }
  },
  methods: {
    loadCategories() {
      this.$store.dispatch("loadCategories", { name: this.name });
    },
    deleteCategory(category) {
      this.$store
        .dispatch("deleteCategory", category.id)
        .then(() => {
          this.$snotify.success(
            `Deletado com sucesso a categoria: ${category.name} `
          );
          this.loadCategories();
        })
        .catch(error => {
          this.$snotify.error("Error", "Error");
        });
    },
    confirmDeleteCategory(category) {
      this.$snotify.warning(
        `Deseja realmente deletar a categoria: ${category.name}`,
        "Deletar?",
        {
          timout: 10000,
          showProgressBar: true,
          closeOnClick: true,
          buttons: [
            {
              text: "Sim",
              action: value => {
                this.deleteCategory(category), this.$snotify.remove(value.id);
              },
              bold: false
            },
            {
              text: "Não",
              action: value => {
                console.log("Não Deleta"), this.$snotify.remove(value.id);
              }
            }
          ]
        }
      );
    },
    search(filter) {
      this.name = filter;

      this.loadCategories();
    }
  },
  props: {
    category: {
      require: false,
      type: Object | Array,
      default: () => {
        return {
          id: ""
        };
      }
    }
  },
  components: {
    search: SearhCategoriesComponent
  }
};
</script>

<style scoped>
button {
  margin: 10px;
}
</style>