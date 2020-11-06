<template>
  <div>
    <h1>Bienvenue sur ton espace {{ userMe[0].username }}</h1>
  </div>
</template>
<script>
export default {
  computed: {
    userMe() {
      return this.$store.getters["users/userMe"];
    },
  },
};
</script>