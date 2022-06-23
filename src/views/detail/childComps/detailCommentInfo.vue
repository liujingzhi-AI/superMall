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
        <span>{{time}}</span>
        <span>{{ comment.list[0].created | showDate}}</span>
        <span>{{comment.list[0].style}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils.js'
export default {
  name: "SupermallDetailcommentinfo",
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
  // 时间戳过滤器
  // Vue3移除了过滤器
  filters: {
    showDate(value) {
      // 1.将时间戳转为Date对象
      const date = new Date(value * 1000)
      // 2.讲date进行格式化
      return formatDate(date,'yyyy-MM-dd')
    }
  },
  data() {
    return {
      image: '',
      comment: {},  // 评论数据
      // recommend: [],  // 推荐数据
      time: ''
    };
  },

  mounted() {
    // this.time = this.getLocalTime(this.commentInfo.list[0].created)
  },
  watch: {
    commentInfo(newvalue) {
      this.comment = newvalue
      this.time = this.getLocalTime(this.comment.list[0].created)
    },
  },
  methods: {
    getLocalTime(nS) {  
      return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');  
    }
  },
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