<template>
  <div class="detail-goods-intr">
    <ul class="intr-list">
      <li class="intr-item" v-for="(imgUrl, index) in intrValue" :key="index">
        <img :src="imgUrl" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'detailGoodsIntr',
  props: {
    intrValue: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data: function() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="stylus">
.detail-goods-intr
  text-align center
  margin-top 30px
  .intr-list
    .intr-item
      margin-top -2px // 去除图片之间连接的间隙
      img
        width 750px
</style>
