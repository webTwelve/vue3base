import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', {
  persist: {
    enabled: true,
    strategies: [{ storage: localStorage, paths: ['token'] }]
  },
  state: () => {
    return { token: '' }
  },

  actions: {
    setToken(token: string) {
      this.token = token
    }
  }
})
