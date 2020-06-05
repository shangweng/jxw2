//5.显示隐藏
$(function(){
    const $hdli=$('.firstU>li');
    
    $hdli.on('mouseover',function(){
  
     $(this).children(".jiuxianBox").show(); 
    })
    $hdli.on('mouseout',function(){
      $(this).children(".jiuxianBox").hide(); 
    })
   
  
  }())


    //2.根据本地存储，显示用户信息
    if (localStorage.getItem('username')) {
      $('.login').hide();
      $('.admin').show();
      $('.admin span').html(localStorage.getItem('username'));
  }

  $('.admin a').on('click', function () {
      $('.login').show();
      $('.admin').hide();
      localStorage.removeItem('username');
  });
//   $(function(){
//   if($.cookie('username')){
//     $('.login').hide();
//     $('.admin').show();
//     $('.admin span').html($.cookie('username'));

//   }
//   $('.admin a').on('click', function () {
//     $('.login').show();
//     $('.admin').hide();
//     $.removeCookie('username',{path:'/'})
//   });
// }())