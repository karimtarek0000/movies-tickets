const { required, email, sameAs } = require("vuelidate/lib/validators");
import InputVuelidate from "@/components/form/InputVuelidate";

// SIGN UP
export const signUp = {
  //
  data() {
    return {
      form: {
        email: null,
        name: null,
        password: null,
        confirmPassword: null
      }
    };
  },
  //
  validations: {
    form: {
      name: {
        required
      },
      email: {
        required,
        email
      },
      password: {
        required,
        unique: val => {
          const letterCapital = /[A-Z]{3,}/g;
          const letterSmall = /[a-z]{3,}/g;
          const numbers = /[0-9]{2,}/g;
          const characters = /[#@$!_-]{2,}/g;
          //
          if (
            letterCapital.test(val) &&
            letterSmall.test(val) &&
            numbers.test(val) &&
            characters.test(val)
          ) {
            return true;
          } else {
            return false;
          }
        }
      },
      confirmPassword: {
        required,
        sameAs: sameAs("password")
      }
    }
  },
  //
  components: {
    InputVuelidate
  }
};

// SIGN IN
export const signIn = {
  data() {
    return {
      form: Object.assign(
        {},
        signUp.data().form.email,
        signUp.data().form.password
      )
    };
  },
  //
  validations: {
    form: {
      email: signUp.validations.form.email,
      password: { ...signUp.validations.form.password.required }
    }
  },
  //
  components: { ...signUp.components }
};
