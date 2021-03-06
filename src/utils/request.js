import axios from 'axios'

const service = axios.create({
  // baseURL: 'http://localhost:8080/api/',
  timeout: 10000
})

axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('token')) {
      config.headers.Authorization = 'X-Token ' + localStorage.getItem('token')
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
