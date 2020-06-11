 ! function($) {
    //1.获取cookie渲染对应的商品列表
    //2.获取所有的接口数据，判断取值。

    function showlist(goods_id, num) { //sid：编号  num：数量
        $.ajax({
            url: 'http://10.31.162.68/hdf_jxwproject/php/alldata.php',
            dataType: 'json'
        }).done(function(data) {    
          
             $.each(data, function(index, value) { 
                if (goods_id == value.goods_id) {      
                    let $clonebox = $('.cartList:hidden').clone(true, true); //克隆隐藏元素
                     $clonebox.find('.cartImg').find('img').attr('src', value.goods_small_logo);
                     $clonebox.find('.cartImg').find('img').attr('goods_id', value.goods_id);
                     $clonebox.find('.goodsRight').find('span').html(value.goods_name);
                     $clonebox.find('.cartPrice').find('span').html(value.goods_price);
                     $clonebox.find('.cartNum').find('input').val(num);
                    $clonebox.find('.cartJs').find('span').html((value.goods_price * num).toFixed(2));
                    $clonebox.css('display', 'block');
                    $('.cartWrap').append($clonebox);
                    jsallprice(); //计算总价
                }
            });
          

        });
    }

    //2.获取cookie渲染数据
    if ($.cookie('cookiesid') && $.cookie('cookienum')) {
        let s =$.cookie('cookiesid').split(',') ; //获取cookie 同时转换成数组[1,2]
        let n = $.cookie('cookienum').split(','); //获取cookie 同时转换成数组[10,20] 
        $.each(s, function(index, value) {
            showlist(s[index], n[index]);
        
        });
    }  
    //3.计算总价
    function jsallprice() {
        let $sum = 0; //商品的件数
        let $count = 0; //商品的总价
        $('.cartList:visible').each(function(index, ele) {
            if ($(ele).find('.cart-checkbox input').prop('checked')) { //复选框勾选
                $sum += parseInt($(ele).find('.cartNum input').val());
                $count += parseFloat($(ele).find('.cartJs span').html());
            }
        });
        $('.checkShop').find('em').html($sum);
        $('.totalprice').html($count.toFixed(2));
    }

    //4.全选
    $('.allsel').on('click', function() {
        $('.cartList:visible').find(':checkbox').prop('checked', $(this).prop('checked'));
        $('.allsel').prop('checked', $(this).prop('checked'));
        jsallprice(); //计算总价
    });
    let $inputs = $('.cartList:visible').find(':checkbox');
    $('.cartList').on('click', $inputs, function() {
        if ($('.cartList:visible').find(':checkbox').length === $('.cartList:visible').find('input:checked').size()) {
            $('.allsel').prop('checked', true);
        } else {
            $('.allsel').prop('checked', false);
        }
        jsallprice(); //计算总价
    });

    // //5.数量的改变
    $('.add').on('click', function() {
        let $num = $(this).parents('.cartList').find('.cartNum input').val();
        $num++;
        $(this).parents('.cartList').find('.cartNum input').val($num);

        $(this).parents('.cartList').find('.cartJs span').html(jsprice($(this)));
        jsallprice(); //计算总价
        setcookie($(this));
    });


    $('.minus').on('click', function() {
        let $num = $(this).parents('.cartList').find('.cartNum input').val();
        $num--;
        if ($num < 1) {
            $num = 1;
        }
        $(this).parents('.cartList').find('.cartNum input').val($num);
        $(this).parents('.cartList').find('.cartJs span').html(jsprice($(this)));
        jsallprice(); //计算总价
        setcookie($(this));
    });


    $('.cartNum input').on('input', function() {
        let $reg = /^\d+$/g; //只能输入数字
        let $value = $(this).val();
        if (!$reg.test($value)) { //不是数字
            $(this).val(1);
        }
        $(this).parents('.cartList').find('.cartJs span').html(jsprice($(this)));
        jsallprice(); //计算总价
        setcookie($(this));
    });

     //计算单价
     function jsprice(obj) { //obj元素对象
         let $dj = parseFloat(obj.parents('.cartList').find('.cartPrice span').html());
         let $num = parseInt(obj.parents('.cartList').find('.cartNum input').val());
         return ($dj * $num).toFixed(2)
     }


     //将改变后的数量存放到cookie中
    let arrsid = []; //存储商品的编号。
    let arrnum = []; //存储商品的数量。
    function cookietoarray() {
        if ($.cookie('cookiesid') && $.cookie('cookienum')) {
            arrsid = $.cookie('cookiesid').split(','); //获取cookie 同时转换成数组。[1,2,3,4]
            arrnum = $.cookie('cookienum').split(','); //获取cookie 同时转换成数组。[12,13,14,15]
        } else {
            arrsid = [];
            arrnum = [];
        }
    }

    function setcookie(obj) {
        cookietoarray();
        let $goods_id = obj.parents('.cartList').find('img').attr('goods_id');
        arrnum[$.inArray($goods_id, arrsid)] = obj.parents('.cartList').find('.cartNum input').val();
        $.cookie('cookienum', arrnum, {expires:10});
    }


    //6.删除
    function delcookie(goods_id, arrsid) { //sid:当前删除的sid  arrsid:存放sid的数组[3,5,6,7]
        let $index = -1; //删除的索引位置
        $.each(arrsid, function(index, value) {
            if (goods_id === value) {
                $index = index;
            }
        });
        arrsid.splice($index, 1);
        arrnum.splice($index, 1);

        $.cookie('cookiesid', arrsid, { expires: 10, path: '/' });
        $.cookie('cookienum', arrnum, { expires: 10, path: '/' });
    }
    $('.Del').on('click', function() {
        cookietoarray();
        if (window.confirm('你确定要删除吗?')) {
            $(this).parents('.cartList').remove();
            delcookie($(this).parents('.cartList').find('img').attr('goods_id'), arrsid);
            jsallprice(); //计算总价
        }
    });

    $('.delOperation').on('click', function() {
        cookietoarray();
        if (window.confirm('你确定要全部删除吗?')) {
            $('.cartList:visible').each(function() {
                if ($(this).find(':checkbox').is(':checked')) { //判断复选框是否选中
                    $(this).remove();
                    delcookie($(this).find('img').attr('goods_id'), arrsid);
                }
            });
            jsallprice(); //计算总价
        }
    });
}(jQuery);