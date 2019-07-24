var json = require('./login.json');

console.log(json, 'json')

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