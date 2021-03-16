<template>
  <div class="loader">
    <span></span>
  </div>
</template>

<script>
export default {
  name: "Loader"
};
</script>

<style lang="scss" scoped>
//
.loader {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  //
  span {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid;
    border-color: var(--green) var(--green) var(--green) transparent;
    animation: rotateLoader 0.6s linear infinite;

    //
    @keyframes rotateLoader {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
