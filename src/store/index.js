import { createStore } from "vuex";
import adsModule from "./modules/ads/index.js";

const store = createStore({
  modules: {
    ads: adsModule,
    //   requests: requestsModule,
    //   auth: authModule
  },
});

export default store;
