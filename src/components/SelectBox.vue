<template>
  <div class="custom-select">
    <select @change="sendNewValue">
      <option v-if="label" value="">{{ label }}</option>
      <option
        v-for="option in options"
        :selected="value === option"
        :key="option"
        :value="option"
        >{{ option }}</option
      >
    </select>
    <!--  -->
    <GSvg nameIcon="angle-down" title="select-movie" />
    <!--  -->
    <p class="note" v-if="note" v-text="note" />
  </div>
</template>

<script>
export default {
  name: "SelectBox",
  props: {
    value: {
      type: [Number, String],
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      required: false
    },
    note: {
      type: String,
      required: false
    }
  },
  methods: {
    sendNewValue(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>

<style></style>
