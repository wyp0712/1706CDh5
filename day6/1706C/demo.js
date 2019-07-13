; (function () {

  // $()

  var jQquery = function (el) {
    return new jQquery.fn.init(el)
  }
  jQquery.fn = jQquery.prototype = {
    init: function (el) { // 构造函数
      if (typeof el === 'string') {
        var doms = document.querySelectorAll(el)
        for (var i = 0; i < doms.length; i++) {
          this.push(doms[i])
          console.log(this, 'this-----------1')
        }
      }
    },
    push: [].push,
    swipeLeft: function (fn) {
      // console.log(fn, 'fn')
      //  < >
      for (var i = 0; i < this.length; i++) {
        this[i].addEventListener('touchstart', mytouchfn)
        this[i].addEventListener('touchmove', mytouchfn)
        this[i].addEventListener('touchend', mytouchfn)
      }
      var startx, starty, endx, endy;
      function mytouchfn(e) {
        console.log(e, 'e---------1')
        switch (e.type) {
          case 'touchstart':
            startx = e.touches[0].pageX
            starty = e.touches[0].pageY

            break
          case 'touchmove':
            endx = e.touches[0].pageX
            endy = e.touches[0].pageY
            break
          case 'touchend':
            // b  > a
            console.log('touch-条件判断')
            if (Math.abs(endx - startx) > Math.abs(endy - starty) && startx - endx >= 25) {
              fn && fn.call(this, e)
            }
            break
        }
      }
    }
  }

  jQquery.fn.init.prototype = jQquery.fn
  window.$ = window.jQquery = jQquery;
})()