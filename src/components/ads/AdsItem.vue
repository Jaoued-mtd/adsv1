<template>
  <div class="card p-4">
    <img
      class="card-img-top"
      src="https://img.pecheur.com/leurre-souple-arme-delalande-neo-shad-texan-11cm-z-1728-172808.jpg"
      alt="Card image cap"
    />
    <div class="card-body">
      <h3 class="card-title">{{ title }}</h3>
      <h5 class="card-price">{{ price }}</h5>
      <p class="card-text">{{ description }}</p>
      <p class="card-text">
        <small class="text-muted">{{ categorie }}</small>
      </p>
    </div>
    <BaseButton
      link
      :to="'/annonces/' + id"
      title="Detail"
      mode="btn-success"
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