// pages/main_view/details/nanhu/route/car/car.js
import { AMapWX } from '../../../../../../libs/amap-wx';
import { Config } from '../../../../../../libs/config.js';
Page({
  data: {
    markers: [],
    distance: '',
    longitude: '',
    latitude: '',
    cost: '',
    polyline: [],
  },
  goToAddress: function(lo, la) {
    var that = this;
    var key = Config.key;
    var myAmapFun = new AMapWX({key: key});
    myAmapFun.getDrivingRoute({
      origin: lo + "," + la,
      destination: '120.7605633,30.7551063',
      success: function(data){
        var points = [];
        if(data.paths && data.paths[0] && data.paths[0].steps){
          var steps = data.paths[0].steps;
          for(var i = 0; i < steps.length; i++){
            var poLen = steps[i].polyline.split(';');
            for(var j = 0;j < poLen.length; j++){
              points.push({
                longitude: parseFloat(poLen[j].split(',')[0]),
                latitude: parseFloat(poLen[j].split(',')[1])
              })
            } 
          }
        }
        that.setData({
          polyline: [{
            points: points,
            color: "#0091ff",
            width: 6
          }]
        });
        if(data.paths[0] && data.paths[0].distance){
          that.setData({
            distance: data.paths[0].distance + '米'
          });
        }
        if(data.taxi_cost){
          that.setData({
            cost: '打车约' + parseInt(data.taxi_cost) + '元'
          });
        }
          
      },
      fail: function(info){

      }
    })
  },
  onLoad: function() {
    var that = this;
    var key = Config.key;
    var myAmapFun = new AMapWX({key: key});
    myAmapFun.getRegeo({
      success: function(res){
        that.setData({
          longitude: res[0].longitude,
          latitude: res[0].latitude,
          points: [{
            longitude: res[0].longitude,
            latitude: res[0].latitude
          }],
          markers: [{
            id: 0,
            longitude: res[0].longitude,
            latitude: res[0].latitude,
            iconPath: 'https://jiaxing-wechat.oss-cn-hangzhou.aliyuncs.com/map/mapicon_navi_s.png',
            width: 23,
            height: 33
          },{
            iconPath: "https://jiaxing-wechat.oss-cn-hangzhou.aliyuncs.com/map/mapicon_navi_e.png",
            id: 0,
            latitude: 30.7551063,
            longitude: 120.7605633,
            width: 24,
            height: 34
          }]
        })
        that.goToAddress(res[0].longitude, res[0].latitude);
      },
      fail: function(info){
        //失败回调
        console.log(info)
      }
    })
  },
  goToCar: function (e) {
    // wx.redirectTo({
      // url: '.'
    // })
  },
  goToRide: function (e) {
    wx.redirectTo({
      url: '../navigation_ride/navigation'
    })
  },
  goToWalk: function (e) {
    wx.redirectTo({
      url: '../navigation_walk/navigation'
    })
  }
})