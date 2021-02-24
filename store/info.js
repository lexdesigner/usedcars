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

export const getters = {
  phone: s => s.phone,
  email: s => s.email,
  regions: s => s.regions,
  activeRegion: s => s.activeRegion
};
