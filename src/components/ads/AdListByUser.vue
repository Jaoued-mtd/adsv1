<template>
  <div v-if="!editMode">
    <div
      v-for="ad in ads"
      :key="ad.id"
      class="card shadow mt-5"
      style="border: none"
    >
      <div class="row no-gutters">
        <div class="col-sm-3">
          <img
            v-if="ad.image"
            class="card-img ml-5"
            :src="ad.image.url"
            alt="Suresh Dasari Card"
          />
        </div>
        <div class="col-sm-9">
          <div class="card-body">
            <h5 class="card-title">Titre : {{ ad.title }}</h5>
            <p class="card-text">
              Description :
              {{ ad.description }}
            </p>
            <p class="card-text">Prix : {{ ad.price }} €</p>
            <p class="card-text">Categorie : {{ ad.categorie }} €</p>
            <button @click="turnEditMode(ad)" class="btn blue-bg text-light">
              Modifier
            </button>
            <button
              @click="deleteAd(ad.id)"
              class="btn btn-outline-danger ml-5"
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <BaseSpinner v-if="isLoading" />
    <AdEditForm
      v-else
      :title="adToEdit.title"
      :price="adToEdit.price"
      :description="adToEdit.description"
      :categorie="adToEdit.categorie"
      :id="adToEdit.id"
      :userId="adToEdit.users_permissions_user.id"
      @close="editMode = false"
      @save-data="saveData"
    />
  </div>
</template>
<script>
import AdEditForm from "../../components/ads/AdEditForm";
export default {
  components: {
    AdEditForm,
  },
  data() {
    return {
      editMode: false,
      adToEdit: null,
      isLoading: false,
    };
  },
  computed: {
    ads() {
      return this.$store.getters["ads/ads"].filter(
        (item) =>
          item.users_permissions_user.id == this.$store.state.auth.userId
      );
    },
  },
  methods: {
    async loadAds() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("ads/loadAds");
        this.isLoading = false;
      } catch (error) {
        console.log(error.message || "Something went wrong!");
        this.isLoading = false;
      }
    },
    turnEditMode(ad) {
      this.adToEdit = ad;
      this.editMode = true;
    },
    async deleteAd(id) {
      try {
        await this.$store.dispatch("ads/deleteAd", id);
        this.loadAds();
      } catch (error) {
        console.log(error.message || "Something went wrong!");
      }
    },
    async saveData(data) {
      try {
        await this.$store.dispatch("ads/updateAd", data);
        this.editMode = false;
        this.loadAds();
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
<style>
</style>