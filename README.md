# 叮咚(DengDong)

> 仿京东练习

## 搜索功能

- ### 相关组件
  - topSearch 公用的搜索框
  - searchResult 搜索结果页
- ### 关键字处理
  - 保存到 vuex 的 state 里面
  - 通过 mutations 的 commit 中的 payload 传递
- ### 在本地 Mock 数据时

  - 以关键字为条件对请求到的数据使用 Map 方法遍历，匹配成功的样返回，不成功的设置为空字符串，再使用 filter 方法过滤被设置为空字符串的数据，并将过滤后的新数组赋值给 data 中的变量

  #### 代码样例

  ```js
  let dateList = ''
  dataList = res.data.data.map(goods => {
    if (
      goods.name.toLowerCase().indexOf(`${this.searchStr.toLowerCase()}`) !== -1
    ) {
      return {
        id: goods.id,
        name: goods.name,
        price: goods.price,
        details: goods.details,
        image: goods.image
      }
    } else {
      return {
        name: ''
      }
    }
  })
  this.goodsList = dataList.filter(goods => {
    return goods.name !== ''
  })
  ```
