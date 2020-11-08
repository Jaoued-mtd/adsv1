<template>
  <div
    v-for="ad in ads"
    :key="ad.id"
    class="card shadow mt-5"
    style="border: none"
  >
    <div v-if="editMode">
      <AdEditForm
        @close="editMode = false"
        @save-data="saveData"
        :title="ad.title"
        :price="ad.price"
        :description="ad.description"
        :categorie="ad.categorie"
        :id="ad.id"
        :userId="ad.users_permissions_user.id"
      />
    </div>
    <div v-else class="row no-gutters">
      <div class="col-sm-3">
        <img
          class="card-img ml-5"
          src="https://img.pecheur.com/leurre-souple-arme-delalande-neo-shad-texan-11cm-z-1728-172808.jpg"
          alt="Suresh Dasari Card"
        />
      </div>
      <div class="col-sm-9">
        <div class="card-body" v-if="!editMode">
          <h5 class="card-title">{{ ad.title }}</h5>
          <p class="card-text">
            {{ ad.description }}
          </p>
          <p class="card-text">{{ ad.price }} €</p>
          <button @click="editMode = true" class="btn blue-bg text-light">
            Modifier
          </button>
          <button @click="deleteAd(ad.id)" class="btn btn-outline-danger ml-5">
            Supprimer
          </button>
        </div>
      </div>
    </div>
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
      try {
        await this.$store.dispatch("ads/loadAds");
      } catch (error) {
        console.log(error.message || "Something went wrong!");
      }
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