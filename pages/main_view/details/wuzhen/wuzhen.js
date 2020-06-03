// pages/main_view/details/wuzhen/wuzhen.js
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