<template>
  <BaseCard>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="phone">Phone</label>
        <input
          class="form-control"
          type="tel"
          id="phone"
          v-model.trim="phone"
        />
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          class="form-control"
          type="username"
          id="username"
          v-model.trim="username"
        />
      </div>
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
      <button type="submit" class="btn-success btn">Inscription</button>
    </form>
  </BaseCard>
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
