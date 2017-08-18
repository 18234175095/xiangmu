function csh(obj) {
	$(obj).html("<option>请选择：</option>");
}
$(function() {
	var data = {
		'山西省': {
			'太原市': [
				'迎泽区',
				'小店区',
				'尖草坪区',
				'万柏林区',
				'杏花岭区',
				'晋源区',
				'娄烦县',
				'清徐县'
				],
			'临汾市': [
				'尧都区',
				'区2',
				'区3'
				]
		},
		'陕西省': {
			'陕西省1市': [
				'区1',
				'区2',
				'区3',
				'区4',
				'区5',
				'区6'
			],
			'陕西省2市': [
				'区1',
				'区2',
				'区3'
			]
		},
	}

	//				$.each(object, function(obj,xg) {});	/*第一个遍历属性 第二个属性值*/
	$.each(data, function(obj) {
		$("#sheng").append("<option>" + obj + "</option>");
	});
	var Shi, Qu;
	$("#sheng").change(function() {
		csh("#shi");
		csh("#qu");
		csh("#jie");
		$.each(data, function(obj, shi) { /*省         {市{区:[街]}}*/
			//						console.log(shi);
			if($("#sheng").val() == obj) {
				$.each(shi, function(a, b) { /*市         {区[]}*/
					$("#shi").append("<option>" + a + "</option>")
				});
				Shi = shi;
			}
		});
	});

	$("#shi").change(function() {
		csh("#qu"); /*{市{区:[街]}}  */
		$.each(Shi, function(obj, qu) { /*区           [街]*/
			//						console.log(jie);
			if($("#shi").val() == obj) {
				$(qu).each(function(index) {
					$("#qu").append("<option>" + this + "</option>");
						$("#jindu").val(40);
						$("#jindu2").html("40");
				});
			}
		});
	});

	

})