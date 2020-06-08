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
 //4.tab切换
 $(function(){
   const $btns=$('.indexTabNav li');
   const $items =$('.indexTabMain .nav_item')
   $btns.on('mouseover',function(){
     $(this).addClass('nav_active').siblings('.indexTabNav li').removeClass('nav_active');
     $items.eq($(this).index()).show().siblings('.indexTabMain .nav_item').hide()
   })
 }()) 

 //列表渲染
 const $list=$('.spiritList');
 console.log($list)
 $.ajax({
  url: 'http://10.31.162.68/hdf_jxwproject/php/indexdata.php',
  dataType: 'json'
 }).done(function(data){
  let $strhtml = '<ul>';
  $.each(data, function (index, value) {
      $strhtml += `
          <li>

              <a href="detail.html?goods_id=${value.goods_id}" target="_blank">
                  <img class="lazy" src="${value.goods_big_logo}" data-original="${value.goods_big_logo}" width="150" height="150" />
                  <p>${value.goods_id}${value.goods_name}</p>
                  <span class="price">￥${value.goods_price}</span>
                  <span>${value.goods_number}</span>
              </a>
          </li>
      `;
  });
  $strhtml += '</ul>';
  $list.html($strhtml);
 })

//6.懒加载
$(function () {
  $("img.lazy").lazyload({ effect: "fadeIn" });
});

// $(function(){
//   $(window).on('scroll', function() {
//     let $top = $(window).scrollTop();
//     const $box = $('.midHeaderCon');
//     if($top>=800){
//       $box.stop(true).animate({
//         top: 0
//     });
//     } else {
//       $box.stop(true).animate({
//           top: 60
//       });
//   }
//   })
// })

}(jQuery);