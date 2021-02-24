<template>
  <div class="container">
    <v-header></v-header>
    <v-breadcrumb :path="path"></v-breadcrumb>
    <div class="content">
      <h2>Корпоративным клиентам</h2>
      <p>
        Компания Genser предлагает Вам рассмотреть возможность комплексного
        решения задач для вашей компании по обновлению автомобильного парка.
      </p>
      <p>
        Сотрудничая с нами, Вам не придется беспокоиться о том, что делать с
        автомобилями, которые отслужили свой срок.
      </p>
      <p>
        В зависимости от Ваших пожеланий, мы примем их в зачет стоимости новых
        по схеме trade-in, выкупим, либо предоставим возможность поставить на
        комиссию.
      </p>
      <p>
        Всем нашим клиентам мы гарантируем высокое качество обслуживания, а
        также:
      </p>
      <ol>
        <li>
          оперативное и комплексное решение всех возникающих вопросов
          персональным менеджером;
        </li>
        <li>
          выезд специалиста для осмотра и оценки состояния автомобилей в удобное
          для Вас место и время;
        </li>
        <li>
          индивидуальный подход в определении оценочной стоимости автомобилей;
        </li>
        <li>
          возможность одновременного обмена/выкупа неограниченного количества
          автомобилей;
        </li>
        <li>
          возможность обеспечения доставки автомобилей силами нашей компании, в
          том числе из регионов;
        </li>
      </ol>
      <p>
        Мы готовы рассмотреть любые схемы сотрудничества и будем рады ответить
        на все интересующие вопросы.
      </p>
      <p>Ваш персональный менеджер: <b>Островский Семен Александрович</b></p>
      <p>
        Офис: <b><a href="tel:+74957885858">+7 (495) 788 58 58</a> доб. 7363</b>
      </p>
      <p>
        Мобильный: <b><a href="tel:+79688280534">+7 (968) 828-05-34</a></b>
      </p>
      <p>
        Email:
        <b
          ><a href="mailto:saostrovskiy@hyundai-gns.ru"
            >saostrovskiy@hyundai-gns.ru</a
          ></b
        >
      </p>
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
      title: "Корпоративным клиентам"
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
  }
};
</script>

<style lang="sass"></style>
