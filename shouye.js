function getStyle(obj, attr) { //返回值带有单位px
  	if (obj.currentStyle) {
  		return obj.currentStyle[attr];
  	} else {
  		return getComputedStyle(obj, null)[attr];
  	}
  }

  function animate(obj, json, callback) {
  	clearInterval(obj.timer);
  	obj.timer = setInterval(function () {
  		var flag = true;
  		for (var attr in json) {
  			(function (attr) {
  				if (attr == "opacity") {
  					var now = parseInt(getStyle(obj, attr) * 100);
  					var dest = json[attr] * 100;
  				} else {
  					var now = parseInt(getStyle(obj, attr));
  					var dest = json[attr];
  				}
  				var speed = (dest - now) / 6;
  				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
  				if (now != dest) {
  					flag = false;
  					if (attr == "opacity") {
  						obj.style[attr] = (now + speed) / 100;
  					} else {
  						obj.style[attr] = now + speed + "px";
  					}
  				}
  			})(attr);
  		}
  		if (flag) {
  			clearInterval(obj.timer);
  			callback && callback(); //如果回调函数存在，就调用回调函数
  		}
  	}, 30);
  }
  window.onload=function(){
  //轮播图
    var medium3 = document.getElementById('medium3');
    var slider = document.getElementById('slider');
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var oNavlist = document.getElementById('nav').children;
    var index = 1; //打开页面生效的图片的下标为1
    var timer;
    var isMoving = false;
    medium3.onmouseover = function () {
      animate(left, {opacity: 0.6})
      animate(right, {opacity: 0.6})
      clearInterval(timer); //图片停止滚动
    }
    medium3.onmouseout = function () {
      animate(left, {opacity: 0})
      animate(right, {opacity: 0})
      timer = setInterval(next, 3000); //图片开始接着滚动
    }
    right.onclick = next;
    left.onclick = prev;

    function next() {
      if (isMoving) {
        return;
      }
      isMoving = true;
      index++;
      navmove();
      animate(slider, {left: -810 * index}, function(){
        if (index == 6) {
          slider.style.left = '-1200px';
          index = 1;
        }
        isMoving = false;
      });
    }
    function prev() {
      if (isMoving) {
        return;
      }
      isMoving = true;
      index--;
      navmove();
      animate(slider, {left: -810 * index}, function(){
        if (index == 0) {
          slider.style.left = '-6000px';
          index = 5;
        }
        isMoving = false;
      });
    }
    //按钮点击切换事件
    for (var i = 0; i < oNavlist.length; i++) {
      oNavlist[i].index = i;
      oNavlist[i].onclick = function () {
        index = this.index + 1;
        navmove();
        animate(slider, {left: -810 * index});
      }
    }
    //图片切换时按钮样式跟着切换
    function navmove() {
      for (var i = 0; i < oNavlist.length; i++) {
        oNavlist[i].className = "";
      }
      if (index > 5) {
        oNavlist[0].className = "active";
      } else if (index <= 0) {
        oNavlist[4].className = "active";
      } else {
        oNavlist[index - 1].className = "active";
      }
    }
    //页面打开时自动滚动切换
    timer = setInterval(next, 3000);
  //话费充值
    var op=document.getElementById("op");
    var option1=document.createElement("option");
    option1.innerHTML="50";
    op.appendChild(option1);
    var option2=document.createElement("option");
    option2.innerHTML="100";
    op.appendChild(option2);
    var money=document.getElementById("money");

    op.onchange=function(){
      money.innerHTML=op.value;
    }
  //帮帮快讯滚动
        //ul动起来
        var ul = document.getElementById("medium4-2-0");
        console.log(ul.getBoundingClientRect());
        console.log(ul.offsetHeight);
        console.log(ul.offsetWidth);
        console.log(ul.offsetLeft);
        console.log(ul.offsetTop);

        function show() {
            var top = ul.offsetTop - 1; //获取left值//值变小向左走，-1，-100可以调整走的距离
            ul.style.top = top + "px"; //设置left值
            //走完一半再返回
            if (-1 * ul.offsetTop >= ul.offsetHeight / 2) {
                ul.style.top = 0;
            }
        }
        var t = setInterval(show, 10);//调整轮播速度
        //li添加鼠标移入移出事件
        var li = document.getElementsByTagName("medium4-2-1");
        for (var i = 0; i < li.length; i++) {
            //移出事件
            li[i].onmouseout = function () {
                //不能加 var
                t = setInterval(show,10);
            };
            //移入事件
            li[i].onmouseover = function () {
                clearInterval(t);
            };
        }
  //顶部悬浮
    var cover=document.getElementById("top");
    window.onscroll=function(){
      console.log("gundong");
      var st=document.documentElement.scrollTop||document.body.scrollTop;

      if(st>40){
        cover.style.position="fixed";
      }else{
        cover.style.position="static";
      }
    }
  }