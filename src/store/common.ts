import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', {
  state: () => {
    return { token: '' }
  },
  actions: {
    setToken(token: string) {
      this.token = token
    }
  }
})
