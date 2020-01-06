<template>
  <div class="preloader" v-show="preloader">
    <img src="/images/spinner.gif" alt="preloader..." />
  </div>
</template>

<script>
export default {
  computed: {
    preloader() {
      return this.$store.state.preloader.spinner;
    }
  }
};
</script>

<style scoped>
.preloader {
  background: #d3d3d3;
  opacity: 1;
  position: absolute;
  z-index: 9999;
  width: 100%;
  height: 100%;
  margin: 0;
  text-align: center;
  padding: 5% 0;
}
.preloader img{
  max-width: 100;
}
</style>