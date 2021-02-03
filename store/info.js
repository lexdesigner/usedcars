export const state = () => ({
  phone: "+74957885858",
  email: "info@genser.ru",
  regions: ["Москва", "Саратов", "Нижний Новгород"],
  activeRegion: "Москва"
});

export const mutations = {
  changeRegion(state, region) {
    state.activeRegion = region;
  }
};
