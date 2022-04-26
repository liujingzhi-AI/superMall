<template>
    <!-- 导航顶部吸顶封装 -->
    <div class="header_sticky">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'stickyHeader',
    computed: {
        // 生成一个唯一ID
        randomId: function(){
            return 'randomId_' + Number(Math.random().toString().substr(3,3) + Date.now()).toString(36);
        },
        // 获取整个页面的元素
        targetElement_: function() {
            return this.$el
        }
    },
    mounted() {},
    methods: {
        // css: 用于替换的css样式; (一般用默认的)
        sticky_(css='sticky_') {
            // CSS.supports(propertyName, value)  (属性-属性值)  用来校验浏览器是否支持一个给定的CSS特性
            // 目前IE浏览器不支持粘性定位sticky
            if (CSS.supports('position', 'sticky') || CSS.supports('position', '-webkit-sticky')) {
                console.log('>>>>>>>>> sticky is supported') 
            } else {
                let newNodeTop;
                let header = this.targetElement_;
                if(document.getElementById(this.randomId)) {
                    newNodeTop = document.getElementById(this.randomId);
                }else{
                    newNodeTop = document.createElement("div");
                    newNodeTop.id = this.randomId;
                    header.parentNode.insertBefore(newNodeTop, header);
                    header.classList.add(css);
                }

                setTimeout(() => {
                    let height = header.offsetHeight + 1; //高度 + 1 以防有小数点
                    newNodeTop.style.height = height + 'px';
                }, 0)
            }
        },
    }
}
</script>
<style scoped>
.header_sticky {
    width: 100%;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 100;
    transition: height 1s;
    /* 火狐浏览器厂商 */
    -moz-transition: height 1s;
    /* 谷歌浏览器厂商 */
    -webkit-transition: height 1s;
    /* opera浏览器 */
    -o-transition: height 1s;
}

.sticky_ {
    width: 100%;
    /* 固定定位 */
    position: fixed;
    position: -webkit-fixed;
    top: 0;
    z-index: 100;
}

</style>
