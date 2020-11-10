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
            :username="ad[0].users_permissions_user.username"
            :email="ad[0].users_permissions_user.email"
            :phone="ad[0].users_permissions_user.phone"
          />
        </div>
        <div class="col-lg-6 order-1 order-lg-2 mb-5 mb-lg-0">
          <img
            v-if="ad[0].image"
            class="img-fluid"
            :src="'http://localhost:1337' + ad[0].image.url"
            alt=""
            style="width: 30rem"
          />
          <div class="d-flex justify-content-between w-100 mt-4">
            <div class="p-0">
              <img
                class="w-100"
                src="https://contents.mediadecathlon.com/p1767547/k$2284a75bc4fd4d91c3af1bd5a3baf4b1/sq/CANNE+P+CHE+AU+TOC+RIVERWAY+T500+3+90L.webp?f=1000x1000"
                alt=""
              />
            </div>
            <div class="p-0 mx-4">
              <img
                class="w-100"
                src="https://contents.mediadecathlon.com/p1767427/k$09e9fca25f67f4fbc31d22b6ee224f5b/sq/CANNE+P+CHE+AU+TOC+RIVERWAY+T500+3+90L.webp?f=1000x1000"
                alt=""
              />
            </div>
            <div class="p-0">
              <img
                class="w-100"
                src="https://contents.mediadecathlon.com/p1767515/k$8549e625d84e9a95fd4996c3497c4858/sq/CANNE+P+CHE+AU+TOC+RIVERWAY+T500+3+90L.webp?f=1000x1000"
                alt=""
              />
            </div>
          </div>
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