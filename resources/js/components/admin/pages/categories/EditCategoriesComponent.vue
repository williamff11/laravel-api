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
    this.loadCategory();
  },
  data() {
    return {
      category: {}
    };
  },
  methods: {
    loadCategory() {
      this.$store
        .dispatch("loadCategory", this.id)
        .then(response => (this.category = response))
        .catch(errors => {
          console.log(errors);
          this.$snotify.error("Categoria não Encontrada", "404");
          this.$router.push({ name: "admin.categories" });
        });
    }
  }
};
</script>

<style scoped>
</style>