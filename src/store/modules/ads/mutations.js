export default {
  createAd(state, payload) {
    state.ads.push(payload);
  },
  setAds(state, payload) {
    state.ads = payload;
  },
  updateAd(state, payload) {
    const objIndex = state.ads.findIndex((ad) => ad.id === payload.id);
    state.ads[objIndex] = payload;
  },
};
