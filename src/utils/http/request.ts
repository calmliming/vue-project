import axios from "axios";
import { useEnv } from "../../hooks/useEnv";
const { VITE_API_URL } = useEnv();
// 创建axios实例
const service = axios.create({
  baseURL: VITE_API_URL as any,
  timeout: 10000,
  headers: { "Content-Type": "application/json;charset=UTF-8" },
});

// http request 请求拦截器，在发送请求前会进行拦截，执行1部分的代码
service.interceptors.request.use(
  (config: any) => {
    // 1
    // 如果token存在，就将token赋值到header的Authorization，先知道逻辑即可，代码后面补充
    // if (getToken()) {
    // 	config.headers.Authorization = getToken()
    // }

    // 追加时间戳，防止GET请求缓存
    // if (config.method?.toUpperCase() === 'GET') {
    // 	config.params = { ...config.params, t: new Date().getTime() }
    // }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//  http response 响应拦截器，请求成功后，对返回的数据进行统一处理
service.interceptors.response.use(
  (response) => {
    if (response.status !== 200) {
      // 对接接口出错
      return Promise.reject(new Error(response.statusText || "Error"));
    }
    const res = response.data;
    console.log(res)
    // 响应成功，这里设置了0为响应成功的返回值，可根据实际后端返回的修改
    if (res.code === 200) {
      return res;
    }

    // 没有权限，如：未登录、登录过期等，需要跳转到登录页
    // 这里401表示登录过期，403表示登录用户没有接口权限
    if (res.code === 401) {
      // 弹框提示登录过期，用户点击后跳转登录页，同时清空token，代码后面补充
    }

    if (res.code === 401) {
      // 弹框提示没有权限，用户点击重新登录跳转到登录页，点击关闭则只关闭弹框，代码后面补充
    }

    // 除了code=0、code=401、code=403的错误提示，代码后面补充

    return null;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 导出 axios 实例
export default service;
