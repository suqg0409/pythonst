$(function() {

	var myChart = echarts.init(document.getElementById('echart_resource'));

	var bgImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAF+CAYAAADNzDlVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAilJREFUeNrs1rENwjAURdEfC0pmQAwBDfuwE8wDDSULIGagTGEcFNHQpfPXseT0V0ryzrA/XzcRsWt3HX2fsd1XSRITc8O2JIn5RZVIdsr87mU54xT0TBL1/Sms2uPd7qPXivvp+PfKpfuGBAkStPxMf7muLXe43FiO5ViO5VjOsAoSxHIsx3Isx3Isx3KGVZAglmM5lmM5lmM5liMFQYJYjuVYjuVYjuVYTpAgQSzHcizHcizHcoZVkCCWYzmWYzmWYzmWM6yCBLEcy7Ecy7Ecy7GcIEGCWI7lWI7lWI7lDKsgQYJYjuVYjuVYjuUMqyBBLMdyLMdyLMdyLGdYBQliOZZjOZZjOZZjOUGCBLEcy7Ecy7EcyxlWQYJYjuVYjuVYjuVYzrAKEsRyLMdyLMdyLMdypCBIEMuxHMuxHMuxnGEVJEgQy7Ecy7Ecy7GcYRUkiOVYjuVYjuVYjuUMqyBBLMdyLMdyLMdyLCdIkCCWYzmWYzmWYznDKkgQy7Ecy7Ecy7EcyxlWQYJYjuVYjuVYjuVYjhQECWI5lmM5lmM5ljOsggQJYjmWYzmWYzmWM6yCBLEcy7Ecy7Ecy7GcYRUkiOVYjuVYjuVYjuUECRLEcizHcizHcixnWAUJYjmWYzmWYzmWYznDKkgQy7Ecy7Ecy7Ecy5GCIEEsx3Isx3Isx3IsJ0iQIJZjOZZjOZZjOcMqSBDLsRzLsRzL9Wy5odZqhwQJWn4+AgwApGqd0LftHcgAAAAASUVORK5CYII=';
	var fillImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAF+CAYAAADNzDlVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABFhJREFUeNrs3U+O1DgUgHHblUFzhb7GCCHNtnfMFUasOA9HYEWfAQlpZq6AEOIIdPcFZgMVe5L6Q6pLzQjFLZK2fpZSKbVioQ8n9b68+Dnxz39fXYYYrkIIF+Fxt5the5kagQkHhtepEZhvUCk01tLh3Gul3aZQwovxSwMwn8cfhW74+Lul66jJawgQIEB1QJfDdj1s5ZFvI8NzLsfluByX43KAlmzjKRdyTkYIEJeb6XK5JC7H5bhchculmLmcOASoAqjPGyMEiMtVuFyMhctxOS5X4XKlRC4nDgECBIjLLeVyXSnpqhQux+W43FyXi/Jy4hCgKqC+74wQIC5XkZdLKcvLcTkuV+FyOScuJw4Bmt/MlwPE5WprH4LaBy7H5WpcbvjgcuIQIECAuByXe0iXy4eJtOONXilx2NJh238PIYbpmPP9qvpc7O5YU+r351/KB9hyAl7C3WPO9+vqs3O5hkZocrn9H+PJwdP3Y87h/n9sNX24HKBFgLaesQLiclUul9Q+yMvJy1Xl5bLaB3EIUE3biVzvGSsgLjfb5Yb7ci7H5bhchcvFWLicOAQIECAux+W43P1QXcmpuWuotbyc2gdxCFBF29c+FHk5QFzOfDl5OS63jMsFtQ/iECBAgLgcl+Ny34PqcoMrot+cFkzEWIbtuN9/H0/R/yuyWFGf2zR8vBiLIHa5hTsFE3FGkcWifT4Pey63fqDt9hemsOYWSylGaM2t++P6zWUjS7KNuZGX1pdbO5S83Mqb9eXEIUC1gfV4r2GEAP08IHk5LsfluNzkcsEzVnEIULXLFS4HiMvNdrnh+uFyXI7LVbhcTN7hJQ4BqnU5eTlAXG6+y/XbjstxOS5X4XJ93nA5cQhQrcupYwXE5Wa7XLRWMJfjclUuV6wVLA4BAgSIyy3ncl0p6aoULsfluNxcl4vRM1ZxCBAgQFxuybWC25ov1+Wc2nK543tOj/tpeYxpOz9mzX3GERpd7uI4PWZcGuO8Hf82vSr07n5FfW7TZrPlcuIQoAqgL19+NUKAuFyFyw1xyDPWVbtci9dQY/Pl+o7LiUOA5rdD7cPGCAHicubLcTkut4jLmS8nDgF6CJdT+wCIy3kfK5fjcsu43HA/xOXEIUCVLnffhAYjBIjL/ZjLZevLcTkuV+Vyyfpy4hCgKqCvX58YIUBcbr7Lxd8/vb1u6Gf7hstxuZ/tcp6xikOAAAHicubLPYz2BHk5LsfluJzA+tja7hlrr/YBEJeb63Lx2cd38nJcjstVuFyyvpw4BAgQIC7H5bgcl3u0Lpd77/AShwBVNGuSAOJylS739MNf7blcSv1+uFI+LFmbT5avzbv/gOmY8/2q+lzc+ZWbqvZPK76OS9duvrNfV5/2XG4YMS4nDgECBIjLcbmHdLmGzjh5OS7H5cShxoGsLweIy1W63G/v/+FyXI7LVbic+XLiECBAgLgcl+NyXI7LrcXlYilFHAIEaH77T4ABAKzsRPWz+TQ7AAAAAElFTkSuQmCCgg';

	var data = [{
			name: '3日',
			value: 21
		}, {
			name: '4日',
			value: 30
		}, {
			name: '5日',
			value: 23
		}, {
			name: '6日',
			value: 50
		}, {
			name: '7日',
			value: 10
		}, {
			name: '8日',
			value: 40
		},
		{
			name: '9日',
			value: 23
		}
	];
	var maxData = [];
	var maxNumArray = [];
	data.forEach(function(value, index) {
		maxNumArray.push(value.value);
	})
	data.forEach(function(value, index) {
		var num;
		maxData.push({
			name: value.name,
			value: Math.max.apply(null, maxNumArray)
		});
	})
	var scale = 1;
	//富文本配置
	var rich = {
		white: {
			color: "#fff",
			align: 'left',
			fontSize: 18 * scale,
			padding: [0, 0]
		},
	};
	var option = {

		grid: {
			top: 4,
			left: '3%',
			right: '6%',
			bottom: '3%',
			containLabel: true
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'none'
			},
			formatter: function(params) {
				return params[0].name + ': ' + params[0].value+'G';
			}
		},
		yAxis: [{
			type: 'value',
			splitLine: {
				show: false
			},
			axisLine: {
				// show: false,
				lineStyle: {
					color: '#0b5263'
				}
			},
			axisTick: {
				show: true,
				inside: true,
				length: 10 * scale
			},
			axisLabel: {
				textStyle: {
					fontSize: 10 * scale,
					color: '#fff'
				}
			},
		}],
		xAxis: [{
			type: 'category',
			data: ['3日', '4日', '5日', '6日', '7日', '8日', '9日'],
			boundaryGap: ['20%', '20%'],
			splitLine: {
				show: false
			},
			axisLine: {
				// show: false,
				lineStyle: {
					color: '#0b5263'
				}
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				//   rotate: 45,
				padding: [15, 0, 0, 0],
				textStyle: {
					fontSize: 10 * scale,
					color: '#fff'
				}
			}
		}],
		series: [{
			name: '100',
			type: 'pictorialBar',
			stack: '总量',
			z: 3,
			barWidth: '45%',
			data: data,
			symbol: 'image://' + fillImg,
			symbolClip: true,
			symbolSize: [15, 80]
		}]
	};
	myChart.setOption(option);

	var dataChart = echarts.init(document.getElementById('echart_data'));
	optionData = {
		grid: {
			left: '2%',
			right: '8%',
			bottom: '2%',
			top: '12%',
			containLabel: true
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'none'
			},
			formatter: function(params) {
				return params[0].name + ': ' + params[0].value+'条';
			}
		},
		xAxis: {
			type: 'category',
			data: ['3月', '4日', '5月', '6月', '7月', '8月', '9月'],
			boundaryGap: false,
			axisLine: {
				lineStyle: {
					color: '#C0C6CF'

				}
			},

			splitLine: {
				show: false
			}

		},
		yAxis: {
			min: 0,
			max: 1600,
			interval: 500,
			splitLine: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: '#C0C6CF'

				}
			},
			type: 'value'
		},
		series: [{
			data: [820, 932, 901, 934, 1290, 1330, 1320],

			type: 'line',
			itemStyle: {
				normal: {
					color: '#1cdeff',

					borderColor: 'rgba(28,222,255,0.7)',
					borderWidth: 3
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(28, 222, 255, 0.5)'
					}, {
						offset: 1,
						color: 'rgba(28, 222, 255, 0.1)'
					}], false),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			},
		}]
	};
	dataChart.setOption(optionData);

});