<template>
  <div class="container">
    <v-header></v-header>
    <v-breadcrumb :path="path"></v-breadcrumb>
    <h1>{{ title }}</h1>
    <p>
      Информация по состоянию на {{ dateNow }} {{ timeNow }} найдено
      {{ carsLength }} автомобилей
    </p>
    <carsList></carsList>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vBreadcrumb from "~/components/vBreadcrumb.vue";
import vHeader from "~/components/vHeader.vue";
import vFooter from "~/components/vFooter.vue";
import carsList from "~/components/carsList.vue";

export default {
  components: {
    carsList,
    vHeader,
    vFooter,
    vBreadcrumb
  },
  data() {
    return {
      title: "Все автомобили"
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
  methods: {
    addZero(num) {
      return String(num).length > 1 ? num : "0" + num;
    }
  },
  computed: {
    path() {
      return [{ link: `${this.$route.path}/`, title: this.title }];
    },
    carsLength() {
      return this.$store.state.cars.currentCars.length;
    },
    timeNow() {
      const date = new Date();
      return `${this.addZero(date.getHours())}:${this.addZero(
        date.getMinutes()
      )}`;
    },
    dateNow() {
      const date = new Date();
      return `${this.addZero(date.getDay())}.${this.addZero(
        date.getMonth() + 1
      )}.${date.getFullYear()}`;
    }
  }
};
</script>

<style lang="sass">
.cars-list
  margin-top: 40px
</style>
