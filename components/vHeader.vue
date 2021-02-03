<template>
  <el-header>
    <nuxt-link no-prefetch to="/">
      <img src="~/assets/img/logo.gif" alt="Genser" class="img-responsive" />
    </nuxt-link>
    <el-menu mode="horizontal">
      <el-menu-item index="1">
        <nuxt-link no-prefetch to="/advantages/">НАШИ ПРЕИМУЩЕСТВА</nuxt-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">ПРОДАТЬ АВТО</template>
        <el-menu-item index="2-1">
          <nuxt-link no-prefetch to="/sell/">Оценка автомобиля</nuxt-link>
        </el-menu-item>
        <el-menu-item index="2-2">
          <nuxt-link no-prefetch to="/tradein/">Trade In</nuxt-link>
        </el-menu-item>
        <el-menu-item index="2-3"
          ><nuxt-link no-prefetch to="/buyout/">Выкуп</nuxt-link></el-menu-item
        >
        <el-menu-item index="2-4"
          ><nuxt-link no-prefetch to="/comission/"
            >Комиссия</nuxt-link
          ></el-menu-item
        >
        <el-menu-item index="2-5"
          ><nuxt-link no-prefetch to="/corp_clients/"
            >Корпоративным клиентам</nuxt-link
          ></el-menu-item
        >
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">КУПИТЬ АВТО</template>
        <el-menu-item index="3-1"
          ><nuxt-link no-prefetch to="/cars/"
            >Выбрать автомобиль</nuxt-link
          ></el-menu-item
        >
        <el-menu-item index="3-2"
          ><nuxt-link no-prefetch to="/offer_form/"
            >Заявка на подбор автомобиля</nuxt-link
          ></el-menu-item
        >
        <el-menu-item index="3-3"
          ><nuxt-link no-prefetch to="/cars/soon/"
            >Скоро в продаже</nuxt-link
          ></el-menu-item
        >
        <el-menu-item index="3-4"
          ><nuxt-link no-prefetch to="/cars/hot/"
            >Специальные предложения</nuxt-link
          ></el-menu-item
        >
        <el-menu-item index="3-5"
          ><nuxt-link no-prefetch to="/cars/leasing/"
            >Предложения в лизинг</nuxt-link
          ></el-menu-item
        >
        <el-menu-item index="3-5"
          ><nuxt-link no-prefetch to="/cars/comparison/"
            >Корзина сравнения</nuxt-link
          ></el-menu-item
        >
      </el-submenu>
      <el-menu-item index="5"
        ><nuxt-link no-prefetch to="/complaintbook/"
          >ОБРАТНАЯ СВЯЗЬ</nuxt-link
        ></el-menu-item
      >
    </el-menu>
    <el-dropdown trigger="click" @command="changeRegion">
      <span class="el-dropdown-link">
        Выберите регион:
        <el-link type="primary">{{
          this.$store.state.info.activeRegion
        }}</el-link>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="(reg, index) in this.$store.state.info.regions"
          :key="reg + index"
          :command="reg"
          >{{ reg }}</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
export default {
  methods: {
    changeRegion(region) {
      this.$store.commit("info/changeRegion", region);
      this.$store.dispatch("cars/fetch", region);
    }
  }
};
</script>

<style lang="sass">
.el-header
  display: flex
  justify-content: space-between
  align-items: center
  margin: 15px 0 25px
  border-bottom: solid 1px #e6e6e6
  padding: 0
.el-header .el-link
  vertical-align: top
</style>
