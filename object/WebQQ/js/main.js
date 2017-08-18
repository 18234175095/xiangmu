window.onload=function(){
	

	/*X*/
	var god=document.getElementById("containter");
	var X=document.getElementById("X");
	var Containter=document.getElementById("tencent_qq");
	var All=document.getElementById("all");
	
	var Chatclassnumber=1;
	
	 
	/*换肤*/
	var HuanfuM=document.getElementById("huanfu");
	var Change_fu=document.getElementById("change_fu");	 /*换肤block*/
	Change_fu.onclick=function(){
		HuanfuM.style.display="block";
		HuanfuM.style.zIndex=100;
	}
	var XX=document.getElementById("xx");	 /*换肤X*/
	XX.onclick=function(){
		HuanfuM.style.display="none";
	}
//	var Chat=document.getElementById("chat"); 
	var Chatclass=document.getElementsByClassName("chat");/*聊天界面class*/
	
	var XXX=document.getElementsByClassName("xxx");	 /*聊天X*/
	var Qxchats=document.getElementsByClassName("quxiao");	
	
	closeChet();
	function closeChet(){
	for (var i=0;i<Chatclass.length;i++) {
		//alert(Send_length)
		XXX[i].index=i;
		XXX[i].onclick=function(){
		god.removeChild(Chatclass[this.index]);
		move();
		Sendchid();
		qxchats();
		Chatclassnumber=Chatclass.length;
		}
		Chatclassnumber=Chatclass.length;
	}
}
qxchats();
function qxchats(){
	for (var i=0;i<Chatclass.length;i++) {
		//alert(Send_length)
		Qxchats[i].index=i;
		Qxchats[i].onclick=function(){
		god.removeChild(Chatclass[this.index]);
		move();
		Sendchid();
		closeChet();
		}
	}
}
	 

	
	var Minus=document.getElementsByClassName("minus");	/*分组*/
	var minus_i=document.getElementsByClassName("fenzu")[0].getElementsByTagName("i");	/*分组三角*/
	var Fenzu=document.getElementsByClassName("fenzu_inn");/*li div*/
	
	var Inner=document.getElementsByClassName("fenzu");/*大类*/
	var Top_minu=document.getElementById("minu").getElementsByTagName("i");/*导航*/
	
	/*发消息*/
	var Send=document.getElementsByClassName("sendinn");
	var Chats=document.getElementsByClassName("input");
	
//	var flag=true;
/*导航*/

for(var i=0;i<Top_minu.length;i++){
	Top_minu[i].index=i;
	Top_minu[i].onclick=function(){
		for (var j=0;j<Top_minu.length;j++) {
			Inner[j].style.display="none";
			Top_minu[j].style.color="#b2b2b2";
		}
		this.style.color="#3f94d9";
		Inner[this.index].style.display='block';
	}
}
/*导航 end*/
/*分组*/
	var flag=new Array(Minus.length);
	for (var i=0;i<Minus.length;i++) {
		flag[i]=true;
	}
	for(var i=0;i<Minus.length;i++){
		Minus[i].index=i;
		Minus[i].onclick=function(){
			if(flag[this.index]){
				Fenzu[this.index].style.display="block";
				minus_i[this.index].innerHTML="&#xe613;";
				flag[this.index]=false;
			}
			else{
				Fenzu[this.index].style.display="none";
				minus_i[this.index].innerHTML="&#xe602;";
//				minus_i[this.index].style.color="#333333";
				flag[this.index]=true;
			}
		}	
	}
	/*分组end*/
	/*聊天*/
	var User_img;
	var User_name;
	var User_sin;
	var oo=0;
//	var LisFlag = new Array();   //先声明一维
//	for(var k=0;k<100;k++){        //一维长度为i,i为变量，可以根据实际情况改变  
// 		LisFlag[k]=new Array();    //声明二维，每一个一维数组里面的一个元素都是一个数组
//	}
//	for(var i=0;i<5;i++){
//		for (var j=0;j<10;j++) {
//			LisFlag=[i][j]=true;
//		}  
//	} 
//	alert(LisFlag[0][2]);  
	
//	var clear=0;
	for(var i=0;i<Fenzu.length;i++){
		Fenzu[i].index=i;
		Fenzu[i].onclick=function(){
			for (var j=0;j<Fenzu.length;j++) {
				var Lis=this.getElementsByTagName("li");				
				for ( var k=0;k<Lis.length;k++) {
					Lis[k].index2=k;
					Lis[k].ondblclick=function(){
						User_img=this.getElementsByTagName("img")[0].src;
						var imgs=User_img.split("/");
						var arr=imgs[imgs.length-1];
						User_img="img/"+"touxiang/"+arr;
						User_name=this.getElementsByTagName("h2")[0].innerHTML.split("<")[0];
						User_sin=this.getElementsByTagName("h3")[0].innerHTML;
						/* 生成新的chat*/
						var Chatsss = document.createElement("div");/*新建聊天界面class*/
						Chatsss.className="chat";
						Chatsss.innerHTML=Chatclass[0].innerHTML;
						//alert(Chatsss.innerHTML);
						Chatsss.getElementsByClassName("touxiang")[0].src=User_img;
						Chatsss.getElementsByClassName("name")[0].innerHTML=User_name;
						
						Chatsss.getElementsByClassName("qianming")[0].innerHTML=User_sin;
						/*生成新的chat*/
//						var Messages=document.getElementsByClassName("message");
//						var number=Messages.length;
//						if(Messages.length!=0){
//							for(var n=0;n<number;n++){
//								Chat_add.removeChild(Messages[0]);								
//							}
//						}
						god.appendChild(Chatsss);
						Chatsss.style.display="block";
							if(Chatclass.length<3){
							oo=40;
							}
							Chatsss.style.left=oo+"px";
							Chatsss.style.top=oo+"px";
						Chatsss.style.zIndex=100;
						//Send_length=Send.length;
						oo+=20;
						 closeChet();						
						 Sendchid();
						 move();
						 qxchats();
//						 alert(Qxchats.length);
					}
				}
			}
		}
	}
	
	/*聊天 end*/
	
//	Chats.innerHTML="";/*清空输入框*/
	//var Message=document.getElementsByClassName('message');
	var Chat_add=document.getElementsByClassName("chats");/*消息显示界面*/
	var Times=[];
	for (var i=0;i<100;i++) {
		Times[i]=true;
	}
	Sendchid();
	function Sendchid(){		
	for(var i=0;i<Chatclass.length;i++){
		Send[i].index=i;
		Send[i].onclick=function(){ 
			/*时间*/
			var date=new Date();/*时间对象*/
			var year=date.getFullYear();
			var mouth=date.getMonth()+1;
			var Day=date.getDate()+"";
//			var day="星期" +date.getDay()+" ";
			var h=date.getHours();	 
			if(h<10) h="0"+h;
			var m=date.getMinutes();
			if(m<10) m="0"+m;
			var s=date.getSeconds();
			if(s<10) s="0"+s;
			var Time=year+'/'+mouth+'/'+Day+' '+h+':'+m+':'+s;
/*时间 end*/
		var Message=document.createElement("div");
		Message.className="message";
		var P=document.createElement("p");
		P.innerHTML=Time;
//		alert(P.innerHTML);
		if(Times[this.index]){
			Message.appendChild(P);
			Times[this.index]=false;
		}
		
		var Img=document.createElement("img");
		Img.src="img/user.jpg";
		Message.appendChild(Img);
		var Message_inn=document.createElement("div");
		Message_inn.className="message_inn";
		Message_inn.innerHTML=Chats[this.index].innerHTML;	
		Chats[this.index].innerHTML="";
		Message.appendChild(Message_inn);		
		Chat_add[this.index].appendChild(Message);
		
		move();
		closeChet();
		qxchats();
		}
	}
	
}
	/*发消息 end*/
	/*色块*/
	var colors=["#169ada","#288add","#31a66b","#da434e","#e56281","#b1639f","#6b51c0","#595ca0","#3074c1","#00829a","#159c77","#4fb0ac","#7ac5c4","#9bb7d6","#804d4d","#f0bc59","#cfbaaa","#45ec2e"];                                          
	var Color=document.getElementById("color").getElementsByTagName('ul')[0];	
	for (var i=0;i<colors.length;i++) {
		var Li=document.createElement("li");
		Li.style.background=colors[i];
		Color.appendChild(Li);
	}	
	/*色块 end*/
	
	/*换肤*/
	var Huanfu=document.getElementById("imgs");
	var beijingtu=Huanfu.getElementsByTagName("img");
//	var flag=true;
	for(var i=0;i<beijingtu.length;i++){
		
			beijingtu[i].onclick=function(){				
				for (var j=0;j<beijingtu.length;j++) {
					beijingtu[j].index=j;
				}
			var img=beijingtu[this.index].src;		 		
			var imgs=img.split("/");
			var arr=imgs[imgs.length-1];
			var bj="url("+"img/"+"pifu/"+arr+")";	
//			alert(bj);
			Containter.style.background=bj;
			}
	}	 
	/*换肤 end*/
	/*登录*/
	var Denglu=document.getElementById("denglu");/*登录*/
	var Xiang=document.getElementById("xiang");/*状态*/
	var CloseDenglu=document.getElementById("closeDenglu"); /*关闭登录框*/
	var Changr_tai=Xiang.getElementsByTagName("li");
	//alert(Changr_tai.length);
	var Tihuan=document.getElementById("tihuan");/*切换状态*/
	var col=["green","gray","blueviolet","burlywood","white"];
	
	Tihuan.onclick=function(){
		Xiang.style.display="block";
	}
	Xiang.onclick=function(){
		Xiang.style.display="none";
	}
	
	for (var i=0;i<Changr_tai.length;i++) {
		Changr_tai[i].index=i;
		Changr_tai[i].onclick=function(){
			Zhuangtai.innerHTML=this.getElementsByTagName("i")[0].innerHTML;
			Tihuan.innerHTML=this.getElementsByTagName("i")[0].innerHTML;
			Zhuangtai.style.color=col[this.index];
			Tihuan.style.color=col[this.index];
		} 
	}
	CloseDenglu.onclick=function(){

//		Denglu.remove(Denglu);
		Xiang.style.display="none";
		Denglu.style.display="none";
	}
	
	/*登录*/
	var Lock=document.getElementById('lock');/*suo*/
	
	drag(Containter);
	drag(HuanfuM);
	drag(Lock);
	drag(Denglu);
//	drag(Xiang);
	
	move();
	function move(){
		for(var i=0;i<Chatclass.length;i++){
			Chatclass[i].index=i;
			Chatclass[i].onmouseover=function(){				
			drag(this);
			}
		}
	}			
	/*窗口拖动*/
	function drag(obj){
					var x=0,y=0;
					obj.onmousedown=function(e){
						for (var j=0;j<Chatclass.length;j++) {
							Chatclass[j].style.zIndex=0;
						}
						HuanfuM.style.zIndex=0;
						obj.style.zIndex=100;
						Containter.style.zIndex=999;
						Lock.style.zIndex=1000;
						Denglu.style.zIndex=0;
						Zhuangtai.style.zIndex=10;
						e=e||window.event;
						x=e.clientX-obj.offsetLeft;
						y=e.clientY-obj.offsetTop;
						document.onmousemove=function(e){
							var l = e.clientX-x;
							var t = e.clientY-y;
							if(l<0){
								l=0;
							}
							else if(l>document.documentElement.clientWidth-obj.offsetWidth){
								l=document.documentElement.clientWidth-obj.offsetWidth;
							}
							if(t<0){
								t=0;
							}else if(t>document.documentElement.clientHeight-obj.offsetHeight){
								t=document.documentElement.clientHeight-obj.offsetHeight;
							}
							obj.style.left=l+"px";
							obj.style.top=t+"px";
							
							if(obj==Lock){
								Containter.style.left=l+"px";
								Containter.style.top=t+"px";
							}
//							alert(obj)
//							alert(Denglu)
							if(obj==Denglu){
								var x1 = l+108;
								var y2= t+277;
								Xiang.style.left=x1+"px";
								Xiang.style.top=y2+"px";
							}
							if(obj==Containter){
								Lock.style.left=l+"px";
								Lock.style.top=t+"px";
							}
							
						}
						document.onmouseup=function(){
							document.onmousedown=null;
							document.onmousemove=null;
							closeChet();
							Sendchid();
							qxchats();
						}
					}
				}
	/*窗口拖动 end*/
	/*状态*/
	var  Zhuangtai=document.getElementById('zhuangtai');
	var  Dui=document.getElementById('dui');
	var  Suoding=document.getElementById('suoding');
	
	var LockValue = document.getElementById("lockpass");
	var Jiesuo=document.getElementById("jiesuo");
	
	Zhuangtai.onclick=function(){
		Dui.style.display="block";
	}
	Dui.onclick=function(){
		Dui.style.display="none";
	}
	Suoding.onclick=function(){
		Lock.style.display="block";
		Jiesuo.style.display="none";
		for(var i=0;i<Chatclass.length;i++){
			Chatclass[i].style.display="none";
		}
		
	}
	/*QQ锁*/
   var QQlock=document.getElementById("suoimg");
   
   var QX=document.getElementById("qx");
   QQlock.onclick=function(){
   	Jiesuo.style.display="block";
   	LockValue.value="";
   }
   
   QX.onclick=function(){
   	Jiesuo.style.display="none";
   }
   
   
   /*解锁*/
  /*cookie*/
//function setcookie(name,value){
//			document.cookie=name+"="+value;
//			
//		}

   /*cookie*/
  
  
  var Ok=document.getElementById("ok");
 		
 
  Ok.onclick=function(){
	  	if(LockValue.value==123456 ){
	  		Lock.style.display="none";
	  		LockValue.value="";
	  		LockValue.style.color="";
	  		for(var i=1;i<Chatclass.length;i++){
			Chatclass[i].style.display="block";
		}
	  	}
	  	else{
	  		LockValue.placeholder="密码错误！";
	  		LockValue.style.color="red";
	  		LockValue.onfocus=function(){
	  			LockValue.placeholder="";
	  			LockValue.style.color="";
	  		}
	  	}
  }
  
  /*登陆*/
 	var Dlname=document.getElementById("dlname");
 	var Dlmima=document.getElementById("dlmima");
 	var Dl=document.getElementById("jinru");
 	var Ji=document.getElementById("ji");
 	Dl.onclick=function(){
 		
		if(Dlname.value==123456){
			if(Dlmima.value==123456){
				Containter.style.display="block";
				Denglu.style.display="none";
				Xiang.style.display="none";
			}else{
				alert("密码错误！")
			}
		}else{
			alert("用户名不正确！");
		}
 	}
 	
 	 var Start=document.getElementById("start");
	 Start.ondblclick=function(){
	 	Denglu.style.display="block";
	 	if(Ji.checked==true){
	 		Dlname.value=123456;
	 		Dlmima.value=123456
	 	}else{
	 		Dlname.value="";
	 		Dlmima.value="";
	 	}
	 }
	
	 	// var cookie1 = document.cookie;
		// var arrCookie1 = cookie1.split(";");
		//
		// for (var i =0;i<arrCookie1.length;i++) {
		// 		arrCookie1[i]=arrCookie1[i].split("=");
		// 	}  //[[username,zs][password,123456]]  arrCookie[0][1]
   	// 		if(arrCookie1[2][1]==1){
   	// 			Denglu.style.display="block";
   	// 		}
  /*登陆 end*/ 
  /*关闭*/
  /*关闭QQ*/
	 X.onclick=function(){
	//		Containter.style.display="none";
			//All.remove(god);
			Containter.style.display="none";
			HuanfuM.style.display="none";
			for(var i=1;i<=Chatclassnumber;i++){
				Chatclass[1].remove(Chatclass[1]);
			}
		}
  /*关闭end*/
 
   /*over*/
}
