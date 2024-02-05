import XXRequest from './http'
export const request = new XXRequest({
  baseURL: import.meta.env.VITE_APP_BASE_URL
})
