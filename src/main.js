import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import GSvg from "./components/GSvg.vue";
import LazyImage from "./components/lazyImage.vue";
import Loader from "./components/Loader.vue";
import "./server/axios.js";
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);

Vue.config.productionTip = false;

Vue.component("GSvg", GSvg);
Vue.component("LazyImage", LazyImage);
Vue.component("Loader", Loader);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
