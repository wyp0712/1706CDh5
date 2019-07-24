# 复习技能：

弹性盒子

本地存储

#  拖  放：

  图片，带href的a标签； 自带拖动属性 draggable = true;

  如果想让一个盒子拖动起来，加一个属性 draggable = true;


  源头 ：  dragstart
            设置数据 e.dataTransfer.setData('text', e.tareget.innerHTML)
  目标：   dragover  
            e.preventDefault()
          drop
            获取数据 e.dataTransfer.getData('text')


  1. 拖放效果 垃圾桶效果
  2. video效果


  作业
  https://juejin.im/



var obj = {
  user: '123',
  pwd: '234'
}

// 用本地存储存储数据；进来显示。  如果本地存储中有账号秘密， 直接登陆

var flag = json.some(item => {
     return item.user == obj.user && item.pwd == obj.pwd
})

if (flag) {
  location.href = './home.html'
}



