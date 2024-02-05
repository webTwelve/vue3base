import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
class XXRequest {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.instance.interceptors.request.use(
      (config) => {
        console.log('处理loading')
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }

  private request<T>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<T, T>(config)
        .then((res) => {
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
  public get<T>(config: AxiosRequestConfig) {
    return this.request<T>({ method: 'GET', ...config })
  }
  public post<T>(config: AxiosRequestConfig) {
    return this.request<T>({ method: 'POST', ...config })
  }
}
export default XXRequest
