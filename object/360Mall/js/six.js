
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
var Zanimg=document.getElementById("zanimg");
var Zannum=document.getElementById("zannum");
var z=485;
var fla=true;
Zanimg.onclick=function(){
	if(fla==true){
	z++;
	Zanimg.src="img/six/zan2.png";
	Zannum.innerHTML=z;	
	}
	else{
		z--;
		Zanimg.src="img/six/zan.png";
		 Zannum.innerHTML=z;
	 	
	}
	fla=!fla;
}

/********************************************/
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

/*****************************************/
}
