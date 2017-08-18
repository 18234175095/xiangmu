$(function(){
			/*js先后顺序*/
				/*所有的全屏框架需有一个父级容器*/
				/*每一级的class均为section*/
				$("#containter").fullpage({
					/*添加背景色*/
//					sectionsColor:["","","white","white"""],
					/*添加导航*/
					navigation: true,
					/*导航位置*/
					navigationPosition: "right",
					/*导航提示信息*/
					//navigationTooltips:["first","second","third","forth"],
					showActiveTooltip: true,
					/*滚动速度*/
					scrollingSpeed: 600,

					/*循环滚动*/
					//					anchors: ["one", "two", "three", "four"],
					/*设置锚链接*/

					/*竖屏平滑循环滚动  首尾相连*/
//					continuousHorizontal: true,
//					continuousVertical: true,

					/*禁止垂直居中*/
					verticalCentered: false,

					/*设置页面边距*/
//					paddingTop: '10px',
//					paddingBottom: '10px',

					/*设置页面上下留白*/
					//fixedElements:"header,footer",
					
//					/*横屏滚动导航*/
//					slidesNavigation:true,
//					/*横屏导航位置*/
//					slidesNavPosition:"top",
					
//				anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
				afterLoad:function(anchorLink, index) {
					var loadedSection = $(this);
					//using index
					if(index == 1) {
						$(".top_minu").css('display','none');
					}
					if(index == 2) {
						$(".top_minu").slideDown('slow');
						$(".text-one").show("slow");
//						$(".bj2-imgs").slideDown("slow");
						$(".bj2-imgs").animate({
							'top':"100px",
						},1000)
					}
					if(index == 3) {
						$(".text-two").show("slow");
						$(".bj3-imgs").fadeIn(600);
					}
					if(index == 4) {
						$(".text-three .text").slideDown("slow");
						$(".bj4-imgs").slideDown("slow");
						$(".text-three .min_img img").eq(0).slideDown("slow");
						$(".text-three .min_img img").eq(1).delay(500).slideDown("slow");
						$(".text-three .min_img img").eq(2).delay(1000).slideDown("slow");
					}else{
						$(".text-three .min_img img").css("display","none");
					}
					if(index == 5){
						var wid=$(window).width();
						if(wid>1109){
							$(".fig1").animate({
								'left':"615px",
								"opacity": "1"
							},1200)
							
							$(".intro1img").animate({
								'left':"70px",
								"opacity": "1"
							},1200)
						}else{
							$(".fig1").animate({
								'left':"80px",
								"opacity": "1"
							},1200)
							
							$(".intro1img").animate({
								'left':"70px",
								"opacity": "1"
							},1200)
						}
					}
					if(index == 6){
						$(".fig2").animate({
							'left':"85px",
							"opacity": "1"
						},1200)
						
						$(".intro2img").animate({
							'left':"900px",
							"opacity": "1"
						},1200)
					}
					
					if(index == 7){
						$(".iQQ").slideDown("slow");
					}
				}
			});
			
//		$(".section").eq(0).css("background-image","url(img/top2.jpg)");
//		$(".section").eq(0).css("background-size", "cover");
		
		
		
//		$(".section").eq(3).css("background-image","url(img/pic3.png)");
//		$(".section").eq(3).css("background-position-x","260px");
//		$(".section").eq(3).css("background-position-y","160px");
		
		$(".section").eq(4).css("background-image","url(img/bjimg/45258172_fig_36_bg.jpg)");
		$(".section").eq(4).css("background-size", "cover");
		
		$(".section").eq(5).css("background-image","url(img/bjimg/fig_12_bg.png)");
		$(".section").eq(5).css("background-size", "cover");
		
		$(".section").css("background-repeat", "no-repeat");
		$('.dian i').eq(0).mouseover(function(){
			a();
		})
		$('.dian i').eq(1).mouseover(function(){
			b();
		})
		function a(){
			$(".img").eq(1).css("display","none");
			$(".img").eq(0).fadeIn(1500);
		}
		function b(){
			$(".img").eq(0).css("display","none");
			$(".img").eq(1).fadeIn(1500);
		}
		/*轮播*/
		var flag=true;
		function c(){
			if(flag){
				a();
				flag=false;
			}
			 else{
			 	b();
			 	flag=true;
			 }
			 
		}
		setInterval(c,3000);
		/*轮播end*/
		
	$(".min_img img").each(function(index){
		$(this).mouseover(function(){
			$(this).animate({
			'width':"170px",
			"margin":"0 2px"
			},500)	
		})
		$(this).mouseout(function(){
			$(this).animate({
			'width':"150px",
			"margin":"0 12px"
			},500)	
		})
		
	})
	
	
	$("#dl").click(function(){
		var cookie = document.cookie;
		var arrCookie = cookie.split(";");
			for (var i =0;i<arrCookie.length;i++) {
			arrCookie[i]=arrCookie[i].split("=");
		} 
//		alert(arrCookie[0][1]);
//		alert(arrCookie[1][1]);
		if($('#name').val()==arrCookie[0][1]){
			if($("#pass").val()==arrCookie[1][1]){
				alert("登录成功！");
			}else{
				alert("密码错误！");
			}
		}else{
			alert("用户名不存在！！");
		}
	})
	
	
						
})