<template>
  <div class="container pt-5 contact text-center">
    <h3 class="text-center font-weight-light">
      Bienvenue sur ton espace {{ userMe.username }} !
    </h3>

    <ContactCard
      :username="userMe.username"
      :email="userMe.email"
      :phone="userMe.phone"
    />
    <button class="btn blue-bg text-light text-center">
      Afficher mes annonces
    </button>
  </div>
</template>
<script>
import ContactCard from "../../components/user/ContactCard";
export default {
  components: {
    ContactCard,
  },
  computed: {
    userMe() {
      return this.$store.getters["users/users"];
    },
  },
  created() {
    this.$store.dispatch("users/loadUsers");
  },
};
</script>
<style>
.contact {
  min-height: 67vh;
}
</style>