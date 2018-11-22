import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";

window.EventBus = new Vue();
Vue.config.productionTip = false;

import Components from "./components";

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
