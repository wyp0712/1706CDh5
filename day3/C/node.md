1. 复习目标：

scss
弹性盒布局
rem + 弹性盒

fleible.js使用

2. css3动画

过渡动画 触发动画
自执行动画

⭐️控制动画执行过程
animation-play-state: play | pause;

动画库的使用
自己制作动画库

3. 1px 移动端：视网膜屏幕的出现

@mixin setTopBorder($color) {
   & {
     position:relative;
   }
   &::before { // 伪元素
      content: "";
      display:block;
      width:100%;
      height:1px;
      background: $color;
      position:absolute;
      left:0;
      top:0; 
      transform: scale(0.5);
   }
}
@mixin setBottomBorder($color) {
   & {
     position:relative;
   }
   &::before { // 伪元素
      content: "";
      display:block;
      width:100%;
      height:1px;
      background: $color;
      position:absolute;
      left:0;
      bottom:0; 
      transform: scale(0.5);
   }
}

4. 三段式： 头尾固定，中间自适应

html,body{
  width:100%;
  height:100%;
}

@function rem($font) {
  @return $font / 37.5px * 1rem;
}

.wrap {
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
}

.header,.footer {
  width: 100%;
  height:rem(45px);
}

.main {
  flex:1;
  width:100%;
  overflow:auto;
}


5. 插件：  

  chinese:
  auto:   auto close tag  auto rename tag  auto import
  html:   html Snippets  html css support
  path:   path intellisense  
  live server:  
  open:
  css:
  beautify: less sass

  canvas: canvas Snippets


  配置：

  
6. 
  原生App:  Native App
   安卓:  
   Object-C ---> ios 


  Web App: m.taobao.com 浏览器中查看


  混合App: 架子用原生  内容用h5 


 自执行动画：
     animation: boxStyle 1s infinite;
     
     /* 动画名称   跟 keyframes 配合使用*/
     animation-name: boxStyle;
     /* 动画时长 */
     animation-duration: 2s;
     /* 动画轨迹 */
     animation-timing-function: ease;
     /* 动画延迟 规定动画从何时开始 */
     animation-delay: 0s;
     /* 动画次数 */
     animation-iteration-count: infinite;
     /* 动画方向  alternate 规定动画来回动*/
     animation-direction: alternate;
     /* 规定动画结束后的状态 和   infinite */
     animation-fill-mode: backwards;
     /* 动画状态 */
     /* animation-play-state: paused | running */


   
    

