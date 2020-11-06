<template>
  <BaseCard>
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <h3>{{ price }}</h3>
    <h3>{{ categorie }}</h3>
  </BaseCard>
</template>

<script>
export default {
  props: ["title", "description", "price", "categorie"],
};
</script>