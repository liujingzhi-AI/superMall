module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      // unitToConvert: 'px',
      // iphone6设计稿 （750*1334）  retina(高清屏)一个点为两个像素
      viewportWidth: 375,  // 视窗的宽度，对应的是我们设计稿的宽度(750)
      viewportHeight: 667,  // 视窗的高度，对应的是我们设计稿的高度。(也可以不配置)(1334)
      unitPrecision: 5,    // 指定'px'转换成为视窗单位值的小数位数（很多时候无法整除）
      // propList: ['*'],     
      viewportUnit: 'vw',   // 指定
      // fontViewportUnit: 'vw',
      selectorBlackList: ['ignore'],   // 指定不需要转化的类,不想转化的css类就加一个ignore
      minPixelValue: 1,        // 小于或等于'1px'不转化为视窗单位
      mediaQuery: false,       // 允许在媒体查询中转换'px'
      // replace: true,
      // exclude: [/^TabBar/],    // TabBar开头的不包含
      exclude: [/TabBar/],    // 包含TabBar的不包含
      // include: undefined,
      // landscape: false,
      // landscapeUnit: 'vw',
      // landscapeWidth: 568
    }
  }
}

// exclude必须存放正则表达式
