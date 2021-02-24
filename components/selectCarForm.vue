<template>
  <div class="search-form-wrapper">
    <client-only>
      <h3>КУПИТЬ АВТОМОБИЛЬ С ПРОБЕГОМ</h3>

      <el-form label-width="100px" :model="dataForm">
        <el-form-item label="Марка">
          <el-select
            v-model="dataForm.mark"
            placeholder="Марка"
            multiple
            filterable
            collapse-tags
            @change="changeMark"
          >
            <el-option
              v-for="(mark, index) in markList"
              :key="mark.name + mark.count + index"
              :label="mark.name"
              :value="mark.name"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Модель">
          <el-select
            v-model="dataForm.model"
            placeholder="Модель"
            multiple
            filterable
            collapse-tags
            @change="refreshOptions"
            :disabled="!dataForm.mark.length"
          >
            <el-option-group
              v-for="(car, i) of modelList"
              :key="car.mark + i"
              :label="car.mark"
            >
              <el-option
                v-for="(model, k) of car.models"
                :label="model"
                :value="model"
                :key="model + k"
              >
              </el-option>
            </el-option-group>
          </el-select>
        </el-form-item>
        <el-form-item label="Цена от">
          <el-select v-model="dataForm.minPrice" placeholder="от">
            <el-option label="Любой" value="Любой"> </el-option>
            <el-option label="400 000 руб." value="400000"> </el-option>
            <el-option label="500 000 руб." value="500000"> </el-option>
            <el-option label="700 000 руб." value="700000"> </el-option>
            <el-option label="1 000 000 руб." value="1000000"> </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Цена до">
          <el-select v-model="dataForm.maxPrice" placeholder="до">
            <el-option label="Любой" value="Любой"> </el-option>
            <el-option label="500 000 руб." value="500000"> </el-option>
            <el-option label="700 000 руб." value="700000"> </el-option>
            <el-option label="1 000 000 руб." value="1000000"> </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="КПП">
          <el-select v-model="dataForm.kpp" placeholder="КПП">
            <el-option label="Любой" value="Любой"> </el-option>
            <el-option
              v-for="(kpp, i) in kppList"
              :label="kpp"
              :value="kpp"
              :key="kpp + i"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Год выпуска">
          <el-select
            v-model="dataForm.years"
            placeholder="Год выпуска"
            multiple
            collapse-tags
          >
            <el-option label="Любой" value="Любой"> </el-option>
            <el-option
              v-for="(year, i) in yearsList"
              :label="year"
              :value="year"
              :key="year + i"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Пробег">
          <el-select v-model="dataForm.mileage" placeholder="Пробег">
            <el-option label="Любой" value="Любой"> </el-option>
            <el-option label="до 25 000 км" value="25000"> </el-option>
            <el-option label="до 35 000 км" value="35000"> </el-option>
            <el-option label="до 50 000 км" value="50000"> </el-option>
            <el-option label="до 75 000 км" value="75000"> </el-option>
            <el-option label="до 100 000 км" value="100000"> </el-option>
            <el-option label="Выше 100 000 км" value=">100000"> </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Кузов">
          <el-select v-model="dataForm.type" placeholder="Кузов">
            <el-option label="Любой" value="Любой"> </el-option>
            <el-option
              :label="type"
              :value="type"
              v-for="(type, index) in typeList"
              :key="type + index"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Привод">
          <el-select v-model="dataForm.drive" placeholder="Привод">
            <el-option label="Любой" value="Любой"> </el-option>
            <el-option
              v-for="(drive, i) in driveList"
              :label="drive"
              :value="drive"
              :key="drive + i"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchCar" icon="el-icon-search"
            >Найти</el-button
          >
          <el-button type="primary" @click="clearForm" plain
            >Сбросить</el-button
          >
        </el-form-item>
      </el-form>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      markList: [],
      modelList: [],
      kppList: [],
      driveList: [],
      yearsList: [],
      typeList: [],
      dataForm: {
        mark: [],
        model: [],
        minPrice: "",
        maxPrice: "",
        kpp: "",
        drive: "",
        years: [],
        mileage: "",
        type: ""
      }
    };
  },
  methods: {
    changeMark() {
      this.modelList = [];
      this.dataForm.mark.forEach((mark, index) => {
        this.modelList[index] = {
          mark,
          models: []
        };
      });
      this.modelList.forEach((item, index) => {
        const cars = this.$store.getters["cars/cars"];
        const carsItem = cars.filter(car => car.name == item.mark);
        item.models = carsItem.map(car => car.model);
        item.models = [...new Set(item.models)].sort();
      });
      this.refreshOptions();
    },
    refreshKpp() {
      this.kppList = [];
      const cars = this.getCars;
      if (!this.dataForm.mark.length && !this.dataForm.model.length) {
        this.kppList = cars.map(car => car.transmission);
        this.kppList = [...new Set(this.kppList)].sort();
      }
      if (this.dataForm.mark.length && !this.dataForm.model.length) {
        const kppArr = [];
        this.dataForm.mark.forEach(item => {
          cars.forEach(car => {
            if (car.name == item) {
              kppArr.push(car.transmission);
            }
          });
        });
        this.kppList = [...new Set(kppArr)].sort();
      }
      if (this.dataForm.mark.length && this.dataForm.model.length) {
        const kppArr = [];
        this.dataForm.model.forEach(item => {
          cars.forEach(car => {
            if (car.model == item) {
              kppArr.push(car.transmission);
            }
          });
        });
        this.kppList = [...new Set(kppArr)].sort();
      }
    },
    refreshYear() {
      this.yearsList = [];
      const cars = this.getCars;
      if (!this.dataForm.mark.length & !this.dataForm.model.length) {
        this.yearsList = cars.map(car => car.year);
        this.yearsList = [...new Set(this.yearsList)].sort();
      }
      if (this.dataForm.mark.length & !this.dataForm.model.length) {
        const yearsArr = [];
        this.dataForm.mark.forEach(item => {
          cars.forEach(car => {
            if (car.name == item) {
              yearsArr.push(car.year);
            }
          });
        });
        this.yearsList = [...new Set(yearsArr)].sort();
      }
      if (this.dataForm.mark.length & this.dataForm.model.length) {
        const yearsArr = [];
        this.dataForm.model.forEach(item => {
          cars.forEach(car => {
            if (car.model == item) {
              yearsArr.push(car.year);
            }
          });
        });
        this.yearsList = [...new Set(yearsArr)].sort();
      }
    },
    refreshType() {
      this.typeList = [];
      const cars = this.getCars;
      if (!this.dataForm.mark.length & !this.dataForm.model.length) {
        this.typeList = cars.map(car => car.type);
        this.typeList = [...new Set(this.typeList)].sort();
      }
      if (this.dataForm.mark.length & !this.dataForm.model.length) {
        const typesArr = [];
        this.dataForm.mark.forEach(item => {
          cars.forEach(car => {
            if (car.name == item) {
              typesArr.push(car.type);
            }
          });
        });
        this.typeList = [...new Set(typesArr)].sort();
      }
      if (this.dataForm.mark.length & this.dataForm.model.length) {
        const typesArr = [];
        this.dataForm.model.forEach(item => {
          cars.forEach(car => {
            if (car.model == item) {
              typesArr.push(car.type);
            }
          });
        });
        this.typeList = [...new Set(typesArr)].sort();
      }
    },
    refreshDrive() {
      this.driveList = [];
      const cars = this.getCars;
      if (!this.dataForm.mark.length & !this.dataForm.model.length) {
        this.driveList = cars.map(car => car.drive);
        this.driveList = [...new Set(this.driveList)].sort();
      }
      if (this.dataForm.mark.length & !this.dataForm.model.length) {
        const driveArr = [];
        this.dataForm.mark.forEach(item => {
          cars.forEach(car => {
            if (car.name == item) {
              driveArr.push(car.drive);
            }
          });
        });
        this.driveList = [...new Set(driveArr)].sort();
      }
      if (this.dataForm.mark.length & this.dataForm.model.length) {
        const driveArr = [];
        this.dataForm.model.forEach(item => {
          cars.forEach(car => {
            if (car.model == item) {
              driveArr.push(car.drive);
            }
          });
        });
        this.driveList = [...new Set(driveArr)].sort();
      }
    },
    refreshOptions() {
      this.refreshKpp();
      this.refreshYear();
      this.refreshType();
      this.refreshDrive();
    },
    searchCar() {
      this.$store.commit("cars/filterCars", this.dataForm);
    },
    clearForm() {
      this.dataForm = {
        mark: [],
        model: [],
        minPrice: "",
        maxPrice: "",
        kpp: "",
        drive: "",
        years: [],
        mileage: "",
        type: ""
      };
      this.searchCar();
    }
  },
  computed: {
    minRange() {
      const prices = this.getCars().map(car => car.price);
      return Math.min(...prices) || 0;
    },
    maxRange() {
      const prices = this.getCars().map(car => car.price);
      return Math.max(...prices) || 20000000;
    },
    getCars() {
      return this.$store.getters["cars/cars"];
    }
  },
  created() {
    this.refreshOptions();
    const cars = this.getCars;
    const counter = cars.reduce((obj, i) => {
      if (!obj.hasOwnProperty(i.name)) {
        obj[i.name] = 0;
      }
      obj[i.name]++;
      return obj;
    }, {});
    this.markList = Object.keys(counter).map(name => {
      return { name: name, count: counter[name] };
    });
  },
  mounted() {}
};
</script>

<style lang="sass">
.el-form
  display: flex
  flex-wrap: wrap
  justify-content: space-around
.search-form-wrapper
  background: rgb(244, 244, 245)
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  border-radius: 4px
  margin-bottom: 40px
  overflow: hidden
  h3
    margin-bottom: 35px
    text-align: left
    padding: 10px 20px
    width: 100%
    display: block
    background-color: #ff8e0e
    color: #ffffff
</style>
