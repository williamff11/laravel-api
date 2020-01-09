<template>
    <div>
        <form class="form form-inline">
            <input type="text" v-model="filter" placeholder="Pesquise aqui" class="form-control mr-sm-2" v-on:keyup.enter="search">
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            filter: ''
        }
    },
    methods: {
        search () {
            this.$emit('searchCategoryComponent', this.filter)
        }
    }
}
</script>

<style scoped>

</style>