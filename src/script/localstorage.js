const admin = document.querySelector('.admin');
const login = document.querySelector('.login');
const spanname = document.querySelector('.admin>span');

const close = document.querySelector('#close');
//如果存在本地存储xingming,代表用户存在
if (localStorage.getItem('username')) {
 
    login.style.display = 'none';
    admin.style.display = 'block';
    let user = localStorage.getItem('username');//获取本地存储。
  
    spanname.innerHTML = user;
}

close.onclick = function () {
     login.style.display = 'block';
     admin.style.display = 'none';
    localStorage.removeItem('username');//删除本地存储
}

//二级菜单显示隐藏
const $hdli=$('.firstU>li');
$hdli.on('mouseover',function(){

 $(this).children(".jiuxianBox").show(); 
})
$hdli.on('mouseout',function(){
  $(this).children(".jiuxianBox").hide();  })
