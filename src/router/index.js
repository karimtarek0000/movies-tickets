import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: 'signUp' */ "@/views/auth/SignUp")
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: () =>
      import(/* webpackChunkName: 'signIn' */ "@/views/auth/SignIn")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
