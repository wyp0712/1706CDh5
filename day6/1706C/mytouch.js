; (function () {
  // $() 选择元素
  // $().方法  
  // $('')   $.slide

  // 链式调用：
  // $('.tab').slide().tab().slide1()

  // 无 new 实例化  闭包-作用域指向window;  this指向 window; 
  // 构造函数中 返回一个 对象 this  { 0: dom1, 1: dom2, 2: dom3 }

  var jQuery = function (el) {
    // 
    return new jQuery.fn.init(el) // 
  }

  jQuery.fn = jQuery.prototype = {
    init: function (el) { // 构造函数  $('选择元素')
      // new init this 指向于 init
      if (typeof el === 'string') {
        var doms = document.querySelectorAll(el);
        for (var i = 0; i < doms.length; i++) {
          this.push(doms[i])
        }
      }
      return this; // {  }  this; $('.tab').swipeLeft().tap().longtap()
    },
    push: [].push,
    swipeLeft: function (fn) {
      for (var i = 0; i < this.length; i++) {
        this[i].addEventListener('touchstart', mytouchfn)
        this[i].addEventListener('touchmove', mytouchfn)
        this[i].addEventListener('touchend', mytouchfn)
      }
      var startx, starty, endx, endy;
      function mytouchfn(e) {
        switch (e.type) {
          case 'touchstart':
            startx = e.touches[0].pageX;
            starty = e.touches[0].pageY;
            break;

          case 'touchmove':
            endx = e.touches[0].pageX;
            endy = e.touches[0].pageY;
            break;
          case 'touchend':
            var movex = endx - startx;
            var movey = endy - starty;
            // console.log(movex, movey)
            if (movex < 0) {
              // zuo
               fn.call(this, e)
            }
            break;
        }
      }
      return this;
    },
    swipeRight: function () {

    },
    tap: function () {
      console.log('tap')
      return this;
    },
    longTap: function () {

    }
  }

  jQuery.fn.init.prototype = jQuery.fn
  window.$ = window.jQuery = jQuery;
})()