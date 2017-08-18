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
			if(index>=11)index=index-11;
			$(".lk-biao").eq(index).show();
			$(this).addClass("message-clickcss");
		})
	})
	
	
	$(".640-one").each(function(index){
		$(this).hover(function(){
			$(".my-message-zong").hide();
			$(".my-message-zong").eq(index).show();
			
		})
	})
	$(".my-message-zong").click(function(){
		$(".my-message-zong").slideUp("100");
	})
//	$(".my-message-zong li").mouseover(function(){
//		$(".my-message-zong").slideUp("100");
//	})
	var flag=true;
	$(".nav-640").click(function(){
		if(flag){
			$(".nav-640-inner").slideDown("100");
			flag=false;
		}else{
			$(".nav-640-inner").slideUp("100");
			flag=true;
		}
		
	})
	
	
	
/*********************我的订单*************************************/
	$("#dingdanbtn").click(function(){
		var Dingdannumber=$("#dingdannumber").val();
		if(Dingdannumber=="")
		{	
			alerts("订单号码不能为空！");
		}else{
			alerts("您输入的订单号码为："+Dingdannumber);
		}
		
	})
	/*我的订单 end*/
	
/****************************个人信息******************************************/
	
	/*三级联动*/
	function csh(obj){
					$(obj).html("<option>--请选择--</option>");
				}
			$(function(){
				var data={
					'山西省':{
						'太原市':['迎泽区','小店区','尖草坪区','万柏林区','杏花岭区','晋源区'],
						'临汾市':['尧都区','区2','区3',]
						},
					'陕西省':{
						'陕西省1市':['区1','区2','区3','区4','区5','区6'],
						'陕西省2市':['区1','区2','区3',]
						},
				}
				
				
				
//				$.each(object, function(obj,xg) {});	/*第一个遍历属性 第二个属性值*/

				$.each(data, function(obj) {
					$("#sheng").append("<option>"+obj+"</option>")
				});	
				var Shi,Qu;
				$("#sheng").change(function(){
					csh("#shi");csh("#qu");csh("#jie");
					$.each(data, function(obj,shi) { /*省         {市{区:[街]}}*/
//						console.log(shi);
						if ($("#sheng").val()==obj) {
							$.each(shi, function(a,b) { /*市         {区[]}*/
								$("#shi").append("<option>"+a+"</option>")
							});
						Shi=shi;
						}
					});
				});
				
				
				
				$("#shi").change(function(){
					csh("#qu");                     /* {区:[街]}*/
					$.each(Shi, function(obj,qu) {  /*市      {区:[街]} */
//						console.log(jie);
						if ($("#shi").val()==obj) {
							$(qu).each(function(index){  
								$("#qu").append("<option>"+this+"</option>");
							});
						}
					});
				});
			})
	/*三级联动*/
	
	
	
	$("#tijiao").click(function(){
		var Shoppername=$("#shoppername").val();
		var Sex=$("#doc-select-1").find("option:selected").text();
		var Birthday=$("#birthday").val();
		var Sheng=$("#sheng").find("option:selected").text();
		if(Sheng=="--请选择--")Sheng="";
		var Shi=$("#shi").find("option:selected").text();
		if(Shi=="--请选择--")Shi="";
		var Qu=$("#qu").find("option:selected").text();
		if(Qu=="--请选择--")Qu="";
		var Xiangxidz=$("#xiangxidz").val();
		var Tel=$("#tel").val();
		var Phonenumber=$("#phonenumber").val();
		var Email=$("#email").val();
		
		
		var Grren=Shoppername+Sex+Birthday+Sheng+Shi+Qu+Xiangxidz+Tel+Phonenumber+Email;
		alerts(Grren);
	})
	
/*个人信息 end*/
/*纪念日管理*/
var memorialNumber=0;
var memorialNumber2=0;
var colorone=0;
var Deltmemorial=0;
var Color=["am-panel-primary","am-panel-secondary","am-panel-success","am-panel-warning","am-panel-danger"];



$('#doc-prompt-toggle').on('click', function() {
	$("#beizhu").val("");
    $('#message-motai').modal({
      relatedTarget: this,
      onConfirm: function(e) {
      	
      	var Motaitime=$("#motai-time").val();
      	var Name = $("#motai-name").find("option:selected").text();
      	var Beizhu=$("#beizhu").val();
      	 /*追加信息*/
      	var Memorial=$(".memorial-muban").html();
      	$(".memorials").eq(memorialNumber).html("");
		$(".memorials").eq(memorialNumber).append(Memorial);
		$(".memorial-title").eq(memorialNumber+1).html(Motaitime);
		$(".memorial-remarks").eq(memorialNumber+1).html("[ "+Name+" ]<br /><br />"+Beizhu);
		$(".Memorial").eq(memorialNumber+1).addClass(Color[colorone]);
		colorone++;
		if(colorone>4)colorone=0;
		
		memorialNumber++;
      	 /*追加信息 end*/
		Delt_memorial();/*遍历删除*/
      },
      onCancel: function(e) {
      }
    });
    
});

/*修改信息*/
Delt_memorial();
function Delt_memorial(){
	$(".memorial-change").each(function(index){
		$(this).click(function(){
			change_memorial(index);
			alert(index);
		})
	});
//	$(".memorial-remove").each(function(index){
//		$(this).click(function(){
//			var ind=index;
//			alert(1)
//			$(".memorials").eq(ind).html("")
//		})
//	});
	
}

function change_memorial(change_num){
//			alert(1)
//			memorialNumber2 = memorialNumber;
//			memorialNumber = index-1;
			 $('#message-motai').modal({
		      relatedTarget: this,
		      onConfirm: function(e) {
		      	
	      		var Motaitime1=$("#motai-time").val();
	      		var Name1 = $("#motai-name").find("option:selected").text();
	      		var Beizhu1=$("#beizhu").val();
	      	 /*追加信息*/
//	      		$(".memorials").eq(change_num).html("");
//	      		var Memorial=$(".memorial-muban").html();
		      		
		      	
//				$(".memorials").eq(memorialNumber).append(Memorial);
				$(".memorial-title").eq(change_num).html(Motaitime1);
				$(".memorial-remarks").eq(change_num).html("[ "+Name1+" ]<br /><br />"+Beizhu);
//				$(".Memorial").eq(change_num).addClass(Color[colorone]);
		      	 /*追加信息 end*/
		      },
		      onCancel: function(e) {
		      }
		    });
		
}
	

/*修改信息*/







/*纪念日管理 end*/


})