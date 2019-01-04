	window.onload=function(){
	//鼠标滑上添加购物车按钮实现背景颜色填充和文字变色
	var buy=document.getElementById("medium4-5-1");
	var buycar=document.getElementById("medium4-5-2");
	var mengzhao=document.getElementById("medium4-6");
	var cha=document.getElementById("medium4-6-1");
	var jixu=document.getElementById("medium4-6-3");
	buy.onmouseover=function(){
		buy.style.backgroundColor="#ff0754";
		buy.style.color="#fff";
	}
	buycar.onmouseover=function(){
		buycar.style.backgroundColor="#ff0754";
		buycar.style.color="#fff";
	}
	buy.onmouseout=function(){
		buy.style.backgroundColor="#fff";
		buy.style.color="#ff0754";
	}
	buycar.onmouseout=function(){
		buycar.style.backgroundColor="#fff";
		buycar.style.color="#ff0754";
	}
	buy.onclick=function(){
		alert("购买成功");
	}
	//点击添加购物车弹出蒙罩
	buycar.onclick=function(){
		mengzhao.style.display="block";
	}
	//点击叉号或者继续购物关闭蒙罩
	cha.onclick=function(){
		mengzhao.style.display="none";
	}
	jixu.onclick=function(){
		mengzhao.style.display="none";
	}

	//点击加减号实现数量增减
	var jian=document.getElementById("medium4-2-1-1");
	var shu=document.getElementById("medium4-2-1-2");
	var jia=document.getElementById("medium4-2-1-3");
	jian.onclick=function(){
		console.log("111");
		var shuzhi=parseInt(shu.innerHTML);
		shu.innerHTML=--shuzhi;
		if(shu.innerHTML<=1){
			shu.innerHTML=0;
		}
	}
	jia.onclick=function(){
		console.log("111");
		var shuzhi=parseInt(shu.innerHTML);
		shu.innerHTML=++shuzhi;
		if(shu.innerHTML>=5){
			shu.innerHTML=5;
		}
	}
	//点击150/200毫升，加上样式，选择的毫升数也随之变化
	var yiwu=document.getElementById("medium4-1-1");
	var erbai=document.getElementById("medium4-1-2");
	var xuanml=document.getElementById("medium4-4-1");
	yiwu.onclick=function(){
		yiwu.style.border="1px solid #ff0754";
		xuanml.innerHTML='"'+yiwu.innerHTML+'"';
		erbai.style.border="1px solid #fff";
		yiwu.setAttribute("class","xiagou");
		// erbai.setAttribute("class","");
		erbai.removeAttribute("class");
	}
	erbai.onclick=function(){
		erbai.style.border="1px solid #ff0754";
		xuanml.innerHTML='"'+erbai.innerHTML+'"';
		yiwu.style.border="1px solid #fff";
		erbai.setAttribute("class","xiagou");
		// yiwu.removeAttribute("class");											
		yiwu.removeAttribute("class");
	}

	//放大镜
		var smallimg = document.getElementById("medium2-2");
		var big = document.getElementById("big");
		var slider = document.getElementById("slider");
		var bigimg = document.getElementById("bigimg");
		var box = document.getElementById('box');
		smallimg.onmouseover = function () {
			slider.style.display = 'block';
			big.style.display = 'block';
		}
		smallimg.onmouseout = function () {
			slider.style.display = 'none';
			big.style.display = 'none';
		}
		smallimg.onmousemove = function (ev) {
			var ev = ev || window.event;//兼容多个浏览器的event参数模式
			//计算slider的位置
			var oL = ev.clientX - box.offsetLeft - slider.offsetWidth / 2;
			var oT = ev.clientY - box.offsetTop - slider.offsetHeight / 2;
			//设置边界处理，防止移出小图片
			var oMaxw = smallimg.offsetWidth - slider.offsetWidth;
			var oMaxh = smallimg.offsetHeight - slider.offsetHeight;
			
			if(oL<0){
				oL=0;
			}else if(oL>oMaxw){
				oL=oMaxw;
			}
			if(oT<0){
				oT=0;
			}else if(oT>oMaxh){
				oT=oMaxh;
			}
			 // oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
			 // oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;
			
			//把值赋值给放大镜
			slider.style.left = oL + 'px';
			slider.style.top = oT + 'px';
			//求其比值
			var scale = big.offsetWidth / slider.offsetWidth;
			bigimg.style.left = -scale * oL + 'px'
			bigimg.style.top = -scale * oT + 'px'
			//大图片和放大镜移动方向是相反的,所以是负号
		}
		//防晒图片切换放大
		var fangshai1=document.getElementById("fangshai1");
		var fangshai2=document.getElementById("fangshai2");
		var qiex=document.getElementById("medium2-1-1");
		fangshai1.onclick=function(){
			qiex.setAttribute("src","image/pp0.jpeg");
			bigimg.setAttribute("src","image/pp0.jpeg");
		}
		fangshai2.onclick=function(){
			qiex.setAttribute("src","image/pp1.jpeg");
			bigimg.setAttribute("src","image/pp1.jpeg");
		}
	}