<template>
  <div class="container">
    <v-header></v-header>
    <v-breadcrumb :path="path"></v-breadcrumb>
    <h1>Автомобили {{ ucFirst(title) }}</h1>
    <p>
      Информация по состоянию на {{ dateNow }} {{ timeNow }} найдено
      {{ carsLength }} автомобилей
    </p>
    <carsList :filterMark="title"></carsList>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vBreadcrumb from "~/components/vBreadcrumb.vue";
import vHeader from "~/components/vHeader.vue";
import vFooter from "~/components/vFooter.vue";
import carsList from "~/components/carsList.vue";

export default {
  async asyncData({ params, store }) {
    return { title: params.marks };
  },
  components: {
    carsList,
    vHeader,
    vFooter,
    vBreadcrumb
  },
  data() {
    return {};
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
    },
    ucFirst(str) {
      if (!str) return str;
      return str[0].toUpperCase() + str.slice(1);
    }
  },
  computed: {
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
    },
    path() {
      return [
        { link: "/cars/", title: "Все автомобили" },
        { link: `${this.$route.path}/`, title: this.ucFirst(this.title) }
      ];
    }
  }
};
</script>

<style lang="sass">
.cars-list
  margin-top: 40px
h1
  margin: 15px 0
</style>
