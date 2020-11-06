<template>
  <BaseCard>
    <h3>Detail</h3>
    <h1>{{ ad[0].title }}</h1>
    <h1>{{ ad[0].description }}</h1>
    <h1>{{ ad[0].price }} €</h1>
    <h1>{{ ad[0].categorie }}</h1>
    <h1>{{ ad[0].phone }}</h1>
  </BaseCard>
</template>
<script>
export default {
  computed: {
    ad() {
      return this.$store.getters["ads/ads"].filter(
        (ad) => ad.id === this.$route.params.id
      );
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