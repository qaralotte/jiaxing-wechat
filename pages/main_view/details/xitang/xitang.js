// pages/main_view/details/xitang/xitang.js
Page({
  btn_map:function() {
    wx.navigateTo({
      url: 'map/map',
    })
  },
  btn_route:function() {
    wx.navigateTo({
      url: 'route/car/car',
    })
  },
})