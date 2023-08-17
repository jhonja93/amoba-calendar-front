import { defineStore } from 'pinia'

export const useAmobaStore = defineStore('amobaStore', {
  state: () => ({
    url: 'http://amoba-calendar.test/api',
    token: null
  })
})
