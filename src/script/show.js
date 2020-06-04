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