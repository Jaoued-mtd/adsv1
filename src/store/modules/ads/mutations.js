export default {
  createAd(state, payload) {
    state.ads.push(payload);
  },
  setAds(state, payload) {
    state.ads = payload;
  },
};
