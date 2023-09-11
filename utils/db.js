// 封装一个函数，返回promise，方便调用
export const db = ({url,data,method='get'})=>{
  return new Promise((resove,reject)=>{
    wx.request({
      url,
      data,
      method,
      success:data=>{
        resove(data);
      },
      fail:err=>{
        reject(err);
      }
    })
  })
}

export const request = ({url,data,method='get'},isHeader=false)=>{
  return new Promise((resove,reject)=>{
    wx.showLoading({
      title: '正在加载中...',
    })
    wx.request({
      url: 'http://localhost:3000'+url,
      method,
      data,
      success:data=>{
        // 如果用户传递isHeader
        if(isHeader){
          resove({data,total:data.header['X-Total-Count']})
        }else{
          resove(data)
        }
      },
      fail:err=>{
        reject(err);
      },
      complete:()=>{
        wx.hideLoading();
      }
    })
  })
}

/**
 * 验证
 */
export const checkAuth = (callback)=>{
  if(wx.getStorageSync('tel')){
    callback();
  }else{
    if(wx.getStorageSync('token')){
      wx.navigateTo({
        url: '/pages/telform/telform',
      })
    }else{
      wx.navigateTo({
        url: '/pages/auth/auth',
      })
    }
  }
}