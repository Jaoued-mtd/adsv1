<template>
  <div class="">
    <!-- Navigation  -->
    <TheHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader";
export default {
  name: "App",
  components: {
    TheHeader,
  },
  created() {
    this.$store.dispatch("tryLogin");
    this.$store.dispatch("users/loadUsers");
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

#app {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}
.cursor {
  cursor: pointer;
}

.green {
  color: #1aa339;
}

.green-bg {
  background: #1aa339;
}
</style>
