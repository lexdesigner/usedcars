<template>
  <div class="container">
    <v-header></v-header>
    <v-breadcrumb :path="path"></v-breadcrumb>
    <div class="content">
      <h2>Комиссия</h2>
      <p>
        Хотите продать автомобиль по максимально выгодной цене? Воспользуйтесь
        услугой комиссии!
      </p>
      <p>
        Мы предложим цену продажи с учетом ваших пожеланий, технического
        состояния автомобиля и ситуации на рынке. Окончательное решение по цене
        продажи принимаете вы.
      </p>
      <p>
        Мы разместим рекламу вашего автомобиля на самых актуальных рекламных
        площадках, возьмем на себя все заботы по его предпродажной подготовке и
        проведем переговоры с потенциальными покупателями.
      </p>
      <p>
        Мы полностью отвечаем за сохранность вашего автомобиля, гарантируем
        конфиденциальность и оформление сделки в строгом соответствии
        действующему законодательству.
      </p>
      <p>
        Просто обратитесь в любой из автоцентров компании, позвоните по телефону
        или отправьте
        <nuxt-link no-prefetch to="/sell/">заявку через наш сайт.</nuxt-link>
      </p>
      <p><b>Схема комиссии</b></p>
      <ul>
        <li>Предварительная оценка вашего автомобиля.</li>
        <li>Осмотр и комплексная техническая диагностика.</li>
        <li>Соглашение о цене продажи.</li>
        <li>Оформление договора приема на комиссию.</li>
        <li>Продажа автомобиля.</li>
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
      title: "Комиссия"
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
