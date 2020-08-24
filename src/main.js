import Vue from 'vue'
import App from './App.vue'
// import router from './router'
// import store from './store'

//引入样式重置
import './assets/css/common.scss';

//引入移动端适配
import './assets/js/flexble';

//引入icon
import './assets/font/iconfont.css';

Vue.config.productionTip = false;

new Vue({
  // router,
  // store,
  render: h => h(App)
}).$mount('#app')
