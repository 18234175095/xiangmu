window.onload=function(){
	var ym=document.getElementsByName("ym");
	var ym_nr=document.getElementsByClassName("ym_nr");
	for(var i=0;i<ym.length;i++){
		ym[i].index=i;
		ym[i].onclick=function(){
			for(var j=0;j<ym.length;j++){
				ym_nr[j].style.display="none";
			}
			ym_nr[this.index].style.display="block";
		}
	}
	
	var jibenyuanze=document.getElementsByClassName("jibenyuanze");
	var jbyz_jieshao=document.getElementsByClassName("jbyz_jieshao");
	for(var i=0;i<jibenyuanze.length;i++){
		jibenyuanze[i].index=i;
		jibenyuanze[i].onmouseover=function(){
			for(var j=0;j<jibenyuanze.length;j++){
				jibenyuanze[j].style.display="block";
				jbyz_jieshao[j].style.display="none";
			}
			jibenyuanze[this.index].style.display="none";
			jbyz_jieshao[this.index].style.display="block";
		}
	}
	var Cspan=document.getElementsByClassName("ymzc");
	var block=document.getElementsByClassName("nr");
	for(var i=0;i<Cspan.length;i++){   //通过循环进行遍历航号
		Cspan[i].index=i;   //定义了一个索引，用index属性对选项卡进行编号
		Cspan[i].onmouseover=function(){   //在遍历的过程中给导航添加事件
			for(var j=0;j<Cspan.length;j++){
				Cspan[j].id="";
				block[j].style.display="none";
			}
			this.id="ymzc";
			block[this.index].style.display="block";
		}
	}
	
	//品质如一
	var pzry=document.getElementById("pzry_rul1");
	var hd=pzry.getElementsByTagName("li");
	var js=document.getElementsByClassName("pzry_jieshao");
	var bian=document.getElementById("pzry_right");
	var move=0;
	var interval;
	var Zuo=document.getElementById("z");
	var You=document.getElementById("y");
	//鼠标移上去
	for(var i=0;i<hd.length;i++){
		hd[i].index=i;
		hd[i].onmouseover=function(){
			for(var j=0;j<hd.length;j++){
				hd[j].className="";
				js[j].style.display="none";
			}
			this.className="shichang";
			js[this.index].style.display="block";
	    }
    }
	//自动播放
	function moveR(){
		for(var j=0;j<hd.length;j++){
				hd[j].className="";
				js[j].style.display="none";
	    }
		move++;
		if(move>hd.length-1){
		move=0;
	   }  
		hd[move].className="shichang";
		js[move].style.display="block";
	}
	interval=setInterval(moveR,2000);              //定时器
	bian.onmouseover=function(){
		clearInterval(interval);
	}
	bian.onmouseout=function(){
		interval=setInterval(moveR,2000);
	}
	You.onclick=moveR;
	Zuo.onclick=function(){
		for(var j=0;j<hd.length;j++){
				hd[j].className="";
				js[j].style.display="none";
			}
		move--;
		if(move<0){
			move=hd.length-1;
		}
		hd[move].className="shichang";
		js[move].style.display="block";
	}
	
	
	
	
	
	
	
	
	
	
}
