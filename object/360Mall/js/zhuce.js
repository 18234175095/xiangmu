function zhuce(){
	var Phone=document.getElementById("phone");
	var Mmx=document.getElementById("mm");
	var Tell=document.getElementById("tell");
	var Pasword=document.getElementById("pasword");
	var Tdiv=document.getElementById("zhanghao");
	var Mdiv=document.getElementById("mima");
	var Sub=document.getElementById("submita");
	Tell.onfocus=function(){
		Tdiv.style.borderColor="#15AE2F";
	}
	Tell.onblur=function(){
		Tdiv.style.borderColor="";
		if(Tell.value==null||Tell.value=="")
				Phone.innerHTML="手机号为空";
				else if(!(/^1[3|4|5|7|8]\d{9}$/.test(Tell.value)))
				Phone.innerHTML="请输入正确的手机号";	
				else Phone.innerHTML="";								
	}
	
	Pasword.onfocus=function(){
		Mdiv.style.borderColor="#15AE2F";
	}
	
	Pasword.onblur=function(){			
		Mdiv.style.borderColor="";
				if(Pasword.value==null||Pasword.value=="")
				Mmx.innerHTML="输入的密码为空";
				else if(!(/^[A-Za-z0-9]+$/.test(Pasword.value)))
				Mmx.innerHTML="密码格式不正确";
				else Mmx.innerHTML="";
						
			}
	
	
	
	
	
	
	Sub.onclick=function(){
		if(Tell.value==null||Tell.value=="")
				Phone.innerHTML="手机号为空";
				else if(!(/^1[3|4|5|7|8]\d{9}$/.test(Tell.value)))
				Phone.innerHTML="请输入正确的手机号";	
				else Phone.innerHTML="";	
		if(Pasword.value==null||Pasword.value=="")
				Mmx.innerHTML="输入的密码为空";
				else if(!(/^[A-Za-z0-9]+$/.test(Pasword.value)))
				Mmx.innerHTML="密码格式不正确";
				else Mmx.innerHTML="";		
	}
	
	
	
/*-------------------------------------------*/	
}
