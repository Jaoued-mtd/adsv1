<template>
  <div class="container pt-5">
    <h1>Bienvenue sur ton espace {{ userMe[0].username }} !</h1>
    <BaseCard>
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
            class="card-img ml-5"
            alt="product-image"
            style="width: 15rem"
          />
        </div>
        <div class="col-md-8 border-left">
          <div class="card-body">
            <h3 class="card-title">{{ userMe[0].username }}</h3>
            <h5 class="card-price">{{ userMe[0].email }}</h5>
            <p class="card-text">{{ userMe[0].phone }}</p>
          </div>
        </div>
      </div>
    </BaseCard>
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