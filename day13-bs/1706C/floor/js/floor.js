    /*
     1. 处理数据，排序
     2. 渲染数据 相等字母不渲染  不相等字母渲染
     3. 右边数据增加点击事件， 事件委托  
    */

   var Floor = function (option) {
    var defaults = {
    }
    this.opts = Object.assign({}, defaults, option)
    this.leftEl = document.querySelector(this.opts.leftEl)
    this.rightEl = document.querySelector(this.opts.rightEl)

    this.stroage = window.localStorage;

    this.init()
  }

  Floor.prototype = {
    init: function () {
      this.sortFn()
      this.render()
    },
    // 排序
    sortFn: function () {
      var datas = this.opts.floorData.sort((a, b) => {
        return a.PrefixEName.localeCompare(b.PrefixEName)
      })
      return datas
    },
    // 渲染
    render: function () {
      var list = this.sortFn()

      var str = '<h1 class=item>A</h1>';
      var alpha = '<li>A</li>'
      for (var i = 0; i < list.length; i++) {
        if (list[i] && list[i + 1]) {
          // 相等 不渲染字母
          if (list[i].PrefixEName === list[i + 1].PrefixEName) {
            str += `<li>  ${list[i].Name}</li>`
          } else {
            str += `<li> ${list[i].Name}</li>  <h1 class=item> ${list[i + 1].PrefixEName} </h1>`
            alpha += `<li data-index=${i}> ${list[i + 1].PrefixEName} </li>`;
          }
        }
      }
      str += `<li> ${list[list.length-1].Name} </li>`
      this.leftEl.innerHTML = str; // 左边城市渲染
      this.rightEl.innerHTML = alpha; // 右边字母渲染

      this.bs = new BScroll('.main', {
         click: true,
      })

      var back = document.querySelector('.back');
      back.onclick  = () => {
        this.bs.scrollToElement('.header', 700);
      }
      this.bindEvent() 
    },
    // 绑定右边的点击事件
    bindEvent: function() {
      var items = document.querySelectorAll('.item')
      var main = document.querySelector('.main')
      var rightLis = document.querySelectorAll('.right li');
      
      // 跳转 存储城市数据到 本地存储数据中
      this.leftEl.onclick = (e) => {
        if (e.target.nodeName === 'LI') {
          window.location.href = './home.html';
          this.stroage.setItem('city', e.target.innerText)
        }
      }

      // 获取左边元素的每一个距离顶部的高度
      var heightArr = [];
      items.forEach(val => {
        heightArr.push(val.offsetTop)
      })
      // 绑定右边的点击事件
      rightLis.forEach((item, index) => {
        item.onclick = () => {
          // 根据下标判断是否滑动到哪一个元素
        //  main.scrollTop = heightArr[index]
         
        this.bs.scrollTo(0, -heightArr[index], 700)

        }
      })
    }
  }