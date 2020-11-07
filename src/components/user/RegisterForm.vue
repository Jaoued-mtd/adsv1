<template>
  <div class="registration-form">
    <h2 class="text-center font-weight-light mb-5">Inscription</h2>
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
          placeholder="Nom d'utilisateur"
          type="text"
          class="form-control item"
          id="username"
          v-model.trim="username"
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
          class="form-control item"
          type="tel"
          id="phone"
          v-model.trim="phone"
          placeholder="Numero de telephone"
        />
      </div>
      <div class="form-group">
        <button
          type="button"
          class="btn btn-block font-weight-light create-account"
        >
          Creer votre compte
        </button>
      </div>
    </form>
    <div class="social-media"></div>
  </div>
</template>
<script>
export default {
  email: "",
  password: "",
  username: "",
  phone: "",

  methods: {
    async submitForm() {
      const formData = {
        email: this.email,
        password: this.password,
        username: this.username,
        phone: this.phone,
      };

      try {
        await this.$store.dispatch("register", formData);
        this.$router.replace("/profil");
      } catch (err) {
        console.log(err.message || "Failed to authenticate, try later.");
      }
    },
  },
};
</script>

<style>
.registration-form {
  padding: 50px 0;
}

.registration-form form {
  background-color: #fff;
  max-width: 600px;
  margin: auto;
  padding: 50px 70px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
}

.registration-form .form-icon {
  text-align: center;
  background-color: #0098d4;
  border-radius: 50%;
  font-size: 40px;
  color: white;
  width: 100px;
  height: 100px;
  margin: auto;
  margin-bottom: 50px;
  line-height: 100px;
}

.registration-form .item {
  border-radius: 20px;
  margin-bottom: 25px;
  padding: 10px 20px;
}

.registration-form .create-account {
  border-radius: 30px;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  background-color: #0098d4;
  border: none;
  color: white;
  margin-top: 20px;
}

.registration-form .social-media {
  max-width: 600px;
  background-color: #fff;
  margin: auto;
  padding: 35px 0;
  text-align: center;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  color: #9fadca;
  border-top: 1px solid #dee9ff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
}

@media (max-width: 576px) {
  .registration-form form {
    padding: 50px 20px;
  }

  .registration-form .form-icon {
    width: 70px;
    height: 70px;
    font-size: 30px;
    line-height: 70px;
  }
}
</style>
