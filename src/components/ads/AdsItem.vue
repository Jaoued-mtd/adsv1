<template>
  <div class="card bg-light p-4" style="border: none">
    <div class="card-header bg-white" style="border: none">
      <p class="card-text">
        <small class="text-muted"> {{ username }}</small>
      </p>
    </div>
    <img
      class="card-img-top"
      src="https://img.pecheur.com/leurre-souple-arme-delalande-neo-shad-texan-11cm-z-1728-172808.jpg"
      alt="Card image cap"
    />

    <div class="card-body text-center">
      <div class="d-flex justify-content-between">
        <p class="card-title">{{ title }}</p>
        <p class="card-price text-muted font-weight-light">{{ price }} €</p>
      </div>
    </div>
    <BaseButton
      link
      :to="'/annonces/' + id"
      title="Detail"
      mode="blue-bg"
    ></BaseButton>
  </div>
</template>

<script>
export default {
  props: [
    "title",
    "description",
    "price",
    "categorie",
    "id",
    "username",
    "phone",
    "email",
  ],
};
</script>