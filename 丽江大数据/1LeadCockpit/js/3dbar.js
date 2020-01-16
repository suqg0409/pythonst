// 基于准备好的dom，初始化echarts实例
//var myChart = echarts.init(document.getElementById('3dbar'));
var myChart = echarts.init(($('#3dbar')[0]));
var fonts='15';
var screenw = window.screen.width;
if(screenw==1366){
    fonts='8';
}
var days = ['I类', 'II类', 'III类', 'IV类', 'V类', '劣V类'];
//var color = ['','','','','',''];
var data1 = [
	[0, 0, 260],
	[1, 0, 368],
	[2, 0, 420],
	[3, 0, 196],
	[4, 0, 320],
	[5, 0, 132]
];
var data2 = [
	[0, 0, 400],
	[1, 0, 280],
	[2, 0, 320],
	[3, 0, 380],
	[4, 0, 420],
	[5, 0, 460]
];
option = {
	tooltip: {
		type: 'axis'
	},
	color: ['#51F2F5', '#1EE494', '#4A90E2', '#B8E986', '#00CEFF', '#048DFA'],
	//     visualMap: {
	//         max:400,
	//         x:-80,
	//         // colorAlpha:1,
	//         opacity:1,
	//  inRange: {
	//             color: [
	//         '#ed4949',
	//         '#b5bc00',
	//         '#0089e6',
	//         '#d17b02',
	//         '#6a90fe',
	//         '#55b946'
	//     ]
	//         }
	//     },
	// legend: {
	//     // data: ['天数', '日数'],
	//     textStyle:{
	//         color:'auto'
	//     }
	// },
	xAxis3D: {
		type: 'category',
		
		//		offset:60,
		//  改变x轴字体颜色和大小
		axisLabel: {
			textStyle: {
				// color: '#B9BDC6',
				color: '#ffffff'
				//				fontSize: '1rem'
			},
		},
		axisTick: {
			show: false
		},
		splitLine: {　　　　
			show: false　　
		},

		axisLine: {
			lineStyle: {
				color: 'transparent',
			}
		},
		data: days,
	},
	yAxis3D: {
		type: 'category',
		show: false,
		//  改变x轴字体颜色和大小
		axisLabel: {
			textStyle: {
				color: 'transparent',
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
			lineStyle: {
				color: 'transparent',
			}
		},
	},
	zAxis3D: {
		type: 'value',

		axisLabel: {
			textStyle: {
				color: 'transparent',
				fontSize: '1rem'
			},
		},
		axisTick: {
			show: false
		},

		splitLine: {　　　　
			show: false　　
		},
		axisLine: {
			lineStyle: {
				color: 'transparent',
			}
		},
	},
	grid3D: {
		boxWidth: 260,
		boxDepth: 30,
		axisPointer: {
			show: false
		},
		light: {
			main: {
				intensity: 1.2
			},
			ambient: {
				intensity: 0.3
			}
		},
		viewControl: {
			alpha: 0,
			beta: 0
		}
	},

	series: [{
		type: 'bar3D',
		name: '数量',
		stack: '总数',
		barSize: 10,
		data: [{
				value: data1[0],
				itemStyle: {
					color: '#0089e6',
					opacity: 1
				}

			},
			{
				value: data1[1],
				itemStyle: {
					color: '#6a90fe',
					opacity: 1
				}

			},
			{
				value: data1[2],
				itemStyle: {
					color: '#55b946',
					opacity: 1
				}

			}, {
				value: data1[3],
				itemStyle: {
					color: '#b5bc00',
					opacity: 1
				}

			}, {
				value: data1[4],
				itemStyle: {
					color: '#d17b02',
					opacity: 1
				}

			}, {
				value: data1[5],
				itemStyle: {
					color: '#ed4949',
					opacity: 1
				}

			}

		],
		// label: {
		//     show: false,
		//     textStyle: {
		//         fontSize: 16,
		//         borderWidth: 1
		//     }
		// },
		label: {
			show: true,
			backgroundColor: 'transparent',
			textStyle: {
				fontSize: fonts,
				borderColor: '#ed4949',
				borderWidth: 2,
				color: '#ed4949',
			}
		},

		itemStyle: {
            opacity: 1,
            normal: {
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#00a7de',
                        backgroundColor:''
                    }
                }
            }
		},

		emphasis: {
			iconStyle: {
				color: 'transparent',
				borderColor: 'transparent',
			},
			itemStyle: {
				// color:'#ff00ff',
				opacity: 1
			},
			label: {
				show: true,
				backgroundColor: '#00a7de',

				textStyle: {
					fontSize: 15,
					color: '#00a7de'
				}
			}
		}
	}]
}
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

window.addEventListener("resize", function () {//窗口改变时的事件监听
  myChart.resize();
});