!function ($) {
    let $user = $('.username');
    let $usernameflag = true;
    $user.on('blur', function () {
        $.ajax({
            type: 'post',
            url: 'http://10.31.162.68/hdf_jxwproject/php/registry.php',
            data: {
                username: $user.val()
            }
        })
        .done(function (result) {

            
            
            if (!result && $('.username').val()!=='') {//不存在
                 $('.yz').html('√').css({'color':'green','right':-19});
                $usernameflag = true;
            } else if($('.username').val()==''){

                $('.yz').html('请输入用户名').css({'color': 'red','right':-105});

            }
            
            else {
                $('.yz').html('该用户名已经存在').css({'color': 'red','right':-105});
                $usernameflag = false;
            }
        })
    });

    $('form').on('submit', function () {
        if ($user.val() == '') {
            $('.yz').html('用户名不能为空').css('color', 'red');
            $usernameflag = false;
        }
        if (!$usernameflag) {
            return false;//阻止提交
        }
    });
}(jQuery);


!function($){
    let $bz=$('.head-icon')
    let $pop=$('.pop');
    let $popli=$('.pop').children().children();
    console.log($popli);

  $bz.on('mouseover',function(){
      $pop.show()
  })

  $bz.on('mouseout',function(){
    $pop.hide()
})

  $popli.on('mouseout',function(){
      $pop.hide()

  })




}(jQuery)


