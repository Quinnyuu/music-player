import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songList: [],
    currentMusic: {},
    currentIndex: 0
  },
  mutations: {
    getCurrentMusic(state) {
      state.currentMusic = state.songList[state.currentIndex];
    }
  },
  actions: {
    
  },
  modules: {
  }
})
