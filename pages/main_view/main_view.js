// pages/main_view/main_view.js
Page({
  //预览图片
  previewImg: function (e) {
    var currentUrl = e.currentTarget.dataset.currenturl
    var previewUrls = e.currentTarget.dataset.previewurl
    wx.previewImage({
      current: currentUrl, //必须是http图片，本地图片无效
      urls: previewUrls, //必须是http图片，本地图片无效
    })
  },
 
  onLoad: function() {
    var that = this;
    var pic_jiaxing = [];
    pic_jiaxing.push("https://jiaxing-wechat.oss-cn-hangzhou.aliyuncs.com/jiaxing/jiaxing1.jpg")
    pic_jiaxing.push("https://jiaxing-wechat.oss-cn-hangzhou.aliyuncs.com/jiaxing/jiaxing2.jpg")
    pic_jiaxing.push("https://jiaxing-wechat.oss-cn-hangzhou.aliyuncs.com/jiaxing/jiaxing3.jpg")
    that.setData({
      pic_jiaxing: pic_jiaxing,
    })

    var pic_place = [];
    pic_place.push("https://jiaxing-wechat.oss-cn-hangzhou.aliyuncs.com/nanhu/nanhu_pic1.jpg")
    pic_place.push("https://jiaxing-wechat.oss-cn-hangzhou.aliyuncs.com/wuzhen/wuzhen-pic1.jpg")
    pic_place.push("https://jiaxing-wechat.oss-cn-hangzhou.aliyuncs.com/xitang/xitang_pic1.jpg")
    pic_place.push("https://jiaxing-wechat.oss-cn-hangzhou.aliyuncs.com/wuzhen/wuzhen-pic2.jpg")
    pic_place.push("https://jiaxing-wechat.oss-cn-hangzhou.aliyuncs.com/xitang/xitang_pic2.jpg")
    that.setData({
      pic_place: pic_place,
    })
    var pic_food = [];
    pic_food.push("https://jiaxing-wechat.oss-cn-hangzhou.aliyuncs.com/food/food1.png")
    pic_food.push("https://jiaxing-wechat.oss-cn-hangzhou.aliyuncs.com/food/food2.jpg")
    pic_food.push("https://jiaxing-wechat.oss-cn-hangzhou.aliyuncs.com/food/food3.jpg")
    pic_food.push("https://jiaxing-wechat.oss-cn-hangzhou.aliyuncs.com/food/food4.png")
    that.setData({
      pic_food: pic_food,
    })
  },
  data: {
    active: 0,
  },
  onChange(event) {
    // event.detail 的值为当前选中项的索引
    this.setData({ active: event.detail });
    if (event.detail == 1) {
      wx.redirectTo({
        url: 'browse/browse',
      })
    } else if (event.detail == 2) {
      wx.redirectTo({
        url: 'me/me',
      })
    }
  },
  btn_view:function() {
    wx.navigateTo({
      url: 'view_map/view_map',
    })
  },
  btn_food:function() {
    wx.navigateTo({
      url: 'view_map/view_map',
    })
  },
  btn_map:function() {
    wx.navigateTo({
      url: 'map/map',
    })
  },
})