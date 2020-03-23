// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';					//vant组件引入
import 'vant/lib/index.css';
Vue.use(Vant);
import Axios from "axios"					//axios接口引用
Vue.prototype.$axios=Axios	
import qs from "qs"							//qs引用
Vue.prototype.$qs=qs;						
import ElementUI from 'element-ui';			//elenment组件引入
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
