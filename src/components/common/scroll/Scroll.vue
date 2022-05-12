<template>
  <!-- 注意，在插槽的封装过程中，由于scroll需要一层wrapper,一层content,第三层才是滚动的内容，所以插槽在第三层。 -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null,
      message: "哈哈哈",
    };
  },
  mounted() { 
    // 这里建议不要使用document.querySelector,因为这种使用方法的话，如果其他页面中也有这个class='.wrapper的话'，无法确定到底会获取到哪个元素。
    // querySelector() 方法返回文档中匹配指定 CSS 选择器的一个元素。
    // querySelectorAll() 方法返回文档中所有匹配指定 CSS 选择器的元素，语法跟jQuery类似，返回值是一个NodeList列表。
    // this.scroll = new BScroll(document.querySelector('.wrapper'))

    // ref如果是绑定在组件中的，那么通过this.$refs.refname获取到的是一个组件对象。
    // ref如果是绑定在普通的元素中，那么通过this.$refs.refname获取到的是一个元素对象。
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      // probeType为3的时候，只要页面滑动就能监听到
      // 但是如果不管用户是否需要实时监听，都进行监听的话，那么下面的this.scroll.on在滑动的时候就会一直监听到，这样非常影响性能。
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })

    // 监听滚动的位置
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll',position)
    })

    // 监听上拉事件
    this.scroll.on('pullingUp', () => {
       this.$emit('pullingUp')
    })
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time)
    }
  },
};
</script>