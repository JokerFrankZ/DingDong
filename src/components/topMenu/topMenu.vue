<template>
  <div class="top-menu">
    <div class="location">
      <i class="el-icon-location-outline"></i>
      广东
    </div>
    <div class="login">您好，请先<span>登录</span><span>免费注册</span></div>
    <ul class="menu-text">
      <li @mouseover="hideMenu">我的订单</li>
      <li @mouseover="hideMenu">我的京东</li>
      <li @mouseover="hideMenu">京东会员</li>
      <li @mouseover="hideMenu">企业采购</li>
      <li @mouseover="hideMenu">客户服务</li>
      <li @mouseenter="showMenu" :class="isActive">
        网站导航
        <i class="el-icon-arrow-down"></i>
      </li>
      <li @mouseover="hideMenu">手机京东</li>
    </ul>
    <div class="menu-box" v-if="isShow" @mouseleave="hideMenu">
      <ul v-for="(value, index) in values" :key="index" class="menu">
        <li class="m-title">
          {{ value.text }}
        </li>
        <li class="m-option" v-for="(data, j) in value.dataList" :key="j">
          {{ data }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topMenu',
  data: function() {
    return {
      values: [
        {
          text: '特色主题',
          dataList: [
            '新品首发',
            '京东金融',
            '全球售',
            '国际站',
            '京东会员',
            '京东预售',
            '买什么',
            '俄语站',
            '装机大师',
            '0元评测',
            '港澳售',
            '优惠券',
            '秒杀',
            '闪购',
            '印尼站',
            '京东金融科技',
            '陪伴计划',
            '出海招商',
            '拍拍二手'
          ]
        },
        {
          text: '行业导航',
          dataList: [
            '手机',
            '智能数码',
            '玩3C',
            '电脑办公',
            '家用电器',
            '京鱼座智能',
            '服装城',
            '京东生鲜',
            '家装城',
            '母婴',
            '食品',
            '农资频道',
            '整车',
            '图书',
            '劳动防护'
          ]
        },
        {
          text: '生活服务',
          dataList: [
            '京东众筹',
            '白条',
            '京东金融App',
            '京东小金库',
            '理财',
            '话费',
            '水电煤',
            '彩票',
            '旅行',
            '机票酒店',
            '电影票',
            '京东到家',
            '游戏',
            '拍拍回收'
          ]
        },
        {
          text: '更多精选',
          dataList: [
            '合作招商',
            '京东通信',
            '京东E卡',
            '企业采购',
            '服务市场',
            '办公生活馆',
            '乡村招募',
            '校园加盟',
            '京东社区',
            '游戏社区',
            '知识产权维权'
          ]
        }
      ],
      isShow: false
    }
  },
  computed: {
    isActive() {
      return { webstie: true, active: this.isShow }
    }
  },
  methods: {
    showMenu() {
      this.isShow = true
    },
    hideMenu() {
      this.isShow = false
    }
  }
}
</script>

<style scoped lang="stylus">
.top-menu
  display flex
  width 100%
  min-width 1000px
  height 30px
  align-items center
  justify-content space-around
  font-size 14px
  font-family "微软雅黑"
  color #a2a2a2
  background #e3e4e5
  position relative
  z-index 99
  .location
    height 30px
    line-height 30px
    transition all 0.3s ease
    cursor pointer
    &:hover
      color #f10215
    .el-icon-location-outline
      font-size 14px
      color #f10215
  .login
    span
      cursor pointer
    span:first-child:hover
      color #f10215
      transition all 0.3s ease
    span:last-child
      margin-left 10px
      color #f10215
  .menu-text
    display flex
    width 60%
    li
      display flex
      justify-content center
      align-items center
      width 100px
      position relative
      line-height 30px
      transition all 0.3s ease
      &:hover
        color #f10215
        cursor pointer
      &:before
        content ""
        position absolute
        width 1px
        height 10px
        left 0
        top 50%
        transform translateY(-50%)
        background #a2a2a2
      &:after
        content ''
      .el-icon-arrow-down
        margin-left 2px
    .active
      background #fff
      position relative
      z-index 1
      &:before
        content ''
        background #fff
        width 100%
        height 3px
        position absolute
        top 30px
        z-index 99
  .menu-box
    position absolute
    top 30px
    display flex
    border 1px solid #ccc
    padding 0 10px 10px 10px
    background #fff
    box-shadow 1px 1px 10px #EEE
    .menu
      width 300px
      display flex
      flex-wrap wrap
      align-content flex-start
      font-size 12px
      position relative
      &:nth-child(1)
        &:before
          display none
      &:before
        content ''
        position absolute
        background #ccc
        width 1px
        height 80%
        top 20%
        left -10px
      .m-title
        width 300px
        margin 5px 0 10px
        color #666
        font-weight bold
        height 12px
      .m-option
        width 100px
        text-align left
        margin-top 5px
        cursor pointer
        height 12px
        &:hover
          color #f10215
</style>
