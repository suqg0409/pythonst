// 字体随屏幕放大缩小
$(function() {
	$('html').fontFlex(25, 64, 30);
	$('#header').fontFlex(20, 40, 30);
	$('#nav a').fontFlex(12, 16, 60);
	$('#article_mid ul a').fontFlex(12, 22, 85);
	//  响应式导航字体
	$('.dropdown-menu').fontFlex(12, 16, 60);
	$('.navbar-nav').fontFlex(12, 16, 60);
	$('.navbar-brand').fontFlex(14, 22, 60);
	$('.pdnumber').fontFlex(14, 40, 48);
	$('table_left_1 th，table_left_1 td').fontFlex(12, 22, 90);
});
//导航栏
$('.navbar-default .navbar-nav > li').click(function() {
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
});
//		var pie_chart= document.getElementById('pie_chart');  
//		var resizeContainer = function () {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽  
//		pie_chart.style.width = $('#pie_chart').width()+'px';  
// 		pie_chart.style.height =$('#pie_chart').height()+'px';  
//		};  
//
//		resizeContainer ();//设置容器高宽  
//		window.onresize = function () {//用于使chart自适应高度和宽度  
//  	resizeWorldMapContainer();//重置容器高宽  
//		 myChart.resize();  
//		};  
//饼状图实例
//$(window).resize(resizeCanvas);
function resizeCanvas() {
	var pie_chart = $("#pie_chart");
	var piechart = echarts.init(($('#pie_chart')[0]));
	var optionpie = {
		title: {
			text: ''
		},
		series: [{
			type: 'pie',
			radius: '100%',
			//以下可转换为南汀格尔图
			//		            roseType: 'angle',
			radius: ['40%', '80%'],
			avoidLabelOverlap: false,
			label: {
				normal: {
					show: false,
					position: 'center'
				},
				emphasis: {
					show: true,
					textStyle: {
						fontSize: '12',
						fontWeight: 'bold'
					}
				}
			},
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
					value: 68,
					name: '未在线',
					itemStyle: {
						normal: {
							color: '#6691A4'
						}
					}
				},
				{
					value: 32,
					name: '在线',
					itemStyle: {
						normal: {
							color: '#0574AF'
						}
					}
				},
			]
		}]
	};
	piechart.setOption(optionpie);
	window.onresize = piechart.resize;//实现echarts图表的缩放
    window.addEventListener("resize", function () {//窗口改变时的事件监听
        piechart.resize();
    });
//	alert(pie_chart.innerWidth());
	
//	var canvas = $("#pie_chart canvas");
////	alert(canvas.width())
//	
//	if($(window).get(0).innerWidth>1800){
////		alert(1)
////	alert(pie_chart.innerWidth());
////	alert(canvas.width());
//	canvas.width(400);//暂时用着
//	canvas.height(220);
////	canvas.attr("width", '280px')//这里需要百度重改
////	alert(canvas.width());
//	$("#pie_chart>div").get(0).style.overflow="hidden";
//	}

};
resizeCanvas();















//$(window).resize(function() {
//	$("#pie_chart").empty();
////	alert($('#pie_chart').width());
//	resizeCanvas()
//});
//
//function resizeCanvas() {
//	$("#pie_chart").attr("width", $("#pie_chart").get(0).innerWidth);
//	$("#pie_chart").attr("height", $("#pie_chart").get(0).innerHeight);
//	var piechart = echarts.init(($('#pie_chart')[0]));
//	var optionpie = {
//		title: {
//			text: ''
//		},
//		series: [{
//			type: 'pie',
//			radius: '100%',
//			//以下可转换为南汀格尔图
//			//		            roseType: 'angle',
//			radius: ['40%', '80%'],
//			avoidLabelOverlap: false,
//			label: {
//				normal: {
//					show: false,
//					position: 'center'
//				},
//				emphasis: {
//					show: true,
//					textStyle: {
//						fontSize: '20',
//						fontWeight: 'bold'
//					}
//				}
//			},
//			labelLine: {
//				normal: {
//					show: false
//				}
//			},
//			data: [{
//					value: 68,
//					name: '未在线',
//					itemStyle: {
//						normal: {
//							color: '#6691A4'
//						}
//					}
//				},
//				{
//					value: 32,
//					name: '在线',
//					itemStyle: {
//						normal: {
//							color: '#0574AF'
//						}
//					}
//				},
//			]
//		}]
//	};
//	piechart.setOption(optionpie);
//}
//resizeCanvas()
////		window.onresize = function(){
////
////			piechart.resize();
////			});
////		$(document).ready(function(){
////		$(window).resize(function() {
////			alert($('#pie_chart').width());
////			resizeContainer ();
////		  piechart.setOption(optionpie);
////		});
////		
////		});