# scss: css预编译器；

# 变量

# 嵌套

# 继承

# 循环


# 响应式布局：

   手机横屏：
   @media screen and (orientation: landscape) {
      body {
        background: red;
      }
   }

      @media screen and (orientation: portrait) {
      body {
        background: blue;
      }
   }


# scss循环
语法：
方式1：@for $i from 开始值 through 结束值
方式2：@for $i from 开始值 to 结束值

# 判断
@mixin checkBlock($boolean:true)
{
    @if $boolean
    {
        display:block;
    }
    @else
    {
        display:none;
    }
}

.block{
    @include checkBlock;
}

.hidden{
    @include checkBlock(false);
}

#举例：插值用于“属性值”
@for $i from 1 through 3
{
    .item-#{$i}
    {
        border:#{$i}px solid red;
    }
}




作业md：
    <!-- 
   pc: 要求： tab 切换4 横着排 860px
   pad:  tab 切换2  450px 860px
   phone: 1  450px
   -->




