//限制数量加减
function fnMaxNum() {
    var $oBtnMinus = $('.btn-minus');//减
    var $oBtnPlus = $('.btn-plus');//加
    var $oInput = $('.size-num');//input 数字
    $("#proNumber").focus(function () {
        $(this).val(""); //获取焦点时，清空数据框`
    }).blur(function () {
        var num = $(this).val();
        if (num == "" || num == "0" || num == "00") {
            $(this).val("1");
        }else{   
            var number = num;
            if (number < 100) {
                if (number <= 1){
                    $('.btn-minus').css("background-position","-220px 0");
                } else {
                    $('.btn-minus').css("background-position","-220px -30px");
                }
                $('.size-num').val(number);
            }
        }
    }).keyup(function () {
        if (!new RegExp("^[0-9]*$").test($(this).val())) {
            $(this).focus();
        }
    });
}
//数量的增加和减少
function fnNumChange() {
    // 数量增加
    $(".btn-plus").on('click', function(){
    	// alert(typeof $('.size-num').val()); 字符串类型 string
        var iVal = parseInt($(".size-num").val());//解析字符串，提取整数
        iVal++;
        if (iVal > 1 && iVal < 11) {
            $('.btn-minus').css("background-position","-220px -30px");
            $('.size-num').val(iVal);
        }
    });
    // 数量减少
    $(".btn-minus").on('click', function () {
        var iVal = parseInt($(".size-num").val());
        iVal--;
        if (iVal <= 1) {
            iVal = 1;
            //$('.btn-minus').removeClass("active");
            $('.btn-minus').css("background-position","-220px 0");
        }
        $('.size-num').val(iVal);
    });
}

$(function(){
	fnMaxNum();
	fnNumChange();
	
	//价格变化
	$('.size-num').change(function(){
		var a=parseInt($(".b-price p span").html()) ;//单价
		var b=parseInt($('.size-num').val());//input值
		var c=a*b;
		$(".b-total p span").html(c);
		$(".total-price i").html($(".b-total p").html());
		$(".cart-total i").html(c);
		$(".total-num span").html(b);
		
	})
	$('.btn-plus').click(function(){
		var a=parseInt($(".b-price p span").html()) ;//单价
		var b=parseInt($('.size-num').val());//input值
		var c=a*b;
		$(".b-total p span").html(c);//小计
		$(".total-price i").html($(".b-total p").html());
		$(".cart-total i").html(c);
		$(".total-num span").html(b);
	})
	$('.btn-minus').click(function(){
		var a=parseInt($(".b-price p span").html()) ;//单价
		var b=parseInt($('.size-num').val());//input值
		if (b<1)b=1;
		$(".total-num span").html(b);//件数
//		var jia=parseInt($(".b-total p span").html())-a
		
		$(".b-total p span").html(a*b);//小计
		$(".cart-total i").html($(".b-total p span").html());//总计
		$(".total-price i").html($(".b-total p").html());//商品金额
	})
	
	
	$("#xiadan").click(function(){
		window.location.href="pay.html"; 
	})
	
	
	
})