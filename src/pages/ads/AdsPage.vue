<template>
  <div class="grid container-fluid">
    <div class="row">
      <div class="col-lg-3 pt-4">
        <input
          type="search"
          class="form-control"
          id="search"
          placeholder="Rechercher un produit"
        />
      </div>
      <div class="col-lg-9">
        <AdsList />
      </div>
    </div>
  </div>
</template>
<script>
import AdsList from "./AdsList";
export default {
  components: {
    AdsList,
  },
};
</script>