import axios from 'axios'

export default {
  getRequest(path, configs) {
    return axios.get(path, configs)
  },
  postRequest(path, data, configs) {
    return axios.post(path, data, configs)
  },
  putRequest(path, data, configs) {
    return axios.put(path, data, configs)
  },
  deleteRequest(path, configs) {
    return axios.delete(path, configs)
  }
}