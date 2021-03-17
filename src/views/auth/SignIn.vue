<template>
  <form class="form">
    <!--  -->
    <div class="form__input form__input--email">
      <label for="email">enter your email</label>
      <input id="email" type="text" placeholder="enter your email" />
    </div>
    <!--  -->
    <div class="form__input form__input--password">
      <label for="password">password</label>
      <input id="password" type="text" placeholder="password" />
    </div>
    <!--  -->
    <button type="submit">sign in</button>
  </form>
</template>

<script>
export default {
  name: "SignIn",
  created() {
    this.$store.commit("setTitlePage", "sign in");
  }
};
</script>

<style></style>
