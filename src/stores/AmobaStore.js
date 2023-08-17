import { defineStore } from 'pinia'

export const useAmobaStore = defineStore('amobaStore', {
    state: () => ({
        url: 'http://amoba-calendar.test/api',
        token: null
    }),
    actions: {
        async login(email, password) {
            
            const response = await fetch(`${this.url}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
            const data = await response.json();
            this.token = data.token
            localStorage.setItem('token', data.token)

            if (response.error) {
                console.log(response.error)
                return false
            }
        },
        async logout() {

            const response = await fetch(`${this.url}/logout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.token}`
                }
            })
            
            if (response.error) {
                console.log("error",response.error)
                return false
            }

            localStorage.removeItem('token')
            this.token = null
        }
    }
})
