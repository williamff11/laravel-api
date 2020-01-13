<template>
  <div>
    <form class="form form-inline" @submit.prevent="search">
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
      filter: ""
    };
  },
  methods: {
    search() {
      this.$emit("search", this.filter);
    }
  }
};
</script>

<style scoped>
</style>