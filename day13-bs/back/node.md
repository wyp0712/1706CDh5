1. better-scroll  基于iscroll重新封装的；  用于移动端或者pc 滚动场景

下拉刷新
上拉加载


<main class=main>
  <div class=content>
     内容
  </div>
<main>

.main {
  overflow: hidden;
}

// 传入外层大盒子的类  作用于第一个子元素  main - content
插件：
var myBScroll = new BScroll('.main', {
  click: true // 开启点击事件
  // 开启下拉刷新
  pullDownRefresh: {
    threshold: 180,
    stop: 80
  }
  // 开启上拉加载
  pullUpLoad: {
    threshold: -100,
  }
})

// 监听事件  下拉  上拉
myBScroll.on('pullingDown', function() {
  //  请求数据
  ajax('', function(Res) {
    render(Res)
    // 结束下拉刷新
    myBScroll.finishPullDown()
    myBScroll.refresh()
  })
}) 

myBScroll.on('pullingUp', function() {
  //  请求数据
  ajax('', function(Res) {
    render(Res)
    // 结束上拉刷新
    myBScroll.finishPullUp()
    myBScroll.refresh()
  })
}) 

