function login(){
	var Name=document.getElementById("name");
	var Pass=document.getElementById("pass");
	
	var User=document.getElementById("user");
	var Password=document.getElementById("passwor");
	var Yanz=document.getElementById("yanzheng");
	var Tishi=document.getElementById("tishi");
	var Submit=document.getElementById("submit");
	
	Submit.onclick=function(){
		if((Password.value==""||Password.value!=="none")&&(User.value!=""||User.value!="none"))
		Tishi.innerHTML="请输入正确的用户名和密码";		
	}
	
		
	User.onfocus=function(){
		Name.style.borderColor="green";
	}
	
	User.onblur=function(){
		Name.style.borderColor="";
	}
	
	Password.onfocus=function(){
		Pass.style.borderColor="green";
	}
	Password.onblur=function(){
		Pass.style.borderColor="";
		if((Password.value!="")&&(User.value!=""))
		Yanz.style.display="block";
		
	}
	
	
	
	var Zhaohui=document.getElementById("zhaohui");
	var Zhuce=document.getElementById("zhuce");
	
	Zhaohui.onmouseover=function(){
	Zhaohui.style.color="#15AE2F";

	} 
	Zhaohui.onmouseout=function(){
	Zhaohui.style.color="#7a7e80";
	}
	
	
	Zhuce.onmouseover=function(){
	Zhuce.style.color="#15AE2F";

	} 
	Zhuce.onmouseout=function(){
	Zhuce.style.color="#7a7e80";
	}
	
	
	
	
	
	
	
	
	var A=document.getElementById("pca");
	var F=document.getElementById("pcf");
	var C=document.getElementById('pcc');
	var D=document.getElementById('pcd');
	var E=document.getElementById('pce');
	
	A.onmouseover=function(){
	A.src="img/denglu/xinlang (1).png";		
	}
	A.onmouseout=function(){
	A.src="img/denglu/xinlang (2).png";		
	}
	
	F.onmouseover=function(){
	F.src="img/denglu/renren (1).png";		
	}
	F.onmouseout=function(){
	F.src="img/denglu/renren (2).png";		
	}
	
	C.onmouseover=function(){
	C.src="img/denglu/tianyi (1).png";	
	}
	C.onmouseout=function(){
	C.src="img/denglu/tianyi (2).png";		
	}
	
	D.onmouseover=function(){
	D.src="img/denglu/qq.png";		
	}
	D.onmouseout=function(){
	D.src="img/denglu/qq(1).png";		
	}
	
	
	E.onmouseover=function(){
	E.src="img/denglu/weixin (2).png";		
	}
	E.onmouseout=function(){
	E.src="img/denglu/weixin (1).png";		
	}
	
	
	
	
	
	var Bottomd=document.getElementById("bottomd");
	var Div=Bottomd.getElementsByTagName("div");
	var P=Bottomd.getElementsByTagName("p");
	var B=Bottomd.getElementsByTagName("b");
	var Imga=document.getElementById("shensu");
	var Imgb=document.getElementById("bangzhu");
	var Imgc=document.getElementById("zhaohuimima");
	var Imgd=document.getElementById("anquan");
	
	for(var i=0;i<Div.length;i++){
		Div[i].index=i;
		Div[i].onmouseover=function(){
			for(var j=0;j<Div.length;j++){
				Div[j].style.borderColor="#c3c3c3";
				P[j].style.color="#666666";
				B[j].style.color="#a1a1a1";
			}	
			this.style.borderColor="#11cd6e";
			P[this.index].style.color="#11cd6e";
			B[this.index].style.color="#11cd6e";
			var k=this.index;
			switch(k){
				case 0:Imga.src="img/denglu/shensu (1).png";break;
				case 1:Imgb.src="img/denglu/sousuo (1).png";break;
				case 2:Imgc.src="img/denglu/duanxin (1).png";break;
				case 3:Imgd.src="img/denglu/suo (1).png";break;
			}
		}	
		
		Div[i].onmouseout=function(){
			for(var j=0;j<Div.length;j++){
				Div[j].style.borderColor="#c3c3c3";
				P[j].style.color="#666666";
				B[j].style.color="#a1a1a1";
			}
			Imga.src="img/denglu/shensu (2).png";
			Imgb.src="img/denglu/sousuo (2).png";
			Imgc.src="img/denglu/duanxin (2).png";
			Imgd.src="img/denglu/suo (2).png";
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
 