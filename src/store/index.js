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
    userrun: 0,
    winner: ''

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
        method: 'POST',
        url: 'http://localhost:3000/data',
        data: {
          room: localStorage.room
        }
      })
        .then(result => {
          console.log(result.data)
          const str1 = result.data.users[0].row
          const res1 = str1.split(',')
          const str2 = result.data.users[1].row
          const res2 = str2.split(',')
          console.log(res1.length + res2.length)
          console.log(res1, res2)
          context.commit('SET_USER_RUN', res1.length + res2.length)
          for (const i in res1) {
            if (res1[i] === '1') {
              context.commit('SET_POSISI_1', 'A')
              console.log('aaaaaaaa')
            }
            if (res1[i] === '2') {
              context.commit('SET_POSISI_2', 'A')
            }
            if (res1[i] === '3') {
              context.commit('SET_POSISI_3', 'A')
            }
            if (res1[i] === '4') {
              context.commit('SET_POSISI_4', 'A')
            }
            if (res1[i] === '5') {
              context.commit('SET_POSISI_5', 'A')
            }
            if (res1[i] === '6') {
              context.commit('SET_POSISI_6', 'A')
            }
            if (res1[i] === '7') {
              context.commit('SET_POSISI_7', 'A')
            }
            if (res1[i] === '8') {
              context.commit('SET_POSISI_8', 'A')
            }
            if (res1[i] === '9') {
              context.commit('SET_POSISI_9', 'A')
            }
          }

          for (const k in res2) {
            if (res2[k] === '1') {
              context.commit('SET_POSISI_1', 'B')
            }
            if (res2[k] === '2') {
              context.commit('SET_POSISI_2', 'B')
            }
            if (res2[k] === '3') {
              context.commit('SET_POSISI_3', 'B')
            }
            if (res2[k] === '4') {
              context.commit('SET_POSISI_4', 'B')
            }
            if (res2[k] === '5') {
              context.commit('SET_POSISI_5', 'B')
            }
            if (res2[k] === '6') {
              context.commit('SET_POSISI_6', 'B')
            }
            if (res2[k] === '7') {
              context.commit('SET_POSISI_7', 'B')
            }
            if (res2[k] === '8') {
              context.commit('SET_POSISI_8', 'B')
            }
            if (res2[k] === '9') {
              context.commit('SET_POSISI_9', 'B')
            }
          }

          const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],

            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],

            [0, 4, 8],
            [2, 4, 6]
          ]

          res1.sort()
          console.log('sort', res1)

          if (res1.length > 2) {
            res1.slice(Math.max(res1.length - 2, 1))
            console.log('sort 3 terakhir', res1)
            for (let l = 0; l <= 7; l++) {
              if (res1[0] === winningConditions[l][0] && res1[1] === winningConditions[l][1] && res1[2] === winningConditions[l][2]) {
                console.log('winnerrrrrrrr')
              }
            }
          }

          if (res2.length > 2) {

          }
        })
    }
  },
  modules: {
  }
})
