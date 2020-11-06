export default {
  ads(state) {
    return state.ads;
  },
  hasAds(state) {
    return state.ads && state.ads.length > 0;
  },
};
