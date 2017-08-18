function text(){
	
var Souimg=document.getElementById("soimg");

	Souimg.onclick=function(){
		Souimg.src="img/seven/shequ_sousuo.png";
		setTimeout(sleep,200);
	}
function sleep(){
	Souimg.src="img/seven/shequ_sousuo1.png";
}
	
/********************banner********************/

var Pic=document.getElementById("pic");
var Img=Pic.getElementsByTagName("img");
Img[1].style.display='none';
Img[2].style.display='none';
Img[3].style.display='none';

var Cspan=document.getElementById("dian");
var Span=Cspan.getElementsByTagName('span');

			for(var i=0;i<Span.length;i++){
				Span[i].index=i;			
				Span[i].onmousemove=function(){					
													  	
				  	for(var j=0;j<Span.length;j++){
				  	Span[j].style.background="#9d978b";
				  	Img[j].style.display="none";
				  	}				
					this.style.background="#ffffff";
				  	Img[this.index].style.display="block";	
					}					
			}		

		var move=0;
		function moveR(){
				for(var j=0;j<Span.length;j++){
				  	Span[j].style.background="#9d978b";
				  	Img[j].style.display="none";
				  	}
				move++;
				if(move>Span.length-1)move=0;
					Span[move].style.background="#ffffff";
				  	Img[move].style.display="block";
			}
			Clear=setInterval(moveR,2000);
  
  var Banner=document.getElementById("banner");
  		Banner.onmouseover=function(){	
			clearInterval(Clear);
		}	
		Banner.onmouseout=function(){
			Clear=setInterval(moveR,1500);
		}
  
  
  
 var Z=document.getElementById('zuo');
 var Y=document.getElementById("you");
  
  		Z.onclick=function(){
				for(var j=0;j<Span.length;j++){
				  	Span[j].style.background="#9d978b";
				  	Img[j].style.display="none";
				  	}
				move--;
				if(move<0)move=Span.length-1;
					Span[move].style.background="#ffffff";
				  	Img[move].style.display="block";
			}
		
		Y.onclick=moveR;


/**********************************************/	
/**********************分享************************/	
var FX = getClassNames('fx' , 'div'); 
function getClassNames(classStr,tagName){ 
if (document.getElementsByClassName) { 
return document.getElementsByClassName(classStr) 
}else { 
var nodes = document.getElementsByTagName(tagName),ret = []; 
for(i = 0; i < nodes.length; i++) { 
if(hasClass(nodes[i],classStr)){ 
ret.push(nodes[i]) 
} 
} 
return ret; 
} 
} 
function hasClass(tagStr,classStr){ 
var arr=tagStr.className.split(/\s+/ ); //这个正则表达式是因为class可以有多个,判断是否包含 
for (var i=0;i<arr.length;i++){ 
if (arr[i]==classStr){ 
return true ; 
} 
} 
return false ; 
} 
/******************/

/******************/
var Fenxiang= getClassNames('fenxiang' , 'div'); 
function getClassNames(classStr,tagName){ 
if (document.getElementsByClassName) { 
return document.getElementsByClassName(classStr) 
}else { 
var nodes = document.getElementsByTagName(tagName),ret = []; 
for(i = 0; i < nodes.length; i++) { 
if(hasClass(nodes[i],classStr)){ 
ret.push(nodes[i]) 
} 
} 
return ret; 
} 
} 
function hasClass(tagStr,classStr){ 
var arr=tagStr.className.split(/\s+/ ); //这个正则表达式是因为class可以有多个,判断是否包含 
for (var i=0;i<arr.length;i++){ 
if (arr[i]==classStr){ 
return true ; 
} 
} 
return false ; 
} 
/*********************************************/
var s=0

for(var i=0;i<FX.length;i++){
	Fenxiang[i].index = i;
	s = this.index;
	Fenxiang[i].onmouseover = function() {
		FX[this.index].src = "img/seven/fenxiang1.png";
//		QQ[this.index].style.display = 'block';
		Fenxiang[this.index].onmouseout = function() {
			for(var i = 0; i < FX.length; i++) {
//				QQ[i].style.display = 'none';
				FX[i].src = "img/seven/fenxiang.png";
	
			}
	
		}
	}
}


/**********************分享************************/	
	var Day=document.getElementById('Day');
	var day=document.getElementById('day');
	var date=new Date();/*时间对象*/
	var riqi;
	riqi=date.getMonth()+1+"."+date.getDate();
	
	Day.innerHTML=riqi;
//			document.write(date.getFullYear()+"年")
//			document.write(date.getMonth()+1+"月");
//			document.write(date.getDate()+"日");
//			document.write("星期" +date.getDay()+" <br /> ");
			switch(date.getDay()){
				case 1:day.innerHTML="星期一";break;				
				case 2:day.innerHTML="星期二";break;	
				case 3:day.innerHTML="星期三";break;	
				case 4:day.innerHTML="星期四";break;	
				case 5:day.innerHTML="星期五";break;	
				case 6:day.innerHTML="星期六";break;	
				case 7:day.innerHTML="星期日";break;	
			}
			
//			document.write(date.getHours()+"点");
//			document.write(date.getMinutes()+"分");			
//			document.write(date.getSeconds()+"秒");
	
	
	
/*--------------------------------------*/	
}
