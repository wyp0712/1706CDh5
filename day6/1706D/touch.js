;(function() {
   
  // $()
  // $().

  // $()
  // 

  // 设计模式

  // 函数截流  var flag = true 

  // wu new 无实例 new 
  // $()
  // .tap()
  // Promise()

  // touches[0]  保存手指列表
  // changedTouches[0] // 保存 -事件- 
  // targetTouches[0]  当前元素手指列表

  var jQuery = function(el) {
    return new jQuery.fn.init(el)
  }
  jQuery.fn = jQuery.prototype = {
    init: function() {},
    swipeLeft: function() {
      dom.ontouchstart = function(e) {
        var firstTouch = e.changedTouches[0]
      }
      dom.ontouchend = function(e) {

      }
    }
  }


})()