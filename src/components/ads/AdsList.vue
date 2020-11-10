<template>
  <div class="grid" v-if="this.$route.path === '/annonces'">
    <div class="row">
      <div class="col-lg-3 p-5">
        <input
          v-model="search"
          type="search"
          class="form-control rounded mb-3"
          placeholder="Rechercher des articles"
          id="search"
        />
        <select class="custom-select mr-sm-2 mb-3" id="inlineFormCustomSelect">
          <option selected>Categorie...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div class="form-row p-1">
          <input
            v-model="min"
            type="text"
            class="form-control col-lg-6 rounded mb-3"
            placeholder="Prix min"
            id="min"
          />
          <input
            v-model="max"
            type="text"
            class="form-control rounded mb-3 col-lg-6"
            placeholder="Prix max"
            id="max"
          />
        </div>
      </div>
      <div class="col-lg-9">
        <div v-if="ads.length <= 0">
          <p class="text-center p-5">
            Victime de leur succès tous les articles sont vendus ! Merci de
            revenir ultérieurement...
          </p>
        </div>
        <div class="grid container p-4">
          <div class="row">
            <div class="col-lg-4" v-for="ad in ads" :key="ad.id">
              <AdsItem
                :id="ad.id"
                :title="ad.title"
                :description="ad.description"
                :price="ad.price"
                :categorie="ad.categorie"
                :username="ad.users_permissions_user.username"
                :image="'http://localhost:1337' + ad.image.url"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="grid container p-4">
    <div class="row">
      <div class="col-lg-4" v-for="ad in ads" :key="ad.id">
        <div v-if="ads.length <= 0">
          <p class="text-center p-5">
            Victime de leur succès tous les articles sont vendus ! Merci de
            revenir ultérieurement...
          </p>
        </div>
        <AdsItem
          :id="ad.id"
          :title="ad.title"
          :description="ad.description"
          :price="ad.price"
          :categorie="ad.categorie"
          :username="ad.users_permissions_user.username"
          :image="'http://localhost:1337' + ad.image.url"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AdsItem from "../../components/ads/AdsItem";
export default {
  props: ["number"],
  components: {
    AdsItem,
  },

  computed: {
    ads() {
      if (this.$route.query.search) {
        return this.$store.getters["ads/ads"]
          .slice(0, this.number)
          .filter((item) =>
            item.title
              .toLowerCase()
              .includes(this.$route.query.search.toLowerCase())
          );
      } else {
        return this.$store.getters["ads/ads"].slice(0, this.number);
      }
    },
  },
  methods: {
    async loadAds() {
      try {
        await this.$store.dispatch("ads/loadAds");
      } catch (error) {
        console.log(error.message || "Something went wrong!");
      }
    },
  },

  created() {
    this.loadAds();
  },
};
</script>