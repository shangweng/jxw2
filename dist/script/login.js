"use strict";!function(e){e(".btn").on("click",function(){e.ajax({type:"post",url:"http://localhost/hdf_jxwproject/php/login.php",data:{user:e(".username").val(),pass:hex_sha1(e(".password").val())}}).done(function(t){t?(location.href="index.html",localStorage.setItem("username",e(".username").val())):(e(".password").val(""),alert("用户名或者密码错误"))})});var t=e(".filter p");e("Frame"),e(".filter input");t.on("click",function(){e(this).hide()})}(jQuery);