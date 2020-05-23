import axios from 'axios'
import qs from 'qs'

export function request(config) {
  const instancel = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/m3',
    timeout: 5000
  })

  instancel.interceptors.request.use(config => {
    // console.log(config)

    return config
  }, err => {
    console.log(err)
  });

  instancel.interceptors.response.use(res => {
    // console.log(res);
    return res.data
  }, err => {
    console.log(err)
  });


  return instancel(config)
}
