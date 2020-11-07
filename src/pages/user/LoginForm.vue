<template>
  <div class="registration-form">
    <h2 class="text-center font-weight-light mb-5">Connexion</h2>
    <form @submit.prevent="submitForm">
      <div class="form-icon">
        <span
          ><svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-person-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            /></svg
        ></span>
      </div>
      <div class="form-group">
        <input
          type="email"
          id="email"
          class="form-control item"
          placeholder="Email"
          v-model.trim="email"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control item"
          id="password"
          placeholder="Mot de Passe"
          v-model.trim="password"
        />
      </div>
      <div class="form-group">
        <button
          type="submit"
          class="btn btn-block font-weight-light create-account"
        >
          Connexion
        </button>
      </div>
    </form>
    <div class="social-media">
      <router-link to="/register" class="blue btn p-2 m-2 text-light"
        >Inscription<br
      /></router-link>
    </div>
  </div>
</template>
<script>
export default {
  email: "",
  password: "",

  methods: {
    async submitForm() {
      const formData = {
        email: this.email,
        password: this.password,
      };

      try {
        await this.$store.dispatch("login", formData);
        this.$router.replace("/profil");
      } catch (err) {
        console.log(err.message || "Failed to authenticate, try later.");
      }
    },
  },
};
</script>
