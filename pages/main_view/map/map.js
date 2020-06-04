// pages/main_view/map/map.js
import { AMapWX } from '../../../libs/amap-wx.js';
import { Config } from '../../../libs/config.js';

Page({
  data: {
    markers: [],
    latitude: '',
    longitude: '',
    textData: {}
  },
  onLoad: function() {
    var that = this;
    var key = Config.key;
    var myAmapFun = new AMapWX({key: key});
    myAmapFun.getRegeo({
      location: "120.75,30.75",
      iconPath: "https://jiaxing-wechat.oss-cn-hangzhou.aliyuncs.com/map/marker.png",
      iconWidth: 22,
      iconHeight: 32,
      success: function(data){
        var marker = [{
          id: data[0].id,
          latitude: data[0].latitude,
          longitude: data[0].longitude,
          iconPath: data[0].iconPath,
          width: data[0].width,
          height: data[0].height
        }]
        that.setData({
          markers: marker
        });
        that.setData({
          latitude: data[0].latitude
        });
        that.setData({
          longitude: data[0].longitude
        });
        that.setData({
          textData: {
            name: data[0].name,
            desc: data[0].desc
          }
        })
      },
      fail: function(info){
        // wx.showModal({title:info.errMsg})
      }
    })
  }
})