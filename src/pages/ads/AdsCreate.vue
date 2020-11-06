<template>
  <BaseCard>
    <h3>Creez votre première annonce</h3>
    <FormAd @save-data="saveData" />
  </BaseCard>
</template>

<script>
import FormAd from "../../components/ads/FormAd";
export default {
  components: {
    FormAd,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch("ads/createAd", data);
    },
  },
};
</script>