;
(function (window) {

  var version = "1.0.0";
  var jQuery = function (selector, context) {
    return new jQuery.fn.init(selector, context)
  }

  jQuery.fn = jQuery.prototype = {
    jquery: version,
    constructor: jQuery,
    // The default length of a jQuery object is 0 ==>jQuery对象的默认长度是0
    length: 0,
    // 实例化化方法，这个方法可以称作 jQuery 对象构造器
    init: function (selector, context) {
      context = context || document;
      context = context.nodeType ? context : context[0];
      if (!selector) {
        return this;
      }
      if (typeof selector == 'string') {
        if (selector[0] === '<' && selector.length > 3 && selector[selector.length - 1] === '>') {
          var oDiv = document.createElement('div');
          oDiv.innerHTML = selector;
          // 增加length属性
          this.length = 1;
          this[0] = oDiv.firstElementChild || oDiv.firstChild; // 高版本浏览器  全识别
        } else {
          // 判断id
          // if (selector[0] == '#' && this.strNum(selector, '#') === 1) {
          //   var dom = document.getElementById(selector.slice(1));
          //   if (dom) {
          //     this[0] = dom;
          //     this.length = 1;
          //   }
          // } else {
          var dom = context.querySelectorAll(selector);
          for (var i = 0; i < dom.length; i++) {
            this.push(dom[i])
          }
          // }
        }
      } else if (selector.nodeType) { // 传入dom节点时候
        this[0] = selector;
        this.length = 1;
      } else if (selector instanceof jQuery) { // 传入实例对象的时候
        return selector;
      } else {
        return this;
      }
    },
    /**
     * [给集合中添加内容]
     * @param {Any} [要添加的内容]
     */
    // push: function (content) {
    //   Array.prototype.push.call(this, content)
    // },
    push: [].push,
    splice: [].splice,
    strNum: function (str, char) {
      var num = 0;
      for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
          num++;
        }
      }
      return num;
    },
    show: function () {
      //为了阻止程序报错
      if (this.length === 0) return;
      for (var i = 0; i < this.length; i++) {
        this[i].style.display = 'block';
      };
      return this; //链式调用
    },
    hide: function () {
      if (this.length === 0) return;
      for (var i = 0; i < this.length; i++) {
        this[i].style.display = 'none';
      }
      return this;
    },
    /**
     * 获取对应的dom节点
     * @param {index}
     */
    get: function (index) {
      return this[index];
    },
    // toArray() 方法以数组的形式返回 jQuery 选择器匹配的元素。
    toArray: function () {
      return slice.call(this);
    },
    eq: function (index) {
      //为了阻止报错
      if (index >= this.length) return;
      return $(this[index]);
    },
    index: function () {
      //通过元素获取下标的方法
      function getIndex(obj) {
        var childBox = obj.parentNode.children;
        for (var i = 0; i < childBox.length; i++) {
          if (childBox[i] === obj) {
            return i;
          }
        }
      }
      return getIndex(this[0]);
    },
    each: function (fn) {
      for (var i = 0; i < this.length; i++) {
        fn(i, this[i])
      }
      return this;
    },
    map: function (callback) {
      for (var i = 0; i < this.length; i++) {
        callback(this[i], i)
      }
    },
    // css模块
    css: function () {
      if (this.length === 0) return; // 证明没有获取到元素，直接终短下面的代码
      // 1、判断它是传了一个参数还是两个参数
      if (arguments.length === 2) { // 一定传了两个参数
        for (var i = 0; i < this.length; i++) {
          this[i].style[arguments[0]] = arguments[1];
        }
      } else if (arguments.length === 1) {
        if (typeof arguments[0] === 'object') { //设置css样式
          var json = arguments[0];
          for (var attr in json) {
            for (var i = 0; i < this.length; i++) {
              this[i].style[attr] = json[attr]
            }
          }
        } else { //获取csscss样式
          return getClass(this[0], arguments[0]);
        }
      };
      return this;
    },
    addClass: function () {
      for (var i = 0; i < this.length; i++) {
        if (this[i].className) {
          this[i].className += ' ' + arguments[0];
        } else {
          this[i].className = arguments[0];
        }
      };
      return this;
    },
    removeClass: function () {

      if (arguments.length === 1) {
        for (var i = 0; i < this.length; i++) {
          this[i].classList.remove(arguments[0])
        }
      } else {
        for (var i = 0; i < this.length; i++) {
          this[i].className = ''
        }
      }
      return this;
    },
    toggleClass: function (cName) {
      if (typeof cName === 'undefined') {
        return this;
      }
      for (var i = 0; i < this.length; i++) {
        this[i].classList.toggle(cName)
      }
      return this;
    },
    // 获取属性- 自定义属性
    attr: function () {
      if (this.length === 0) return;

      for (var i = 0; i < this.length; i++) {
        if (arguments.length === 1) {
          return this[i].getAttribute(arguments[0]);
        } else if (arguments.length === 2) {
          this[i].setAttribute(arguments[0], arguments[1]);
        }
      };
      return this;
    },
    removeAttr: function (propers) {
      for (var i = 0; i < this.length; i++) {
        this[i].removeAttribute(propers);
      };
      return this;
    },
    /**
     * 节点
     *
     */
    prev: function () {
      var prevNode = this[0].previousElementSibling || this[0].previousSibling;
      return $(prevNode);
    },
    next: function () {
      var nextNode = this[0].nextElementSibling || this[0].nextSibling;
      return $(nextNode);
    },
    parent: function () {
      var _parentNode = this[0].parentNode;
      return $(_parentNode);
    },
    parents: function () {

    },
    siblings: function () {
      var that = this;
      var el = $();
      var child = this[0].parentNode.children;
      for (var i = 0; i < child.length; i++) {
        if (child[i] !== this[0]) {
          el.push(child[i]);
        }
      };
      return el;
    },
    find: function (selector) {
      var that = $();
      if (selector) {
        var res = this[0].querySelectorAll(selector);
        if (res.length > 0) {
          Array.prototype.push.apply(that, res);
        }
      }
      return that;
    },
    children: function (selector) {
      var that = $();
      if (typeof selector === 'undefined') {
        var arr = this[0].children;
        Array.prototype.push.apply(that, arr)
      } else {
        // .item, .list, .a, .itek
        var brr = selector.trim().split(',')
        for (var i = 0; i < brr.length; i++) {
          var dom = this[0].querySelectorAll(brr[i])
        }
        Array.prototype.push.apply(that, dom)
      }
      return that;
    },
    slice: function (startIndex, endIndex = this.length) {
      var el = $();
      for (var i = startIndex; i < endIndex; i++) {
        el.push(this[i]);
      };
      return el;
    },
    /*
      节点操作模块
    */
    append: function (childNode) {
      // var child = $(childNode)[0].nodeType ? $(childNode)[0] : childNode[0];
      var child = $(childNode)[0]
      console.log(child, 'child')
      for (var i = 0; i < this.length; i++) {
        this[i].appendChild(child.cloneNode(true)); // 添加创建的节点同时复制内容
      }
      return this;
    },
    // 查找最后一个子节点
    last: function () {
      return this.length > 0 ? jQuery(this[this.length - 1]) : this;
    },
    // 查找第一个子节点
    first: function () {
      return this.length > 0 ? jQuery(this[0]) : this;
    },
    clone: function () {
      return this[0].cloneNode(true)
    },

    /**插入到jQuery对象的第一个元素
     * @params:dom元素|jQuery的实例
     */
    prepend: function (dom) {
      dom = dom.nodeType ? dom : dom[0];
      this.each(function (i, ele) {
        ele.insertBefore(dom.cloneNode(true), ele.firstElementChild || ele.firstChild);
      })
      return this;
    },
    remove: function () {
      if (this.length === 0) return;

      var oParent = this[0].parentNode;

      for (var i = this.length - 1; i >= 0; i--) {
        oParent.removeChild(this[i]);
      }
      return this;
    },
    html: function (content) {
      if (!content) { //获取
        return this[0].innerHTML;
      } else { //设置
        this.each(function (key, value) {
          if (content instanceof jQuery) { //jQuery $('<li></li>')
            value.innerHTML = content[0].outerHTML;
          } else {
            value.innerHTML = content;
          }
        })
      }
      return this;
    },
    text: function (content) {
      if (!content) {
        return this[0].innerText;
      } else {
        this[0].innerText = content;
        // this.each(function (key, value) {
        //   value.innerText = content;
        // })
      }
      return this;
    },
    val: function (content) {
      if (!content) {
        return this[0].value;
      } else {
        this.each(function (key, value) {
          value.value = content;
        })
      }
      return this;
    },
    /*
     *事件模块
     */
    click: function (fn) {
      for (var i = 0; i < this.length; i++) {
        this[i].onclick = fn;
      };
      return this;
    },
    mouseover: function (fn) {
      for (var i = 0; i < this.length; i++) {
        this[i].onmouseover = fn;
      };
      return this;
    },
    mouseout: function (fn) {
      for (var i = 0; i < this.length; i++) {
        this[i].onmouseout = fn;
      };
      return this;
    },
    mousedown: function (fn) {
      for (var i = 0; i < this.length; i++) {
        this[i].onmousedown = fn;
      };
      return this;
    },
    mousemove: function (fn) {
      for (var i = 0; i < this.length; i++) {
        this[i].onmousemove = fn;
      };
      return this;
    },
    mouseup: function (fn) {
      for (var i = 0; i < this.length; i++) {
        this[i].onmouseup = fn;
      };
      return this;
    },
    mouseenter: function (fn) {
      for (var i = 0; i < this.length; i++) {
        this[i].onmouseenter = fn;
      };
      return this;
    },
    mouseleave: function (fn) {
      for (var i = 0; i < this.length; i++) {
        this[i].onmouseleave = fn;
      };
      return this;
    },
    scroll: function (fn) {
      window.onscroll = fn;
      return this;
    },
    change: function (fn) {
      for (var i = 0; i < this.length; i++) {
        this[i].onchange = fn;
      };
      return this;
    },
    addEvent: function (type, ele, method) {
      var el = [];
      try {
        el = $(ele);
      } catch (err) {
        el.push(ele);
      }
      var len = this.length;
      if (el[0].addEventListener) {
        for (var i = 0; i < len; i++) {
          el[i].addEventListener(type, method, false);
        }
      } else if (el[0].attachEvent) {
        for (var i = 0; i < len; i++) {
          el[i].attachEvent(type, method, false);
        }
      } else {
        for (var i = 0; i < len; i++) {
          el[i]["on" + type] = method;
        }
      }
    },
    /**
     *
     * @param {*} type  事件类型
     * @param {*} ele   绑定事件的子元素
     * @param {*} method  回调函数
     */
    on: function (type, ele, method) {
      var that = this;
      type = type == "blur" ? "change" : type;

      this.addEvent(type, document, function (e) {
        var e = e || window.event;
        e.target = e.target || e.srcElement;
        if (ele) {
          for (var i = 0; i < $(ele).length; i++) {
            var childNode = that.get(0).children[0].nodeName;
            if (e.target.nodeName === childNode) {
              method.call(e.target, e);
              break;
            }
          }
        } else {
          for (var i = 0; i < that.length; i++) {
            var childNode = that.get(0).children[0].nodeName;
            if (e.target.nodeName === childNode) {
              method.call(e.target, e);
              break;
            }
          }
        }

      });
    },

    width: function () {
      return parseFloat(getClass(this[0], 'width'))
    },
    height: function () {
      return parseFloat(getClass(this[0], 'height'))
    },

    position: function () {
      return {
        top: this[0].offsetTop,
        left: this[0].offsetLeft,
      }
    },

    scrollTop: function () {

      // if (arguments[0] === 'undefined') {
        var top = document.documentElement.scrollTop || document.body.scrollTop;
      // } else {
        // document.documentElement.scrollTop = arguments[0]
      // }
      return top
    },

    scrollLeft: function () {
      var left = document.documentElement.scrollLeft || document.body.scrollLeft;
      return left;
    },
    offset: function () {

      // 获取距离顶部的距离
      function getTop(dom) {
        var top = 0;
        var border = 0;

        while (dom) {
          top += dom.offsetTop;
          border += parseFloat(getClass(dom, 'borderTopWidth'));
          dom = dom.offsetParent;
        }
        return top + border;
      }

      // 获取距离左边的距离
      function getLeft(dom) {
        var left = 0;
        var border = 0;
        while (dom) {
          left += dom.offsetLeft;
          border += parseFloat(getClass(dom, 'borderLeftWidth'));
          dom = dom.offsetParent;
        }
        return left + border;
      }
      return {
        top: getTop(this[0]),
        left: getLeft(this[0])
      }
    },

    innerWidth: function () {
      var width = parseFloat(getClass(this[0], 'width'));
      var padding = parseFloat(getClass(this[0], 'padding'))
      return width + padding * 2
    },
    innerHeight: function () {
      var height = parseFloat(getClass(this[0], 'height'));
      var padding = parseFloat(getClass(this[0], 'padding'))
      return height + padding * 2
    },
    outerWidth: function () {

    },
    outerHeight: function () {

    },
    not: function (ele) {
      var _ele = $(ele),
        dom = $();
      arr = Array.prototype.filter.call(this, function (item) {
        return !_ele.contains(item);
      });
      Array.prototype.push.apply(dom, arr)
      return dom;
    },
    size: function () {
      var dom = this[0].parentNode.children;
      return dom.length;
    },
    /**
     * @name 插入元素
     * @param {jq-对象} parent 父元素
     */
    appendTo: function (parent) {
      var doms = $(parent);
      if (doms.length) {
        for (var j = this.length - 1; j >= 0; j--) {
          doms[0].appendChild(this[j])
        }
      }
    }

  }

  /**
   * @function [$.extend({}, opt, obj) 拓展参数合并参数]
   *
   * 拓展方法:
   * $.extend({
   *  myPlugin: function() {}
   * })
   * */
  jQuery.extend = jQuery.fn.extend = function () {
    // 扩展对象从第二个参数算起
    var i = 1,
      len = arguments.length, // 获取参数长度
      target = arguments[0]; // 第一个参数为源对象
    // 判断是否是拓展的方法；
    if (i == len) { // 1 == 1 {}
      target = this; // ！
      i--; // 0
    }

    for (; i < len; i++) {
      // 拓展对象中属性
      for (var j in arguments[i]) {
        // opt  obj
        target[j] = arguments[i][j];
      }
    }
    return target;
  }

  jQuery.extend({
    /**
     *
     * @func [获取css非行内样式]
     * @param {*传入的元素} dom
     * @param {*传入元素的对应的属性} attr
     */
    getCssStyle: function (dom, attr) {
      return getComputedStyle(dom, null)[attr]
    }
  })

  jQuery.fn.extend({
    testFn: function () {
      return 1
    },
    // dom obj fn 第一个参数 arguments[0] 第二个参数, callback
    animate: function () {
      var that = this;
      var arg = arguments[0];
      for (var i = 0; i < that.length; i++) {
        clearInterval(arg.timer)
        var j = i;
        arg.timer = setInterval(function () {
          var flag = true;
          var cur = 0;
          if (that[j]) {

            for (var attr in arg) {
              cur = parseInt($.getCssStyle(that[j], attr)) // 100px
              var step = (arg[attr] - cur) / 10;
              step = step > 0 ? Math.ceil(step) : Math.floor(step);
              that[j].style[attr] = cur + step + 'px';

              if (cur != arg[attr]) {
                flag = false;
              } else {
                clearInterval(arg.timer)
                if (typeof callback === 'function') {
                  callback()
                }
              }

            }

          }
        })
      }
    }
  })

  jQuery.fn.extend({
    /**
     * @func [淡入效果]
     */
    fadeIn: function () {
      this[0].style.opacity = '0';
      this[0].style.display = 'block'
      var i = 0.1,
        timer = null,
        that = this;
      var step = 0.1,
        curopacity = 0;
      timer = setInterval(function () {
        curopacity = curopacity + step
        that[0].style.opacity = curopacity
        console.log(curopacity, 'this[0].style.opacity')
        if (curopacity >= 1) {
          clearInterval(timer)
          return;
        };
      }, 100)
    },
    /**
     * @func [淡出效果]
     */
    fadeOut: function () {
      this[0].style.opacity = '1';
      // this[0].style.display = 'block'
      var i = 0.1,
        timer = null,
        that = this,
        step = 0.1,
        curopacity = this[0].style.opacity;
      timer = setInterval(function () {
        curopacity = curopacity - step
        that[0].style.opacity = curopacity;
        that[0].style.height = 0;
        that[0].style.display = 'none'
        if (curopacity <= 0) {
          clearInterval(timer)
          return;
        };
      }, 100)
    }
  })


  /**
   * 调用方式
   * $().slideUp()
   *
   */

  jQuery.fn.extend({
    slideUp: function (second) {
      var that = this,
        timer = null,
        second = second || 1000,
        totalHeight = this[0].offsetHeight,
        currentHeight = totalHeight;
      // var step = totalHeight / (second / 60);
      this[0].style.overflow = 'hidden';
      timer = setInterval(function () {
        currentHeight = --currentHeight;
        that[0].style.height = currentHeight + 'px'

        if (currentHeight < 0) {
          clearInterval(timer)
          that[0].style.display = 'none'
          that[0].style.height = totalHeight + 'px'
          return;
        }
      }, second / 60)
    },
    slideDown: function (second) {
      var that = this,
        timer = null,
        second = second || 1000,
        totalHeight = parseFloat(this[0].style.height),
        currentHeight = 0;
      this[0].style.height = '0px';
      this[0].style.overflow = 'hidden';
      this[0].style.display = 'block'
      // var step = totalHeight / (second/10)
      timer = setInterval(function () {
        var flag = ++currentHeight
        // console.log(flag, 'flag')
        that[0].style.height = currentHeight + 'px'
        if (currentHeight >= totalHeight) {
          clearInterval(timer)
          // that[0].style.height = totalHeight + 'px'
          return;
        }
      }, second / 60)
    },
    slideToggle: function (second) {

      if (this[0].style.display != 'none') {
        this.slideUp(second)
      } else {
        this.slideDown(second)
      }

    }
  })

  /**
   * 调用方式
   * $.merge()
   *
   */
  jQuery.extend({
    merge: function (first, second) {
      if (!first) return;
      if (!second) return;
      var len = +second.length,
        j = 0,
        i = first.length;
      for (var j = 0; j < len; j++) {
        first[i++] = second[j];
      }
      first.length = i;
      return first;
    },
    trim: function () {
      var reg = /^\s+|\s+$/g;
      return this[0].val().replace(reg, '')
    }
  })


  /**
   * 请求数据方式封装
   * @param {opt} url type async success
   */
  jQuery.ajax = function (opt) {
    var defaults = {
      url: '',
      data: null,
      type: 'get',
      async: true,
      success: function () {},
      error: function () {}
    }
    // 传入的参数和默认参数进行合并
    var optData = Object.assign({}, defaults, opt);
    var xml = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xml.onload = function (res) {
      if (res.target.status === 200) {
        var data = JSON.parse(res.target.response);
        optData.success(data)
      } else {
        optData.error(res.target.statusText)
      }
    }
    if (optData.type === 'get') {
      xml.open(optData.type, optData.url + '?' + formate(optData.data), optData.async);
      xml.send()
    } else if (optData.type === 'post') {
      console.log(formate(optData.data), 'formate(optData.data)')
      xml.open(optData.type, optData.url, optData.async);
      // xml.setRequestHeader('Content-Type', 'application/json')
      xml.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      // 参数的形式: 'name=devin&age=3'
      xml.send(formate(optData.data))
    }
  }

  window.isArray = function (value) {
    return Object.prototype.toString.call(value) == "[object Array]";
  }

  window.isFunction = function (value) {
    return Object.prototype.toString.call(value) == "[object Function]";
  }

  // Object.prototype.contains = function (ele) {
  //   var len = this.length,
  //     flag, that = this;
  //   for (var i = 0; i < len; i++) {
  //     if (ele == that[i]) {
  //       flag = 1;
  //       break;
  //     } else {
  //       flag = 0;
  //     }
  //   }
  //   return flag;
  // }

  /**
   * 格式化参数
   *  */
  function formate(data) {
    var str = ''
    // var arr = [];
    for (var key in data) {
      str += key + '=' + data[key] + '&'
      // str += key + '=' + obj[key]
      // arr.push(key + '=' + obj[key])
    }
    // console.log(arr.join('&'))
    return str.replace(/&$/, '')
  }

  /**
   * 封装获取非行间样式的方法
   * */
  function getClass(obj, value) {
    if (obj.currentStyle) {
      return obj.currentStyle[value];
    } else {
      return getComputedStyle(obj, false)[value];
    }
  };

  //  这里将jQuery的原型赋值给init原型,让init实例化之后可以调用jQuery的原型方法
  jQuery.fn.init.prototype = jQuery.fn; // 构造分离器

  // 这也就是为什么实例化init可以调用jQuery的原型val()方法 比如：$("#id").val()

  window.$ = window.jQuery = jQuery; // $就是jQuery对象

})(window)