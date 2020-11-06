<template>
  <h1>Voici les annonces</h1>
  <ul>
    <AdsItem
      v-for="ad in ads"
      :key="ad.id"
      :title="ad.title"
      :description="ad.description"
      :price="ad.price"
      :categorie="ad.categorie"
    />
  </ul>
</template>

<script>
import AdsItem from "../../components/ads/AdsItem";
export default {
  components: {
    AdsItem,
  },
  computed: {
    ads() {
      return this.$store.getters["ads/ads"];
    },
  },
  methods: {
    async loadAds(refresh = false) {
      try {
        await this.$store.dispatch("ads/loadAds", {
          forceRefresh: refresh,
        });
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