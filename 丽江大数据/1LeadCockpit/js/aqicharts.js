// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('aqi'));

option = {
	tooltip: {
		trigger: 'axis'
	},
	grid: {
		left: '3%',
		right: '3%',
		top: '20%',
		buttom:0,
		containLabel: true
	},
	//  toolbox: {
	//      show : true,
	//      feature : {
	//          mark : {show: true},
	//          dataView : {show: true, readOnly: false},
	//          magicType: {show: true, type: ['line', 'bar']},
	//          restore : {show: true},
	//          saveAsImage : {show: true}
	//      }
	//  },

	calculable: true,
	//	legend: {
	//		data: ['批次', {
	//			name: '检查数量',
	//			icon: 'stack'
	//		}]
	//	},
	xAxis: [{
		// 		boundaryGap: false,
		type: 'category',
        position:'bottom',
		//  改变x轴字体颜色和大小
		axisLabel: {
			textStyle: {
				color: 'rgba(255,255,255,0.8)',
				fontSize: '1rem'
			},
		},
		axisTick: {
			show: false
		},
		// 			show:false,
		splitLine: {　　　　
			show: false　　
		},
		　　axisLine: {
			show: false
		},

		data: ['6-11', '6-14', '6-17', '6-20', '6-23', '6-26', '6-29', '7-2', '7-5']
	}],
	yAxis: [{
			type: 'value',
			name: '',
			nameTextStyle: {
				color: '#808080'
			},

			//  改变x轴字体颜色和大小
			axisLabel: {
				textStyle: {
					color: 'rgba(255,255,255,0.8)',
					fontSize: '1rem'
				},
			},
			axisTick: {
				show: false
			},
			// 			show:false,
			splitLine: {　　　　
				show: false　　
			},
			　　axisLine: {
				show: false
			},
			max: 300
		}

	],
	series: [{
			name: '检查数量',
			type: 'line',
			smooth: true,
			itemStyle: {
				normal: {
					color: '#00D2FF',
					lineStyle: {
						color: '#00D2FF'
					}
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(0,198,247,0.5)'
					}, {
						offset: 1,
						color: 'rgba(0,198,247,0)'
					}])
				}
			},
			data: [80, 180, 210, 120, 220, 290, 220, 180, 170]
		}

	]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.addEventListener("resize", function () {//窗口改变时的事件监听
  myChart.resize();
});