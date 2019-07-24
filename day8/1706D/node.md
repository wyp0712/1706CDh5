1. 拖  +  放  pc效果

  img 和带href 的a标签 具有默认拖拽属性  dragabble = true;
  如果想让其他元素可以拖拽起来，也给他加上拖拽属性就可以了；


源头： dragstart   
        设置数据
        e.dataTranfer.setData('text', e.target.innerHTML) 
目标:  dragover  
         e.preventDefault() // 取消默认行为；
      drop
       获取数据
        e.dataTranfer.getData('text') 



# 视频音频播放器知识点：

 1. play()  播放
 2. puase() 暂停
 3. muted = true  静音
 4. video.duration 获取总时长
 5. video.currentTime =   可以设置 可以获取  

 异步数据；

 通过一个函数
 video.oncanplay = function() {
   video.duration 获取总时长
 }


 路程  速度  时间
 速度 = 路程 km / 时间 s    km/s


 px  s   px  s
 每一px 走多少s

 作业： 

   1. 用本地存储做一个登陆功能
      var arr = [
        {
          user: 'hello',
          pwd: 123
        },
        {
          user: 'hello',
          pwd: 123
        },
           {
          user: 'hello',
          pwd: 123
        }
      ]
     var obj = {
        user: 'ddd',
        pwd: 123
      }
      var flag =  arr.some(item => {
         return item.user === obj.user && item.pwd === obj.pwd
       })
       // 如果为true 说明当前登陆成功 了； 然后把数据存储在本地存储中；
       if (flag) {
         location.href = 'homt.html'
       }





   