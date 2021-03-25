import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/global.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';

Vue.use(axios);
Vue.use(ElementUI);
Vue.config.productionTip = false;
axios.defaults.baseURL = "http://localhost:3300";
Vue.prototype.$http = axios;
router.beforeEach((to,from,next) =>{
  if(to.meta.title){
    document.title = `${to.meta.title}`
  }
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
