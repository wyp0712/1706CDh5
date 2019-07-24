# better-scroll 插件:  适用于各种滚动场景



.main {
   width: 100%;
   flex:1;
   overflow: hidden;

  .content{
    内容盒子；不能给高；

  }
}

 传入：外层大盒子的类  作用于里层的第一个盒子  
var myBscroll = new BScroll('.main', {
  click: true // 开启点击
  // 开启下拉刷新
  pullDownRefresh: {
     threshold:  90，  // 阀值
     stop: 40   // 回弹停留
  },
  // 开启上拉加载
  pullUpLoad: {
    threshold:  -90，  // 阀值
  }
})


// 监听下事件结束
myBscroll.on('pullingDown', function() {
  ajax('', function() {
    myBscroll.finishPullDown()
    myBscroll.refresh() // 重新计算滚动条位置
  })
})

// 监听上事件结束
myBscroll.on('pullingUp', function() {
  ajax('', function() {
    myBscroll.finishPullDown()
    myBscroll.refresh() // 重新计算滚动条位置
  })
})


function render() {
  
}


##  

  1. scrollTo(x,y,time)  楼层
  2. scrollToElement('item', time);  返回顶部
  4. scrollX: true  // 横滚
  3. probeType: 0 1 2 3 开启滚动条事件




