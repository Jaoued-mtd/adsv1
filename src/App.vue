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
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

#app {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Work Sans", sans-serif;
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
