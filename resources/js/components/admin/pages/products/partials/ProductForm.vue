<template>
  <div>
    <h2>Adicionar Produto</h2>
    <form class="form" @submit.prevent="onSubmit">
      <div :class="['form-group', {'has-error': errors.image}]">
        <div v-if="imagePreview" class="text-center">
          <img :src="imagePreview" class="imagePreview">
          <button @click.prevent="removeImage" class="btn btn-danger">Remover</button>
        </div>
        <div v-else>
          <input type="file" class="form-control" @change="onFileChange" />

        </div>
        <div v-if="errors.image">{{ errors.image[0] }}</div>
      </div>
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

      <div :class="['form-group', {'has-error': errors.category_id}]">
        <select v-model="product.category_id" class="form-control">
          <option value>Selecione a Categoria do Produto</option>
          <option
            v-for="(category, index) in categories"
            :key="index"
            :value="category.id"
          >{{ category.name }}</option>
        </select>
        <div v-if="errors.category_id">{{ errors.category_id[0] }}</div>
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
      type: Object
    }
  },
  data() {
    return {
      errors: {},
      upload: null,
      imagePreview: null
    };
  },
  computed: {
    categories() {
      return this.$store.state.categories.items.data;
    }
  },
  methods: {
    onSubmit() {
      const action = this.update ? "updateProduct" : "storeProduct";

      const formData = new FormData();
      if (this.upload != null) formData.append("image", this.upload);

      formData.append("id", this.product.id);
      formData.append("name", this.product.name);
      formData.append("description", this.product.description);
      formData.append("category_id", this.product.category_id);

      console.log(formData);
      this.$store
        .dispatch(action, formData)
        .then(() => {
          this.$snotify.success("Sucesso!");
          this.reset();
          this.$emit("success");
        })
        .catch(error => {
          console.log(error.response.data.errors.name);
          this.errors = error.response.data.errors;
          this.$snotify.error(this.errors.name[0], "Error");
        });
    },
    reset() {
      this.errors = {};
    },
    onFileChange(e) {
      console.log(e);
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;

      this.upload = files[0];

      this.previewImage(files[0])
    },

    previewImage(files) {
      let reader = new FileReader();
      reader.onload = e => {
        this.imagePreview = e.target.result;
      };
      reader.readAsDataURL(files);
    },
    removeImage () {
      this.imagePreview = null
      this.upload = null
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
.imagePreview{
  max-width: 300px;
}
</style>