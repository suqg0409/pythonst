$(function() {
$('html').fontFlex(12, 20, 114);
//企业柱状图
var qiyechart = echarts.init(($('#qiyechart')[0]));
qiyechartoption = {
		grid: {
	        left: '2%',
	        right: '2%',
	        bottom: '10%',
	        top:'12%',
	        containLabel: true
	    },
	    xAxis: {
	        type: 'category',
	        data: ['化工', '电力', '煤炭', '医疗']
	    },
	  
	    yAxis: {
		"min": 0,
        "max": 15,
        "interval": 3,
        splitLine :{
            show: false
        },
 
	    },
	   
	    series: [{
	        data: [12, 10, 5, 8,],
	        type: 'bar',
	        barWidth: 20,
	        itemStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#2fd8de' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#33befc' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                barBorderRadius:5,
            }
        },

	    }]
	};
qiyechart.setOption(qiyechartoption);
//右下角水滴图
var paifangchart1 = echarts.init(document.getElementById('paifangchart1'));
        var paifangchart1option = {
				title: {
			        left: '31%',
			        top:'25%',
			        text: 'COD',
			      	textStyle:{
			      		color: 'rgba(47, 190, 198, 0.8)',
			      		fontWeight:'normal',
			      	}
			        
			  	},
				
				
				series: [{
					type: 'liquidFill',
					name: 'Liquid Fill',
					center: ['50%', '50%'],
					radius: '80%',
					data: [{
						name: 'COD',
						value: 0.3,
	
						direction: 'right',
						itemStyle: {
							normal: {
								color: 'rgba(47, 190, 198, 0.8)'
							},
						
						}
					}],
					backgroundStyle: {
			            borderWidth: 2,
			            borderColor: '#FFFFFF',
			            color: '#FFFFFF'
			        },
			        itemStyle: {
			            normal: {
			                shadowBlur: 0
			            }
			        },
					outline: {
			            borderDistance: 2,
			            itemStyle: {
			                borderColor: 'rgba(47, 190, 198, 0.8)',
			                borderWidth: 3
			            }
			        },
					label: {
						normal: {
							formatter: function() {
			                    return '';
			                },
							
							textStyle: {
								
								color: 'rgba(238, 249, 32, 0.8)',
								fontSize: 15,
								show:false,
							}
						}
					}
				}]
        };
paifangchart1.setOption(paifangchart1option);
var paifangchart2 = echarts.init(document.getElementById('paifangchart2'));
        var paifangchart2option = {
				title: {
			        left: '31%',
			        top:'25%',
			        text: '氨氮',
			      	textStyle:{
			      		color: 'rgba(47, 190, 198, 0.8)',
			      		fontWeight:'normal',
			      	}
			        
			  	},
				
				
				series: [{
					type: 'liquidFill',
					name: 'Liquid Fill',
					center: ['50%', '50%'],
					radius: '80%',
					data: [{
						name: '氨氮',
						value: 0.3,
	
						direction: 'right',
						itemStyle: {
							normal: {
								color: 'rgba(47, 190, 198, 0.8)'
							},
						
						}
					}],
					backgroundStyle: {
			            borderWidth: 2,
			            borderColor: '#FFFFFF',
			            color: '#FFFFFF'
			        },
			        itemStyle: {
			            normal: {
			                shadowBlur: 0
			            }
			        },
					outline: {
			            borderDistance: 2,
			            itemStyle: {
			                borderColor: 'rgba(47, 190, 198, 0.8)',
			                borderWidth: 3
			            }
			        },
					label: {
						normal: {
							formatter: function() {
			                    return '';
			                },
							
							textStyle: {
								
								color: 'rgba(238, 249, 32, 0.8)',
								fontSize: 15,
								show:false,
							}
						}
					}
				}]
        };
paifangchart2.setOption(paifangchart2option);
var paifangchart3 = echarts.init(document.getElementById('paifangchart3'));
        var paifangchart3option= {
				title: {
			        left: '31%',
			        top:'25%',
			        text: 'SO2',
			      	textStyle:{
			      		color: 'rgba(47, 190, 198, 0.8)',
			      		fontWeight:'normal',
			      	}
			        
			  	},
				
				
				series: [{
					type: 'liquidFill',
					name: 'Liquid Fill',
					center: ['50%', '50%'],
					radius: '80%',
					data: [{
						name: 'SO2',
						value: 0.3,
	
						direction: 'right',
						itemStyle: {
							normal: {
								color: 'rgba(47, 190, 198, 0.8)'
							},
						
						}
					}],
					backgroundStyle: {
			            borderWidth: 2,
			            borderColor: '#FFFFFF',
			            color: '#FFFFFF'
			        },
			        itemStyle: {
			            normal: {
			                shadowBlur: 0
			            }
			        },
					outline: {
			            borderDistance: 2,
			            itemStyle: {
			                borderColor: 'rgba(47, 190, 198, 0.8)',
			                borderWidth: 3
			            }
			        },
					label: {
						normal: {
							formatter: function() {
			                    return '';
			                },
							
							textStyle: {
								
								color: 'rgba(238, 249, 32, 0.8)',
								fontSize: 15,
								show:false,
							}
						}
					}
				}]
        };
