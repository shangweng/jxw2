"use strict";!function(s){var t,d;function c(){var t=0,n=0;s(".goods-item:visible").each(function(i,o){s(o).find(".cart-checkbox input").prop("checked")&&(t+=parseInt(s(o).find(".quantity-form input").val()),n+=parseFloat(s(o).find(".b-sum strong").html()))}),s(".amount-sum").find("em").html(t),s(".totalprice").html(n.toFixed(2))}s.cookie("cookiesid")&&s.cookie("cookienum")&&(t=s.cookie("cookiesid").split(","),d=s.cookie("cookienum").split(","),s.each(t,function(i,o){var n,e;n=t[i],e=d[i],s.ajax({url:"http://10.31.162.68/hdf_jxwproject/php/alldata.php",dataType:"json"}).done(function(i){s.each(i,function(i,o){var t;n==o.goods_id&&((t=s(".goods-item:hidden").clone(!0,!0)).find(".goods-pic").find("img").attr("src",o.goods_small_logo),t.find(".goods-pic").find("img").attr("goods_id",o.goods_id),t.find(".goods-d-info").find("a").html(o.goods_name),t.find(".b-price").find("strong").html(o.goods_price),t.find(".quantity-form").find("input").val(e),t.find(".b-sum").find("strong").html((o.goods_price*e).toFixed(2)),t.css("display","block"),s(".item-list").append(t),c())})})})),s(".allsel").on("change",function(){s(".goods-item:visible").find(":checkbox").prop("checked",s(this).prop("checked")),s(".allsel").prop("checked",s(this).prop("checked")),c()});var i=s(".goods-item:visible").find(":checkbox");function o(i){return(parseFloat(i.parents(".goods-item").find(".b-price strong").html())*parseInt(i.parents(".goods-item").find(".quantity-form input").val())).toFixed(2)}s(".item-list").on("change",i,function(){s(".goods-item:visible").find(":checkbox").length===s(".goods-item:visible").find("input:checked").size()?s(".allsel").prop("checked",!0):s(".allsel").prop("checked",!1),c()}),s(".quantity-add").on("click",function(){var i=s(this).parents(".goods-item").find(".quantity-form input").val();i++,s(this).parents(".goods-item").find(".quantity-form input").val(i),s(this).parents(".goods-item").find(".b-sum strong").html(o(s(this))),c(),r(s(this))}),s(".quantity-down").on("click",function(){var i=s(this).parents(".goods-item").find(".quantity-form input").val();--i<1&&(i=1),s(this).parents(".goods-item").find(".quantity-form input").val(i),s(this).parents(".goods-item").find(".b-sum strong").html(o(s(this))),c(),r(s(this))}),s(".quantity-form input").on("input",function(){var i=s(this).val();/^\d+$/g.test(i)||s(this).val(1),s(this).parents(".goods-item").find(".b-sum strong").html(o(s(this))),c(),r(s(this))});var n=[],e=[];function a(){e=s.cookie("cookiesid")&&s.cookie("cookienum")?(n=s.cookie("cookiesid").split(","),s.cookie("cookienum").split(",")):(n=[],[])}function r(i){a();var o=i.parents(".goods-item").find("img").attr("sid");e[s.inArray(o,n)]=i.parents(".goods-item").find(".quantity-form input").val(),jscookie.add("cookienum",e,10)}function p(t,i){var n=-1;s.each(i,function(i,o){t===o&&(n=i)}),i.splice(n,1),e.splice(n,1),s.cookie("cookiesid",i,{expires:10,path:"/"}),s.cookie("cookienum",e,{expires:10,path:"/"})}s(".b-action a").on("click",function(){a(),window.confirm("你确定要删除吗?")&&(s(this).parents(".goods-item").remove(),p(s(this).parents(".goods-item").find("img").attr("sid"),n),c())}),s(".operation a").on("click",function(){a(),window.confirm("你确定要全部删除吗?")&&(s(".goods-item:visible").each(function(){s(this).find(":checkbox").is(":checked")&&(s(this).remove(),p(s(this).find("img").attr("goods_id"),n))}),c())})}(jQuery);