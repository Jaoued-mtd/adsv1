<template>
  <BaseCard>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="email">E-Mail</label>
        <input
          class="form-control"
          type="email"
          id="email"
          v-model.trim="email"
        />
      </div>
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input
          class="form-control"
          type="password"
          id="password"
          v-model.trim="password"
        />
      </div>
      <button type="submit" class="btn-success btn">Connexion</button>
    </form>
  </BaseCard>
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
