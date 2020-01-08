<template>
  <div>
    <h1>Adicionar Nova Categoria</h1>

    <form-category></form-category>
  </div>
</template>

<script>
import FormCategoryComponent from "./partials/FormCategoryComponent";

export default {
  components: {
    formCategory: FormCategoryComponent
  }
};
</script>

<style scoped>
</style>