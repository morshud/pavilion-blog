import Vue from 'vue'
import Vuex from 'vuex'
import User from './user'
import Data from './data'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: User,
    data: Data
  }
})
