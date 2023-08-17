<template>
  <div class="login-card-container">
    <div class="login-card">
      <div class="login-card-header">
        <h1>Login</h1>
        <div>Por favor ingresar para usar la plataforma</div>
      </div>
      <form class="login-card-form" @submit.prevent="handleSubmit">
        <div class="form-item">
          <IconMail class="form-item-icon" />
          <input
            v-model="email"
            type="text"
            placeholder="Email"
            id="emailForm"
            autofocus
            required
          />
        </div>
        <div class="form-item">
          <IconLock class="form-item-icon" />
          <input
            v-model="password"
            type="password"
            placeholder="Contraseña"
            id="passwordForm"
            required
          />
        </div>
        <button :disabled="loading" type="submit">Ingresar</button>
      </form>
    </div>
  </div>
</template>

<script>
import './../assets/style.css'
import IconMail from '@/components/icons/IconMail.vue'
import IconLock from '@/components/icons/IconLock.vue'
import axios from 'axios'

export default {
  data() {
    return {
      email: 'm.perez@busup.com',
      password: 'e10adc3949ba59abbe56e057f20f883e',
      loading: false,
      api_url: 'http://amoba-calendar.test/api'
    }
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true
        const { data } = await axios.post(`${this.api_url}/login`, {
          email: this.email,
          password: this.password
        })

        localStorage.setItem('token', data.token)
        this.loading = false
        this.$router.push({ name: 'home' })
      } catch (error) {
        console.error(error)
        localStorage.removeItem('token')
      }
    }
  },
  components: {
    IconMail,
    IconLock
  }
}
</script>
