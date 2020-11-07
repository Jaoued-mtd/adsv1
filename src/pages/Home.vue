<template>
  <div class="hero">
    <div class="hero-section">
      <div class="hero-text">
        <h1 class="text-light">
          Vos articles de <span class="green">peche</span> d'occasion
        </h1>
      </div>
    </div>
    <h1 class="text-center mt-5">Produits Populaires</h1>
    <AdsList number="3" />
  </div>
</template>
<script>
import AdsList from "./ads/AdsList";
export default {
  components: {
    AdsList,
  },
};
</script>
<style>
.hero-section {
  background: url(https://images.unsplash.com/photo-1515676724626-c0290fe4cf6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)
    center;
  min-height: 60vh;
}
.hero-section img {
  filter: brightness(0.6);
}

.hero-text {
  padding: 10rem;
  width: 70%;
}
</style>