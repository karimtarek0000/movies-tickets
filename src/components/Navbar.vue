<template>
  <nav class="navbar">
    <!-- Logo -->
    <routerLink class="navbar__image" :to="{ name: 'Home' }">
      <img src="@/assets/image/logo.svg" alt="logo" />
    </routerLink>
    <!-- Other -->
    <div class="navbar__register">
      <routerLink v-slot="{ navigate, href }" :to="{ name: 'SignUp' }" custom>
        <button :href="href" @click="navigate">sign up</button>
      </routerLink>

      <routerLink v-slot="{ navigate, href }" :to="{ name: 'SignIn' }" custom>
        <button :href="href" @click="navigate">log in</button>
      </routerLink>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss">
//
.navbar {
  grid-row: 1 / 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;

  //
  &__image {
    height: 95px;

    //
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  //
  &__register {
    //
    button {
      width: 120px;
      height: 50px;
      border-radius: 5px;
      border: 0;
      background-color: transparent;
      color: inherit;
      font-size: 20px;
      font-weight: 100;
      @extend %rest-btn;

      //
      @media (max-width: 421px) {
        display: none;
      }

      //
      &:nth-of-type(1) {
        border: 1px solid white;
        margin-right: 10px;
      }
      //
      &:nth-of-type(2) {
        background-color: var(--red);
      }
    }
  }
}
</style>
