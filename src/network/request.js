import axios from 'axios'

// 方式一
// export function request(config,success,failure) {  // 如果想把结果回调出去，举例加上success和failure
//   // 创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//   // 发送真正的网络请求
//   instance(config)
//     .then(res => {
//         success(res)    // 回调出去
//     }).catch(err => {
//         failure(err)    // 回调出去
//     })
// }

// 方式二
// export function request(config) {   
//   // 创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   // 发送真正的网络请求
//   instance(config.baseConfig)
//     .then(res => {
//         config.success(res)
//     }).catch(err => {
//         config.failure(err)
//     })
// }

// 方式三
// export function request(config) {
//     return new Promise((resolve,reject) => {
//         // 创建axios的实例
//         const instance = axios.create({
//             baseURL: 'http://123.207.32.32:8000',
//             timeout: 5000
//         })
//         // 发送真正的网络请求       
//         instance(config)
//             .then(res => {
//                 resolve(res)
//             }).catch(err => {
//                 reject(err)
//             })
//     })    
// }

// 方法四
export function request(config) {
    // 1.创建axios的实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    // 2.axios的拦截器
    
    // 2.1 什么情况下需要进行拦截 =》 1.比如config中的一些信息不符合服务器要求。  2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标   3.某些网络请求，比如登陆，必须要携带一些特殊的信息
    
    // axios.interceptors    // 全局拦截器
    // instance.interceptors     // 只拦截instance这个实例

    // 2.2 请求拦截
    instance.interceptors.request.use(aaa => {   // 返回的参数（各种配置），名字可以自己命名，这个并不是数据信息，数据信息在main.js中打印
      console.log("返回配置信息",aaa);
      return aaa    // 这里的aaa一定要返回出去
    },err => {   // 错误信息，如果请求都没有发送出去，就会来到这里
      console.log("错误信息",err);
    })     // 拦截instance这个实例的请求,use是使用的意思,有两个参数，两个参数都是函数

    // 2.3 响应拦截 
    instance.interceptors.response.use(res => {  // 由于服务器已经响应过了，所以这里拿到的是结果，而不是配置信息
      console.log("返回的数据",res);
      return res.data   // 将想要的结果返回
    },err => {    // 获取失败
      console.log("错误信息",err);
    })     // 拦截instance这个实例的响应,use是使用的意思

    // 3.发送真正的网络请求
    return instance(config)   // 实际上返回一个promise
}