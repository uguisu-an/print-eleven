import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./main.scss";

import Canvas from "@/components/Canvas.vue";
Vue.component("v-canvas", Canvas);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
