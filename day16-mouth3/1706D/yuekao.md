1. 模糊搜索
2. 排序 tab切换
3. 楼层 better-scroll
4. 本地存储 城市跳转  数据存储；
5. 上拉下拉；
6. canvas;  圆；


项目构成：
  函数方法：
   init: funcrtion() {

   },
   // 请求数据
   getAjax: function(fn) {
      ajax('url', (res) => {
        console.log(res)
          fn && fn(res)
      })
   },
   // 渲染数据
   render: funcion() {
     字符串拼接
   },
   // 事件  tab切换  pullDown  pullUp 
   bindEvent: function() {
     事件绑定 // 渲染数据
   },
   pullDown: function() {
     // 这四步必须放在数据之后执行；
   

    this.bs.on('pullingDown', function() {


        this.getAjax(function(res) {
            1. 请求数据
            2. 渲染数据
            3. 结束下拉
            4. 调用重新计算方法refresh()
        })
    })
   }


# 回调函数定义：
  
  1. 一个函数 
  2. 作为参数
  3. 传递到其他函数中
  4. 执行


# 函数执行的时候，会把实参 传递给 形参