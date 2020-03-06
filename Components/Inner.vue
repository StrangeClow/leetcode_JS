<template>
    <div class="wrapper">
        <span>{{baseTitle}}</span>
        <div class="inner">
            <div :style="itemStyle" v-for="(item, index) in xiaoMi" :key="index">
                <span>{{item.userName}}</span>
                <span>{{item.realName}}</span>
                <span>{{item.mobile}}</span>
            </div>
        </div>
        <Button type="warning" @click="sendMsg">星巴克</Button>
        <div class="footer">{{baseFooter}}</div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      baseTitle: '星巴克svc后台',
      trnasWord: '好好学习 天天向上'
    }
  },
  // 向外传递的属性  规范化 
  props: {
    baseFooter: {
      type: String,
      default: ''
    },
    xiaoMi: {
      type: Array,
      default: () => []
    },
    itemStyle: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    sendMsg: function () {
      this.$emit('getMsg', this.trnasWord)
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper {
    margin: 0 auto;
    background: #eee;
    .inner {
        border: 1px solid darkcyan;
        span {
           border:1px dashed #adf;
           padding:10px 6px;
           display:inline-block
        }
    }
    .footer {
        margin: 30px 10px;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
    }
}
</style>
