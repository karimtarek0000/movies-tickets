<template>
  <div>
    <button
      :disabled="statusSeatsNumbers.length === 0"
      type="button"
      @click="$emit('submit')"
    >
      booked now
    </button>
  </div>
</template>

<script>
export default {
  name: "SubmitBooked",
  computed: {
    statusSeatsNumbers() {
      return this.$store.getters.getSeatsNumbers;
    }
  }
};
</script>

<style lang="scss" scoped>
//
button {
  display: block;
  @extend %rest-btn;
  width: 150px;
  height: 50px;
  padding: 10px 15px;
  border: 0;
  background-color: var(--green);
  border-radius: 5px;
  margin: 0 auto;
  // margin-top: 20px;
  font-size: 17px;
  font-weight: 400;

  //
  @media (max-width: 1310px) {
    width: 50%;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    margin-top: -20px;
  }
}
</style>
