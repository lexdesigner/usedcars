<template>
  <div class="cars-list">
    <el-button
      plain
      @click="view = 'columns'"
      v-if="view == 'rows'"
      class="changeViewBtn"
      type="primary"
    >
      <i class="bx bxs-grid"></i>
    </el-button>
    <el-button
      plain
      @click="view = 'rows'"
      v-if="view == 'columns'"
      class="changeViewBtn"
      type="primary"
    >
      <i class="bx bx-list-ul"></i>
    </el-button>
    <div
      :class="[
        'el-table el-table--fit el-table--enable-row-hover el-table--enable-row-transition',
        view === 'columns' ? 'cars-list-cards' : ''
      ]"
    >
      <div class="el-table el-table_header-wrapper">
        <table
          cellspacing="0"
          cellpadding="0"
          border="0"
          class="el-table__header"
          width="100%"
        >
          <thead class="has-gutter">
            <tr class="">
              <th class="carImage-label  ">
                <div class="cell carImage-label">Фото</div>
              </th>
              <th class="carName is-sortable" @click.prevent="sortCars('mark')">
                <div class="cell">
                  Марка<span class="caret-wrapper"
                    ><i class="sort-caret ascending"></i
                    ><i class="sort-caret descending"></i
                  ></span>
                </div>
              </th>
              <th
                class="carModel is-sortable"
                @click.prevent="sortCars('model')"
              >
                <div class="cell">
                  Модель<span class="caret-wrapper"
                    ><i class="sort-caret ascending"></i
                    ><i class="sort-caret descending"></i
                  ></span>
                </div>
              </th>
              <th class="carType is-sortable" @click.prevent="sortCars('type')">
                <div class="cell">
                  Кузов<span class="caret-wrapper"
                    ><i class="sort-caret ascending"></i
                    ><i class="sort-caret descending"></i
                  ></span>
                </div>
              </th>
              <th
                class="carEngine is-sortable"
                @click.prevent="sortCars('engine')"
              >
                <div class="cell">
                  Двигатель<span class="caret-wrapper"
                    ><i class="sort-caret ascending"></i
                    ><i class="sort-caret descending"></i
                  ></span>
                </div>
              </th>
              <th
                class="carKpp is-sortable"
                @click.prevent="sortCars('transmission')"
              >
                <div class="cell">
                  КПП<span class="caret-wrapper"
                    ><i class="sort-caret ascending"></i
                    ><i class="sort-caret descending"></i
                  ></span>
                </div>
              </th>
              <th class="carYear is-sortable" @click.prevent="sortCars('year')">
                <div class="cell">
                  Год<span class="caret-wrapper"
                    ><i class="sort-caret ascending"></i
                    ><i class="sort-caret descending"></i
                  ></span>
                </div>
              </th>
              <th
                class="carMileage is-sortable"
                @click.prevent="sortCars('mileage')"
              >
                <div class="cell">
                  Пробег<span class="caret-wrapper"
                    ><i class="sort-caret ascending"></i
                    ><i class="sort-caret descending"></i
                  ></span>
                </div>
              </th>
              <th class="carId carId-label">
                <div class="cell carId-label">№ ЛОТА</div>
              </th>
              <th
                class="carPrice is-sortable"
                @click.prevent="sortCars('price')"
              >
                <div class="cell">
                  Цена<span class="caret-wrapper"
                    ><i class="sort-caret ascending"></i
                    ><i class="sort-caret descending"></i
                  ></span>
                </div>
              </th>
            </tr>
          </thead>
        </table>
      </div>

      <div class="el-table el-table_body-wrapper is-scrolling-none">
        <table
          class="el-table__body"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          border="0"
        >
          <tbody>
            <tr
              class="el-table__row"
              v-for="car in carsList"
              :key="car.id"
              @click.prevent="openCarPage(car)"
            >
              <td>
                <div class="cell">
                  <div
                    class="cars-list-image"
                    :style="
                      `background-image:url(${require(`/assets/img/cars/${car.id}/${car.images[0]}`)})`
                    "
                    v-if="car.images"
                  ></div>
                  <div
                    class="cars-list-image"
                    :style="
                      `background-image:url(${require('/assets/img/no-photo.gif')})`
                    "
                    v-else
                  ></div>
                  <p class="car-fullName">{{ car.fullName }}</p>
                </div>
              </td>
              <td class="carName">
                <div class="cell">
                  {{ car.name }}
                </div>
              </td>
              <td class="carModel">
                <div class="cell">
                  {{ car.model }}
                </div>
              </td>
              <td class="carType">
                <div class="cell">
                  {{ car.type }}
                </div>
              </td>
              <td class="carEngine">
                <div class="cell">
                  {{ car.engine }}
                </div>
              </td>
              <td class="carKpp">
                <div class="cell">
                  {{ car.transmission }}
                </div>
              </td>
              <td class="carYear">
                <div class="cell">
                  {{ car.year }}
                </div>
              </td>
              <td class="carMileage">
                <div class="cell">{{ localeNumber(car.mileage) }} км.</div>
              </td>
              <td class="carId">
                <div class="cell">
                  {{ car.id }}
                </div>
              </td>
              <td class="carPrice">
                <div class="cell">{{ localeNumber(car.price) }} руб.</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

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
    clearSort() {
      const sortElems = document.querySelectorAll(".is-sortable");
      sortElems.forEach(el => el.classList.remove("descending", "ascending"));
      this.$store.commit("cars/sortCars", { order: null });
    },
    descSort(el, prop) {
      this.clearSort();
      el.classList.add("descending");
      this.$store.commit("cars/sortCars", { prop, order: "descending" });
    },
    ascSort(el, prop) {
      this.clearSort();
      el.classList.add("ascending");
      this.$store.commit("cars/sortCars", { prop, order: "ascending" });
    },
    sortCars(prop) {
      const wrapper = event.target.closest(".is-sortable");
      if (wrapper.classList.contains("ascending")) {
        this.descSort(wrapper, prop);
      } else if (wrapper.classList.contains("descending")) {
        this.clearSort();
      } else {
        this.ascSort(wrapper, prop);
      }
    },
    openCarPage(car) {
      const mark = car.name.toLowerCase();
      this.$router.push(`/cars/${mark}/${car.id}`);
    }
  },
  computed: {
    carsList() {
      if (!this.filterMark) {
        this.dataLength = this.$store.getters["cars/currentCars"].length;
        return this.$store.getters["cars/currentCars"].slice(
          this.pageSize * this.page - this.pageSize,
          this.pageSize * this.page
        );
      } else {
        this.$store.commit("cars/getMarks", this.filterMark);
        this.dataLength = this.$store.getters["cars/markFiltered"].length;
        return this.$store.getters["cars/markFiltered"].slice(
          this.pageSize * this.page - this.pageSize,
          this.pageSize * this.page
        );
      }
    }
  },
  mounted() {}
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
.changeViewBtn
  padding: 0
  display: flex
  align-items: center
  justify-content: center
  margin-left: auto
  font-size: 36px
  line-height: 0
.cars-list-cards .el-table__row
  display: flex
  flex-direction: column
  width: 23%
  margin: 1%
  cursor: pointer
.cars-list-cards .el-table th.is-sortable
  width: 120px
  display: block
.cars-list-cards .el-table tr
  display: flex
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
.cars-list-cards .el-table th
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
.el-table th, .el-table td
  width: 100%
  text-align: center
</style>
