import { createStore } from "vuex";
import adsModule from "./modules/ads/index.js";
import authModule from "./modules/auth/index.js";
import userModule from "./modules/users/index.js";

const store = createStore({
  modules: {
    ads: adsModule,
    auth: authModule,
    users: userModule,
    //   requests: requestsModule,
    //   auth: authModule
  },
});

export default store;
