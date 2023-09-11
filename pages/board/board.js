// pages/board/board.js
import {
  request
} from '../../utils/db';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: true,
    mainActiveIndex: 0,
    activeId: null,
    items: [],
    goods: [],
    page: 1,
    limit: 7,
    goodList: [],
    wrapperItem: 0,
  },
  onClickNav({
    detail = {}
  }) {
    this.setData({
      mainActiveIndex: detail.index || 0,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.categories();
    this.renderGoods();
  },
  // 渲染商品
  renderGoods() {
    request({
      url: `/goods?_page=${this.data.page}&_limit=${this.data.limit}`
    }).then(res => {
      const num = res.data.length === 0 ? 0 : res.data.length;
      console.log(num);
      this.setData({
        goodList: this.data.goodList.concat(res.data),
        wrapperItem:3-Number(num)
      })
    })
  },
  // 获取类目
  categories() {
    request({
      url: '/categories?_embed=goods'
    }).then(res => {
      console.log('items-->', res.data)
      this.setData({
        loading: false,
        items: res.data.map(item => {
          return {
            id: item.id,
            text: item.title,
            goods: item.goods
          }
        })
      })
    });
  },
  // 滚动到底部
  // 滚动到底部就会触发
  onReachBottom() {
    console.log('到底部')
    if (this.data.goodList.length === Number(this.data.total)) { // 注意后台返回total是字符串
      wx.showToast({
        title: '没有更多商品了哦...',
      })
      return false; // 阻止后续代码执行
    }
    this.setData({
      page: this.data.page + 1
    })
    this.renderGoods()
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})