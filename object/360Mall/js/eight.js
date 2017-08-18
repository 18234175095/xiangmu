function text(){
var Zan_img=document.getElementById("zan_img");
var Zan_num=document.getElementById("zannumber");
var Num=360;
var Flag=true;
Zan_img.onclick=function(){
	if(Flag==true){
		Zan_img.src="img/eight/heart1.png";
		Num++;
		Zan_num.innerHTML=Num;
	}
	else{
		Zan_img.src="img/eight/heart (2).png";
		Num--;
		Zan_num.innerHTML=Num;
	}
	Flag=!Flag;
}
	
/*--------------------------------------*/	
}
