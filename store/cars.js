export const state = () => ({
  cars: [],
  currentCars: [],
  car: {},
  markFiltered: []
});

export const mutations = {
  changeRegion(state, region) {
    state.cars = state.cars.filter(car => car.region === region);
    state.currentCars = state.cars;
  },
  sortCars(state, { prop, order }) {
    if (order === "descending") {
      state.currentCars.sort((a, b) => {
        if (typeof prop === "string") {
          return a[prop] < b[prop] ? 1 : -1;
        } else if (typeof prop === "number") {
          return a[prop] - b[prop];
        }
      });
    } else if (order === "ascending") {
      state.currentCars.sort((a, b) => {
        {
          if (typeof prop === "string") {
            return a[prop] > b[prop] ? 1 : -1;
          } else if (typeof prop === "number") {
            return b[prop] - a[prop];
          }
        }
      });
    } else {
      state.currentCars = state.cars;
    }
  },
  setCars(state, cars) {
    state.cars = cars;
    state.currentCars = cars;
  },
  setCar(state, car) {
    state.car = car[0];
  },
  getMarks(state, mark) {
    state.markFiltered = state.cars.filter(
      car => car.name.toLowerCase() === mark.toLowerCase()
    );
  },
  filterCars(
    state,
    { mark, model, minPrice, maxPrice, kpp, drive, year, mileage, type }
  ) {
    state.currentCars = state.cars;
    if (mark.length && !model.length) {
      state.currentCars = [];
      mark.forEach(item => {
        const arr = state.cars.filter(
          car => car.name.toLowerCase() === item.toLowerCase()
        );
        state.currentCars.push(...arr);
      });
    }
    if (mark.length && model.length) {
      state.currentCars = [];
      mark.forEach(item1 => {
        model.forEach(item2 => {
          const arr = state.cars.filter(
            car => car.name === item1 && car.model === item2
          );
          state.currentCars.push(...arr);
        });
      });
    }
    if (minPrice && minPrice != "Любой") {
      state.currentCars = state.currentCars.filter(
        car => car.price >= minPrice
      );
    }
    if (maxPrice && maxPrice != "Любой") {
      state.currentCars = state.currentCars.filter(
        car => car.price <= maxPrice
      );
    }
    if (kpp && kpp != "Любой") {
      state.currentCars = state.currentCars.filter(
        car => car.transmission == kpp
      );
    }
    if (drive && drive != "Любой") {
      state.currentCars = state.currentCars.filter(car => car.drive == drive);
    }
    if (year && year.length && year[0] != "Любой") {
      year.forEach(item => {
        state.currentCars = state.currentCars.filter(car => car.year === item);
      });
    }
    if (mileage && mileage != "Любой" && mileage != ">100000") {
      state.currentCars = state.currentCars.filter(
        car => car.mileage <= +mileage
      );
    } else if (mileage === ">100000") {
      state.currentCars = state.currentCars.filter(
        car => car.mileage >= 100000
      );
    }
    if (type && type != "Любой") {
      state.currentCars = state.currentCars.filter(car => car.type == type);
    }
  }
};

export const actions = {
  async fetchCars({ commit }, region) {
    const cars = await this.$axios.$get(
      "https://usedcars-genser-default-rtdb.firebaseio.com/cars.json"
    );
    commit(
      "setCars",
      cars.filter(car => car.region === region)
    );
  },
  fetchCar({ state, commit }, id) {
    commit(
      "setCar",
      state.cars.filter(car => car.id === id)
    );
  }
};

export const getters = {
  currentCars: s => s.currentCars,
  cars: s => s.cars,
  car: s => s.car,
  markFiltered: s => s.markFiltered
};
