 
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
/********************banner********************/

var Pic=document.getElementById("pic");
var Img=Pic.getElementsByTagName("img");
Img[0].style.display='block';

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
			Clear=setInterval(moveR,1500);
  
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

/**************************热销********************************/
//var Hout=document.getElementById("hout");
//var Himg=Hout.getElementsByTagName("img");
//
//for(var i=0;i<Himg.length;i++){
//		Himg[i].index=i;
//		Himg[i].onmousemove=function(){
//			//A[0].style.color='green';
//			for(var j=0;j<Himg.length;j++){				 				 
//				 Himg[j].style.opacity="1";				
//				  }				
//			Himg[this.index].style.opacity="0.8";			
//		}
//	
//	 Himg[i].onmouseout=function(){
//			//A[0].style.color='green';
//			for(var j=0;j<Himg.length;j++){				  
//				  Himg[j].style.opacity="1";				
//				  }					
//		}
//}
/**************************热销**end******************************/
//var Nav=Daohang.getElementsByClassName("nav");

/*****************************************************************************************************8*/
var Nav = getClassNames('nav' , 'div'); 
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
/**********************************************************************************************************/
//alert(Nav.length);
//var Scaidan=document.getElementById('scaidan');
//var Miu=Scaidan.getElementsByTagName("li");//alert(Miu.length);
//
//
//for(var i=0;i<5;i++){
//		Miu[i].index=i;
//		Miu[i].onmousemove=function(){
//			//A[0].style.color='green';
//			for(var j=0;j<5;j++){
//				 Miu[j].style.color='';
//				 Nav[j].style.display="none";
//				  	}	
//			this.style.color="#4ea601";
//			Nav[this.index].style.display="block";
//		}
//	
//	
//	}
//for(var i=0;i<5;i++){
//	Miu[i].index=i;
//	Miu[i].onmouseout=function(){
//			Nav[this.index].style.display="none";	 		
//			}
//}
 
/*************************nav*************************/

/*************************left mnue***************************/
//var Ldao=document.getElementById("leftmenu");
//var Li=Ldao.getElementsByTagName("li");
//var Lmenu=Ldao.getElementsByTagName("a");//alert(Lmenu.length);
//var Zuomenu=document.getElementById("zuomenu");
//var Menutwo=document.getElementById("menutwo");/*left mnue two***/
//var Tab=Menutwo.getElementsByTagName("table");/*left mnue two***/
////Tab[1].style.display="block";
////alert(Tab.length);
//for(var i=0;i<Lmenu.length;i++){
//		Li[i].index=i;
//		Li[i].onmousemove=function(){
//			//A[0].style.color='green';
//			for(var j=0;j<Lmenu.length;j++){
//				 Lmenu[j].style.color="";
//				 Li[j].style.background="";
//				 Tab[j].style.display="none";
//				  	}	
//			Lmenu[this.index].style.color="black";
//			Li[this.index].style.background="#e1e1e1";
//			Tab[this.index].style.display="block";
//		}
//	
//	 Zuomenu.onmouseout=function(){
//			
//			for(var j=0;j<Lmenu.length;j++){
//				 Lmenu[j].style.color="";
//				 Li[j].style.background="";
//				 Tab[j].style.display="none";
//			 }				
//		}		
//}
/********************/

	
 
/**************************left mnue end**************************/
/******************************产品放大模糊特效*******************************/
var Chanpin=document.getElementById("picture");
var Imgs=Chanpin.getElementsByTagName('img');


for(var i=0;i<Imgs.length;i++){
		Imgs[i].index=i;
		Imgs[i].onmousemove=function(){
			//A[0].style.color='green';
			for(var j=0;j<Imgs.length;j++){
				 Imgs[j].style.height="170px";
				 Imgs[j].style.marginBottom="20px";
				 Imgs[this.index].style.opacity="1";
				Imgs[5].style.height="";
				Imgs[15].style.height="";
				Imgs[30].style.height="";
				  	}	
			Imgs[this.index].style.height="190px";
			Imgs[this.index].style.marginBottom="0px";
			Imgs[this.index].style.opacity="0.8";
			Imgs[5].style.height="";
			Imgs[15].style.height="";
			Imgs[30].style.height="";
		}
	
	 Imgs[i].onmouseout=function(){
			//A[0].style.color='green';
			for(var j=0;j<Imgs.length;j++){
				  Imgs[j].style.height="170px";
				  Imgs[j].style.marginBottom="20px";
				  Imgs[this.index].style.opacity="1";
				Imgs[5].style.height="";
				Imgs[15].style.height="";
				Imgs[30].style.height="";
				  }					
		}
}

///****************************/
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
/*************************************************************/
}
