<template>
  <nav class="navbar navbar-expand-lg navbar-light container-fluid">
    <div class="navbar-brand ml-5">
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
        <li class="nav-item d-flex">
          <router-link
            class="nav-link text-uppercase text-dark mr-3 cursor"
            to="/"
            >Accueil</router-link
          >
          <router-link
            class="nav-link text-uppercase text-dark mr-3 cursor"
            to="/annonces"
            >Annonces</router-link
          >
          <router-link
            class="nav-link text-uppercase text-dark mr-3 cursor"
            to="/profil"
            v-if="isLoggedIn"
            >Votre Espace</router-link
          >
          <router-link
            class="nav-link text-uppercase text-dark mr-3 cursor"
            to="/auth"
            v-if="!isLoggedIn"
            >Connexion</router-link
          >
        </li>
      </ul>
      <span class="navbar-text mb-1 ml-5 mr-5" v-if="isLoggedIn">
        <BaseButton
          link
          to="/create"
          mode="btn-success "
          title="Creer votre annonce"
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-plus-square ml-2"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
            />
            <path
              fill-rule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
          </svg>
        </BaseButton>
        <BaseButton @click="logout" mode="btn-danger" title="">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-person-x-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </BaseButton>
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
    return {};
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