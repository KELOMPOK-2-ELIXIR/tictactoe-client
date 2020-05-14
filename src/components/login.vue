<template>
<div>
  <div class="wrap-login100">
        <form class="login100-form validate-form">
            <span class="login100-form-logo">
                <i class="zmdi zmdi-landscape"></i>
            </span>
            <span class="login100-form-title p-b-34 p-t-27">
                Enter to Play
            </span>
            <div class="wrap-input100 validate-input" data-validate = "Enter username">
                <input class="input100" type="text" name="username" placeholder="Username" v-model="username">
            </div>
            <div class="container-login100-form-btn">
                <button class="login100-form-btn" @click.prevent="login">
                    Enter
                </button>
            </div>
        </form>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LoginForm',
  data () {
    return {
      username: '',
      room: '',
      islogin: false
    }
  },
  methods: {
    login () {
      axios({
        method: 'POST',
        url: 'http:/localhost:3000/user/login',
        data: {
          username: this.username
        }
      })
        .then(result => {
          localStorage.setItem('room', this.room)
          localStorage.setItem('username', this.username)
        })
        .catch(err => {
          console.log(err)
        //   Vue.toasted.global.my_app_error({
        //     message: 'Username/Password not Found'
        //   })
        })
    }
  },
  created () {
    if (localStorage.username) {
      this.islogin = true
      this.$router.push('main')
    } else {
      this.islogin = false
    }
  }
}
</script>

<style>

</style>
