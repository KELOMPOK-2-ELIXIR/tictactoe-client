import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    position1: '',
    position2: '',
    position3: '',
    position4: '',
    position5: '',
    position6: '',
    position7: '',
    position8: '',
    position9: '',
    userrun: 0

  },
  mutations: {
    SET_POSISI_1 (state, newposition) {
      state.position1 = newposition
    },
    SET_POSISI_2 (state, newposition) {
      state.position2 = newposition
    },
    SET_POSISI_3 (state, newposition) {
      state.position3 = newposition
    },
    SET_POSISI_4 (state, newposition) {
      state.position4 = newposition
    },
    SET_POSISI_5 (state, newposition) {
      state.position5 = newposition
    },
    SET_POSISI_6 (state, newposition) {
      state.position6 = newposition
    },
    SET_POSISI_7 (state, newposition) {
      state.position7 = newposition
    },
    SET_POSISI_8 (state, newposition) {
      state.position8 = newposition
    },
    SET_POSISI_9 (state, newposition) {
      state.position9 = newposition
    },
    SET_USER_RUN (state, who) {
      state.userrun = who
    }
  },
  actions: {
    fetchposition (context, payload) {
      Axios({
        method: 'GET',
        url: 'http://localhost:3000/data',
        headers: {
          room: localStorage.room
        }
      })
        .then(result => {
          console.log(result)
          console.log(result.data[0].row.length + result.data[1].row.length)
          context.commit('SET_USER_RUN', result.data[0].row.length + result.data[1].row.length)
          for (const i in result.data[0].row) {
            if (result.data[0].row[i] === 1) {
              context.commit('SET_POSISI_1', 'A')
            }
            if (result.data[0].row[i] === 2) {
              context.commit('SET_POSISI_2', 'A')
            }
            if (result.data[0].row[i] === 3) {
              context.commit('SET_POSISI_3', 'A')
            }
            if (result.data[0].row[i] === 4) {
              context.commit('SET_POSISI_4', 'A')
            }
            if (result.data[0].row[i] === 5) {
              context.commit('SET_POSISI_5', 'A')
            }
            if (result.data[0].row[i] === 6) {
              context.commit('SET_POSISI_6', 'A')
            }
            if (result.data[0].row[i] === 7) {
              context.commit('SET_POSISI_7', 'A')
            }
            if (result.data[0].row[i] === 8) {
              context.commit('SET_POSISI_8', 'A')
            }
            if (result.data[0].row[i] === 9) {
              context.commit('SET_POSISI_9', 'A')
            }
          }

          for (const k in result.data[1].row) {
            if (result.data[1].row[k] === 1) {
              context.commit('SET_POSISI_1', 'B')
            }
            if (result.data[1].row[k] === 2) {
              context.commit('SET_POSISI_2', 'B')
            }
            if (result.data[1].row[k] === 3) {
              context.commit('SET_POSISI_3', 'B')
            }
            if (result.data[1].row[k] === 4) {
              context.commit('SET_POSISI_4', 'B')
            }
            if (result.data[1].row[k] === 5) {
              context.commit('SET_POSISI_5', 'B')
            }
            if (result.data[1].row[k] === 6) {
              context.commit('SET_POSISI_6', 'B')
            }
            if (result.data[1].row[k] === 7) {
              context.commit('SET_POSISI_7', 'B')
            }
            if (result.data[1].row[k] === 8) {
              context.commit('SET_POSISI_8', 'B')
            }
            if (result.data[1].row[k] === 9) {
              context.commit('SET_POSISI_9', 'B')
            }
          }
        })
    }
  },
  modules: {
  }
})
