<template>
  <div class="shopping-cart">
    <el-row type="flex" class="cart-thead">
      <el-col class="all-select" :span="2">
        <el-checkbox v-model="isAllSelect" @click.native="toggleSelect"
          >全选</el-checkbox
        >
      </el-col>
      <el-col class="goods" :span="12">商品</el-col>
      <el-col class="price" :span="2">单价</el-col>
      <el-col class="quantity" :span="3">数量</el-col>
      <el-col class="sum" :span="2">小计</el-col>
      <el-col class="action" :span="3">操作</el-col>
    </el-row>
    <div class="cart-list">
      <el-row class="item" v-for="(item, index) in selectedGoods" :key="index">
        <el-col class="item-select" :span="2">
          <el-checkbox v-model="item.isSelect" />
        </el-col>
        <el-col :span="12">
          <el-row class="item-goods" type="flex" align="middle">
            <el-col class="item-goods-img" :span="4">
              <img :src="item.image" alt="" />
            </el-col>
            <el-col class="item-goods-name" :span="14">
              {{ item.name }}
            </el-col>
            <el-col class="item-goods-props" :span="6">
              <p
                class="props-txt"
                v-for="(prop, i) in item.details.specs"
                :key="i"
              >
                {{ prop.name }}
              </p>
            </el-col>
          </el-row>
        </el-col>
        <el-col class="item-price" :span="2">
          {{ item.price | keepPoint }}
        </el-col>
        <el-col class="item-quantity" :span="3">
          <el-input-number
            size="mini"
            v-model="item.num"
            :min="1"
            :max="99"
          ></el-input-number>
        </el-col>
        <el-col class="item-sum" :span="2">
          {{ (item.num * item.price) | keepPoint }}
        </el-col>
        <el-col class="item-action" :span="3">
          <el-button
            type="danger"
            icon="el-icon-delete"
            circle
            @click.native="deleteGoods(item.id)"
          />
        </el-col>
      </el-row>
    </div>
    <el-row class="options-box" type="flex" align="middle">
      <el-col :span="2">
        <el-checkbox v-model="isAllSelect" @click.native="toggleSelect">
          全选
        </el-checkbox>
      </el-col>
      <el-col class="delete" :span="2" @click.native="clearShoppingCart">
        批量清除
      </el-col>
      <el-col class="total" :span="3" :offset="15">
        <span class="total-txt">总价:</span>
        <span class="total-price">{{ tatalPrice | keepPoint }}</span>
      </el-col>
      <el-col class="buy-btn" :span="2">去结算</el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'shoppingCart',
  data: function() {
    return {
      selectedGoods: [],
      isAllSelect: false
    }
  },
  created() {
    this.selectedGoods = this.shoppingCart
  },
  computed: {
    ...mapGetters(['shoppingCart']),
    tatalPrice() {
      let total = 0
      let sum = 0
      this.selectedGoods.forEach(item => {
        if (item.isSelect === true) {
          total = item.price * item.num
        } else {
          total = 0
        }
        sum += total
      })
      return sum
    }
  },
  filters: {
    keepPoint(value) {
      return '¥' + value.toFixed(2)
    }
  },
  methods: {
    clearShoppingCart() {
      this.$store.commit('clearShoppingCart')
      this.selectedGoods = []
    },
    toggleSelect() {
      if (this.isAllSelect === true) {
        this.selectedGoods.forEach(item => {
          item.isSelect = false
        })
      } else {
        this.selectedGoods.forEach(item => {
          item.isSelect = true
        })
      }
    },
    deleteGoods(id) {
      this.selectedGoods = this.selectedGoods.filter(item => {
        return item.id !== id
      })
      this.$store.commit('deleteGoods', id)
    }
  }
}
</script>

<style scoped lang="stylus">
>>>.el-checkbox__inner
  width 12px
  height 12px
>>>.el-checkbox__label
  font-size 12px
>>>.el-input-number--mini
  width 100px
.shopping-cart
  .cart-thead
    height 43px
    line-height 43px
    background #f3f3f3
    border 1px solid #e9e9e9
    font-size 12px
    color #666
    .all-select
      padding-left 20px
  .cart-list
    .item
      height 100px
      padding-top 10px
      background #f9f9f9
      border-bottom 1px solid #e9e9e9
      .item-select
        padding-left 20px
      .item-goods
        line-height 20px
        .item-goods-img
          width 80px
          height 80px
          border 1px solid #eee
          img
            width 100%
            height 100%
        .item-goods-name
        .item-goods-props
          padding-left 20px
      .item-price
      .item-quantity
      .item-sum
      .item-action
        line-height 80px
  .options-box
    background #fff
    border 1px solid #e9e9e9
    border-top none
    height 50px
    padding-left 20px
    .total
      .total-txt
        color #666
      .total-price
        font-size 16px
        font-weight bolder
        color #ff0000
    .delete
      cursor pointer
      text-align center
      &:hover
        color #ff0000
    .buy-btn
      background #e54346
      color #fff
      height 50px
      text-align center
      line-height 50px
      font-size 18px
      font-weight bold
      cursor pointer
</style>
