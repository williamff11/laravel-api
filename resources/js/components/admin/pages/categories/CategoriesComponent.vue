<template>
  <div>
    <h1>Listagem das Categorias</h1>
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(category, index) in categories.data" :key="index">
          <td>{{ category.id }}</td>
          <td>{{ category.name }}</td>
          <td>...</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created() {
      this.$store.dispatch('loadCategories')
  },
computed: {
    categories () {
        return this.$store.state.categories.items
    }
}
};
</script>

<style scoped>
</style>