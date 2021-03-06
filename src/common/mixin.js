import {debounce} from '@/common/utils';
import BackTop from '@/components/content/backTop/BackTop.vue';

export const itemListenerMixin = {
  components: {
    
  },
  methods: {
    
  },
  data() {
    return {
      itemImageListener: null
    }
  },
  mounted () {
    // 这里将this.$refs.scroll.refresh函数作为参数给debounce不要加小括号，不然就是传递的函数返回值。
    const refresh = debounce(this.$refs.scroll.refresh, 100)   

    // 对监听的事件进行保存
    this.itemImageListener = () => {
      // 这样使用时，相当于有多少张图谱安，就refresh几次，频率相当高。
      // 这里不适合写在created周期中：如果要在created阶段中进行dom操作，就要将操作都放在 Vue.nextTick() 的回调函数中，因为created() 钩子函数执行的时候 DOM 其实并未进行任何渲染，而此时进行 DOM 操作无异于徒劳，所以此处一定要将 DOM 操作的 js 代码放进 Vue.nextTick() 的回调函数中。
      // this.$refs.scroll.refresh()
      // 对于频繁地调用refresh需要进行防抖操作
      refresh()
      // 下面将会打印30次,因为图片30张
      // console.log('----------------');
    }

    // 事件总线，监听Item中图片加载完成。
    this.$bus.$on('itemImageLoad', this.itemImageListener)
    // console.log("我是混入中的内容");
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      backtopShow: false,   // 返回顶部图标显示
    }
  },
  methods: {
    // 返回顶部
    backClick() {
      // console.log("拿到子组件的数据",this.$refs.scroll.message);
      // scroll有一个数据scroll,数据scroll有一个属性scrollTo()
      this.$refs.scroll.scrollTo(0, 0, 500)  // x和y都返回0,500毫秒。
    },
    listenShowBackTop(position) {
      // 1.判断BackTop是否显示
      this.backtopShow = position.y < -1000 ? true : false
    }
  }
}