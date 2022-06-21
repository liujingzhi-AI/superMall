<template>
  <div class="comment" v-if="commentInfo.list">
    <div class="comment-top">
      <span>
        用户评价
      </span>
      <span>
        更多
      </span>
    </div>
    <div class="comment-bottom">
      <div class="user">
        <img :src="comment.list[0].user.avatar" alt="">
        <span style="margin-left:5px">{{comment.list[0].user.uname}}</span>
      </div>
      <div class="evaluation">
        <span>{{comment.list[0].content}}</span>
        <span class="content">{{comment.list[0].content}}</span>
      </div>
      <div class="inform">
        <span>{{comment.list[0].style}}</span>
      </div>
    </div>
    <!-- 推荐商品 -->
    <goods-list 
      v-if="recommendInfo.length !== '0'"
      :goods="recommend"
    ></goods-list>
  </div>
</template>

<script>
import GoodsList from '@/components/content/goods/GoodsList.vue';

export default {
  name: "SupermallDetailcommentinfo",
  components: { 
    GoodsList, 
  },
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    },
    recommendInfo: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      image: '',
      comment: {},  // 评论数据
      recommend: []  // 推荐数据
    };
  },

  mounted() {
  },
  watch: {
    commentInfo(newvalue) {
      this.comment = newvalue
    },
    recommendInfo(val) {
      let arr = []
      val.forEach(item => {
        let show = {}
        let obj = {
          show
        }
        obj.show.img = item.image
        obj.title = item.title
        obj.orgPrice = item.price
        obj.cfav = item.cfav
        obj.iid = item.item_id
        arr.push(obj)
      })
      console.log(arr);
      this.recommend = arr
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
// .comment {
  // height: 40px;
// }
.comment-top {
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 14px;
  color: black;
  margin: 5px 10px;
  border-bottom: 1px solid rgba(100,100,100,.1);
}
.comment-bottom {
  height: 120px;
  border-bottom: 1px solid rgba(100,100,100,.1);
  margin-bottom: 10px;
  .user {
    margin: 10px 5px 0 5px;
    height: 40px;
    display: flex;
    align-items: center;
    color: black;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  .evaluation {
    margin: 10px 5px 0 5px;
    color: black;
  }
  .inform {
    margin: 10px 5px 0 5px;
  }
  // .content{
  //   overflow:hidden; 
  //   display:-webkit-box; 
  //   text-overflow:ellipsis;
  //   word-wrap: break-word;
  //   white-space: normal !important;
  //   -webkit-line-clamp:1; 
  //   -webkit-box-orient:vertical;
  // }
  // .content:hover {
  //   text-overflow:inherit;
  //   overflow: visible;
  //   white-space: pre-line;
  // }
}
</style>