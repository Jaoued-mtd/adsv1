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
    <button
      @click="isSelected = 'AdsListByUser'"
      class="btn blue-bg text-light text-center"
    >
      Afficher mes annonces
    </button>
    <button
      @click="isSelected = 'UserEditForm'"
      class="btn blue-bg text-light text-center ml-5"
    >
      Modifier mes informations
    </button>

    <component :is="isSelected"></component>
  </div>
</template>
<script>
import UserEditForm from "../../components/user/UserEditForm";
import ContactCard from "../../components/user/ContactCard";
import AdsListByUser from "../../components/ads/AdListByUser";
export default {
  data() {
    return {
      isSelected: "AdsListByUser",
    };
  },
  components: {
    ContactCard,
    AdsListByUser,
    UserEditForm,
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