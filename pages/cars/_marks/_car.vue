<template>
  <div class="container">
    <v-header></v-header>
    <v-breadcrumb :path="path"></v-breadcrumb>
    <h1>
      {{ title }}
    </h1>
    <el-row class="car-card">
      <el-col :span="12" class="car-card--image">
        <div
          v-if="carLoad.images"
          :style="
            `background-image:url(${require(`/assets/img/cars/${carLoad.id}/${carLoad.images[0]}`)})`
          "
        ></div>
        <div
          v-else
          class="car-card--image-nophoto"
          :style="
            `background-image:url(${require('/assets/img/no-photo.gif')})`
          "
        ></div>
      </el-col>
      <el-col :span="12" class="car-card--characteristics">
        <div class="car-card--id">
          <span>ЛОТ №: {{ carLoad.id }}</span>
        </div>
        <ul class="car-card--characteristics_list">
          <li>
            <b>Трансмиссия:</b> <span>{{ carLoad.transmission }}</span>
          </li>
          <li>
            <b>Привод:</b> <span>{{ carLoad.drive }}</span>
          </li>
          <li>
            <b>Год:</b> <span>{{ carLoad.year }}</span>
          </li>
          <li>
            <b>Пробег, км:</b> <span>{{ localeNumber(carLoad.mileage) }}</span>
          </li>
          <li>
            <b>Тип кузова:</b> <span>{{ carLoad.type }}</span>
          </li>
          <li>
            <b>Цвет:</b> <span>{{ carLoad.color }}</span>
          </li>
          <li>
            <b>Тип двигателя:</b> <span>{{ carLoad.engineType }}</span>
          </li>
          <li>
            <b>Двигатель, см<sup>3</sup>:</b>
            <span>{{ localeNumber(carLoad.engine) }}</span>
          </li>
          <li>
            <b>Мощность, л.с.:</b> <span>{{ carLoad.power }}</span>
          </li>
        </ul>
        <div class="car-card--price">
          <span class="price">{{ localeNumber(carLoad.price) }} руб.</span>
          <div class="car-card--price_credit" v-if="carLoad.credit">
            <span class="credit"
              >Ежемесячный платеж
              <b>{{ localeNumber(carLoad.credit) }}</b> руб.</span
            ><br />
            <span
              class="credit"
              v-html="carLoad.creditText"
              v-if="carLoad.creditText"
            ></span>
          </div>
        </div>
      </el-col>
    </el-row>
    <client-only>
      <v-carousel
        ref="carouselThumbs"
        :dots="false"
        :responsive="responsiveThumbsCarousel"
        :margin="10"
        class="carousel-thumbs"
      >
        <div
          class="carousel-thumbs--item"
          v-for="(img, i) in carLoad.images"
          :key="img + i"
          :style="
            `background-image:url(${require(`/assets/img/cars/${carLoad.id}/${img}`)})`
          "
        ></div>
      </v-carousel>
    </client-only>
    <div class="car-description" v-if="carLoad.complectation">
      <h3>Комплектация</h3>
      <p>{{ carLoad.complectation }}</p>
    </div>
    <div class="car-description" v-if="carLoad.information">
      <h3>Дополнительная информация:</h3>
      <p>{{ carLoad.information }}</p>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vBreadcrumb from "~/components/vBreadcrumb.vue";
import vHeader from "~/components/vHeader.vue";
import vFooter from "~/components/vFooter.vue";

export default {
  async asyncData({ params, store }) {
    await store.dispatch("cars/fetchCar", params.car);
  },
  components: {
    vHeader,
    vFooter,
    vBreadcrumb
  },
  data() {
    return {
      title: this.$store.state.cars.car.fullName,
      responsiveThumbsCarousel: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    };
  },
  head() {
    return {
      title: this.$store.state.cars.car.fullName,
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
    localeNumber(number) {
      const output = Number(number);
      return output.toLocaleString();
    },
    ucFirst(str) {
      if (!str) return str;
      return str[0].toUpperCase() + str.slice(1);
    }
  },
  computed: {
    carLoad() {
      console.log(this.$store.state.cars.car);
      return this.$store.state.cars.car;
    },
    path() {
      return [
        { link: "/cars/", title: "Все автомобили" },
        {
          link: `/cars/${this.$route.path.split("/")[2]}/`,
          title: this.ucFirst(this.$store.state.cars.car.name)
        },
        {
          link: `${this.$route.path}/`,
          title: this.$store.state.cars.car.fullName
        }
      ];
    }
  }
};
</script>

<style lang="sass">
.car-card
  align-items: stretch
  display: flex
.car-card--image
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 4px, rgba(0, 0, 0, 0.04) 0px 0px 6px
  margin-right: 20px
  background-size: cover
  background-repeat: no-repeat
  background-position: center center
  min-height: 350px
h1
  margin: 15px 0
.car-card--characteristics
  background-color: #EBEEF5
  position: relative
  border-left: 7px solid #FF8E0E
  padding: 20px
  border-radius: 0 6px 6px 0
  font-size: 18px
.car-card--id
  position: absolute
  top: 20px
  right: 20px
  font-weight: bold
  color: #FF8E0E
.car-card--characteristics_list
  list-style-type: none
  padding: 0
.car-card--price
  position: absolute
  bottom: 0px
  right: 0px
  text-align: right
  .price
    color: #FF8E0E
    font-weight: bold
    font-size: 26px
    margin-right: 20px
    display: block
    margin-bottom: 10px
.car-card--price_credit
  text-align: center
  background-color: #F2F6FC
  padding: 5px 20px 5px 10px
  border-radius: 8px 0 8px 0
  font-size: 0.85em
  .credit b
    color: #FF8E0E
.owl-carousel .owl-item .carousel-thumbs--item
  height: 150px
  background-size: cover
  background-repeat: no-repeat
  background-position: center center
.carousel-thumbs
  margin: 40px 0
.car-card--image div
  height: 100%
.carousel-car--item
  background-size: cover
  background-repeat: no-repeat
  background-position: center center
.car-card--image div
  background-size: cover
  background-repeat: no-repeat
  background-position: center center
.carousel-thumbs .owl-nav
  height: 100%
  position: absolute
  top: 0
  left: 0
  display: flex
  justify-content: space-between
  margin: 0
  width: 100%
  .owl-prev,
  .owl-next
    margin: 0
    border-radius: 0
    width: 20px
    display: block
    background-color: rgba(0,0,0,.7)!important
    outline: none
    font-size: 36px!important
    color: #fff!important
.car-description
  margin-bottom: 20px
  p
    color: #909399
    margin-top: 10px
</style>
