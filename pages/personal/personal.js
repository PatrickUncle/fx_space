//personal.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bind_h_download: function () {
    wx.navigateTo({                 
      url: 'hdownload/hdownload'                    //跳转至历史下载的
    }),
    this.setData({
      DisChecked: true
    })
  },
  bind_h_Upload: function () {
    wx.navigateTo({
      url: '../logs/logs'                    //跳转至历史上传的
    }),
    this.setData({
      UisChecked: true
    })
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  onHide() {
    this.setData({
      DisChecked: false,
      UisChecked: false
    })
  },//改变VIEW颜色
  
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  click_d:{
    DisChecked: false,
    UisChecked: false
  }
})
