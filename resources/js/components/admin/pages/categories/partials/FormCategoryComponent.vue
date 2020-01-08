<template>
  <div>
    <form class="form" @submit.prevent="onSubmit">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Nome da Nova Categoria" v-model="category.name" />
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
           type: Object|Array,
           default: () => {
               return {
                   id: '',
                   name: ''
               }
           }
        },
        updating: {
            require: false,
            type: Boolean,
            default: false
        }
    },
    methods: {
        onSubmit () {
            const action = this.updating ? 'updateCategory' : 'storeCategory'

            this.$store.dispatch(action, this.category)
                    .then(() => this.$router.push({name: 'admin.categories'}))
                    .catch()
        }
    }
};
</script>

<style scoped>
</style>