<template>
  <div>
    <h2>Adicionar Produto</h2>
    <form class="form" @submit.prevent="onSubmit">
      <div :class="['form-group', {'has-error': errors.name}]">
        <input
          type="text"
          class="form-control"
          placeholder="Nome do Produto"
          v-model="product.name"
        />
        <div v-if="errors.name">{{ errors.name[0] }}</div>
      </div>

      <div :class="['form-group', {'has-error': errors.description}]">
        <textarea
          class="form-control"
          v-model="product.description"
          cols="30"
          rows="10"
          placeholder="Digite aqui a Descrição do Produto"
        ></textarea>
        <div v-if="errors.description">{{ errors.description[0] }}</div>
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
    update: {
      require: false,
      type: Boolean,
      default: false
    },
    product: {
      require: false,
      type: Object,
      default: () => {
        return {
          id: "",
          name: "",
          description: "",
          //   image: "",
          category_id: 1,
        };
      }
    }
  },
  data() {
    return {
      errors: {}
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("storeProduct", this.product)
        .then(() => {
          this.$snotify.success("Sucesso ao Cadastrar");
          this.$router.push({ name: "admin.products" });
        })
        .catch(error => {
          console.log(error.response.data.errors.name);
          this.errors = error.response.data.errors;
          this.$snotify.error(this.errors.name[0], "Error");
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