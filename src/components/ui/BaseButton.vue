<template>
  <button v-if="!link" :class="'btn  ' + mode">
    {{ title }}
  </button>
  <router-link v-else :to="to" :class="'btn text-light ' + mode">
    {{ title }}
  </router-link>
</template>
<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
    title: {
      type: String,
      required: true,
      default: "button name",
    },
  },
};
</script>
<style scoped>
</style>