import Vue from 'vue'
import App from './App.vue'

// Vue.config.productionTip = false



// 导入字体图标
import '@/assets/icon/iconfont.css'

// 导入swiper的样式
import 'swiper/css/swiper.css'


//导入数据仓库 
import store from '@/store'

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
