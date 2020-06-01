!function ($) {
    //1.二级侧边栏效果
    let $menuli = $('.menu li');
    let $cartlist = $('.cartlist');
    let $items = $('.cartlist .item');

    $menuli.on('mouseover', function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        $cartlist.show();
       
       
        $items.eq($(this).index()).show().siblings('.item').hide();
    });
    $menuli.on('mouseout', function () {
        $menuli.removeClass('active');
        $cartlist.hide();
    });
    $cartlist.on('mouseover', function () {
        $(this).show();
    });
    $cartlist.on('mouseout', function () {
        $(this).hide();
    });


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

    //3.轮播图

    var curIndex = 0; //当前index
    //  alert(imgLen);
    // 定时器自动变换2.5秒每次
 var autoChange = setInterval(function(){ 
   if(curIndex < $(".imgList li").length-1){ 
     curIndex ++; 
   }else{ 
     curIndex = 0;
   }
   //调用变换处理函数
   changeTo(curIndex); 
 },2500);

 $(".indexList").find("li").each(function(item){ 
   $(this).hover(function(){ 
     clearInterval(autoChange);
     changeTo(item);
     curIndex = item;
   },function(){ 
     autoChange = setInterval(function(){ 
       if(curIndex < $(".imgList li").length-1){ 
         curIndex ++; 
       }else{ 
         curIndex = 0;
       }
       //调用变换处理函数
       changeTo(curIndex); 
     },2500);
   });
 });
 function changeTo(num){ 
   $(".imgList").find("li").removeClass("imgOn").hide().eq(num).fadeIn().addClass("imgOn");
   $(".infoList").find("li").removeClass("infoOn").eq(num).addClass("infoOn");
   $(".indexList").find("li").removeClass("indexOn").eq(num).addClass("indexOn");
 }

}(jQuery);