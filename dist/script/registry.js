"use strict";!function(n){var o=n(".username"),e=!0;o.on("blur",function(){n.ajax({type:"post",url:"http://10.31.162.68/hdf_jxwproject/php/registry.php",data:{username:o.val()}}).done(function(o){o||""===n(".username").val()?""==n(".username").val()?n(".yz").html("请输入用户名").css({color:"red",right:-105}):(n(".yz").html("该用户名已经存在").css({color:"red",right:-105}),e=!1):(n(".yz").html("√").css({color:"green",right:-19}),e=!0)})}),n("form").on("submit",function(){if(""==o.val()&&(n(".yz").html("用户名不能为空").css("color","red"),e=!1),!e)return!1})}(jQuery),function(o){var n=o(".head-icon"),e=o(".pop"),r=o(".pop").children().children();console.log(r),n.on("mouseover",function(){e.show()}),n.on("mouseout",function(){e.hide()}),r.on("mouseout",function(){e.hide()})}(jQuery);