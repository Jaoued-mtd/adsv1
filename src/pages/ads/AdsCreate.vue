<template>
  <div class="ads-create">
    <h3 class="text-center font-weight-light mt-5">
      Creez votre première annonce
    </h3>
    <BaseSpinner v-if="isLoading" />
    <AdForm v-else @save-data="saveData" />
  </div>
</template>

<script>
import AdForm from "../../components/ads/AdForm";
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    AdForm,
  },
  methods: {
    async saveData(data) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("ads/createAd", data);
        this.isLoading = false;
        this.$router.replace("/profil");
      } catch (err) {
        console.log(err);
        this.isLoading = false;
      }
    },
  },
};
</script>
<style scoped>
</style>