<template>
  <div>
    <a href="#" @click.prevent="confirmDestroy(object)" class="btn btn-danger">Deletar</a>
  </div>
</template>

<script>
export default {
    props: {
        object: {
            require: true,
            type: Object
        }
    },
  methods: {
    confirmDestroy(object) {
      this.$snotify.warning(
        `Deseja realmente deletar o Registro: ${object.name}?`,
        "Deletar?",
        {
          timout: 10000,
          showProgressBar: true,
          closeOnClick: true,
          buttons: [
            {
              text: "Não",
              action: value => {
                console.log("Não Deleta"), this.$snotify.remove(value.id);
              }
            },
            {
              text: "Sim",
              action: value => {
                this.$emit('destroy', object), this.$snotify.remove(value.id);
              },
              bold: false
            }
          ]
        }
      );
    }
  }
};
</script>