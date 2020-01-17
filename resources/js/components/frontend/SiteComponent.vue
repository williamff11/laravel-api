<template>
  <div>
    <headerComponent />
    <router-view />
    <footerComponent />
  </div>
</template>

<script>
import SiteHeaderComponent from "./SiteHeaderComponent";
import SiteFooterComponent from "./SiteFooterComponent";
export default {
  components: {
    headerComponent: SiteHeaderComponent,
    footerComponent: SiteFooterComponent
  }
};
</script>