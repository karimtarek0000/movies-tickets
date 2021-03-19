<template>
  <form @submit.prevent="submit" class="form">
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
    <!--  -->
    <button type="submit">sign in</button>
  </form>
</template>

<script>
import { signIn } from "@/mixins/Form.js";

//
export default {
  name: "SignIn",
  mixins: [signIn],
  created() {
    this.$store.commit("setTitlePage", "sign in");
  },
  methods: {
    submit() {
      this.$v.$touch();
    }
  }
};
</script>

<style></style>
