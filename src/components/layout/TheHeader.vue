<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="navbar-brand ml-5">
      <router-link to="/" class="h4 blue mr-4">La Bredouille </router-link>
    </div>
    <BaseButton link to="/create" mode="blue-bg " title="Creer votre annonce">
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
            to="/profil"
            v-if="isLoggedIn"
            >Mon Espace</router-link
          >
        </li>
      </ul>
      <span class="navbar-text mb-1 ml-5">
        <router-link
          class="btn blue text-light mr-3 cursor"
          to="/login"
          v-if="!isLoggedIn"
          ><svg
            width="1.5em"
            height="1.5em"
            viewBox="0 0 16 16"
            class="bi bi-person-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            /></svg
          ><br />
          Connexion</router-link
        >
        <BaseButton
          @click="logout"
          v-if="isLoggedIn"
          mode="text-danger"
          title=""
        >
          <svg
            width="1.5em"
            height="1.5em"
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
          <br />
          Deconnexion
        </BaseButton>
      </span>
    </div>
  </nav>
  <div class="bg-light p-3">
    <div class="d-flex justify-content-between container">
      <div v-for="link in links" :key="link">
        <router-link class="text-dark" :to="link.to">{{
          link.name
        }}</router-link>
      </div>
    </div>
  </div>
  <form
    v-if="this.$route.path === '/'"
    class="d-flex justify-content-around pt-3 pb-3 pl-5 pr-5"
    @submit.prevent="formSubmit"
  >
    <input
      v-model="search"
      type="search"
      class="form-control rounded"
      placeholder="Rechercher des articles"
      id="search"
    />
    <button type="submit" class="btn">
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-search"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
        />
        <path
          fill-rule="evenodd"
          d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
        />
      </svg>
    </button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      links: [
        {
          name: "Cannes",
          to: "/annonces?search=canne",
        },
        {
          name: "Moulinets",
          to: "/annonces?search=moulinet",
        },
        {
          name: "Leurres",
          to: "/annonces?search=leurre",
        },
      ],
    };
  },
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
    formSubmit() {
      this.$router.push(`/annonces?search=${this.search}`);
      this.search = "";
    },
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