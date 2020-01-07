<template>
    <div>
        <h1>
            Adicionar Nova Categoria
        </h1>
        <form class="form" @submit.prevent="submitForm">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Nome da Nova Categoria" v-model="name">
            </div>

            <div class="form-group">
                <button type="submit" class="btn btn-success">Criar</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            name: '',
        }
    },
    methods: {
        submitForm () {
        this.$store.dispatch('store', {name: this.name})
                    .then(() => this.$router.push({name: 'admin.categories'}))
                    .catch()
        }
    }
}
</script>

<style scoped>

</style>