$(function(){
			/*js先后顺序*/
			/*所有的全屏框架需有一个父级容器*/
			/*每一级的class均为section*/
			$("#containter").fullpage({
				/*添加背景色*/
//				sectionsColor:["red","green","blue","yellow"],
				
				/*导航提示信息*/
//				navigationTooltips:["first","second","third","forth"],
//				showActiveTooltip:true ,
				/*滚动速度*/
				scrollingSpeed:500,
				
				/*横屏滚动导航*/
				slidesNavigation:true,
				/*横屏导航位置*/
				slidesNavPosition:"top",
				
				
				/*循环滚动*/
//				anchors:["one","two","three","four"],/*设置锚链接*/
//				loopTop:true,
//				loopBottom:true,
			
				/*竖屏平滑循环滚动  首尾相连*/
//				continuousHorizontal:true,
//				continuousVertical:true,
				
				/*禁止垂直居中*/
				verticalCentered:false,
				
				afterLoad:function(anchorLink, index) {
					var loadedSection = $(this);
					//using index
					if(index == 1) {
						$(".top_minu").css('display','none');
					}
					if(index == 2) {
						$(".top_minu").slideDown('slow');
						
					}
					
						
					
				}
				
			});
			
			
			for (var i=0;i<$(".message").length;i++) {
				$(".message").eq(i).delay(1000).slideDown("slow");
			}
			
		})