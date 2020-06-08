! function(window) {
    //插件的基本配置
    //插件的默认参数
    function Tab(option) { //option:配置参数
        this.settings = { //默认参数。
            id: '.indexTabBoxRight', //默认的选择器id
            type: 'onclick', //默认的事件
            autoplay: false, //是否自动轮播
            invoke: 0 //默认起始项   
        }
        this.option = option; //接收配置参数
        this.timer = null; //定时器
        this.index = null; //接收索引。
        this.init(); //初始化
    }

    Tab.prototype.init = function() {
        Object.assign(this.settings, this.option); //配置参数覆盖默认参数。
        //实现tab切换效果
        //监听的元素
        this.tab = document.querySelector(this.settings.id); //固定的
        this.tabtitle = this.tab.querySelector('.indexTabNewNav'); //固定的
        if (this.tabtitle.children.length > 1) {
            this.title = this.tabtitle.children; //非固定的
        } else {
            this.title = this.tabtitle.children[0].children; //非固定的
        }
        this.tabcontent = this.tab.querySelector('.indexTabCon'); //固定的
        this.items = this.tab.querySelectorAll('.indexTabCon li'); //固定的

        //设置其实位置
        if (this.settings.invoke && typeof this.settings.invoke === 'number' && this.settings.invoke >= 0) {
            this.settings.invoke = this.settings.invoke % this.title.length;
            this.index = this.settings.invoke; //2
            this.tabswitch();
        }
        for (let i = 0; i < this.title.length; i++) {
            if (this.settings.type === 'onclick' || this.settings.type !== 'onmouseover') {
                this.title[i].onclick = () => {
                    this.index = i;
                    this.tabswitch();
                }
            } else if (this.settings.type === 'onmouseover') {
                this.title[i].onmouseover = () => {
                    this.timer = setTimeout(() => {
                        this.index = i;
                        this.tabswitch();
                    }, 400);
                }
                this.title[i].onmouseout = () => {
                    clearInterval(this.timer);
                }
            }
        }
        //判断是否自动轮播
        let autotimer = 0;
        if (this.settings.autoplay === 'false' || this.settings.autoplay === false) {
            this.settings.autoplay = false;
        } else {
            this.settings.autoplay = true;
        }

        if (this.settings.autoplay) {
            autotimer = setInterval(() => {
                this.autoplay();
            }, 2000);
            this.tab.onmouseover = () => {
                clearInterval(autotimer);
            };
            this.tab.onmouseout = () => {
                autotimer = setInterval(() => {
                    this.autoplay();
                }, 2000);
            }
        }
    };

    //自动轮播
    Tab.prototype.autoplay = function() {
            this.index++;
            if (this.index > this.title.length - 1) {
                this.index = 0;
            }
            this.tabswitch();
        }
        //切换过程
    Tab.prototype.tabswitch = function() {
            for (let j = 0; j < this.title.length; j++) {
                this.removeclass(this.title[j], 'active');
                this.removeclass(this.items[j], 'show');
            }
            this.addclass(this.title[this.index], 'active');
            this.addclass(this.items[this.index], 'show');
        }
        //工具方法：封装添加类和删除类这两个方法
    Tab.prototype.addclass = function(element, cname) { //element:元素   cname:类名
        if (element instanceof NodeList) { //element多个元素  NodeList节点列表
            for (let i = 0; i < element.length; i++) {
                element[i].nodeType === 1 && (element[i].className += ' ' + cname + ' ');
            }
        } else if (element instanceof Node) { //element单个元素。 Node一个节点
            element.nodeType === 1 && (element.className += ' ' + cname + ' ');
        }
    };

    Tab.prototype.removeclass = function(element, cname) { //element:元素   cname:类名
        let arrclassname = element.className.split(' '); //box1 box2 box3 => ['box1','box2','box3']
        let index = -1; //初始化索引位置
        if (arrclassname.indexOf(cname) !== -1) { //判断
            index = arrclassname.indexOf(cname);
        }
        if (index >= 0) {
            arrclassname.splice(index, 1); //改变原数组。
        }
        return element.className = arrclassname.join(' '); //拼接赋值
    };

    window.Tab = Tab;

}(window);