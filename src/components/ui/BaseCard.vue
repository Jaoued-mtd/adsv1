<template>
  <div
    class="card p-3 shadow"
    :style="'width:' + size + 'rem; margin:5rem auto'"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ["size"],
};
</script>