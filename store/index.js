export const actions = {
  async nuxtServerInit({ dispatch, state }) {
    await dispatch("cars/fetchCars", state.info.activeRegion);
  }
};
