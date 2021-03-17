<template>
  <div class="alert">
    <p>{{ infoAlert.message }}</p>
  </div>
</template>

<script>
export default {
  name: "Alert",
  computed: {
    infoAlert() {
      return this.$store.getters.getAlert;
    }
  },
  mounted() {
    setTimeout(
      () => this.$store.commit("setAlert", { status: false, message: null }),
      5000
    );
  }
};
</script>

<style lang="scss" scoped>
//
.alert {
  position: absolute;
  width: 40%;
  padding: 15px;
  border-radius: 5px;
  background-color: var(--red);
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  text-transform: capitalize;
}
</style>
