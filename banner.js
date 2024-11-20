var box = document.getElementById("box");
        var pics = document.getElementById("pics");
        var sub = document.getElementById("sub");
        var imgs = pics.children;
        var subs = sub.children;
        var btnl = document.getElementById("left-btn");
        var btnr = document.getElementById("right-btn");
        
        // 全局信号量，存储的是要展示的图片所在li的下标
        var n = 0;
        //1 右按钮点击切换
        btnr.onclick =rightRun;

        //2 左按钮同理
        btnl.onclick = function(){
            n --; 
            //判断n是否超过最大下标，若是，就要从第一张换到最后一张切
            if(n < 0){
               // 第一张切换最后一张图片
            n = imgs.length-1;
                
            }
            //调用切换函数
            change();
            
        }
        
        //3 小圆点点击切换
        for(var i = 0;i < subs.length;i ++){
            // 存储自己的下标
            subs[i].index = i;
            // 添加点击事件
            subs[i].onclick = function(){
            n = this.index;
            //调用切换函数
            change();

            };
        };

        //4 定时轮播,这里定时器里的方法直接使用已经写好的切换下一张图片的方法
        var timer = setInterval(rightRun,2000);

        //5 鼠标移上轮播图 停止轮播
        box.onmouseover = function(){
            clearInterval(timer);
        }

        //6 鼠标离开轮播图 重新开启
        box.onmouseout = function(){
            timer = setInterval(rightRun,2000);
        }
        //定义右按钮式事件
        function rightRun(){
            // 下标自加
            n ++; 
            //判断n是否超过最大下标，若是，就要从最后一张切换到第一张
            if(n > imgs.length-1){
            // 最后一张图片切换第一张
            n = 0;
            }
             //调用切换函数
            change();
        }

        //定义切换函数
        function change(){
            
            //排他一下
            for(var i = 0;i < imgs.length;i ++){
                imgs[i].className = ""; 
                subs[i].className = "";
            }
            //保留自己
            imgs[n].className = "current";
            subs[n].className = "current";
        }