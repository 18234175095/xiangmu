$(function(){

    // 快速登录/注册 与 登录表单切换
    
        var $oLoginForm = $('.login-form');
        var $oLoginNav = $oLoginForm.find('.form-nav');
        var $aNavLi = $oLoginNav.find('>li');
        var $oLoginList = $oLoginForm.find('.form-list');
        var $aListLi = $oLoginList.find('>li');
        $.each($aNavLi, function (i, ele) {
            $(ele).on('click', function () {
                $(this).addClass('active').siblings('li').removeClass('active');
                $aListLi.eq(i).addClass('active').siblings('li').removeClass('active');
            });
        });
    
    //点击登录  ，手机号切换
	    $(".btn-login").click(function(){
	    	$(".lk-dlzc").html($("#txt_Name").val());
	    })
    
    
    
    
    
})
    