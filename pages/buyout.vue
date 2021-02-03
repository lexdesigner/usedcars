<template>
  <div class="container">
    <v-header></v-header>
    <v-breadcrumb :path="path"></v-breadcrumb>
    <div class="content">
      <h2>Выкуп</h2>
      <p>
        Хотите как можно скорее продать автомобиль? Воспользуйтесь услугой
        срочного выкупа и максимально быстро получите деньги! Мы сделаем для Вас
        наиболее выгодное предложение, избавив от проблем и рисков
        самостоятельной продажи.
      </p>
      <p>
        Просто обратитесь в любой из автоцентров компании, позвоните по телефону
        или отправьте
        <nuxt-link no-prefetch to="/sell/">заявку через наш сайт.</nuxt-link>
      </p>
      <p><b>Схема выкупа:</b></p>
      <ul>
        <li>Предварительная оценка вашего автомобиля.</li>
        <li>Осмотр и комплексная техническая диагностика.</li>
        <li>Соглашение о цене выкупа по результатам осмотра и диагностики.</li>
        <li>Оформление договора купли-продажи.</li>
        <li>
          Передача денежных средств за автомобиль наличными или перевод в
          безналичной форме.
        </li>
      </ul>
      <nuxt-link no-prefetch to="/sell/"
        ><b>Оцените свой автомобиль прямо сейчас!</b></nuxt-link
      >
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
      title: "Выкуп"
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
      return [{ link: `${this.$route.path}/`, title: this.title }];
    }
  },
  created() {
    this.$store.dispatch("cars/fetch", this.activeRegion);
  }
};
</script>

<style lang="sass"></style>
