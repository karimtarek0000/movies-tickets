<template>
  <form @submit.prevent="submit" class="form">
    <!-- 1) - Name -->
    <InputVuelidate
      class="form__input form__input--name"
      id="name"
      v-model.trim="form.name"
      parent="form"
      child="name"
      type="text"
      placeholder="enter your name"
      messageRequire="name is require"
      label="enter your name"
    />

    <!-- 2) - Email -->
    <InputVuelidate
      class="form__input form__input--email"
      id="email"
      v-model.trim="form.email"
      parent="form"
      child="email"
      type="email"
      placeholder="enter your email"
      messageRequire="email is require"
      label="enter your email"
    >
      <!-- Error -->
      <span v-if="!$v.form.email.email">email not correct</span>
    </InputVuelidate>

    <!-- 3) - Password -->
    <InputVuelidate
      class="form__input form__input--password"
      id="password"
      v-model.trim="form.password"
      parent="form"
      child="password"
      type="password"
      placeholder="password"
      messageRequire="password is require"
      label="password"
    >
      <!-- Error -->
      <span v-if="$v.form.password.$error && $v.form.password.required"
        >you shoul'd at least 3 letter capital 3 letter small and 2 digits, 2
        any character
      </span>
    </InputVuelidate>

    <!-- 4) - Confirm password -->
    <InputVuelidate
      class="form__input form__input--confirmPassword"
      id="confirmPassword"
      v-model.trim="form.confirmPassword"
      parent="form"
      child="confirmPassword"
      type="confirmPassword"
      placeholder="confirm password"
      messageRequire="confirm password is require"
      label="confirm password"
    >
      <!-- Error -->
      <span
        v-if="
          $v.form.confirmPassword.$error && $v.form.confirmPassword.required
        "
        >not matched password</span
      >
    </InputVuelidate>

    <!--  -->
    <p class="form__haveAccount">
      are you have account ?
      <routerLink :to="{ name: 'SignIn' }" title="sign in now"
        >sign in</routerLink
      >
    </p>
    <button type="submit">sign up</button>
  </form>
</template>

<script>
import { signUp } from "@/mixins/Form.js";
//
export default {
  name: "SignUp",
  mixins: [signUp],
  created() {
    this.$store.commit("setTitlePage", "sign up");
  },
  methods: {
    submit() {
      this.$v.$touch();
    }
  }
};
</script>

<style></style>
