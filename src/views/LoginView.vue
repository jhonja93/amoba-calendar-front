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
import { useAmobaStore } from '../stores/AmobaStore'

export default {
    setup() {
        const amobaStore = useAmobaStore()
        return {
            amobaStore
        }
    },
    data() {
        return {
            email: 'm.perez@busup.com',
            password: 'e10adc3949ba59abbe56e057f20f883e',
            loading: false
        }
    },
    methods: {
        async handleSubmit() {
            await this.amobaStore.login(this.email, this.password)

            this.loading = false
            this.$router.push({ name: 'home' })
        }
    },
    components: {
        IconMail,
        IconLock
    }
}
</script>
