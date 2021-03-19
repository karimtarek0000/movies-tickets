<template>
  <div :class="$attrs.class">
    <label :for="$attrs.id" v-text="label" />
    <input
      :value="value"
      :id="$attrs.id"
      @input="input($event)"
      :type="$attrs.type"
      autocomplete="off"
      :placeholder="$attrs.placeholder"
    />
    <!-- Required -->
    <span
      v-if="
        !$parent.$v[parent][child].required && $parent.$v[parent][child].$dirty
      "
      v-text="messageRequire"
    />
    <!-- Slot -->
    <slot />
  </div>
</template>

<script>
export default {
  name: "InputVuelidate",
  inheritAttrs: false,
  model: {
    prop: "value",
    event: "sendNewData"
  },
  props: {
    value: {
      type: null,
      required: true
    },
    parent: {
      type: String,
      required: true
    },
    child: {
      type: String,
      required: true
    },
    messageRequire: {
      type: String,
      default: "required"
    },
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    input(e) {
      this.$emit("sendNewData", e.target.value);
      this.$parent.$v[this.parent][this.child].$touch();
    }
  }
};
</script>

<style></style>
