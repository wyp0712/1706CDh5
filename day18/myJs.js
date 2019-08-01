


var myMouth = function() {
 
  this.init()
}

myMouth.prototype = {
  init: function() {
    this.getAjax((res) => {
  
    })
    this.myBs()
  },
  getAjax: function(fn) {
    ajax('url', res => {
      fn && fn(res)
    })
  },
  render: function(data, dir, index) {

  },
  myBs: function() {
     this.bs = new BScroll('.main', {
     
     })

     this.pullDown()
     this.pullUp()
  },
  pullDown: function() {
     this.bs.on('pullingDown', () => {
       this.head.innerHTML = ''
       this.getAjax((res) => {
         this.render(res, 'top')
         this.finishPullDown()
         this.refresh()
       })
     })
  },
  pullUp: function() {
    this.bs.on('pullingUp', () => {
      this.head.innerHTML = ''
      this.getAjax((res) => {
        this.render(res, 'bottom')
        this.finishPullUp()
        this.refresh()
      })
    })
  }
}