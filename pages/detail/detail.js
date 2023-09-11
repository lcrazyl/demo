// pages/detail/detail.js
import {request,checkAuth} from '../../utils/db';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:[],
    commentList:[],
    current:'0',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad({id,title}) {
    wx.setNavigationBarTitle({
      title
    })
    this.getDetailInfo(id);
    this.getCommentInfo();
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on('acceptDataFromOpenerPage',({data})=>{
    })
     
    eventChannel.emit('someEvent');
  },
  // 获取商品详细信息
  getDetailInfo(id){
    request({
      url:`/goods/${id}`
    }).then(res=>{
      this.setData({
        info:res.data
      })
    })
  },
  getCommentInfo(){
    request({
      url:`/comments`
    }).then(res=>{
      console.log('commentList-->',res.data)
      this.setData({
        commentList:res.data
      })
    })
  },
  onChange({detail}){
    this.setData({
      current:detail.index
    })
  },
  /**
   * 加入购物车
   */
  handleAdd(){
    // 判断本地是否有手机号，有则添加，没有判断是否登录
    checkAuth(()=>{
      console.log('现在就可以添加到购物车')
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