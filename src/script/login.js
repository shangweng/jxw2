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
                //$.cookie('username', $('.username').val(), { expires: 7, path: '/' });
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


}(jQuery);