swiper 
  单词：
  new Swiper('.swiper-container')
  swiper-pagniation  
  pagniation: {
    el: ".swiper-pagniation"
  }


init: function() {
  this.getAjax((res) =>{
    this.render()
  })
  this.bscroll()
}
 
 render:funcion() {


   new Swiper()

 }

.wrap {
  width:100%;
  height:100%;
}

.main {
  overflow:hidden;
}

.content {
  width:100%;  
}

better-scroll只能拉一次
    
    pullingDown
    bs.finishPullDown()
    bs.refresh()

    pullIngUp
    bs.finishPullUp()
    bs.refresh()
  
console.log(this)
this.render() is not function()
index is undefined

spans.forEach((item,index) => {
   item.onclick = () => {
     this.render((res) => {
       this.render(res, index)
     })
   }
})

console.log(.前面的)
.index


<canvas data-index=${item.sc}></canvas>


this.canvas.forEach(item => {
  var api = 
  
})

function getAjax(fn) {
  ajax('' (Res) => {
    fn && fn(res)
  })
}

function render(data, dir){
  if(dir === 'top') {

  } else if (dir === 'swiper') {

  } else if (dir === 'tab') {
  }
}
