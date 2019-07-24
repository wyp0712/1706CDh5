# 复习：

drag pc
   
   1. 添加 拖放属性 
   2. 
      源：
        
        ondragstart 
           
           设置数据
             e.dataTransfer.setData('text', e.target.id)
         
      目标：
        
        ondrageover
           e.preventDefault()

        ondrop
          
          获取数据
            e.dataTransfer.getData('text')


# video  


   1. 方法

       play()
       pause() 

       oncanplay = function() {
            video.duration 
       }

   2. 属性
      
      muted = true
      duration 
      currentTime


   3. 行内属性

       autoplay
       preload
       poster



# 上传   


  <input type="file" >

  onchange = function() {
    // this.files[0] // 描述信息
  }



# canvas 


 // 画布
  <canvas id="myCanvas" width = 500 height= 500></canvas>
   
 // js  

 var myCanvas = document.....('#myCanvas);
 var context = myCanvas.getContext('2d');


    

