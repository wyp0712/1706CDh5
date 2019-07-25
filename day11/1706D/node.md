# canvas  饼状图思路

  1. 计算总数
  2. 每一个扇形的角度 currentDeg  = 根据当前个数 / 总数  计算比例。 并且让它跟圆产生关系  * 360 * Math.PI / 180 
  
  3. api.save()
     api.beginPath()
     api.arc()
     api.reStore()


  4.  pre += currentDeg 

 # 划字体辅助线：
   找三个点
   1. 每一个扇形的中心点 
       var  x = Math.cos(pre + curretDeg / 2) * r;
       var  y = Math.sin(pre + curretDeg / 2) * r;

   2. 每一个扇形的中心点 的延伸点
       var  x1 = Math.cos(pre + curretDeg / 2) * （r + 30）;
       var  y1 = Math.sin(pre + curretDeg / 2) * （r + 30）;


   3. 正负判断的点

   if (x1 > 0) {
     x2 = x1 + 50
     y2 = y1;
   }  else {
     x2 = x1 - 50
     y2 = y1;
   }

   
   x2  
   y2


   4.连线

     moveTo()
     lineTo()
     lineTo() 

 # 添加说明文字
   if（x2 > 0) {
      api.font = ''
      api.fillText('', x2, y2 + 8)
   } else {
      api.font = ''
      api.fillText('', x2, y2 + 8)
   }


# 折线图：
用构造函数：
找点 [ [x, y] ,[x1, y1] ] 

# 柱状图：
用构造函数：
找起始点和高度