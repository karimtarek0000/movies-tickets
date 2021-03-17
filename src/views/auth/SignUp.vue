<template>
  <form class="form">
    <!--  -->
    <div class="form__input form__input--name">
      <label for="name">enter your name</label>
      <input
        id="name"
        type="text"
        autocomplete="off"
        placeholder="enter your name"
      />
    </div>
    <!--  -->
    <div class="form__input form__input--email">
      <label for="email">enter your email</label>
      <input
        id="email"
        type="text"
        autocomplete="off"
        placeholder="enter your email"
      />
    </div>
    <!--  -->
    <div class="form__input form__input--password">
      <label for="password">password</label>
      <input id="password" type="text" placeholder="password" />
    </div>
    <!--  -->
    <div class="form__input form__input--confirPassword">
      <label for="confirmPassword">confirm password</label>
      <input id="confirmPassword" type="text" placeholder="confirm password" />
    </div>
    <!--  -->
    <button type="submit">sign up</button>
  </form>
</template>

<script>
export default {
  name: "SignUp",
  created() {
    this.$store.commit("setTitlePage", "sign up");
  }
};
</script>

<style></style>
