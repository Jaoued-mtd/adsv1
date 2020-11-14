<template>
  <div class="grid" v-if="this.$route.path === '/annonces'">
    <div class="row">
      <div class="col-lg-3 p-5">
        <input
          v-model="searchBar"
          type="search"
          class="form-control rounded mb-3"
          placeholder="Rechercher des articles"
          id="search"
        />
        <select
          v-model="categorie"
          class="custom-select mr-sm-2 mb-3"
          id="inlineFormCustomSelect"
        >
          <option value="" selected>Categorie...</option>
          <option value="cannes">Cannes</option>
          <option value="moulinets">Moulinets</option>
          <option value="leurres">Leurres</option>
        </select>
        <div class="form-row p-1">
          <label for="price-min">Prix min: </label>
          <input
            type="range"
            name="price-min"
            id="price-min"
            min="0"
            max="5000"
            v-model="min"
            class="ml-5 mr-2 w-75"
          />
        </div>
        <div class="mt-1">
          {{ min }}
        </div>
        <div class="form-group mt-2">
          <label for="price-max">Prix max: </label>
          <input
            type="range"
            name="price-max"
            id="price-max"
            min="0"
            max="5000"
            v-model="max"
            class="ml-5 mr-2 w-75"
          />
        </div>
        <div v-if="max >= 5000" class="mt-1 text-right">5 000 +</div>
        <div v-else class="mt-1 text-right">
          {{ max }}
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
                :image="ad.image.url"
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
          :image="ad.image.url"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AdsItem from "../../components/ads/AdsItem";
export default {
  props: ["number"],
  data() {
    return {
      searchBar: "",
      categorie: "",
      min: 0,
      max: 5000,
    };
  },
  components: {
    AdsItem,
  },

  computed: {
    ads() {
      if (this.$route.query.cat) {
        return this.$store.getters["ads/ads"]
          .slice(0, this.number)
          .filter((item) =>
            item.categorie
              .toLowerCase()
              .includes(this.$route.query.cat.toLowerCase())
          )
          .filter((item) =>
            item.title.toLowerCase().includes(this.searchBar.toLowerCase())
          )
          .filter((item) =>
            item.categorie.toLowerCase().includes(this.categorie.toLowerCase())
          )
          .filter((item) => item.price >= this.min && item.price <= this.max);
      } else {
        return this.$store.getters["ads/ads"]
          .slice(0, this.number)
          .filter((item) =>
            item.title.toLowerCase().includes(this.searchBar.toLowerCase())
          )
          .filter((item) =>
            item.categorie.toLowerCase().includes(this.categorie.toLowerCase())
          )
          .filter((item) => item.price >= this.min && item.price <= this.max);
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