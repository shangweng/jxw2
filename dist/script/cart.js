"use strict";!function(a){var c,s;function e(){var c=0,n=0;a(".cartList:visible").each(function(i,t){a(t).find(".cart-checkbox input").prop("checked")&&(c+=parseInt(a(t).find(".cartNum input").val()),n+=parseFloat(a(t).find(".cartJs span").html()))}),a(".checkShop").find("em").html(c),a(".totalprice").html(n.toFixed(2))}a.cookie("cookiesid")&&a.cookie("cookienum")&&(c=a.cookie("cookiesid").split(","),s=a.cookie("cookienum").split(","),a.each(c,function(i,t){var n,o;n=c[i],o=s[i],a.ajax({url:"http://10.31.162.68/hdf_jxwproject/php/alldata.php",dataType:"json"}).done(function(i){a.each(i,function(i,t){var c;n==t.goods_id&&((c=a(".cartList:hidden").clone(!0,!0)).find(".cartImg").find("img").attr("src",t.goods_small_logo),c.find(".cartImg").find("img").attr("goods_id",t.goods_id),c.find(".goodsRight").find("span").html(t.goods_name),c.find(".cartPrice").find("span").html(t.goods_price),c.find(".cartNum").find("input").val(o),c.find(".cartJs").find("span").html((t.goods_price*o).toFixed(2)),c.css("display","block"),a(".cartWrap").append(c),e())})})})),a(".allsel").on("click",function(){a(".cartList:visible").find(":checkbox").prop("checked",a(this).prop("checked")),a(".allsel").prop("checked",a(this).prop("checked")),e()});var i=a(".cartList:visible").find(":checkbox");function t(i){return(parseFloat(i.parents(".cartList").find(".cartPrice span").html())*parseInt(i.parents(".cartList").find(".cartNum input").val())).toFixed(2)}a(".cartList").on("click",i,function(){a(".cartList:visible").find(":checkbox").length===a(".cartList:visible").find("input:checked").size()?a(".allsel").prop("checked",!0):a(".allsel").prop("checked",!1),e()}),a(".add").on("click",function(){var i=a(this).parents(".cartList").find(".cartNum input").val();i++,a(this).parents(".cartList").find(".cartNum input").val(i),a(this).parents(".cartList").find(".cartJs span").html(t(a(this))),e(),d(a(this))}),a(".minus").on("click",function(){var i=a(this).parents(".cartList").find(".cartNum input").val();--i<1&&(i=1),a(this).parents(".cartList").find(".cartNum input").val(i),a(this).parents(".cartList").find(".cartJs span").html(t(a(this))),e(),d(a(this))}),a(".cartNum input").on("input",function(){var i=a(this).val();/^\d+$/g.test(i)||a(this).val(1),a(this).parents(".cartList").find(".cartJs span").html(t(a(this))),e(),d(a(this))});var n=[],o=[];function r(){o=a.cookie("cookiesid")&&a.cookie("cookienum")?(n=a.cookie("cookiesid").split(","),a.cookie("cookienum").split(",")):(n=[],[])}function d(i){r();var t=i.parents(".cartList").find("img").attr("goods_id");o[a.inArray(t,n)]=i.parents(".cartList").find(".cartNum input").val(),a.cookie("cookienum",o,{expires:10})}function p(c,i){var n=-1;a.each(i,function(i,t){c===t&&(n=i)}),i.splice(n,1),o.splice(n,1),a.cookie("cookiesid",i,{expires:10,path:"/"}),a.cookie("cookienum",o,{expires:10,path:"/"})}a(".Del").on("click",function(){r(),window.confirm("你确定要删除吗?")&&(a(this).parents(".cartList").remove(),p(a(this).parents(".cartList").find("img").attr("goods_id"),n),e())}),a(".delOperation").on("click",function(){r(),window.confirm("你确定要全部删除吗?")&&(a(".cartList:visible").each(function(){a(this).find(":checkbox").is(":checked")&&(a(this).remove(),p(a(this).find("img").attr("goods_id"),n))}),e())})}(jQuery);