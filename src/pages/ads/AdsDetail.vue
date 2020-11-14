<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 order-2 order-lg-1 border-right">
          <h2>{{ ad[0].title }}</h2>
          <p>{{ ad[0].price }}€</p>

          <p>
            {{ ad[0].description }}
          </p>
          <table class="table mt-5 mb-4 responsive">
            <tbody>
              <tr>
                <td>Categorie</td>
                <td class="text-right">{{ ad[0].categorie }}</td>
              </tr>
              <tr>
                <td>Marque</td>
                <td class="text-right">Secound value</td>
              </tr>
              <tr>
                <td>Propriétaire</td>
                <td class="text-right">
                  {{ ad[0].users_permissions_user.username }}
                </td>
              </tr>
            </tbody>
          </table>

          <ContactCard
            v-if="isLoggedIn"
            :username="ad[0].users_permissions_user.username"
            :email="ad[0].users_permissions_user.email"
            :phone="ad[0].users_permissions_user.phone"
          />
          <div class="mt-5 text-center" v-else>
            <p>Connectez-vous pour contacter le vendeur</p>
            <router-link to="/login" class="blue-bg btn text-light"
              >Se connecter</router-link
            >
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 mb-5 mb-lg-0">
          <img
            v-if="ad[0].image"
            class="img-fluid"
            :src="ad[0].image.url"
            alt=""
            style="width: 30rem"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ContactCard from "../../components/user/ContactCard";
export default {
  components: {
    ContactCard,
  },
  data() {
    return {
      contactCard: false,
    };
  },
  computed: {
    ad() {
      return this.$store.getters["ads/ads"].filter(
        (ad) => ad.id == this.$route.params.id
      );
    },

    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
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