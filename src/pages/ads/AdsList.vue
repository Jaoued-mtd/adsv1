<template>
  <div class="grid container p-4">
    <div class="row">
      <div class="col-lg-4" v-for="ad in ads" :key="ad.id">
        <AdsItem
          :id="ad.id"
          :title="ad.title"
          :description="ad.description"
          :price="ad.price"
          :categorie="ad.categorie"
          :username="ad.username"
          :phone="ad.phone"
          :email="ad.email"
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
      return this.$store.getters["ads/ads"].slice(0, this.number);
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