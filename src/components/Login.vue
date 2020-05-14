<template>
  <div class="login-register d-flex align-items-center justify-content-center">
    <div class="border border-primary p-5 rounded administration">
      <h2 class="text-center">Welcome</h2>
      <form @submit.prevent="play">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="username"
            class="form-control"
            id="username"
            aria-describedby="emailHelp"
            placeholder="Username"
            v-model="username"
          />
        </div>
        <button type="submit" class="btn btn-primary">Start</button>
      </form>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'

export default {
  data () {
    return {
      username: ''
    }
  },
  methods: {
    play () {
      console.log(this.username)
      var socket = io.connect('http://localhost:3000')
      localStorage.setItem('name', this.username)
      socket.emit('user-connect', this.username)
      this.username = ''
      this.$router.push({ name: 'main' })
    }
  },
  created () {
    if (localStorage.getItem('name')) {
      this.$router.push({ name: 'main' })
    }
  }
}
</script>

<style>
  .login-register {
    height: 100vh;
  }
</style>
