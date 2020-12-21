import axios from 'axios'
import {Loading,Message} from 'element-ui'
//超时时间
axios.defaults.timeout=5000;
//http请求拦截
var loadingInstace;
axios.interceptors.request.use(config=> {
  //element-ui Loading 方法
  loadingInstace = Loading.service({fullscreen: true});
  return config
},error => {loadingInstace.close();
Message.error({message:'加载超时'});
});
axios.interceptors.response.use(data=> {
  loadingInstace.close();
  return data;
},error => {
  Message.error({
    message: '加载失败'
  })
});
export default axios
