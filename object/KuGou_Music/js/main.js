var fullscreen=function(){  
    elem=document.body;  
    if(elem.webkitRequestFullScreen){  
        elem.webkitRequestFullScreen();     
    }else if(elem.mozRequestFullScreen){  
        elem.mozRequestFullScreen();  
    }else if(elem.requestFullScreen){  
        elem.requestFullscreen();  
    }else if (elem.msRequestFullscreen) {
 	 	elem.msRequestFullscreen();
	}
    else{
        //浏览器不支持全屏API或已被禁用  
    }  
}  
var exitFullscreen=function(){  
    var elem=document;  
    if(elem.webkitCancelFullScreen){  
        elem.webkitCancelFullScreen();      
    }else if(elem.mozCancelFullScreen){  
        elem.mozCancelFullScreen();  
    }else if(elem.cancelFullScreen){  
        elem.cancelFullScreen();  
    }else if(elem.exitFullscreen){  
        elem.exitFullscreen();  
    }else if (elem.msExitFullscreen) {
      	elem.msExitFullscreen();
	}
    else{
        //浏览器不支持全屏API或已被禁用  
    }  
}  
$(function(){
	/*进入全屏*/
	$('#fullscreen').click(function(){
		fullscreen();
		var webWidth =window.screen.width;
		var webHeight =window.screen.height;
		$('.containter').width(webWidth).height(webHeight);
		$('#fullscreen').css('display','none');
		$('#exitFullscreen').css('display','block');
	})
	/*退出全屏*/
	$('#exitFullscreen').click(function(){
		exitFullscreen();
		$('.containter').width('100%').height('100%');
		$('#fullscreen').css('display','block');
		$('#exitFullscreen').css('display','none');
	})
	/*top菜单导航*/
	$(".left .top-nav li").each(function(index){
		$(this).click(function(){
			$(this).addClass('active').siblings().removeClass('active');
		})
	})
	/*列表导航*/
	var M_listtitle_flag=[true,true];
	$('.M_listtitle strong').each(function(index){
		$(this).click(function(){
			if(M_listtitle_flag[index]){
				$('.M_listtitle .sign-left').eq(index).css('display','none');
				$('.M_listtitle .sign-down').eq(index).show();
				$('.M_listinner').eq(index).stop();
				$('.M_listinner').eq(index).slideDown();
				M_listtitle_flag[index]=false;
			}else{
				$('.M_listtitle .sign-down').eq(index).css('display','none');
				$('.M_listtitle .sign-left').eq(index).show();
				$('.M_listinner').eq(index).stop();
				$('.M_listinner').eq(index).slideUp();
				M_listtitle_flag[index]=true;
			}
		})
	})
	var playname='';
	var playWtime=0;
	var vid=document.getElementById('audio1');
	$('.M_listinner ul li').dblclick(function(){
		$(this).addClass('active').siblings().removeClass('active');
		playname=$(this).text();
		$('audio').attr('src','musics/'+playname);
		play();
		$('.Music_name').text(playname);
//		playWtime=vid.duration;
//		console.log(playWtime);
		$('.kg-play').css('display','none');
		$('.kg-stop').css('display','block');
	})
	//播放
	function play(){
		vid.play();
	}
	//暂停
	function pause(){
		vid.pause();
	}
	/*窗口拖动*/
	var Controller=document.querySelector('#control');
	var Ico=document.querySelector('#ico');
	var Header=document.querySelector('#header');
	var Kugou=document.querySelector('.kugou');
//	drag(Ico);
	drag(Header);
	drag(Controller);
	/*启动kg*/
	var Start_flag=true;
	$('#ico').dblclick(function(){
		if(Start_flag){
			document.querySelector('#hello_kugou').play();
			kugouMax();
			$('.kugou').slideDown();
			Start_flag=false;
		}
	})
	/*关闭kg*/
	var Zoom_lnFlag=false;
	$('#close').click(function(){
		$('.alert-box').css('display','block');
		$('.alert').slideDown();
	})
	
	$('.close_kg').click(function(){
		$('.kugou').slideUp();
		Start_flag=true;
		$('.alert-box').css('display','none');
		pause();
	})
	$('.Zoom_ln').click(function(){
		$('.kugou').slideUp();
		$('#control').slideDown();
		$('.alert-box').css('display','none');
		Zoom_lnFlag=true;
	})
	$('#closeAlert').click(function(){
		$('.alert-box').css('display','none');
	})
	
	/*关闭kg*/
	/*大小模式切换*/
	$('#go_min').click(function(){
		$('.max').css('display','none');
		$('.min').css('display','block');
		$('.jindu').addClass('jindu-min');
		$('.kugou').css('width','308px');
		$('.kugou').css('background-size','325% 100%');
		$('.footer').css('height','80px');
		$('.article').css('height','515px');
	})
	$('#go_max').click(function(){
		kugouMax();
	})
	function kugouMax(){
		$('.jindu').removeClass('jindu-min');
		$('.max').css('display','block');
		$('.min').css('display','none');
		$('.kugou').css('width','1000px');
		$('.kugou').css('background-size','100% 100%');
		$('.footer').css('height','66px');
		$('.article').css('height','529px');
	}
	
	/*音乐切换*/
	$('.kg-play').click(function(){
		$('.kg-play').css('display','none');
		$('.kg-stop').css('display','block');
		play();
	})
	$('.kg-stop').click(function(){
		$('.kg-stop').css('display','none');
		$('.kg-play').css('display','block');
		pause();
	})
	/*音乐切换*/

	/*遥控器*/
	$('.open-control').click(function(){
		$('#control').slideDown();
	})
	$('#close_control').click(function(){
		if(Zoom_lnFlag){
			Start_flag=true;
		}
		$('#control').slideUp();
	})
	/*遥控器*/

	/*进度条拖动*/
	var Advance=document.querySelector('.progress_bar');
	move(Advance);
	function move(obj){
		var x=0;
		obj.onmousedown=function(e){
			e=e||window.event;
			x=$('.progress_bar').offset().left;
			var l = e.clientX-x+5;
			var	_width=parseInt(l/365*100);
			$('.progress-bar-inner').css('width',_width+'%');
			document.onmousemove=function(e){
				l = e.clientX-x+5;
				_width=parseInt(l/365*100);
				if(_width<0){
					_width=0;
				}else if(_width>100){
					_width=100;
				}
//				console.log(_width);
				$('.progress-bar-inner').css('width',_width+'%');
			}
			document.onmouseup=function(){
				document.onmousedown=null;
				document.onmousemove=null;
			}
		}
	}

	/*进度条拖动*/

/*窗口拖动*/
function drag(obj){
	var x=0,y=0;
	obj.onmousedown=function(e){
//		Zhuangtai.style.zIndex=10;
		e=e||window.event;
		x=e.clientX-obj.offsetLeft;
		y=e.clientY-obj.offsetTop;
			if(obj==Header){
				x=e.clientX-Kugou.offsetLeft;
				y=e.clientY-Kugou.offsetTop;
				var Kg_top=e.clientY-y+"px";
				var Kg_left=e.clientX-x+"px";
				Kugou.style.top=Kg_top;
				Kugou.style.left=Kg_left;
				Kugou.style.margin=0;
			}
		document.onmousemove=function(e){
			var l = e.clientX-x;
			var t = e.clientY-y;
			if(obj==Header){
				Kugou.style.left=l+"px";
				Kugou.style.top=t+"px";
			}else{
				obj.style.left=l+"px";
				obj.style.top=t+"px";
			}
		}
		document.onmouseup=function(){
			document.onmousedown=null;
			document.onmousemove=null;
		}
	}
}
/*窗口拖动 end*/

	
})



