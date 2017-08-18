 
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
//
//
//
//for(var i=0;i<5;i++){
//		Menu[i+1].index=i;
//		Menu[i+1].onmousemove=function(){
//			//A[0].style.color='green';
//			for(var j=0;j<5;j++){
//				 Menu[j].style.color='';
//				 Nav[j].style.display="none";
//				  	}	
//			this.style.color="#4ea601";
//			Nav[this.index].style.display="block";
//		}
//	
//	Menu[i+1].onmouseout=function(){
//			//A[0].style.color='green';
//			for(var j=0;j<5;j++){
//				 Menu[j].style.color='';
//				 Nav[j].style.display="none";
//				  }				
//		}		
//	
//	}
/*************************nav*************************/
/*****************************************/
var Jia=document.getElementById("xiangqinga");
	window.onscroll=function(){//控制左右显示函数
	var scrollT=document.documentElement.scrollTop||document.body.scrollTop;
		if(scrollT>1000)
			Jia.style.display="block";					
		else
			Jia.style.display="none";			
	}

/*******************************************/

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
