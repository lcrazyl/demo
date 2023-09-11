import {
  request
} from "../../utils/db"

// pages/telform/telform.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tel: ''
  },
  confirm() {
    wx.setStorageSync('tel', this.data.tel)
    const token = wx.getStorageSync('token');
    request({
      url: `/users?nickName=${token.nickName}&tel=${this.data.tel}`
    }).then(res => {
      console.log('res-->', res.data);
      if (res.data.length === 0) {
        request({
          url: `/users`,
          method: 'post',
          data: {
            ...token,
            tel:this.data.tel
          }
        })
      } else {
        wx.navigateBack({
          delta:2
        })
      }
    })
  },
  handleInput({
    detail
  }) {
    console.log(detail)
    this.setData({
      tel: detail.value
    })
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