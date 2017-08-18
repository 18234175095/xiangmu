var app = angular.module('app', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/home-page', {
			templateUrl: 'home-page',
			controller: 'homeController'//指定模板页对应的controller的名字
		})
		.when('/study-page', {
			templateUrl: 'study-page',
			controller: 'studyController'
		})
		.when('/course-page', {
			templateUrl: 'course-page',
			controller: 'courseController'
		})
		.when('/grad-page', {
			templateUrl: 'grad-page',
			controller: 'gradController'
		})
		.when('/group-page', {
			templateUrl: 'group-page',
			controller: 'groupController'
		})
		.when('/app-page', {
			templateUrl: 'app-page',
			controller: 'appController'
		})
		.when('/shoot-page', {
			templateUrl: 'shoot-page',
			controller: 'shootController'
		})
		.when('/denglu-page', {
			templateUrl: 'denglu-page',
			controller: 'dengluController'
		})
		.when('/zhuce-page', {
			templateUrl: 'zhuce-page',
			controller: 'zhuceController'
		})
		.otherwise({ //指定默认显示的
			redirectTo: '/home-page',
			controller: 'homeController'
		})

}])
app.factory('MyService',function(){
	return{
		name:'admin',
		pass:'admin',
		addFlag:false
	}
})
/*首页*/
app.controller('homeController', ['$scope', function($scope) {
$(function(){
	$(".top_btn li a").on("click",function(){
		var _index = $(this).index();
		$(".top_btn li a").removeClass('btn-active');
		$(this).addClass('btn-active');
//		$('li').eq(_index).addClass('active').siblings().removeClass('active');
	})
})
	var $$ = function(id) {
		return document.getElementById(id);
	}
	var start;
	var wrap = document.getElementById('wrap');
	$$('box2').innerHTML = $$('box1').innerHTML;

	function roll() {
		wrap.scrollTop++;
		//$$('cc').innerHTML=wrap.scrollTop;   //无用，纯粹做参考数值
		if($$('box1').offsetHeight - wrap.scrollTop > 0) { //尚未滚动到第二部分的顶部位置时
			if(wrap.scrollTop % wrap.offsetHeight != 0) //
			{
				return(setTimeout(roll, 10)); //20毫秒即递归一次
			} else { //当滚动的累计距离达到显示域高度的倍数时
				return(setTimeout(roll, 2000)); //等待2秒才递归调用
			}
		} else {
			setTimeout(function() {
				$$('wrap').scrollTop = 0;
				roll();
			}, 2000);
		}
	}
	setTimeout(roll, 2100);
}])
/*首页 end*/

/*top*/
app.controller('topController', ['$scope', function($scope) {
	
}])
/*top end*/
/*学习中心*/
app.controller('studyController', ['$scope','MyService', function($scope,MyService) {
	$scope.addFlag=MyService.addFlag;
	$scope.Firefly=MyService.name;
	$scope.qiandao=function(){
		$scope.qianFlag=true;
	}
}])
/*学习中心 end*/

app.controller('courseController', ['$scope', function($scope) {
}])

app.controller('gradController', ['$scope', function($scope) {
}])

app.controller('groupController', ['$scope', function($scope) {
}])

app.controller('appController', ['$scope', function($scope) {
}])
/*摄影详情页*/
app.controller('shootController', ['$scope','MyService', function($scope,MyService) {
	$scope.addFlag=MyService.addFlag;
	var vid=document.querySelector('video');
	$scope.addkecheng=function(){
		alert('加入成功！');
		MyService.addFlag=true;
	}
	
	$scope.play=function(){
		$scope.playFlag=true;
	}
	
	$scope.yinplay=function(){
		$scope.playFlag=false;
		vid.pause();
	}
	
	window.onscroll = function() {
		var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollT > 500) {
			$('#fixed').slideDown('slow')
		} else {
			$('#fixed').slideUp('slow')
		}

	}
}])
/*摄影详情页 end*/

