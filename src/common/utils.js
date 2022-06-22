// 公用的方法
// 防抖函数,两个参数分别是函数，和防抖时间
// 防抖函数起作用的过程，如果直接执行refresh,那么refresh将会执行30次。通过debounce函数，可以将refresh函数传入debounce函数，生成一个新的函数
export function debounce(func, delay) { 
  let timer = null
  // 注意在mouted中调用该函数后 let timer = null,实际只调用了第一次
  return function (...args) {
    if(timer) clearTimeout(timer)

    timer = setTimeout(() => {
      // 这里只会打印一次
      // 刚开始没想通为啥refresh调用了30次，打印了30次。下面这一行只打印了一次。
      // 这是由于在每次settimeout还没结束时，下一次的settimeout已经开始了。
      // 这样就造成了延时器不断被顶掉，最后只有最后一次的延时器成功执行了下面的两行代码。
      func.apply(this,args)   // 在methods中this就是Vue
      // console.log("222222222222222");
    },delay)
  }
}

// 时间戳转化
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
};