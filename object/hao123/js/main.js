window.onload = function() {
	var Day = document.getElementById('riqi');



	var sWeek = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
	var dNow = new Date();
	var CalendarData = new Array(100);
	var madd = new Array(12);
	var tgString = "甲乙丙丁戊己庚辛壬癸";
	var dzString = "子丑寅卯辰巳午未申酉戌亥";
	var numString = "一二三四五六七八九十";
	var monString = "正二三四五六七八九十冬腊";
	var weekString = "日一二三四五六";
	var sx = "鼠牛虎兔龙蛇马羊猴鸡狗猪";
	var cYear, cMonth, cDay, TheDate;
	CalendarData = new Array(0xA4B, 0x5164B, 0x6A5, 0x6D4, 0x415B5, 0x2B6, 0x957, 0x2092F, 0x497, 0x60C96, 0xD4A, 0xEA5, 0x50DA9, 0x5AD, 0x2B6, 0x3126E, 0x92E, 0x7192D, 0xC95, 0xD4A, 0x61B4A, 0xB55, 0x56A, 0x4155B, 0x25D, 0x92D, 0x2192B, 0xA95, 0x71695, 0x6CA, 0xB55, 0x50AB5, 0x4DA, 0xA5B, 0x30A57, 0x52B, 0x8152A, 0xE95, 0x6AA, 0x615AA, 0xAB5, 0x4B6, 0x414AE, 0xA57, 0x526, 0x31D26, 0xD95, 0x70B55, 0x56A, 0x96D, 0x5095D, 0x4AD, 0xA4D, 0x41A4D, 0xD25, 0x81AA5, 0xB54, 0xB6A, 0x612DA, 0x95B,
		0x49B, 0x41497, 0xA4B, 0xA164B, 0x6A5, 0x6D4, 0x615B4, 0xAB6, 0x957, 0x5092F,
		0x497, 0x64B, 0x30D4A, 0xEA5, 0x80D65, 0x5AC, 0xAB6, 0x5126D, 0x92E, 0xC96, 0x41A95, 0xD4A, 0xDA5, 0x20B55, 0x56A, 0x7155B, 0x25D, 0x92D, 0x5192B, 0xA95, 0xB4A, 0x416AA, 0xAD5, 0x90AB5, 0x4BA, 0xA5B, 0x60A57, 0x52B, 0xA93, 0x40E95);
	madd[0] = 0;
	madd[1] = 31;
	madd[2] = 59;
	madd[3] = 90;
	madd[4] = 120;
	madd[5] = 151;
	madd[6] = 181;
	madd[7] = 212;
	madd[8] = 243;
	madd[9] = 273;
	madd[10] = 304;
	madd[11] = 334;

	function GetBit(m, n) {
		return(m >> n) & 1;
	}

	function e2c() {
		TheDate = (arguments.length != 3) ? new Date() : new Date(arguments[0], arguments[1], arguments[2]);
		var total, m, n, k;
		var isEnd = false;
		var tmp = TheDate.getFullYear();
		total = (tmp - 1921) * 365 + Math.floor((tmp - 1921) / 4) + madd[TheDate.getMonth()] + TheDate.getDate() - 38;
		if(TheDate.getYear() % 4 == 0 && TheDate.getMonth() > 1) {
			total++;
		}
		for(m = 0;; m++) {
			k = (CalendarData[m] < 0xfff) ? 11 : 12;
			for(n = k; n >= 0; n--) {
				if(total <= 29 + GetBit(CalendarData[m], n)) {
					isEnd = true;
					break;
				}
				total = total - 29 - GetBit(CalendarData[m], n);
			}
			if(isEnd) break;
		}
		cYear = 1921 + m;
		cMonth = k - n + 1;
		cDay = total;
		if(k == 12) {
			if(cMonth == Math.floor(CalendarData[m] / 0x10000) + 1) {
				cMonth = 1 - cMonth;
			}
			if(cMonth > Math.floor(CalendarData[m] / 0x10000) + 1) {
				cMonth--;
			}
		}
	}

	function GetcDateString() {
		var tmp = "";
		tmp += tgString.charAt((cYear - 4) % 10);
		tmp += dzString.charAt((cYear - 4) % 12);
		tmp += "年 ";
		if(cMonth < 1) {
			tmp += "(闰)";
			tmp += monString.charAt(-cMonth - 1);
		} else {
			tmp += monString.charAt(cMonth - 1);
		}
		tmp += "月";
		tmp += (cDay < 11) ? "初" : ((cDay < 20) ? "十" : ((cDay < 30) ? "廿" : "三十"));
		if(cDay % 10 != 0 || cDay == 10) {
			tmp += numString.charAt((cDay - 1) % 10);
		}
		return tmp;
	}

	function GetLunarDay(solarYear, solarMonth, solarDay) {
		if(solarYear < 1921 || solarYear > 2020) {
			return "";
		} else {
			solarMonth = (parseInt(solarMonth) > 0) ? (solarMonth - 1) : 11;
			e2c(solarYear, solarMonth, solarDay);
			return GetcDateString();
		}
	}
	var D = new Date();
	var yy = D.getFullYear();
	var mm = D.getMonth() + 1;
	var dd = D.getDate();
	var ww = D.getDay();
	var ss = parseInt(D.getTime() / 1000);

	function getFullYear(d) { // 修正firefox下year错误
		yr = d.getYear();
		if(yr < 1000)
			yr += 1900;
		return yr;
	}
	showDate();

	function showDate() {
		var sValue = (dNow.getMonth() + 1) + "月" + dNow.getDate() + "日" + " " + sWeek[dNow.getDay()] + " ";
		sValue += GetLunarDay(yy, mm, dd);
//		alert(sValue[14]);
////	var SVAL=sValue.substr(20,4);
//		var Values=sValue.substr(0,10);
		sValue=sValue.substr(0,10)+sValue.substr(14,4);
		Day.innerHTML = sValue;
		
	};
	
	
	/*换肤*/
	var Huanfu=document.getElementById("huanfu");
	var Change_fu=document.getElementById("change");
	var bjimg=Huanfu.getElementsByClassName("yinying");
	var beijingtu=Huanfu.getElementsByTagName("img");
	var flag=true;
	Change_fu.onclick=function(){
		if(flag){			
		Huanfu.style.display="block";
		flag=false;
		}
		else{
			Huanfu.style.display="none";
			flag=true;
		}
	}
	
	for(var i=0;i<bjimg.length;i++){
		
			bjimg[i].onclick=function(){
				
				for (var j=0;j<bjimg.length;j++) {
					bjimg[j].index=j;
				}
				
			var img=beijingtu[this.index].src;		 		
			var imgs=img.split("/");
			var arr=imgs[imgs.length-1];
			var bj="url("+"img/"+"pifu/"+arr+")";	
//			alert(bj);
			document.body.style.background=bj+"no-repeat";
			document.body.style.backgroundSize="cover";
			}
		}	
	
	
//	/*换肤 end*/
/*first_two*/
	var First_two=document.getElementById("first_two");
	var First_twoyin=document.getElementById("first_twoyin");
	var Five=document.getElementById("five");
	First_twoyin.onclick=function(){
		First_two.style.display="none";
		Five.style.height="375px";
	}
/*first_two end*/
/*lubbo one*/
var Lunbo_one=document.getElementById("lunbo_one");
var Img_one=Lunbo_one.getElementsByTagName("li");
var Lunbo_one_zuo=document.getElementById("lunbo_one_zuo");
var Lunbo_one_you=document.getElementById("lunbo_one_you");
var Lunbo_oneid=document.getElementById("lunbo_oneid");
var Text_one=document.getElementById("text_one");
var Tex = new Array("星期日", "星期一", "星期二", "星期三");
//alert(Img_one.length);

		var move=0;
		function moveR(){
				for(var j=0;j<Img_one.length;j++){				  	
				  	Img_one[j].style.display="none";
				  	}
				move++;
				if(move>Img_one.length-1)move=0;
				{
				  	Img_one[move].style.display="block";
				  	Text_one.innerHTML=Tex[move];
				  }
			}
			Clear=setInterval(moveR,1500);
			Lunbo_oneid.onmouseover=function(){
				clearInterval(Clear);
			}
			Lunbo_oneid.onmouseout=function(){
			Clear=setInterval(moveR,1500);
			}
			Lunbo_one_you.onclick=function(){
				moveR();
			}
			Lunbo_one_zuo.onclick=function(){
				for(var j=0;j<Img_one.length;j++){				  	
				  	Img_one[j].style.display="none";
				  	}
				move--;
				if(move<0)move=Img_one.length-1;
				{
				  	Img_one[move].style.display="block";
				  	Text_one.innerHTML=Tex[move];
				  }
			}
/*lubbo one end*/
/*轮播2*/
var Lunbo_two=document.getElementById("lunbo_two");
var Img_two=Lunbo_two.getElementsByTagName("li");
var Lunbo_two_zuo=document.getElementById("lunbo_two_zuo");
var Lunbo_two_you=document.getElementById("lunbo_two_you");
var Lunbo_twoid=document.getElementById("lunbo_twoid");
var Text_two=document.getElementById("text_two");


		var move2=0;
		function moveR2(){
				for(var j=0;j<Img_two.length;j++){				  	
				  	Img_two[j].style.display="none";
				  	}
				move2++;
				if(move2>Img_two.length-1)move2=0;
				{
				  	Img_two[move2].style.display="block";
				  	Text_two.innerHTML=Tex[move2];
				  }
			}
			Clear2=setInterval(moveR2,1500);
			Lunbo_twoid.onmouseover=function(){
				clearInterval(Clear2);
			}
			Lunbo_twoid.onmouseout=function(){
			Clear2=setInterval(moveR2,1500);
			}
			Lunbo_two_you.onclick=function(){
				moveR2();
			}
			Lunbo_two_zuo.onclick=function(){
				for(var j=0;j<Img_two.length;j++){				  	
				  	Img_two[j].style.display="none";
				  	}
				move2--;
				if(move2<0)move2=Img_one.length-1;
				{
				  	Img_two[move2].style.display="block";
				  	Text_two.innerHTML=Tex[move2];
				  }
			}
/*lunbo2 end*/

/*lunbo 3 youxi*/
var Lunbo_three=document.getElementById("lunbo_three");

var Img_three=Lunbo_three.getElementsByTagName("li");

var Lunbo_three_zuo=document.getElementById("lunbo_three_zuo");
var Lunbo_three_you=document.getElementById("lunbo_three_you");
var Lunbo_threeid=document.getElementById("lunbo_threeid");
var Text_three=document.getElementById("text_three");


		var move3=0;
		function moveR3(){
				for(var j=0;j<Img_three.length;j++){				  	
				  	Img_three[j].style.display="none";
				  	}
				move3++;
				if(move3>Img_three.length-1)move3=0;
				{
				  	Img_three[move3].style.display="block";
				  	Text_three.innerHTML=Tex[move3];
				  }
			}
			Clear3=setInterval(moveR3,1500);
			Lunbo_threeid.onmouseover=function(){
				clearInterval(Clear3);
			}
			Lunbo_threeid.onmouseout=function(){
			Clear3=setInterval(moveR3,1500);
			}
			Lunbo_three_you.onclick=function(){
				moveR3();
			}
			Lunbo_three_zuo.onclick=function(){
				for(var j=0;j<Img_three.length;j++){				  	
				  	Img_three[j].style.display="none";
				  	}
				move3--;
				if(move3<0)move3=Img_three.length-1;
				{
				  	Img_three[move3].style.display="block";
				  	Text_three.innerHTML=Tex[move3];
				}
			}

/*lunbo 3 end*/
/*lunbo 4 youxi*/
var Lunbo_four=document.getElementById("lunbo_four");

var Img_four=Lunbo_four.getElementsByTagName("li");

var Lunbo_four_zuo=document.getElementById("lunbo_four_zuo");
var Lunbo_four_you=document.getElementById("lunbo_four_you");
var Lunbo_fourid=document.getElementById("lunbo_fourid");
var Text_four=document.getElementById("text_four");


		var move4=0;
		function moveR4(){
				for(var j=0;j<Img_four.length;j++){				  	
				  	Img_four[j].style.display="none";
				  	}
				move4++;
				if(move4>Img_four.length-1)move4=0;
				{
				  	Img_four[move4].style.display="block";
				  	Text_four.innerHTML=Tex[move4];
				  }
			}
			Clear4=setInterval(moveR4,1500);
			Lunbo_fourid.onmouseover=function(){
				clearInterval(Clear4);
			}
			Lunbo_fourid.onmouseout=function(){
			Clear4=setInterval(moveR4,1500);
			}
			Lunbo_four_you.onclick=function(){
				moveR4();
			}
			Lunbo_four_zuo.onclick=function(){
				for(var j=0;j<Img_four.length;j++){				  	
				  	Img_four[j].style.display="none";
				  	}
				move4--;
				if(move4<0)move4=Img_four.length-1;
				{
				  	Img_four[move4].style.display="block";
				  	Text_four.innerHTML=Tex[move4];
				}
			}

/*lunbo 4 end*/
/*lunbo 5 youxi*/
var Lunbo_five=document.getElementById("lunbo_five");

var Img_five=Lunbo_five.getElementsByTagName("li");

var Lunbo_five_zuo=document.getElementById("lunbo_five_zuo");
var Lunbo_five_you=document.getElementById("lunbo_five_you");
var Lunbo_fiveid=document.getElementById("lunbo_fiveid");
var Text_five=document.getElementById("text_five");


		var move5=0;
		function moveR5(){
				for(var j=0;j<Img_five.length;j++){				  	
				  	Img_five[j].style.display="none";
				  	}
				move5++;
				if(move5>Img_five.length-1)move5=0;
				{
				  	Img_five[move5].style.display="block";
				  	Text_five.innerHTML=Tex[move5];
				  }
			}
			Clear5=setInterval(moveR5,1500);
			Lunbo_fiveid.onmouseover=function(){
				clearInterval(Clear5);
			}
			Lunbo_fiveid.onmouseout=function(){
			Clear5=setInterval(moveR5,1500);
			}
			Lunbo_five_you.onclick=function(){
				moveR5();
			}
			Lunbo_five_zuo.onclick=function(){
				for(var j=0;j<Img_five.length;j++){				  	
				  	Img_five[j].style.display="none";
				  	}
				move5--;
				if(move5<0)move5=Img_five.length-1;
				{
				  	Img_five[move5].style.display="block";
				  	Text_five.innerHTML=Tex[move5];
				}
			}

/*lunbo 5 end*/
}