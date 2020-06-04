// pages/main_view/place/place.js
Page({
  nanhu: function() {
    wx.navigateTo({
      url: '../details/nanhu/nanhu',
    })
  },
  wuzhen: function() {
    wx.navigateTo({
      url: '../details/wuzhen/wuzhen',
    })
  },
  xitang: function() {
    wx.navigateTo({
      url: '../details/xitang/xitang',
    })
  }
})