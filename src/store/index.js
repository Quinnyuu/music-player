import Vue from 'vue'
import Vuex from 'vuex'
import { getMusicList } from "network/song";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songList: [],
    currentMusic: {},
    currentIndex: 0
  },
  mutations: {
    getMusicList(state) {
      getMusicList().then((res) => {
        state.songList = res.data.list;
        console.log(state.songList);
      });
    },
  },
  actions: {
    
  },
  modules: {
  }
})
