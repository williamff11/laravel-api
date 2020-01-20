<template>
  <div>
    <form class="form form-inline" @submit.prevent="search">
      <select v-model="category_id" class="form-control">
        <option value>Selecione a Categoria do Produto</option>
        <option 
          v-for="(category, index) in categories"
          :key="index"
          :value="category.id"
        >{{ category.name }}</option>
      </select>

      <input type="text" v-model="filter" placeholder="Pesquise aqui" class="form-control mr-sm-2" />

      <button type="submit" class="btn btn-info">Pesquisar</button>
      <div v-if="filter">
        <p>Resultado para: {{filter}}</p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter: "",
      category_id: '',
    };
  },
  computed: {
    categories() {
      return this.$store.state.categories.items.data;
    }
  },
  methods: {
    search() {
      this.$emit("search", {
          filter: this.filter,
          category_id: this.category_id
      });
    }
  }
};
</script>

<style scoped>
</style>