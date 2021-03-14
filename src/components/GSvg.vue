<template>
  <svg>
    <use
      :xlink:href="require(`@/assets/icon/${src}.svg`) + '#icon-' + nameIcon"
    >
      <title v-text="title" />
    </use>
  </svg>
</template>

<script>
export default {
  name: "GSvg",
  props: {
    title: {
      type: String,
      default: "icon"
    },
    src: {
      type: String,
      default: "sprite"
    },
    nameIcon: {
      type: String,
      required: true
    }
  }
};
</script>

<style></style>
