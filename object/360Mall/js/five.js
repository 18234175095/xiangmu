 
 function text()
{
/**********************顶部菜单************************/
	var Tcaidan=document.getElementById("tcaidan");
	var A=Tcaidan.getElementsByTagName("a");
	//alert(Li.length);	
	
	for(var i=0;i<A.length;i++){
		A[i].index=i;
		A[i].onmousemove=function(){
			//A[0].style.color='green';
			for(var j=0;j<A.length;j++){
				 A[j].style.color='';
				  	}	
			this.style.color="green";
		}
		A[i].onmouseout=function(){
			//A[0].style.color='green';
			for(var j=0;j<A.length;j++){
				 A[j].style.color='';
				  }				
		}		
	}
/**********************************************/

/********************导航菜单**************************/
var Daohang=document.getElementById("daohang");
var Menu=Daohang.getElementsByTagName("a");

//alert(Menu.length);
for(var i=0;i<Menu.length;i++){
		Menu[i].index=i;
		Menu[i].onmousemove=function(){
			//A[0].style.color='green';
			for(var j=0;j<A.length;j++){
				 Menu[j].style.color='';
				  	}	
			this.style.color="#4ea601";
		}
	
	 Menu[i].onmouseout=function(){
			//A[0].style.color='green';
			for(var j=0;j<Menu.length;j++){
				 Menu[j].style.color='';
				  }				
		}		
	
	}
 /***************************************************/
/*************************nav**************************/
//var Nav=Daohang.getElementsByClassName("nav");
//var Nav = getClassNames('nav' , 'div'); 
//function getClassNames(classStr,tagName){ 
//if (document.getElementsByClassName) { 
//return document.getElementsByClassName(classStr) 
//}else { 
//var nodes = document.getElementsByTagName(tagName),ret = []; 
//for(i = 0; i < nodes.length; i++) { 
//if(hasClass(nodes[i],classStr)){ 
//ret.push(nodes[i]) 
//} 
//} 
//return ret; 
//} 
//} 
//function hasClass(tagStr,classStr){ 
//var arr=tagStr.className.split(/\s+/ ); //这个正则表达式是因为class可以有多个,判断是否包含 
//for (var i=0;i<arr.length;i++){ 
//if (arr[i]==classStr){ 
//return true ; 
//} 
//} 
//return false ; 
//} 
////alert(Nav.length);
//
//
//
//for(var i=0;i<5;i++){
//		Menu[i+1].index=i;
//		Menu[i+1].onmousemove=function(){
//			//A[0].style.color='green';
//			for(var j=0;j<5;j++){
//				 //Menu[j].style.color='';
//				 Nav[j].style.display="none";
//				  	}	
//			//this.style.color="#4ea601";
//			Nav[this.index].style.display="block";
//		}
//	
//	Menu[i+1].onmouseout=function(){
//			//A[0].style.color='green';
//			for(var j=0;j<5;j++){
//				 //Menu[j].style.color='';
//				 Nav[j].style.display="none";
//				  }				
//		}		
//	
//	}
/*************************nav*end************************/



/**********************************************************************************/

//var Matter_inner = getClassNames('matter_inner' , 'div'); 
//function getClassNames(classStr,tagName){ 
//if (document.getElementsByClassName) { 
//return document.getElementsByClassName(classStr) 
//}else { 
//var nodes = document.getElementsByTagName(tagName),ret = []; 
//for(i = 0; i < nodes.length; i++) { 
//if(hasClass(nodes[i],classStr)){ 
//ret.push(nodes[i]) 
//} 
//} 
//return ret; 
//} 
//} 
//function hasClass(tagStr,classStr){ 
//var arr=tagStr.className.split(/\s+/ ); //这个正则表达式是因为class可以有多个,判断是否包含 
//for (var i=0;i<arr.length;i++){ 
//if (arr[i]==classStr){ 
//return true ; 
//} 
//} 
//return false ; 
//} 
/******************/


/**********************************************************************************/
var Img=document.getElementById("banner_img");
var Dian=document.getElementById('dian');
var Span=Dian.getElementsByTagName("span");
var Zuo=document.getElementById('zuo1');
var You=document.getElementById("you1");

var Bann=document.getElementById("banner");


var flag=true;
Zuo.onclick=function(){
	if(flag==true){	
	Img.src="img/five/baby_1.png";
	Span[1].style.background='#adb3bb'
	Span[0].style.background=''
	}
	else {
		Img.src="img/five/baby_2.png";
		Span[0].style.background='#adb3bb'
		Span[1].style.background=''
	}
	flag=!flag;
}
You.onclick=function(){
	moveR();
}
function moveR(){
	if(flag==true){	
	Img.src="img/five/baby_2.png";
	Span[1].style.background='#adb3bb'
	Span[0].style.background=''
	}
	else {
		Img.src="img/five/baby_1.png";
		Span[0].style.background='#adb3bb'
		Span[1].style.background=''
	}
	flag=!flag;
}
ban=setInterval(moveR,2000);
Bann.onmouseover=function(){
	clearInterval(ban);
}
Bann.onmouseout=function(){
	ban=setInterval(moveR,2000);
}
Span[0].onmouseover=function(){
	Img.src="img/five/baby_2.png";
	Span[1].style.background='#adb3bb'
	Span[0].style.background=''
}
Span[1].onmouseover=function(){
	Img.src="img/five/baby_1.png";
		Span[0].style.background='#adb3bb'
		Span[1].style.background=''
}
/**********************************************************************************/
var speed=30;
var Down=document.getElementById("down");
var Tr=document.getElementsByTagName("tr");
var Demo1=document.getElementById("demo1");
var Demo2=document.getElementById("demo2");


for(var i=0;i<Tr.length;i++){
	if(i%2==0)Tr[i].style.background="#fbfbfb";
}



//demo2.innerHTML=demo1.innerHTML;//克隆demo1为demo2
function Marquee(){
if(demo2.offsetHeight-Down.scrollTop<=0)//当滚动至demo1与demo2交界时
	Down.scrollTop-=demo1.offsetHeight;//demo跳到最顶端
	else{
	Down.scrollTop++;
	}
}

var MyMar=setInterval(Marquee,speed);//设置定时器
Down.onmouseover=function(){clearInterval(MyMar);}//鼠标移上时清除定时器达到滚动停止的目的
Down.onmouseout=function(){MyMar=setInterval(Marquee,speed);}//鼠标移开时重设定时器

/*****************************************/
var Weixin=document.getElementById("weixin");
var Weixin_img=document.getElementById("weixin_img");
Weixin.onmouseover=function(){
	Weixin_img.style.display="block";
}
Weixin.onmouseout=function(){
	Weixin_img.style.display="none";
}

var Xinlang=document.getElementById("xinlang");
var Xinlang_img=document.getElementById("xinlang_img");
Xinlang.onmouseover=function(){
	Xinlang_img.style.display="block";
}
Xinlang.onmouseout=function(){
	Xinlang_img.style.display="none";
}
/****************************************8*/
}
