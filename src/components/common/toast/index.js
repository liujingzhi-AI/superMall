import Toast from './Toast'

const obj = {}

// 这里只有install函数会被执行
// install函数执行时，默认传递一个参数Vue
obj.install= function (Vue) {
  console.log("执行了toast函数",Vue);
  // Vue原型挂载$toast
  // 1.无法直接Toast挂载，因为拿不到DOM
  // Vue.prototype.$toast = Toast;

  // 2.install执行的时候，$el还未挂载，拿到undefind
  // document.body.appendChild(Toast.$el)
  // Vue.prototype.$toast = Toast;

  // 组件库的封装
  // Vue.extend(Toast)

  // 3.1 创建组件构造器
  const toastContrustor = Vue.extend(Toast);
  // 3.2 通过new的方式，根据组件构造器，可以创建处理啊一个组件对象  
  const toast = new toastContrustor()
  // 3.3 将组件对象手动挂载到某个元素上
  // 跟main.js中一样，main.js是将Vue实例挂载到app上，这里是将toast挂载到自己需要的div上
  toast.$mount(document.createElement('div'));
  // 3.4 toast.$el对应的就是div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast;
}

// obj.hello = function() {
//   console.log("执行了hello函数");
// }

export default obj