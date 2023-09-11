// pages/welcome/welcome.js
 import {db} from '../../utils/db';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[]
  },
// 点击跳转到榜单
  toBoard(){
    wx.switchTab({
      url: '../board/board',
    })
    wx.setStorageSync('firstEntry', true)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    db({
      url:'http://47.96.0.211:9000/db/in_theaters',
      data:{
        limit:3
      }
    }).then(res=>{
      this.setData({
        movies:res.data.object_list
      })
    })
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