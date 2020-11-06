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
      <span class="navbar-text mb-1 ml-5 mr-5 text-success">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-bag-plus"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5H2z"
          />
          <path
            fill-rule="evenodd"
            d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
          />
        </svg>
      </span>
    </div>
  </nav>
</template>
<script>
export default {
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