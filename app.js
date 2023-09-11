// app.ts
App({
  globalData: {},
  onLaunch() {
    // 首次展示欢迎页面
   const firstEntry =  wx.getStorageSync("firstEntry");
    if(firstEntry){
      wx.switchTab({
        url:'./pages/board/board'
      })
    }
    // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    // wx.login({
    //   success: res => {
    //     console.log(res.code)
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   },
    // })
  },
})