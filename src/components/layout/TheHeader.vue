<template>
  <p class="text-light p-2 text-center blue-bg" style="margin: 0">
    Trouvez la bonne affaire parmi les ceintaines de petites annonces
  </p>

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
    <div class="collapse navbar-collapse text-center" id="navbarText">
      <div class="bg-light p-3 mobile">
        <div v-for="link in links" :key="link">
          <router-link class="text-dark" :to="link.to">{{
            link.name
          }}</router-link>
        </div>
      </div>
      <div class="navbar-nav ml-auto">
        <BaseButton
          link
          to="/profil"
          v-if="isLoggedIn"
          mode="blue mt-2"
          title=""
        >
          <svg
            width="1.5em"
            height="1.5em"
            viewBox="0 0 16 16"
            class="bi bi-person-circle"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"
            />
            <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            <path
              fill-rule="evenodd"
              d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
            />
          </svg>
          <br />
          Mon espace<br />client
        </BaseButton>

        <span class="navbar-text ml-2">
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
            mode="text-danger p-1"
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
    </div>
  </nav>
  <div class="bg-light p-3 desktop">
    <div class="d-flex justify-content-between container">
      <div v-for="link in links" :key="link">
        <router-link :class="link.mode" :to="link.to">{{
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
          name: "CANNES",
          to: "/annonces?search=canne",
          mode: "text-dark",
        },
        {
          name: "MOULINETS",
          to: "/annonces?search=moulinet",
          mode: "text-dark",
        },
        {
          name: "LEURRES",
          to: "/annonces?search=leurre",
          mode: "text-dark",
        },
        {
          name: "FILS",
          to: "/annonces?search=fils",
          mode: "text-dark",
        },
        {
          name: "MONTAGE-LIGNE",
          to: "/annonces?search=montage",
          mode: "text-dark",
        },
        {
          name: "BAGAGERIE",
          to: "/annonces?search=bagagerie",
          mode: "text-dark",
        },
        {
          name: "NAVIGATION",
          to: "/annonces?search=navigation",
          mode: "text-dark",
        },
        {
          name: "VETEMENTS",
          to: "/annonces?search=vetement",
          mode: "text-dark",
        },
        {
          name: "ANNONCES",
          to: "/annonces",
          mode: "blue",
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