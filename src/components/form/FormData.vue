<template>
  <form @submit.prevent="$emit('submitData')">
    <slot />
  </form>
</template>

<script>
export default {
  name: "FormData"
};
</script>

<style></style>
