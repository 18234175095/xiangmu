$(function(){
	
/*侧边导航*/	
	function alerts(text){
		if(text!="")
		$("#alert-text").html(text);
		$("#my-alert").modal();
	}
	$(".my-message").each(function(index){
		$(this).click(function(){
			$(".lk-biao").css("display","none");
			$(".my-message").removeClass("message-clickcss");
			$(".my-message i").css("display","none");
//			if(index>=12)index=index-12;
			$(".lk-biao").eq(index).show();
			$(this).addClass("message-clickcss");
		})
	})
	
	
	$(".li-one").each(function(index){
		$(this).click(function(){
			$(".li-two").slideUp("10")
			$(".li-two").eq(index).slideDown("80");
		})
	})
	
	
	/*导航管理*/
	var nav_td_num=new Array();
	var	nav_inde=0;
	var navchange_flag=false;
	$(".nav_td").each(function(index){
		$(this).click(function(){
			$(this).css("background","#D1D1D1");
			nav_td_num[nav_inde]=index;
			nav_inde++;
//			alert(nav_td_num)
		})
	})
	
	
	
	$(".nav_tingyong").click(function(){
		for (var i=0;i<nav_td_num.length;i++) {
			$(".nav_td").eq(nav_td_num[i]).css("background","#DD514C");
		}
		nav_td_num.length=0;
	})
	$(".nav_qiyong").click(function(){
		for (var i=0;i<nav_td_num.length;i++) {
			$(".nav_td").eq(nav_td_num[i]).css("background","#fff");
		}
		nav_td_num.length=0;
	})
	$(".nav_change").click(function(){
		for (var i=0;i<nav_td_num.length;i++) {
			$(".nav_td").eq(nav_td_num[i]).attr("contenteditable","true");
			$(".nav_td").eq(nav_td_num[i]).css("background","#C1D3F2");
		}
		if(nav_td_num.length!=0)
		$(".nav_td").unbind("click");
		nav_td_num.length=0;
	})
	$(".nav_baocun").click(function(){
		$(".nav_td").attr("contenteditable","false");
		$(".nav_td").css("background","#fff");
		navchange_flag=true;
		nav_td_num.length=0;
		$(".nav_td").each(function(index){
		$(this).click(function(){
			$(this).css("background","#D1D1D1");
			nav_td_num[nav_inde]=index;
			nav_inde++;
//			alert(nav_td_num)
		})
		
	})
	})
	
	$(".navchange_tijiao").click(function(){
		if(navchange_flag){
			alerts("提交成功！");
			navchange_flag=false;
		}else{
			alerts("与上次提交内容未发生改变！");
		}
		
	})
	
	/*导航管理*/
	
	
	
	/*banner 图片管理*/
	var bAnner=600;
	$(".banner_img").each(function(index){
		$(this).click(function(){
			$(".banner_img").css("background","#fff");
			bAnner=index;
			$(this).css("background","#D1D1D1");
		})
	})
	$(".change_banner").click(function(){
		
		$(".banner_name").attr("contenteditable","false");
		$(".banner_miaoshu").attr("contenteditable","false");
		$(".banner_shunxu").attr("contenteditable","false");
		
		$(".banner_name").css("background","#fff");
		$(".banner_miaoshu").css("background","#fff");
		$(".banner_shunxu").css("background","#fff");
		
		$(".change_bannerimg").addClass("am-disabled");
		$(".del_banner").addClass("am-disabled");
		
		$(".banner_name").eq(bAnner).css("background","#D1D1D1");
		$(".banner_miaoshu").eq(bAnner).css("background","#D1D1D1");
		$(".banner_shunxu").eq(bAnner).css("background","#D1D1D1");
		
		$(".banner_name").eq(bAnner).attr("contenteditable","true");
		$(".banner_miaoshu").eq(bAnner).attr("contenteditable","true");
		$(".banner_shunxu").eq(bAnner).attr("contenteditable","true");
		
		$(".change_bannerimg").eq(bAnner).removeClass("am-disabled");
		$(".del_banner").eq(bAnner).removeClass("am-disabled");
		
		if(bAnner!=600)
		$(".banner_img").unbind("click");
	})
	
	
	$(".baocun_banner").click(function(){
		$(".banner_name").attr("contenteditable","false");
		$(".banner_miaoshu").attr("contenteditable","false");
		$(".banner_shunxu").attr("contenteditable","false");
		
		$(".banner_img").css("background","#fff");
		$(".banner_name").css("background","#fff");
		$(".banner_miaoshu").css("background","#fff");
		$(".banner_shunxu").css("background","#fff");
		
		
		$(".change_bannerimg").addClass("am-disabled");
		$(".del_banner").addClass("am-disabled");
		
		$(".banner_img").each(function(index){
			$(this).click(function(){
				$(".banner_img").css("background","#fff");
				bAnner=index;
				$(this).css("background","#D1D1D1");
			})
		})
		bAnner=600;
	})
	
	var BAnner_image=["img/banner1.jpg","img/banner2.jpg","img/banner3.jpg","img/banner4.jpg","img/banner5.jpg","img/banner6.jpg","img/banner7.jpg","img/banner8.jpg"];
	var BAnner_moflag=600;
	$(".motai_img td").each(function(index){
		$(this).click(function(){
			$(".motai_img td").css("background","#fff");
			$(this).css("background","#D1D1D1");
			BAnner_moflag=index;
		})
	})
	
	
	$(".change_bannerimg").click(function(){
		 $('#message-motai').modal({
		      relatedTarget: this,
		      onConfirm: function(e) {
		      	$(".banner_image").eq(bAnner).attr("src",BAnner_image[BAnner_moflag]);
		      	$(".banner_src").eq(bAnner).html(BAnner_image[BAnner_moflag]);
		      	alerts("修改成功！");
		      },
		      onCancel: function(e) {
		      	
		      }
		 });
	})
	
	$(".tijao_banner").click(function(){
		alerts("提交成功！")
	})
	/*banner 图片管理*/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
/****************************个人信息******************************************/
	
	
	$("#tijiao").click(function(){
		var Shoppername=$("#shoppername").val();
		var Sex=$("#doc-select-1").find("option:selected").text();
		var Birthday=$("#birthday").val();
		var Phonenumber=$("#phonenumber").val();
		var Email=$("#email").val();
		
		
		var Grren=Shoppername+Sex+Birthday+Phonenumber+Email;
		alerts(Grren);
	})
	
/*个人信息 end*/
/*确认框*/
var msg="您确认要删除吗？\n\n请确认！";
function  Del(){
//	var msg="您确认要删除吗？\n\n请确认！";
	if(confirm(msg)==true){
		return true;
	}else{
		return false;
	}
}
/*确认框 end*/

$("#tuichu").click(function(){
	msg="您确认要退出吗？\n\n请确认！";
	var flag= Del();
	if(flag)
	window.location.href="houtaiDL.html"; 
})

var Sangpin="<tr class='chanpin_guanli'><td><p class='chanpin_bianhao'>1</p></td><td><img class='chanpin_img' src='img/one_01.jpg'/></td><td><p class='chanpin_ming' contenteditable='true'>名称</p></td><td><p class='chanpin_xilie' contenteditable='true'>类别</p></td><td><p class='chanpin_miaos' contenteditable='true'> 描述</p></td><td><p class='chanpin_jiage' contenteditable='true'>价格</p></td><td><button type='button' class='am-btn am-btn-primary am-btn-block chanpin_sahngshi'>商品上市</button><button type='button' class='am-btn am-btn-warning am-btn-block chanpin_changes'>信息修改</button><button type='button' class='am-btn am-btn-danger am-btn-block del_chanpin'>删除商品</button></td></tr>";
//alert(Sangpin);




										
											    
											
	var Del_chanpin = document.getElementsByClassName("del_chanpin");
	var Chanpin_guanli= document.getElementsByClassName("chanpin_guanli");
/*add商品*/
		$(".add_sahngpin").click(function(){
			$(".sahngpin_tbody").append(Sangpin);
			var Ind=$(".chanpin_guanli").length;
			$(".chanpin_bianhao").each(function(index){
				$(".chanpin_bianhao").eq(index).html(index+1);
			})
			
			DEl_chanpin();
			Chanpin_sahngshi();
			Chanpin_Changes();
			pHOTO_chanpin();
		})
	
	DEl_chanpin();
	function DEl_chanpin(){
	
		for (var i=0;i<Del_chanpin.length;i++) {
			Del_chanpin[i].index=i;
			Del_chanpin[i].onclick=function(){
				msg="您确认要删除吗？\n\n请确认！";
				var flag=Del();
				if(flag){
					Chanpin_guanli[this.index].remove();
					DEl_chanpin();
					Chanpin_sahngshi();
					Chanpin_Changes();
					pHOTO_chanpin();
				}
			}
		}
		$(".chanpin_bianhao").each(function(index){
			$(".chanpin_bianhao").eq(index).html(index+1);
		})
	}
//var Qxflag=true;
//var chk=document.getElementsByClassName('checks');
//$(".quanxuan").click(function(){
//	  	if(Qxflag){
//		  	for(var i=0;i<chk.length;i++){
//		  		chk[i].checked=true;
//		  	}
//		  	Qxflag=false;
//	  	}else{
//	  		for(var i=0;i<chk.length;i++){
//		  		chk[i].checked=false;
//		  	}
//		  	Qxflag=true;
//	  	}
//})
//$(".fanxuan").click(function(){
//	for(var i=0;i<chk.length;i++){
//	  	chk[i].checked=!chk[i].checked;
//	 }
//
//})
Chanpin_sahngshi();
function Chanpin_sahngshi(){
	$(".chanpin_sahngshi").each(function(index){
		$(this).unbind("click").click(function(){
			var Chanpin_name=$(".chanpin_ming").eq(index).html();
			var Chanpin_xilie=$(".chanpin_xilie").eq(index).html();
			var Chanpin_jiage=$(".chanpin_jiage").eq(index).html();
			var Chanpin_miaos=$(".chanpin_miaos").eq(index).html();
			
			if(Chanpin_name=="名称"||Chanpin_xilie=="类别"||Chanpin_jiage=="价格"){
				alerts("请确认产品信息！");
			}else if($(this).html()=="销售中"){
				alerts("商品不可重复提交！")
			}else{
				msg="您确认要本商品要上市吗？\n\n请确认！";
				var flag=Del();
				if(flag){
					$(this).html("销售中");
					$(this).css("background","#5EB95E");
					$(".chanpin_miaos").eq(index).attr("contenteditable","false");
					$(".chanpin_jiage").eq(index).attr("contenteditable","false");
					$(".chanpin_xilie").eq(index).attr("contenteditable","false");
					$(".chanpin_ming").eq(index).attr("contenteditable","false");
					$(".chanpin_img").unbind("click");
				}
			}
			
		})
	})
}		
Chanpin_Changes();
function Chanpin_Changes(){
	$(".chanpin_changes").each(function(index){
		$(this).unbind("click").click(function(){
			if($(".chanpin_sahngshi").eq(index).html()!="商品上市"){
				msg="您确认要修改本商品属性吗？\n\n修改商品时该商品将暂时下架！";
				var flag=Del();
				if(flag){
//					$(".chanpin_sahngshi").eq(index).removeClass("am-btn-success");
					$(".chanpin_sahngshi").eq(index).css("background","#3879D9");
					$(".chanpin_sahngshi").eq(index).html("上市");
					$(".chanpin_miaos").eq(index).attr("contenteditable","true");
					$(".chanpin_jiage").eq(index).attr("contenteditable","true");
					$(".chanpin_xilie").eq(index).attr("contenteditable","true");
					$(".chanpin_ming").eq(index).attr("contenteditable","true");
					Chanpin_Changes();
					pHOTO_chanpin();
				}
			}
		})
		
	})
}
var motai_chanmoflag=600;
	$(".motai_chanpinimg td").each(function(index){
		$(this).unbind("click").click(function(){
			$(".motai_chanpinimg td").css("background","#fff");
			$(this).css("background","#D1D1D1");
			motai_chanmoflag=index;
//			alert(motai_chanmoflag)
		})
})

var ChanpinImages=["img/one_01.jpg","img/one_02.jpg","img/one_03.jpg","img/one_04.jpg","img/one_05.jpg","img/one_06.jpg","img/one_07.jpg","img/one_08.jpg","img/one_09.jpg",]
pHOTO_chanpin();
var CHANPINCHANGE=600;
function pHOTO_chanpin(){
	$(".chanpin_img").each(function(index){
	$(this).unbind("click").click(function(){
//		alert(index)
		CHANPINCHANGE=index;
		$('#message-motai2').modal({
		      relatedTarget: this,
		      onConfirm: function(e) {
		      	$(".chanpin_img").eq(CHANPINCHANGE).attr("src",ChanpinImages[motai_chanmoflag]);
		      	alerts("修改成功！");
		      },
		      onCancel: function(e) {
		      	
		      }
		 });
	})
})
}



//$(".piliang_del").click(function(){
//		for(var k=0;k<100;k++){
//	  		var chk_leng=chk.length;
//	  		for(var j=0;j<chk_leng;j++){
//				if(chk[j].checked==true){
//					var TbodyElement=chk[j].parentNode.parentNode.parentNode;
//				  	var TrElement=chk[j].parentNode.parentNode;
//				  	TbodyElement.removeChild(TrElement);
//				}
//			}
//		}
//})
										
	/*********************我的订单*************************************/
	$("#dingdan_num").html($(".dingdan_tr").length);
	var Chuli_ge=0;
		$(".wuliu_td").each(function(index){
			if ($(".wuliu_td").eq(index).html()=="正在处理中"){
				Chuli_ge++;
			}
		})
	$("#weichili_dd").html(Chuli_ge);
	
	var Dingdan_false=new Array();
	var Dingdan_inde=0;
	$("#dingdanbtn").click(function(){
		var Dingdannumber=$("#dingdannumber").val();
		if(Dingdannumber=="")
		{	
			alerts("订单号码不能为空！");
		}else{
			Dingdan_false=[];
			Dingdan_inde=0;
			$(".dingdan_number").each(function(index){
				if($(".dingdan_number").eq(index).html()!=Dingdannumber){
					Dingdan_false[Dingdan_inde]=index;
					Dingdan_inde++;
				}
			})
				$(".dingdan_tr").show();
			
			for(var i=0;i<Dingdan_false.length;i++){
				$(".dingdan_tr").eq(Dingdan_false[i]).css("display","none");
			}
			if(Dingdan_false.length>=$(".dingdan_tr").length){
				alerts("没有查找到该订单！");
			}
			
		}
		
	})
	
	/*全部订单*/
	$(".all_dingdan").click(function(){
		$(".dingdan_tr").show();
	})
	
	
	
	/*已支付订单*/
	$(".all_zhifu").click(function(){
		$(".zhifu_td").each(function(index){
			if ($(".zhifu_td").eq(index).html()!="已支付"){
				$(".dingdan_tr").eq(index).css("display","none");
			}else{
				$(".dingdan_tr").eq(index).show();
			}
		})
	})
	
	/*代发货订单*/
	$(".dafahuo").click(function(){
		$(".wuliu_td").each(function(index){
			if ($(".wuliu_td").eq(index).html()!="待发货"){
				$(".dingdan_tr").eq(index).css("display","none");
			}else{
				$(".dingdan_tr").eq(index).show();
			}
		})
	})
	/*正在处理中*/
	$(".dingdan_chuli").click(function(){
		$(".wuliu_td").each(function(index){
			if ($(".wuliu_td").eq(index).html()!="正在处理中"){
				$(".dingdan_tr").eq(index).css("display","none");
			}else{
				$(".dingdan_tr").eq(index).show();
			}
		})
	})
	/*我的订单 end*/									
										
										
											
											
	/*vip_message*/
	$(".vip_message a").each(function(index){
		$(this).click(function(){
			$("#vip_name").html($(".vip_name").eq(index).html())
			$("#vip_number").html($(".vip_number").eq(index).html())
			$("#vip_leixing").html($(".vip_leibie").eq(index).html())
			$("#vip_time").html($(".vip_time").eq(index).html())
			$("#vip_zhuangtai").html($(".vip_zhuangtai").eq(index).html())
//			var vip_tr=$(".vip_tr td").eq(0).html()
//			alert(vip_one)
		})
	})
	
	
	/*vip_message*/									
									
























})




