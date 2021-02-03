<template>
  <div class="cars-list">
    <el-button
      plain
      @click="view = 'columns'"
      v-if="view == 'rows'"
      class="changeViewBtn"
      type="primary"
    >
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style="enable-background:new 0 0 512 512;"
        xml:space="preserve"
      >
        <rect x="180.67" y="361.33" width="150.67" height="150.67" />
        <rect x="180.67" y="180.66" width="150.67" height="150.67" />
        <rect x="361.33" width="150.67" height="150.66" />
        <rect y="180.66" width="150.67" height="150.67" />
        <rect x="361.33" y="180.66" width="150.67" height="150.67" />
        <rect y="361.33" width="150.67" height="150.67" />
        <rect x="361.33" y="361.33" width="150.67" height="150.67" />
        <rect width="150.67" height="150.66" />
        <rect x="180.67" width="150.67" height="150.66" /></svg
    ></el-button>
    <el-button
      plain
      @click="view = 'rows'"
      v-if="view == 'columns'"
      class="changeViewBtn"
      type="primary"
    >
      <svg
        height="512pt"
        viewBox="0 -52 512 512"
        width="512pt"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m0 0h113.292969v113.292969h-113.292969zm0 0" />
        <path d="m149.296875 0h362.703125v113.292969h-362.703125zm0 0" />
        <path d="m0 147.007812h113.292969v113.292969h-113.292969zm0 0" />
        <path
          d="m149.296875 147.007812h362.703125v113.292969h-362.703125zm0 0"
        />
        <path d="m0 294.011719h113.292969v113.296875h-113.292969zm0 0" />
        <path
          d="m149.296875 294.011719h362.703125v113.296875h-362.703125zm0 0"
        />
      </svg>
    </el-button>
    <el-table
      :class="[view === 'columns' ? 'cars-list-cards' : '']"
      :data="carsList"
      @sort-change="sortCars"
      @row-click="openCarPage"
    >
      <el-table-column
        prop="images"
        label="Фото"
        label-class-name="carImage-label"
      >
        <template slot-scope="scope">
          <div
            class="cars-list-image"
            :style="
              `background-image:url(${require(`/assets/img/cars/${scope.row.id}/${scope.row.images[0]}`)})`
            "
            v-if="scope.row.images"
          ></div>
          <div
            class="cars-list-image"
            :style="
              `background-image:url(${require('/assets/img/no-photo.gif')})`
            "
            v-else
          ></div>
          <p class="car-fullName">{{ scope.row.fullName }}</p>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="Марка"
        sortable="custom"
        class-name="carName"
      >
      </el-table-column>
      <el-table-column
        prop="model"
        label="Модель"
        sortable="custom"
        class-name="carModel"
      >
      </el-table-column>
      <el-table-column
        prop="type"
        label="Кузов"
        sortable="custom"
        class-name="carType"
      >
      </el-table-column>
      <el-table-column
        prop="engine"
        label="Двигатель"
        sortable="custom"
        class-name="carEngine"
      >
      </el-table-column>
      <el-table-column
        prop="transmission"
        label="КПП"
        sortable="custom"
        class-name="carKpp"
      >
      </el-table-column>
      <el-table-column
        prop="year"
        label="Год"
        sortable="custom"
        class-name="carYear"
      >
      </el-table-column>
      <el-table-column
        prop="mileage"
        label="Пробег"
        sortable="custom"
        class-name="carMileage"
      >
        <template slot-scope="scope">
          {{ localeNumber(scope.row.mileage) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="id"
        label="№ ЛОТА"
        label-class-name="carId-label"
        class-name="carId"
      >
      </el-table-column>
      <el-table-column prop="price" label="Цена" sortable class-name="carPrice">
        <template slot-scope="scope">
          {{ localeNumber(scope.row.price) }} руб.
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="dataLength"
      @current-change="setPage"
      :page-size.sync="pageSize"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: ["filterMark"],
  async fetch() {
    await this.$store.dispatch(
      "cars/fetch",
      this.$store.state.info.activeRegion
    );
    if (this.filterMark) {
      this.$store.commit("cars/filterCars", {
        mark: [this.filterMark],
        model: []
      });
    }
  },
  data() {
    return {
      page: 1,
      pageSize: 8,
      dataLength: 0,
      view: "rows"
    };
  },
  methods: {
    localeNumber(number) {
      const output = Number(number);
      return output.toLocaleString();
    },
    setPage(val) {
      this.page = val;
    },
    sortCars(props) {
      this.$store.commit("cars/sortCars", props);
    },
    openCarPage(car) {
      const mark = car.name.toLowerCase();
      this.$router.push(`/cars/${mark}/${car.id}`);
    }
  },
  computed: {
    carsList() {
      this.dataLength = this.$store.state.cars.currentCars.length;
      return this.$store.state.cars.currentCars.slice(
        this.pageSize * this.page - this.pageSize,
        this.pageSize * this.page
      );
    }
  }
};
</script>

<style lang="sass">
.el-pagination
  margin-top: 15px
  display: flex
  justify-content: center
.cars-list-image
  width: 100px
  height: 75px
.cars-list-image
  background-size: cover
  background-repeat: no-repeat
.changeViewBtn svg
  width: 30px
  height: 30px
  fill: #ff8e0e
.changeViewBtn:hover svg,
.changeViewBtn:focus svg
  fill: #fff
.changeViewBtn
  padding: 5px 10px
  margin-left: auto
  display: block
.cars-list-cards .el-table__row
  display: flex
  flex-direction: column
  width: 23%
  margin: 1%
  cursor: pointer
.cars-list-cards tbody
  display: flex
  flex-wrap: wrap
  width: 100%
.cars-list-cards .el-table__body
  display: block
.cars-list-cards .cars-list-image
  width: 100%
  height: 150px
  background-position: center center
.cars-list-cards .carId-label,
.cars-list-cards .carImage-label,
.cars-list-cards .carModel,
.cars-list-cards .carType,
.cars-list-cards .carEngine,
.cars-list-cards .carKpp
  display: none
.car-fullName
  display: none
.cars-list-cards .car-fullName
  display: block
.cars-list-cards .el-table th.is-leaf
  border-bottom: none
.cars-list-cards .el-table__row .carName
  display: none
.cars-list-cards .car-fullName
  font-weight: bold
  padding-top: 10px
.cars-list-cards .el-table__body tbody .carYear .cell::before
  content: 'Год выпуска: '
  opacity: .6
.cars-list-cards .el-table__body tbody .carMileage .cell::before
  content: 'Пробег: '
  opacity: .6
.cars-list-cards .el-table__body tbody .carId .cell::before
  content: 'Лот №: '
  opacity: .6
.cars-list-cards .el-table__body tbody .carPrice .cell::before
  content: 'Цена: '
  opacity: .6
.cars-list .el-table__body .el-table__row
  cursor: pointer
</style>
