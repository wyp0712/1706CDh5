; (function (window) {

  // 构造函数 返回什么类型 {} this  对象 this.push 
  var jQuery = function (el) {
    return new jQuery.fn.init(el) // new init 
  }

  jQuery.fn = jQuery.prototype = {
    init: function (el) {
      if (typeof el === 'string') {
        var doms = document.querySelectorAll(el)
        for (var i = 0; i < doms.length; i++) {
          this.push(doms[i])   // this init
        }
      }
      return this;
    },
    push: [].push,
    swipeLeft: function (fn) {
      console.log('left')

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
            
            if (movex <0) {
              fn.call(this, e)
            }
            break;
        }
      }

      return this;
    },
    tap: function () {
      console.log('tap')
      return this;
    },
    swipeRight: function () {
      console.log('right')
      return this;
    }
  }


  jQuery.fn.init.prototype = jQuery.fn;
  window.$ = window.jQuery = jQuery;

})(window)