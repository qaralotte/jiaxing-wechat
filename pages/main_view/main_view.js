// pages/main_view/main_view.js
Page({

  data: {
    imgUrls: [
      {
        link: '/pages/main_view/details/wuzhen/wuzhen',
        url: 'https://jiaxing-wechat.oss-cn-hangzhou.aliyuncs.com/wuzhen/wuzhen-pic1.jpg'
      }, {
        link: '/pages/main_view/details/xitang/xitang',
        url: 'https://jiaxing-wechat.oss-cn-hangzhou.aliyuncs.com/xitang/xitang1.jpg'
      }, {
        link: '/pages/main_view/details/nanhu/nanhu',
        url: 'https://jiaxing-wechat.oss-cn-hangzhou.aliyuncs.com/nanhu/nanhu1.jpg'
      }
    ],
    height: 0,
    indicatorDots: true, //小点
    indicatorColor: "white",//指示点颜色
    activeColor: "coral",//当前选中的指示点颜色
    autoplay: "true", //是否自动轮播
    interval: 3000, //间隔时间
    duration: 1000, //滑动时间
  },
  imgH:function(e){
    var winWid = wx.getSystemInfoSync().windowWidth;
    var imgh=e.detail.height;
    var imgw=e.detail.width;
    var swiperH=winWid*imgh/imgw + "px"
    this.setData({
        Hei:swiperH
    })
  },

})