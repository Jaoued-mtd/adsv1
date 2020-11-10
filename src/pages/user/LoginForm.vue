<template>
  <div class="registration-form">
    <h2 class="text-center font-weight-light mb-5">Connexion</h2>
    <p v-if="!formIsValid" class="text-center text-danger font-weight-bold">
      Mot de passe ou email incorrect.
    </p>
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
      <div class="form-group" :class="{ invalid: !email.isValid }">
        <input
          type="email"
          id="email"
          class="form-control item"
          placeholder="Email"
          v-model.trim="email.val"
          @blur="clearValidity('email')"
        />
        <p v-if="!email.isValid" class="invalid">
          Merci de remplir le champ email.
        </p>
      </div>
      <div class="form-group" :class="{ invalid: !password.isValid }">
        <input
          type="password"
          class="form-control item"
          id="password"
          placeholder="Mot de Passe"
          v-model.trim="password.val"
          @blur="clearValidity('password')"
        />
        <p v-if="!password.isValid" class="invalid">
          Merci de remplir le champ mot de passe.
        </p>
      </div>

      <!-- <div class="form-group row">
        <label for="robot" class="col-sm-2 col-form-label"></label>
        <div class="col-sm-10">
          <vue-recaptcha
            @verify="mxVerify"
            sitekey="6LeffuEZAAAAANXjJ4ajReokA0MA2q_TYWSt2gcy"
            :loadRecaptchaScript="true"
          >
          </vue-recaptcha>
        </div>
      </div> -->
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
// import VueRecaptcha from "vue-recaptcha";
export default {
  // components: {
  //   VueRecaptcha,
  // },
  data() {
    return {
      email: {
        val: "",
        isValid: true,
      },
      password: {
        val: "",
        isValid: true,
      },
      formIsValid: true,
      recaptcha: null,
    };
  },

  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;

      if (this.email.val === "") {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      if (this.password.val === "") {
        this.password.isValid = false;
        this.formIsValid = false;
      }
    },
    async submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      // if (this.recaptcha) {
      const formData = {
        email: this.email.val,
        password: this.password.val,
      };

      try {
        await this.$store.dispatch("login", formData);
        this.$router.replace("/profil");
      } catch (err) {
        console.log(err);
        this.formIsValid = false;
      }
      // }
    },
    mxVerify(response) {
      this.recaptcha = response;
    },
  },
};
</script>

<style >
.invalid label {
  color: red;
}

.invalid p {
  font-size: 0.8rem;
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>

