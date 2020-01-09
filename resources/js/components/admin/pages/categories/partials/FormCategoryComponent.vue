<template>
  <div>
    <form class="form" @submit.prevent="onSubmit">
      <div :class="['form-group', {'has-error': errors.name}]">
        <input
          type="text"
          class="form-control"
          placeholder="Nome da Nova Categoria"
          v-model="category.name"
        />
        <div v-if="errors.name">{{ errors.name[0] }}</div>
      </div>

      <div class="form-group">
        <button type="submit" class="btn btn-success">Criar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      require: false,
      type: Object | Array,
      default: () => {
        return {
          id: "",
          name: ""
        };
      }
    },
    updating: {
      require: false,
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      errors: {}
    };
  },
  methods: {
    onSubmit() {
      const action = this.updating ? "updateCategory" : "storeCategory";

      this.$store
        .dispatch(action, this.category)
        .then(() => {
          this.$snotify.success("Sucesso ao Cadastrar");
          this.$router.push({ name: "admin.categories" });
        })
        .catch(error => {

          console.log(error.response.data.errors.name);
          this.errors = error.response.data.errors;
          this.$snotify.error(this.errors.name[0], 'Error');

        });
    }
  }
};
</script>

<style scoped>
.has-error {
  color: red;
}
.has-error input {
  border: 1px solid red;
}
</style>