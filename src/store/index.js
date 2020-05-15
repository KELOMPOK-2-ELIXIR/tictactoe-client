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
    },
    SET_WINNER (state, who) {
      state.winner = who
    }
  },
  actions: {
    fetchposition (context, payload) {
      Axios({
        method: 'POST',
        url: 'https://salty-basin-75531.herokuapp.com/data',
        data: {
          room: localStorage.room
        }
      })
        .then(result => {
          console.log(result.data)
          const str1 = result.data.users[0].row
          const str2 = result.data.users[1].row
          let res1
          let res2
          if (str1 === '') {
            res1 = []
          } else {
            res1 = str1.split(',')
          }
          if (str2 === '') {
            res2 = []
          } else {
            res2 = str2.split(',')
          }
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
            ['1', '2', '3'],
            ['4', '5', '6'],
            ['7', '8', '9'],
            ['1', '4', '7'],
            ['2', '5', '8'],
            ['3', '6', '9'],
            ['1', '5', '9'],
            ['3', '5', '7']
          ]

          res1.sort()
          res2.sort()
          console.log('sort', res1)

          if (res1.length > 2) {
            res1.slice(Math.max(res1.length - 2, 1))
            console.log('sort 3 terakhir', res1)
            for (let l = 0; l <= 7; l++) {
              console.log(winningConditions[l][0])
              if (res1[0] === winningConditions[l][0] && res1[1] === winningConditions[l][1] && res1[2] === winningConditions[l][2]) {
                console.log('WINNER')
                context.commit('SET_WINNER', result.data.users[0].username)
                if (this.winner) {
                  setTimeout(() => {
                    console.log('disini')
                    localStorage.clear()
                  }, 5000)
                }
              }
            }
          }

          if (res2.length > 2) {
            res2.slice(Math.max(res2.length - 2, 1))
            console.log('sort 3 terakhir', res1)
            for (let l = 0; l <= 7; l++) {
              if (res2[0] === winningConditions[l][0] && res2[1] === winningConditions[l][1] && res2[2] === winningConditions[l][2]) {
                context.commit('SET_WINNER', result.data.users[1].username)
              }
            }
          }
        })
    }
  },
  modules: {
  }
})
