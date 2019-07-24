
# 复习拖拽：
  
   1. touchstart  touchmove  touchend

   2. drag  

       1>  先加拖拽属性 
       2>  源头： dragstart
                   设置数据
                   e.dataTransfer.setData('text', e.target.id)

           目标： drageover  
                    e.preventDefault()
                 drop
                  e.dataTransfer.getData('text')

#  video
   
  mp3
 <!-- <audio> 
    <source src> <source>
    <source src> <source>
    <source src> <source>
 
 </audio> -->

 mp4:

    video:视频

    方法：  调用 和 传参
     1. play() 播放
     2. pause() 暂停   

     // 如果没有这个函数。 获取视频总时长 为NaN
     video.oncanplay = function() {
      video.duration  获取视频总时长;
     }
    属性： 赋值 和 获取     
     1. muted = true; 静音
     2. video.duration  获取视频总时长
     3. video.currentTime 获取视频当前播放时间

     写在行内的属性
      autoplay = 
      preload=
      poster='./png'

#  上传