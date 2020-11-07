<template>
  <h3 class="text-center font-weight-light mt-5">
    Creez votre première annonce
  </h3>
  <AdForm @save-data="saveData" />
</template>

<script>
import AdForm from "../../components/ads/AdForm";
export default {
  components: {
    AdForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch("ads/createAd", data);
    },
  },
};
</script>