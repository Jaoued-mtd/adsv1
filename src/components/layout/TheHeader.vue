<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="navbar-brand">
      <img
        src="http://demo2.cmsmart.net/wordpress/fishing2/wp-content/uploads/2017/09/logo2.png"
      />
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item" v-for="link in links" :key="link">
          <router-link
            class="nav-link text-uppercase cursor"
            :to="link.route"
            >{{ link.name }}</router-link
          >
        </li>
      </ul>
      <span class="navbar-text mb-1 ml-5 mr-5" v-if="isLoggedIn">
        <BaseButton
          link
          to="/create"
          mode="btn-success"
          title="Creer votre annonce"
        ></BaseButton>
        <BaseButton
          @click="logout"
          mode="btn-danger"
          title="Deconnexion"
        ></BaseButton>
      </span>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.replace("/");
    },
  },
  data() {
    return {
      links: [
        {
          name: "Accueil",
          route: "/",
        },
        {
          name: "Annonces",
          route: "/annonces",
        },
        {
          name: "Connexion",
          route: "/auth",
        },
        {
          name: "Profil",
          route: "/profil",
        },
      ],
    };
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

.navbar-link {
  margin-right: 2rem;
  text-transform: uppercase;
  font-weight: bold;
}
</style>