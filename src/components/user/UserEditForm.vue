
  <template>
  <div class="registration-form">
    <h2 class="text-center font-weight-light mb-5">
      Modifier vos informations
    </h2>
    <p v-if="!formIsValid" class="text-center text-danger font-weight-bold">
      Merci de verifier vos informations
    </p>

    <p v-if="success" class="text-center text-success font-weight-bold">
      {{ success }}
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
      <div class="form-group" :class="{ invalid: !username.isValid }">
        <input
          placeholder="Nom d'utilisateur"
          type="text"
          class="form-control item"
          id="username"
          v-model.trim="username.val"
          @blur="clearValidity('username')"
        />
        <p v-if="!username.isValid" class="invalid">
          Merci de remplir le champ username.
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
        <p
          v-if="emailExists"
          class="invalid"
          style="font-size: 0.8rem; color: red"
        >
          L’adresse email saisie est déjà utilisée dans notre système.
        </p>
      </div>
      <div class="form-group" :class="{ invalid: !email.isValid }">
        <input
          class="form-control item"
          type="tel"
          id="phone"
          v-model.trim="phone.val"
          placeholder="Numero de telephone"
          @blur="clearValidity('phone')"
        />
        <p v-if="!phone.isValid" class="invalid">
          Merci de remplir le champ telephone.
        </p>
      </div>
      <div class="form-group">
        <button
          type="submit"
          class="btn btn-block font-weight-light create-account"
        >
          Modifier votre profil
        </button>
      </div>
    </form>
    <div class="social-media">
      <router-link to="/login" class="blue btn p-2 m-2 text-light"
        >Connexion<br
      /></router-link>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["user"],
  data() {
    return {
      email: {
        val: this.user.email,
        isValid: true,
      },
      password: {
        val: null,
        isValid: true,
      },
      username: {
        val: this.user.username,
        isValid: true,
      },
      phone: {
        val: this.user.phone,
        isValid: true,
      },
      formIsValid: true,
      success: false,
      emailExists: false,
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
      //   if (this.password.val === "") {
      //     this.password.isValid = false;
      //     this.formIsValid = false;
      //   }
      if (this.phone.val === "") {
        this.phone.isValid = false;
        this.formIsValid = false;
      }
      if (this.username.val === "") {
        this.username.isValid = false;
        this.formIsValid = false;
      }
    },
    async submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }
      const formData = {
        email: this.email.val,
        password: this.password.val,
        username: this.username.val,
        phone: this.phone.val,
        id: this.$store.state.auth.userId,
      };

      try {
        await this.$store.dispatch("users/updateUser", formData);
        this.success = "Vous avez modifié vos informations avec succès";
        setTimeout(() => {
          this.success = false;
        }, 2000);
      } catch (err) {
        this.emailExists = true;
        this.formIsValid = false;
      }
    },
  },
};
</script>
