<template>
  <div class="container">
    <v-header></v-header>
    <v-breadcrumb :path="path"></v-breadcrumb>
    <div class="content">
      <h2>Специальные предложения</h2>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from "~/components/vHeader.vue";
import vBreadcrumb from "~/components/vBreadcrumb.vue";
import vFooter from "~/components/vFooter.vue";

export default {
  components: {
    vHeader,
    vBreadcrumb,
    vFooter
  },
  data() {
    return {
      title: "Специальные предложения"
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: this.title
        }
      ]
    };
  },
  computed: {
    path() {
      return [
        { link: "/cars/", title: "Все автомобили" },
        { link: `${this.$route.path}/`, title: this.title }
      ];
    }
  }
};
</script>

<style lang="sass"></style>
