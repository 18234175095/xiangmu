 
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
////alert(Nav.length);
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
/*************************产品全方位*******************************/

var Left_top=document.getElementById('left_top');

var Left_down=document.getElementById('imgmin');
var Imgmin=Left_down.getElementsByTagName("img");

var Left_down2=document.getElementById("imgminb");
var Imgmin2=Left_down2.getElementsByTagName("img");

var ImgMax=Left_top.getElementsByTagName("img");

//alert(ImgMax.length);

var Left=document.getElementById("zuo");
var Right=document.getElementById("you");

Left_down.style.display='none';
Left.style.display='none';

	for(var i=0;i<ImgMax.length;i++){
		ImgMax[i].style.display="none";
		
	}
   ImgMax[0].style.display="block";



for(var i=0;i<Imgmin2.length;i++){
		Imgmin2[i].index=i;
		Imgmin2[i].onmousemove=function(){
			for(var j=0;j<Imgmin2.length;j++){
				ImgMax[j].style.display="none";
				ImgMax[j].className="";
				Imgmin2[j].style.opacity="1";
//				Imgmin2[j].style.border="0px solid #dddddd";
				  }	
			
			ImgMax[this.index].style.display="block";
			this.style.opacity="0.8";
//			this.style.border="1px solid #dddddd";
		}
		
	}
for(var i=0;i<Imgmin.length;i++){
		Imgmin[i].index=i;
		Imgmin[i].onmousemove=function(){			
			for(var j=0;j<6;j++){				
				ImgMax[j].style.display="none";					
				  }	
			for(var j=0;j<5;j++){								
				Imgmin[j].style.opacity="1";
//				Imgmin[j].style.border="0px solid #dddddd";
				  }		  
			ImgMax[this.index+1].style.display="block";
			this.style.opacity="0.8";
//			this.style.border="1px solid #dddddd";
		}		
	}


Left.onclick=function(){
Left_down.style.display='none';
Left_down2.style.display='block';
Left.style.display='none';
Right.style.display='block';
Left_down2.style.marginLeft='48px';

}

Right.onclick=function(){
Left_down.style.display='block';
Left_down2.style.display='none';
Left.style.display='block';
Right.style.display='none';

}





//for(var i=0;i<ImgMax.length;i++){
//		ImgMax[i].index=i;
//		ImgMax[i].onmousemove=function(){
//			for(var j=0;j<ImgMax.length;j++){
////				ImgMax[j].style.border="0px solid #dddddd";							
//				 }				
//			this.style.border="1px solid #dddddd";
//			
//		}	
//		ImgMax[i].onmouseout=function(){
//			for(var j=0;j<ImgMax.length;j++){
////				ImgMax[j].style.border="0px solid #dddddd";	
//				
//				}							
//		}		
//	}
/*************************************************************/
/*******************产品套餐**********************/
var Fenlei=document.getElementById("fenlei");
var Span=Fenlei.getElementsByTagName("span");
var Plus=document.getElementById("plus");
var Minus=document.getElementById("minus");
var Var=document.getElementById('val');
for(var j=0;j<Span.length;j++){
				Span[j].style.borderColor="#dddddd";
				Span[1].style.borderColor="red";
				Span[0].style.border="0";
				 }			
for(var i=0;i<Span.length;i++){
	Span[i].index=i;
		Span[i].onclick=function(){
			for(var j=0;j<Span.length;j++){
				Span[j].style.borderColor="#dddddd";
				//Span[1].style.borderColor="red";
				Span[0].style.border="0";
				 }				
			this.style.border="1px solid red";
			//Span[1].style.borderColor="red";
			Span[0].style.border="0";
		}			
}

var Num=0;Var.value=1;
Plus.onclick=function(){
	Num++;if(Num>3){alert("超出购买限制");Num=3;}
	Var.value=Num;
}
Minus.onclick=function(){
	Num--;
	if(Num<1)Num=1;
	Var.value=Num;
}
/*****************************************/
/*******************倒计时**********************/
var endDate=new Date(2016,08,20,10,00,00);//年月日时分秒，月要减去1
 var Time=document.getElementById('daotime');
function daoJiShi()
{
	 var now=new Date();
	 var oft=Math.round((endDate-now)/1000);
	 var ofd=parseInt(oft/3600/24);
	 var ofh=parseInt((oft%(3600*24))/3600);
	 var ofm=parseInt((oft%3600)/60);
	 var ofs=oft%60;
	
	 Time.innerHTML='距离抢购还剩： '+ofd+' 天 ' +ofh+ ' 小时 ' +ofm+ ' 分钟 ' +ofs+ ' 秒';
	 if(ofs<0){
	 	Time.innerHTML='抢购结束！';
	 }

}
setInterval(daoJiShi,500);
/*****************************************/
var Jia=document.getElementById("xiangqinga");
	window.onscroll=function(){//控制左右显示函数
	var scrollT=document.documentElement.scrollTop||document.body.scrollTop;
		if(scrollT>1000)
		{
			Jia.style.display="block";
		}else{
			Jia.style.display="none"
		}
	
	}
/************************/
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
/*******************************************/
}
