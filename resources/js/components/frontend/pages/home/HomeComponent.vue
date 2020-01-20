<template>
  <div>
    <h2>Produtos</h2>

    <br />
    <listagemComponent></listagemComponent>
  </div>
</template>

<script>
import ListagemComponent from "./partials/ListagemComponent";

export default {
  data() {
    return {
      filter: ""
    };
  },

  components: {
    listagemComponent: ListagemComponent
  }
};
</script>

<style scoped>
</style>