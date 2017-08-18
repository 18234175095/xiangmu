function setcookie(name,value){
	document.cookie=name+"="+value;
}
$(function(){
	/*cookie*/
    
	$("#send").click(function(){
		var Title;
		var Buowen;
		Title=$("#biaoti").val();
		Buowen=$(".bowen").html();
		
		setcookie("title",Title);
		setcookie("bowen",Buowen);
		
//		var cookie = document.cookie;
//		var arrCookie = cookie.split(";");
//		for (var i =0;i<arrCookie.length;i++) {
//			arrCookie[i]=arrCookie[i].split("=");
//		}  //[[username,zs][password,123456]]  arrCookie[0][1]
//			alert(arrCookie[1][1]);
			
			setcookie("flag",'1');
			alert("发送成功");
//			window.location.href="index.html";
			window.history.back(-1);
	})
})
