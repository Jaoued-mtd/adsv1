<template>
  <div class="hero">
    <div class="hero-section"></div>
    <div class="popular container">
      <div class="d-flex justify-content-between m-5">
        <h4 class="">Articles Populaires</h4>
        <router-link to="/annonces" class="blue">Voir tout</router-link>
      </div>
    </div>
    <AdsList number="3" />

    <Brand />
  </div>
</template>
<script>
import AdsList from "../components/ads/AdsList";
import Brand from "../components/home/Brand";
export default {
  components: {
    AdsList,
    Brand,
  },
};
</script>
<style>
.hero-section {
  background: url(https://i.ibb.co/g7J60Mg/Vendez-votre-materiel-de-peche-des-maintenant.png)
    no-repeat center 2rem fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 50vh;
}

.hero-text {
  padding: 10rem;
  width: 70%;
}

@media screen and (max-width: 1200px) {
  .hero-section {
    display: none;
  }
}
</style>