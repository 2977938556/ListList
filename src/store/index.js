import vue from 'vue'
import vuex from 'vuex'


vue.use(vuex)


import user from '@/store/user'

export default new vuex.Store({
  modules:{
    user
  }
})