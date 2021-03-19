<template>
  <div class="auth">
    <!--  -->
    <h1 v-text="getTitlePage" />
    <div class="auth__page">
      <!--  -->
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "Auth",
  computed: {
    getTitlePage() {
      return this.$store.getters.getTitlePage;
    }
  }
};
</script>

<style lang="scss">
//
.auth {
  height: 90vh;
  display: grid;
  grid-template-rows: 70px 1fr;
  grid-template-columns: 400px;
  justify-content: center;
  margin-top: 30px;
  text-transform: capitalize;

  //
  @media (max-width: 600px) {
    grid-template-columns: 90vw;
  }
}

//
.form {
  //
  &__input {
    display: grid;
    grid-template: 20px 50px / 1fr;
    row-gap: 10px;
    margin-bottom: 10px;

    //
    input {
      padding: 10px;
      border: 1px solid rgba(255, 255, 255, 0.39);
      background-color: rgba(#121212, 0.7);
      border-radius: 7px;
      color: var(--white);
      font-size: 18px;
      font-family: inherit;

      //
      &:focus {
        outline: none;
      }

      //
      &::placeholder {
        font-size: 17px;
        text-transform: capitalize;
      }
    }

    //
    label {
      text-transform: capitalize;
      font-size: 20px;
      color: var(--green);
    }

    //
    span {
      font-size: 15px;
      text-transform: lowercase;
    }
  }

  //
  button[type="submit"] {
    @extend %rest-btn;
    border: 0;
    background-color: var(--green);
    width: 100%;
    height: 50px;
    font-size: 22px;
    text-transform: uppercase;
  }

  //
  &__haveAccount {
    text-transform: lowercase;
    margin-bottom: 10px;
    text-align: right;

    //
    a {
      color: var(--white);
      text-transform: capitalize;
    }
  }
}
</style>