/*登录*/
app.controller('dengluController', ['$scope','MyService', function($scope,MyService) {
	$scope.usermes='';
	$scope.passmes='';
	$scope.dlflaf=false;
	$scope.Zcmess=MyService;
	$scope.xianFlag=MyService.xian;
	$scope.userMsg=function(user){
		if(user==null){
			$scope.usermes='用户名不得为空！';
			$scope.userflag='red';
			$scope.dlflaf=false;
		}else if(user==$scope.Zcmess.name){
			$scope.usermes='';
			$scope.userflag='green';
		}else{
			$scope.usermes='用户名不正确！';
			$scope.userflag='red';
			$scope.dlflaf=false;
		}
	}
	$scope.passMsg=function(pass){
		if(pass==null){
			$scope.passmes='密码不得为空！';
			$scope.passflag='red';
			$scope.dlflaf=false;
		}else if(pass==$scope.Zcmess.pass){
			$scope.passmes='';
			$scope.passflag='green';
		}else{
			$scope.passmes='密码不正确！';
			$scope.passflag='red';
			$scope.dlflaf=false;
		}
	}
	
	$scope.Dlclick=function(user,pass){
		if(user==null){
			$scope.usermes='用户名不得为空！';
			$scope.userflag='red';
			$scope.dlflaf=false;
		}else if(user==$scope.Zcmess.name){
			$scope.usermes='';
			$scope.userflag='green';
			if(pass==null){
				$scope.passmes='密码不得为空！';
				$scope.passflag='red';
				$scope.dlflaf=false;
			}else if(pass==$scope.Zcmess.pass){
				$scope.passmes='';
				$scope.passflag='green';
				$scope.dlflaf=true;
				$scope.xianFlag=false;
			}else{
				$scope.passmes='密码不正确！';
				$scope.passflag='red';
				$scope.dlflaf=false;
			}
		}else{
			$scope.usermes='用户名不正确！';
			$scope.userflag='red';
			$scope.dlflaf=false;
		}
		
		if($scope.dlflaf){
			$('.denglu').css('display','none');
			$('.add-ke').css('display','block');
			$('.denglu-user img').css('display','block');
			$scope.xianFlag=false;
			window.location.href="#home-page"; 
//			window.history.go(-1)
		}
	}
	
}])

/*登录 end*/

/*注册*/
app.controller('zhuceController', ['$scope','MyService', function($scope,MyService) {
	$scope.changezc=MyService;
	
	$scope.zcphone='';
	$scope.zcpass='';
	$scope.qrpass='';
	$scope.passsflag='';
	$scope.phoneflag='';
	
	$scope.zhucephone=function(phone){
		if(phone==null){
			$scope.zcphone='手机号不能为空！';
			$scope.phoneflag='red'
		}else if(!(/^1[34578]\d{9}$/.test(phone))){
			$scope.zcphone='手机号有误！';
			$scope.phoneflag='red'
			 
		}else{
			$scope.zcphone='';
			$scope.phoneflag='green';
		}
	}
	
	
	
	$scope.changePass=function(pass){
		if(pass==null){
			$scope.zcpass='密码不能为空！';
			$scope.passflag='red';
			 
		}else if(!(/^\w+$/).test(pass)){
			$scope.zcpass='只能输入数字字母或下划线！';
			$scope.passflag='red';
			 
		}else{
			if(pass.length<6){
				$scope.zcpass='密码最少为6位！';
				$scope.passflag='red';
				 
			}else if(pass.length>20){
				$scope.zcpass='密码最多为20位！';
				$scope.passflag='red';
				 
			}else{
				$scope.zcpass='';
				$scope.passflag='green';
			}
		}
	}
	
	
	$scope.QnPass=function(pass,qrpass){
		if(qrpass==null){
			$scope.qrpass='确认密码不能为空！';
			$scope.passsflag='red';
			 
		}else if(qrpass==pass){
			$scope.qrpass='';
			$scope.passsflag='green';
		}else{
			$scope.qrpass='两次输入密码不同';
			$scope.passsflag='red';
			 
		}
	}
	
	$scope.Yanzheng=function(yanz){
		if(yanz==null){
			$scope.yanzheng='请填写验证码！';
			$scope.yanzhengflag='red';
			 
		}else{
			$scope.yanzheng='';
			$scope.yanzhengflag='green';
		}
	}
	
	
	$scope.zcclick=function(phone,pass,qrpass,yanz){
		if(phone==null){
			$scope.zcphone='手机号不能为空！';
			$scope.phoneflag='red';
			 
		}else if(!(/^1[34578]\d{9}$/.test(phone))){
			$scope.zcphone='手机号有误！';
			$scope.phoneflag='red';
			 
		}else{
			$scope.zcphone='';
			$scope.phoneflag='green';
			if(pass==null){
				$scope.zcpass='密码不能为空！';
				$scope.passflag='red';
				 
			}else if(!(/^\w+$/).test(pass)){
				$scope.zcpass='只能输入数字字母或下划线！';
				$scope.passflag='red';
				 
			}else{
				if(pass.length<6){
					$scope.zcpass='密码最少为6位！';
					$scope.passflag='red';
					 
				}else if(pass.length>20){
					$scope.zcpass='密码最多为20位！';
					$scope.passflag='red';
					 
				}else{
					$scope.zcpass='';
					$scope.passflag='green';
					if(qrpass==null){
						$scope.qrpass='确认密码不能为空！';
						$scope.passsflag='red';
						 
					}else if(qrpass==pass){
						$scope.qrpass='';
						$scope.passsflag='green';
						if(yanz==null){
							$scope.yanzheng='请填写验证码！';
							$scope.yanzhengflag='red';
							 
						}else{
							$scope.yanzheng='';
							$scope.yanzhengflag='green';
							$scope.changezc.name=phone;
							$scope.changezc.pass=qrpass;
							alert('注册成功！')
							window.location.href="#denglu-page"; 
						}
					}else{
						$scope.qrpass='两次输入密码不同';
						$scope.passsflag='red';
					}
				}
			}
		}
	}
}])
/*注册end*/