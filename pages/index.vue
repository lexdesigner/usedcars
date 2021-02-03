<template>
  <div class="container">
    <v-header></v-header>
    <selectCarForm></selectCarForm>
    <carsList></carsList>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from "~/components/vHeader.vue";
import vFooter from "~/components/vFooter.vue";
import carsList from "~/components/carsList.vue";
import selectCarForm from "~/components/selectCarForm.vue";

export default {
  components: {
    carsList,
    selectCarForm,
    vHeader,
    vFooter
  }
};
</script>

<style lang="scss"></style>
