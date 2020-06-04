//轮播
! function($) {
    const $lunbo = $('.lunbo');
    const $picul = $('.lunbo ul');
    const $picli = $picul.children(); //5个
    const $btnli = $('.lunbo ol li'); //5小圆圈按钮
    const $leftarrow = $('.left');
    const $rightarrow = $('.right');
    let $index = 0; //存放索引
    let $timer = null;
    //1.改变布局。
    let $clonebox = $picli.first().clone(true, true); //克隆
    let $liwidth = $picli.eq(0).width(); //追加
    $picul.append($clonebox).css({
        width: $picul.children().length * $liwidth
    });
    //2.点击小圆圈按钮，图片位置发生变化。
    $btnli.on('click', function() {
        $index = $(this).index() - 1; //存储当前的索引 -1代表切换过程里面$index++;
  
        tabswitch();
    });
    //3.显示左右箭头
    $lunbo.hover(function() {
        $leftarrow.show();
        $rightarrow.show();
        clearInterval($timer)
    }, function() {
        $leftarrow.hide();
        $rightarrow.hide();
        $timer = setInterval(() => {
            tabswitch();
        }, 2000);
    });
    //4.箭头添加点击事件
    $rightarrow.on('click', function() {
        tabswitch();
    });
    $leftarrow.on('click', function() {
        $index -= 2; //本身-1，下面切换过程+1，总的-2
        tabswitch();
    });
    //切换过程，位置过程，封装出来。
    function tabswitch() {
        $index++;
        if ($index === $btnli.length + 1) { //鼠标右箭头
            $picul.css({
                left: 0
            });
            $index = 1;
        }
        if ($index === -1) { //鼠标左箭头
            $picul.css({
                left: -$btnli.length * $liwidth
            });
            $index = $btnli.length - 1; //4
        }
        if ($index === $btnli.length) { //添加类
            $btnli.eq(0).addClass('active1').siblings('ol li').removeClass('active1');
        } else {
            $btnli.eq($index).addClass('active1').siblings('ol li').removeClass('active1');
        }
        $picul.stop(true).animate({
            left: -$liwidth * $index
        });
    }
  
    $timer = setInterval(() => {
        // $rightarrow.click();
        tabswitch();
    }, 2000);
  
  
  }(jQuery);