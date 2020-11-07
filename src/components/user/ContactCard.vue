<template>
  <div class="content mt-5">
    <div class="container">
      <div class="text-center card-box">
        <div class="member-card pt-2 pb-2">
          <div class="thumb-lg member-thumb mx-auto">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar2.png"
              class="rounded-circle img-thumbnail"
              alt="profile-image"
              style="width: 5rem"
            />
          </div>
          <div class="">
            <h4>{{ username }}</h4>
            <p class="text-muted">
              {{ phone }} <span>| </span
              ><span
                ><a href="#" class="text-pink">{{ email }}</a></span
              >
            </p>
          </div>

          <a
            v-if="this.$route.path != '/profil'"
            :href="'mailto:' + email"
            class="btn blue-bg text-light mt-3 btn-rounded waves-effect w-md waves-light"
          >
            Envoyer un email
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["email", "username", "phone"],
};
</script>