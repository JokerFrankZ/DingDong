<template>
  <div class="searchResult">
    <el-row type="flex" class="goods-list">
      <el-col
        :span="6"
        v-for="(item, index) in goodsList"
        :key="index"
        class="goods"
      >
        <div class="goods-box">
          <div class="img">
            <img :src="item.image" alt="" />
          </div>
          <div class="info">
            <h1 class="price">￥{{ item.price }}</h1>
            <div class="name" @click.stop="toGoodsDetail(item)">
              {{ item.name }}
            </div>
            <div class="add-cart-btn" @click.stop="addShoppingCart(item)">
              <i class="el-icon-shopping-cart-2"></i>
              加入购物车
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getSearchMessage } from '@/api/getSearchMessage'
import { mapGetters } from 'vuex'
export default {
  name: 'searchResult',
  data: function() {
    return {
      goodsList: ''
    }
  },
  computed: {
    ...mapGetters(['searchStr', 'shoppingCart'])
  },
  watch: {
    searchStr: {
      async handler() {
        const res = await getSearchMessage()
        const data = res.data.data
        this.goodsList = data.filter(goods => {
          return goods.name
            .replace(/\s/g, '') //去除所有空格
            .toLowerCase()
            .includes(this.searchStr) //返回值是Boolean(包含true,不包含false)，indexOf()返回的是位置，不包含则返回-1
        })
      },
      immediate: true //为true时第一次也执行
    }
  },
  methods: {
    /**
     * 当要跳转到新的窗口时，router-link是不支持直接设置target='_blank'的，除非tag设置成a标签
     * 可以使用this.$router.resolve方法
     * ｛href｝是es6的对象结构，即等于 const href = this.$router.resolve({xxxxxx}).href
     */
    toGoodsDetail(goods) {
      const { href } = this.$router.resolve({
        path: '/detailGoods'
      })
      sessionStorage.setItem('detailGoods', JSON.stringify(goods))
      window.open(href, '_blank')
    },
    addShoppingCart(item) {
      this.$store.commit('addShoppingCart', item)
    }
  }
}
</script>

<style scoped lang="stylus">
.searchResult
  .goods-list
    flex-wrap wrap
    .goods
      display flex
      justify-content center
      align-items center
      margin-bottom 40px
      .goods-box
        display flex
        flex-direction column
        align-items center
        background #fff
        transition all 0.2s ease
        &:hover
          box-shadow 0px 0px 3px #ccc
        .img
          width 90%
          margin 5% 0
          img
            width 100%
            height 100%
        .info
          width 90%
          margin-bottom 5%
          .name
            cursor pointer
            &:hover
              color #ff0000
          .price
            color #ff0000
            margin-bottom 10px
          .add-cart-btn
            display block
            float right
            border 1px solid #eeeeee
            padding 5px
            color #ff0000
            cursor pointer
</style>
