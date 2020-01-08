<template>
  <div>
    <h1>Editar Categoria</h1>
    <form-category :category="category" :updating="true"></form-category>
  </div>
</template>

<script>
import FormCategoryComponent from "./partials/FormCategoryComponent";

export default {
  props: {
    id: {
      require: true
    }
  },
  components: {
    formCategory: FormCategoryComponent
  },
  created() {
    this.$store
      .dispatch("loadCategory", this.id)
      .then(response => (this.category = response))
      .catch(errors => {
        console.log(errors);
      });
  },
  data () {
      return {
          category: {}
      }
  }
};
</script>

<style scoped>
</style>