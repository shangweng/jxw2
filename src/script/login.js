!function ($) {
    $('.btn').on('click', function () {
        $.ajax({
            type: 'post',
            url: 'http://10.31.162.68/hdf_jxwproject/php/login.php',
            data: {
                user: $('.username').val(),
                pass: hex_sha1($('.password').val())
            }
        }).done(function (result) {
            if (result) {
                location.href = "index.html";
                localStorage.setItem('username', $('.username').val());

            } else {
                $('.password').val('');
                alert('用户名或者密码错误');
            }
        });
    });

const $all=$('.filter p');
const $Frame=$('Frame')
const $inputs=$('.filter input')

$all.on('click',function(){
    $(this).hide();
   
})
// $Frame.on('focusin',function(){
//     $all.show()
    
// })

  //下拉菜单
  $('.head-nav').hover(function(){
    $(this).find('.pop').show()
},function(){
    $(this).find('.pop').hide()
})

}(jQuery);