paifangchart3.setOption(paifangchart3option);
var paifangchart4 = echarts.init(document.getElementById('paifangchart4'));
        var paifangchart4option = {
				title: {
			        left: '31%',
			        top:'25%',
			        text: 'NOX',
			      	textStyle:{
			      		color: 'rgba(47, 190, 198, 0.8)',
			      		fontWeight:'normal',
			      	}
			        
			  	},
				
				
				series: [{
					type: 'liquidFill',
					name: 'Liquid Fill',
					center: ['50%', '50%'],
					radius: '80%',
					data: [{
						name: 'NOX',
						value: 0.3,
	
						direction: 'right',
						itemStyle: {
							normal: {
								color: 'rgba(47, 190, 198, 0.8)'
							},
						
						}
					}],
					backgroundStyle: {
			            borderWidth: 2,
			            borderColor: '#FFFFFF',
			            color: '#FFFFFF'
			        },
			        itemStyle: {
			            normal: {
			                shadowBlur: 0
			            }
			        },
					outline: {
			            borderDistance: 2,
			            itemStyle: {
			                borderColor: 'rgba(47, 190, 198, 0.8)',
			                borderWidth: 3
			            }
			        },
					label: {
						normal: {
							formatter: function() {
			                    return '';
			                },
							
							textStyle: {
								
								color: 'rgba(238, 249, 32, 0.8)',
								fontSize: 15,
								show:false,
							}
						}
					}
				}]
        };
paifangchart4.setOption(paifangchart4option);


//地图
 var myChart = echarts.init(document.getElementById('mapchart'));
        $.get('shiyan.json', function (result) {

            echarts.registerMap('shiyan', result);//注册
            var option = {
                tooltip: {
                    trigger: 'item'
                },
                visualMap: {
                    min: 0,
                    max: 2500,
                    left: 'left',
                    top: 'bottom',
                    text: ['高', '低'],          // 文本，默认为数值文本
                    calculable: true,
                    inRange: {
                        color: [ 'rgb(173,237,252)', 'rgb(57,134,250)']
                    }
                },
                animation: true,
                animationDurationUpdate: 1000,
                animationEasingUpdate: 'cubicInOut',
                series: [
                    {
                        name: 'my custom map',
                        type: 'map',
                        roam: true,
                        map: 'shiyan',
                        label: {
                            normal: {
                                show:true,
                                position:[-10, -10],
                                formatter: '{b|{b}：}{c} ',
                                backgroundColor: 'rgba(238,238,238,.5)',
                                borderColor: '#aaa',
                                borderWidth: 1,
                                borderRadius: 4,
                                // shadowBlur:3,
                                // shadowOffsetX: 2,
                                // shadowOffsetY: 2,
                                // shadowColor: '#999',
                                // padding: [0, 7],
                                rich: {
                                    a: {
                                        color: '#999',
                                        lineHeight: 22,
                                        align: 'center'
                                    },
                                    // abg: {
                                    //     backgroundColor: '#333',
                                    //     width: '100%',
                                    //     align: 'right',
                                    //     height: 22,
                                    //     borderRadius: [4, 4, 0, 0]
                                    // },
                                    hr: {
                                        borderColor: '#aaa',
                                        width: '100%',
                                        borderWidth: 0.5,
                                        height: 0
                                    },
                                    b: {
                                        fontSize: 14,
                                        lineHeight: 33
                                    },
                                    per: {
                                        color: '#eee',
                                        backgroundColor: '#334455',
                                        padding: [2, 4],
                                        borderRadius: 2
                                    }
                                }
                            }
                        },
                        data: [
                            { name: '张湾区', value: randomData() },
                            { name: '茅箭区', value: randomData() },
                            { name: '丹江口市', value: randomData() },
                            { name: '房县', value: randomData() },
                            { name: '竹山县', value: randomData() },
                            { name: '竹溪县', value: randomData() },
                            { name: '郧县', value: randomData() },
                            { name: '郧西县', value: randomData() }

                        ]
                    }

                ]
            };
            myChart.setOption(option);
        });

        function randomData() {
            return Math.round(Math.random() * 2000);
      	}
window.addEventListener("resize", function () {//窗口改变时的事件监听
	qiyechart.resize();
	paifangchart1.resize();
	paifangchart2.resize();
	paifangchart3.resize();
	paifangchart4.resize();
     myChart.resize();
});

});