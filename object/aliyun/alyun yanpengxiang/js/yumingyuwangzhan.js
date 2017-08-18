window.onload=function(){
	var banner=document.getElementById("banner");
	var yuan=document.getElementById("yuan")
	var hd=yuan.getElementsByTagName("input");
	var block=banner.getElementsByTagName("img");
	/*var bian=document.getElementById("banner");*/
	var move=0;
	var interval;
	//鼠标移上去
	for(var i=0;i<hd.length;i++){
		hd[i].index=i;
		hd[i].onmouseover=function(){
			for(var j=0;j<hd.length;j++){
				hd[j].id="";
				block[j].style.display="none";
			}
			this.id="b1";
			block[this.index].style.display="block";
	    }
    }
	//自动播放
	function moveR(){
		for(var j=0;j<hd.length;j++){
				hd[j].id="";
				block[j].style.display="none";
	    }
		move++;
		if(move>hd.length-1){
		move=0;
	   }  
		hd[move].id="b1";
		block[move].style.display="block";
	}
	interval=setInterval(moveR,1000);              //定时器
	banner.onmouseover=function(){
		clearInterval(interval);
	}
	banner.onmouseout=function(){
		interval=setInterval(moveR,1000);
		/*interval=intesetInterval(interval);*/
	}
	
	var gg=document.getElementsByClassName("gg");
	var move1=0;
	function fun(){
		for(var j=0;j<gg.length;j++){
			gg[j].style.display="none";
		}
		move1++;
		if(move1>gg.length-1){
			move1=0;
		}  
		gg[move1].style.display="block";
	}
	setInterval(fun,1000); 
	
	
	
	
	
	/*var daohang=document.getElementById("yyyjs_ul");
	var Cspan=daohang.getElementsByTagName("li");
	var block1=document.getElementsByClassName("yjs");
	for(var i=0;i<Cspan.length;i++){   //通过循环进行遍历航号
		Cspan[i].index=i;   //定义了一个索引，用index属性对选项卡进行编号
		Cspan[i].onmouseover=function(){   //在遍历的过程中给导航添加事件
			for(var j=0;j<Cspan.length;j++){
				Cspan[j].className="";
				block1[j].style.display="none";
			}
			this.className="active";
			block1[this.index].style.display="block";
		}
	}*/
	
	/*var jcfw=document.getElementsByClassName("jcfw");
	var jieshao=document.getElementsByClassName("jieshao");
	var hui=document.getElementsByClassName("hui");
	var orange=document.getElementsByClassName("orange");
	for(var i=0;i<jcfw.length;i++){
		jcfw[i].index=i;
		jcfw[i].onmouseover=function(){
			for(var j=0;j<jcfw.length;j++){
				jieshao[j].style.display="none";
				hui[j].style.display="block";
				orange[j].style.display="none";
			}
			hui[this.index].style.display="none";
			orange[this.index].style.display="block";
			jieshao[this.index].style.display="block";
		}
	}*/
}
$(function(){
	$(".jcfw").each(function(index){
		var i=index;
		$(this).hover(function(){
			$(".orange").eq(i).css("display","block");
			$(".hui").eq(i).css("display","none");
			$(".jieshao").eq(i).fadeIn(500);
			$(".jieshao").not($(".jieshao").eq(i)).css("display","none");
		},function(){
			$(".jieshao").eq(i).css("display","block");
			$(".orange").eq(i).css("display","none");
			$(".hui").eq(i).css("display","block");
		})
	})
	$("#yyyjs_ul li").each(function(index){
		$(this).mouseover(function(){
			$(".yjs").eq(index).fadeIn(500);
			$(".yjs").not($(".yjs").eq(index)).css("display","none");
		})
	})
	
	
})