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
                 $('.yz').html('<b>用户名验证通过</b>').css({'color':'green',});
                $usernameflag = true;
            } else if($('.username').val()==''){
                $('.yz').html('<b>请输入用户名</b>').css({'color': 'red'});
            }
            
            else {
                $('.yz').html('<b>该用户名已经存在</b>').css({'color': 'red',});
                $usernameflag = false;
            }

        })
    });

    $('form').on('submit', function () {
        if ($user.val() == '') {
            $('.yz').html('<b>用户名不能为空</b>').css('color', 'red');
            $usernameflag = false;
        }
         if($('#passWordInput').val()== ""){
            $(".setPossWord").html("<b><font color='red'>密码不能为空~~!</font><b/>");
            $usernameflag = false;
        }
        if($('#txtRepeatPass').val()== "")
        { $(".RepeatPassMsg").html("<b><font color='red'>密码不能为空~~!</font><b/>");
        $usernameflag = false;
        } 
        if($('#txtEmail').val()== "")
        {  $("#EmailMsg").html("<b><font color='red'>邮箱不能为空~~!</font><b/>");
        $usernameflag = false;}
        if (!$usernameflag) {
            return false;//阻止提交
        }
    });

    //下拉菜单
    $('.head-nav').hover(function(){
        $(this).find('.pop').show()
    },function(){
        $(this).find('.pop').hide()
    })
  
         //密码验证
         $("#passWordInput").blur(function(){
            var Password = $(this).val();
            if(Password== ""){
                $(".setPossWord").html("<b><font color='red'>密码不能为空~~!</font><b/>");
            }else{
                if(Password.length<6 || Password.length>20){
                    $(".setPossWord").html("<b><font color='red'>密码格式不正确~~!</font><b/>");
                }else{
                    $(".setPossWord").html("<b><font color='green'>密码验证通过~~!</font><b/>");
           
                }
            }
        });

          //确认密码验证
          $("#txtRepeatPass").blur(function(){
            var passwprd = $("#passWordInput").val();
            //alert(passwprd);
            var RepeatPass = $(this).val();
           
            if(RepeatPass== ""){
              
                $(".RepeatPassMsg").html("<b><font color='red'>密码不能为空~~!</font><b/>");
             
            }else{
                if(RepeatPass == passwprd){
                    $(".RepeatPassMsg").html("<b><font color='green'>密码验证通过~~!</font><b/>");
              
                }else{
                    $(".RepeatPassMsg").html("<b><font color='red'>密码不一致~~!</font><b/>");
                }
            }
        });

         //邮箱验证
 
         $("#txtEmail").blur(function(){
             console.log(1)
            //$("#name").val().length
            var Email = $(this).val();
           
            if(Email== ""){
                $("#EmailMsg").html("<b><font color='red'>邮箱不能为空~~!</font><b/>");
            }else{
                var regEmail = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
                if(regEmail.test(Email)){
                    $("#EmailMsg").html("<b><font color='green'>邮箱验证通过~~!</font><b/>");
                 
                }else{
                    $("#EmailMsg").html("<b><font color='red'>邮箱格式不正确~~!</font><b/>");
                }
            }
        });
        //同意注册

        $('.regAgrInput').on('click',function(){
            if($('.regAgrInput').prop('checked')){
                $('.regSub').attr('disabled',false)
                $('.regSub').css({'background':'red'})
             }else{
                $('.regSub').attr('disabled',true)
                $('.regSub').css({'background':'#ccc'})
           
             }
        })


}(jQuery);
