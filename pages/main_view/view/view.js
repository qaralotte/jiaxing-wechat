// pages/main_view/view/view.js

Page({
  // 开始滑动
  onTouchStart(e) {
    touch[0] = e.touches[0].clientX;  // touch为全局变量
  },
  // 结束滑动
  onTouchEnd(e) {
    touch[1] = e.changedTouches[0].clientX;
    if (touch[0] - touch[1] > 5) {  // 
      this.addClassName('left');
    } else if (touch[1] - touch[0] > 5) {
      this.addClassName('right');
    }
  },
  addClassName(direction) {
    // 当前（显示）电影序号
    let currentIndex = this.data.currentIndex;
    // 当前电影信息
    let currentMovie = {};
    // 所有电影信息
    let movieData = this.data.movieData;
    let length = movieData.length;
    // 样式列表
    let classArray = new Array(length);

    if (direction === 'left') {  // 向左滑动
      // 是否为最后一项
      if (++currentIndex >= length) return
      // 若不是，则添加样式至样式数组
      /* 样式数组与view视图中的卡片class绑定，可以实现数据动态更新*/
      classArray[currentIndex] = 'active';
      classArray[currentIndex - 1] = 'prev';
      // 是否存在下一张卡片，存在则为其添加样式
      if (currentIndex + 1 < length) {
        classArray[currentIndex + 1] = 'next';
      }
    } else if (direction === 'right') {  // 向右滑动
      // 逻辑同上
      if (--currentIndex < 0) return

      if (currentIndex - 1 >= 0) {
        classArray[currentIndex - 1] = 'prev';
      }
      classArray[currentIndex] = 'active';
      classArray[currentIndex + 1] = 'next';
    }

    currentMovie = movieData[currentIndex];
    this.moveCard(direction);  // 动画操作
    /* 更新当前显示电影序列号，样式数组以及当前电影信息（该项用于用户点击时，查看电影详情信息）*/
    this.setData({
      currentIndex,
      classArray,
      currentMovie,
    })
  },
  // 卡片移动
  moveCard(direction) {
    let currentIndex = this.data.currentIndex + 1;
    let movieDistance = this.data.movieDistance;
  
    if (direction === 'left') {
      movieDistance -= 549;
    } else if (direction === 'right') {
      movieDistance += 549;
    }
  
    this.setData({
      movieDistance,
    })
  } 
})