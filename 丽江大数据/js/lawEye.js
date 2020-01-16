$().ready(function(){
	//rem适应
	$('html').fontFlex(12, 20, 114);
	//初始化echart
	var pieChart = echarts.init(($('#echart1')[0]));
	pieChart.setOption(option);
	//折线图
	var lineChart = echarts.init(($('#echart2')[0]));
	lineChart.setOption(option2);
	//块
	var barChart3 = echarts.init(($('#echart3')[0]));
	var option3 = echart3();
	barChart3.setOption(option3);
	//多饼图
	var barChart4 = echarts.init(($('#echart4')[0]));
	var option4 = echart4();
	barChart4.setOption(option4);
	//立体柱图
	var barChart5 = echarts.init(($('#echart5')[0]));
	var option5 = echart5();
	barChart5.setOption(option5);
	//
	var gauge1 = echarts.init(($('#echart6')[0]));
	var option6 = echart6();
	gauge1.setOption(option6);
	window.addEventListener("resize", function () {//窗口改变时的事件监听
	     pieChart.resize();
	     lineChart.resize();
	     barChart3.resize();
	     barChart4.resize();
	     barChart5.resize();
	     gauge1.resize();
	});

});
//环形图
var dataOp1 = 
[
    {value:335, name:'丽江市'},
    {value:310, name:'古城区'},
    {value:434, name:'永盛县'},
    {value:235, name:'华坪县'},
    {value:748, name:'玉龙纳西族自治县'},
    {value:600, name:'宁夏彝族自治县'}
]
var option = {
    tooltip: {
        trigger: 'item',
       	formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    title: {
        text:'总数',
        left:'center',
        top:'37%',
        textStyle:{
            color:'#fff',
            fontSize:12*1,
            align:'center'
        }
    },
    legend: [
    	{
	        orient: 'vertical',
	        height:'100%',
	        itemWidth:10,
        	itemHeight:10,
        	itemGap:2,
	        //x: '80%',
	        data:['丽江市','古城区','永盛县','华坪县'],
	        top:'middle',
	        left:'6%',
	        textStyle:{
	           	color:'#FFFFFF',
	           	fontSize:10,
	           	rich: {
	                a: {
	                	width:'100%',
	                    height:2,
	                    //color: 'red',
	                    lineHeight: 15,
	                    verticalAlign:'bottom'
	                }
           		}
	        },
           formatter:function(name){
		        //alert(name);
		        name = name.substring(0,4)+'\n' + name.substring(4);
		        return '{a|' + name + '}';
				//return name;
	    	},
	    },
	    {
	        orient: 'vertical',
	        height:'80%',
	        itemWidth:10,
        	itemHeight:10,
        	itemGap:2,
	        //x: '80%',
	        data:['玉龙纳西族自治县','宁夏彝族自治县'],
	        top:'10%',
	        right:'18%',
	        textStyle:{
	           	color:'#FFFFFF',
	           	fontSize:10,
	           	rich: {
	                a: {
	                	width:'100%',
	                    height:2,
	                    lineHeight: 15,
	                    verticalAlign:'bottom'
	                }
           		}
	        },
           formatter:function(name){
		        name = name.substring(0,4)+'\n' + name.substring(4);
		        return '{a|' + name + '}';
	    	},
	    },
	    {
            selectedMode:false,
            formatter: function(name) {
                var total = 0; 
                return '174条';
            },
            data: [dataOp1[0].name],
            width:'100%',
            left: 'center',
            top: '50%',
            icon: 'none',
            align:'center',
            textStyle: {
                color: "#fff",
                fontSize: 16 * 1,
                //rich: rich
            },
        }
    ],
    series: [
        {
            name:'数量',
            type:'pie',
            radius: ['50%', '70%'],
            //center: ['30%', '50%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: false,
                    textStyle: {
                          fontSize: '12',
                          fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            color: ['#048DFA', '#51F2F5', '#1EE494','#00CEFF','#B8E986','#4A90E2'],
            data:dataOp1
        }
    ]
};
//
var option2 = {
	grid: {
	    left: '10%',
	    right: '10%',
	    bottom: '2%',
	    top:'15%',
	    height:'auto',
	    containLabel: true
	},
	/*提示狂组件*/
	tooltip: {
	    trigger: 'axis',
	//alwaysShowContent:true,
	},
	 xAxis: [{
	    type: 'category',
	    nameTextStyle:{
	    	fontSize:1,
	    },
	    boundaryGap: false,
	    data: ['丽江市','古城区','永盛县','华坪县','玉龙纳西族自治县','宁夏彝族自治县'],
	    /*坐标轴X轴线*/
	    axisLine:{
	        show:false, 
	        lineStyle:{
	            color:'#3D536A'
	        }, 
	    },
	    /*grid坐标轴间隔线*/
	    splitLine:{
	        show:true,
	        interval:0,
	        lineStyle: {
		        // 使用深浅的间隔色
		        color: '#3D536A'
		    }
	    },
	    /*坐标轴刻度线刻度*/
	    axisTick: {
	        show: false,
	        interval:0,
	        lineStyle: {
	            color: '#A0A5AA'
	        }
	    },
	    /*坐标轴刻度标签*/
	    axisLabel: {
	    	interval:0,
	    	margin:2,
	    	fontSize:11,
	        color: '#FCFDFD',
	        formatter:function(label){
	        	label = label.substring(0,4) + '\n' +label.substring(4);
	        	return label;
	        }
	    },
	}],
	yAxis: [
	    {
	    type: 'value',
	    /*坐标轴Y轴线*/
	    axisLine:{
	    	show:false,
	        lineStyle:{
	            color:'#3D536A'
	        }, 
	    },
	    axisTick: {
	        show: false,
	        lineStyle: {
	            color: '#A0A5AA'
	        }
	    },
	    axisLabel: {
	    	show:false,
	        textStyle: {
	            color: '#A0A5AA',
	           
	        }
	    },
	    splitLine:{
	        show:false
	    }
	}],
	series: [{
	    data: [5,8,8,4,12,30],
	    type: 'line',
	    /*标记的图形*/
	    symbol:'circle',
	    symbolSize:6,
	    /*数据信息文本标签*/
	    label:{
	    	show:true,
	    	color:'#FFF',
	    	rich:{
	    		a:{//强
	    			//color:'#FFF',
	    			padding:[2,10],
			    	borderWidth:1,
			    	borderRadius:1,
			    	borderColor:'rgba(0,138,255,0.8)',
	    			backgroundColor:'rgba(0,138,255,0.8)',
	    		},
	    		b:{//一般
	    			//color:'#FFF',
	    			padding:[2,6],
			    	borderWidth:1,
			    	borderRadius:1,
			    	borderColor:'rgba(0,138,255,0.5)',
	    			backgroundColor:'rgba(0,138,255,0.5)',
	    		},
	    		c:{//弱
	    			//color:'#FFF',
	    			padding:[2,6],
			    	borderWidth:1,
			    	borderRadius:1,
			    	borderColor:'rgba(0,138,255,0.2)',
	    			backgroundColor:'rgba(0,138,255,0.3)',
	    		}
	    	},
	    	//padding:[2,6],
	    	//borderWidth:1,
	    	//borderColor:'#17E6FC',
	    	formatter:function(param){
	    		var value = param.value;
	    		var valueformater = "";
	    		if(value<=5){
	    			valueformater = '{c|较弱}';
	    		}else if(value<=8){
	    			valueformater = '{b|一般}';
	    		}else{
	    			valueformater = '{a|强}';
	    		}
	    		return valueformater;
	    	},
	    },
	    stack:'总执',
	    itemStyle:{
	        color:'#1DC7FF',
	        borderType:'solid',
	        opacity:1,
	    },
	    lineStyle:{
	        color:'#1DC7FF'
	    },
	    areaStyle: {
	        color: {
	            type: 'linear',
	            x: 0,
	            y: 0,
	            x2: 0,
	            y2: 1,
	            colorStops: [{
	                offset: 0, color: 'rgba(29,199,255,0.8)' // 0% 处的颜色
	            }, {
	                offset: 1, color: 'rgba(255,255,255,0.1)' // 100% 处的颜色
	            }],
	            globalCoord: false // 缺省为 false
	            }
	        }
	    }]
};
function echart3(){
	var data = [
		{
		    "name": '宁夏彝族自治县',
		    "value": 11
		}, {
		    "name": '玉龙纳西族自治县',
		    "value": 12
		}, {
		    "name": '华坪县',
		    "value": 14
		}, {
		    "name": '永盛县',
		    "value": 14
		}, {
		    "name": '古城区',
		    "value": 16
		}, {
		    "name": '丽江市',
		    "value": 18
	}];
	var xData = [],
	    yData = [];
	var min = 50; 
	data.map(function(a, b) {
	    xData.push(a.name);
	    if (a.value === 0) {
	        yData.push(a.value + min);
	    } else {
	        yData.push(a.value);
	    }
	});
	var option3 = {
	    //backgroundColor: "#141f56",
//	    title: {
//	        text: "检查企业场次",
//	        textStyle: {
//	            color: '#fff',
//	            fontSize: '12'
//	        },
//	        subtextStyle: {
//	            color: '#90979c',
//	            fontSize: '12',
//	
//	        },
//	    },
	    tooltip: {
	        show: "true",
	        trigger: 'item',
	        backgroundColor: 'rgba(255,255,255,0.1)', // 背景
	        padding: [8, 10], //内边距
	        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
	        formatter: function(params) {
	            if (params.seriesName != "") {
	                return params.name + ' ：  ' + params.value + '次';
	            }
	        },
	
	    },
	    grid: {
	        top: '1%',
	        bottom: '5%',
	        left:'20%',
	        right:'6%',
	        height:'95%',
	        //width:'50%',
	        textStyle: {
	            color: "#fff"
	        }
	    },
	    yAxis: [{
	    	type: 'category',
	        axisTick: {
	            show: false
	        },
	        axisLine: {
	            show: false,
	            interval:0,
	            lineStyle: {
	                color: '#363e83',
	            }
	        },
	        axisLabel: {
	            //inside: false,
	            interval:0,
	            textStyle: {
	                color: '#E4E7ED',
	                //fontWeight: 'normal',
	                fontSize: '10',
	            },
				formatter:function(label){
					if(label.length>=4){
						label = label.substring(0,4) + '\n' +label.substring(4);
					}
		        	//alert(label);
		        	return label;
		        }
	        },
	        data: xData,
	    }, 
	    /*可以做右侧值*/
	    {
	        type: 'category',
	        axisLine: {
	            show: false
	        },
	        axisTick: {
	            show: false
	        },
	        axisLabel: {
	            show: false
	        },
	        splitArea: {
	            show: false
	        },
	        splitLine: {
	            show: false
	        },
	        data: xData,
	    }],
	    xAxis: {
	        type: 'value',
	        axisTick: {
	            show: false
	        },
	        axisLine: {
	            show: false,
	            lineStyle: {
	                color: '#32346c',
	            }
	        },
	        splitLine: {
	            show: false,
	            lineStyle: {
	                color: '#32346c ',
	            }
	        },
	        axisLabel: {
	            show:false,
	            textStyle: {
	                color: '#bac0c0',
	                fontWeight: 'normal',
	                fontSize: '12',
	            },
	            formatter: '{value}次',
	        },
	    },
	    series: [{
	            name: '数值',
	            type: 'bar',
	            label:{
	            	show:false,
	            	position:'right',
	            	color:'#FFF',
	            },
	            itemStyle: {
//	                normal: {
//	                    show: true,
//	                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//	                        offset: 0,
//	                        color: 'red'
//	                    }, {
//	                        offset: 1,
//	                        color: '#3b73cf'
//	                    }]),
//	                    barBorderRadius: 50,
//	                    borderWidth: 12,
//	                },
	                normal:{
		                color: {
	                        type: 'bar',
	                        colorStops: [{
	                            offset: 0,
	                            color: 'rgba(69,80,168,1)' // 0% 处的颜色
	                        }, {
	                            offset: 1,
	                            color: '#1AE9E7' // 100% 处的颜色
	                        }],
	                        globalCoord: false, // 缺省为 false
	
	                    },
		                barBorderRadius: 50,
	                    borderWidth: 12,

		            },
	                emphasis: {
	                    shadowBlur: 15,
	                    //shadowColor: 'rgba(105,123, 214, 0.7)'
	                }
	            },
	            zlevel: 2,
	            barWidth: '25%',
	            data: yData,
	        },
	        {
	            name: '',
	            type: 'bar',
	            yAxisIndex: 1,
	            zlevel: 1,
	            label:{
	            	show:true,
	            	position:'right',
	            	color:'#FFF',
	            	formatter:function(params){
	            		return data[params.dataIndex].value;
	            	}
	            },
	            itemStyle: {
	                normal: {
	                    color: 'rgba(255,255,255,0)',
	                    borderWidth: 2,
	                    //borderColor:'#13BEBF',
	                    borderColor: {
	                        type: 'bar',
	                        colorStops: [{
	                            offset: 0,
	                            color: 'rgba(69,80,168,1)' // 0% 处的颜色
	                        }, {
	                            offset: 1,
	                            color: '#1AE9E7' // 100% 处的颜色
	                        }],
	                        globalCoord: false, // 缺省为 false
	
	                    },
	                    barBorderRadius: 50,
	                    shadowBlur: {
	                        shadowColor: 'rgba(255,255,255,0)',
	                        shadowBlur: 10,
	                        shadowOffsetX: 0,
	                        shadowOffsetY: 2,
	                    },
	                }
	            },
	            barWidth: '50%',
	            data: [30,30, 30, 30, 30, 30]
	        }
	    ]
	};
	//
	
	return option3;
}
//多饼图
function echart4(){
	var option4 = {
//	    backgroundColor:'rgb(21,49,95)',
		tooltip:{
			
		},
		legend: [
			{
		        x : '20%',
		        y : '17%',
		        itemWidth:0,
		        itemHeight:0,
		        data:['丽江市'],
		        selectedMode:false,
		        textStyle:{
		        	color:'#FFF',
		        },
		        tooltip: {
			        show: false
			    },
		        
		    },
			{
		        x : '50%',
		        y : '17%',
		        itemWidth:0,
		        itemHeight:0,
		        data:['古城区'],
		        selectedMode:false,
		        textStyle:{
		        	color:'#FFF',
		        },
		   },
		   {
		        x : '80%',
		        y : '17%',
		        itemWidth:0,
		        itemHeight:0,
		        data:['永盛县'],
		        selectedMode:false,
		        textStyle:{
		        	color:'#FFF',
		        },
		    },
		    {
		        x : '20%',
		        y : '54%',
		        itemWidth:0,
		        itemHeight:0,
		        data:['华坪县'],
		        selectedMode:false,
		        textStyle:{
		        	color:'#FFF',
		        },
		    },
		    {
		        x : '50%',
		        y : '53%',
		        itemWidth:0,
		        itemHeight:0,
		        data:['玉龙纳西族自治县'],
		        formatter:'玉龙纳西\n族自治县',
		        selectedMode:false,
		        textStyle:{
		        	color:'#FFF',
		        },
		    },
		    {
		        x : '80%',
		        y : '53%',
		        itemWidth:0,
		        itemHeight:0,
		        data:['宁夏彝族自治县'],
		        formatter:'宁夏彝族\n自治县',
		        selectedMode:false,
		        textStyle:{
		        	color:'#FFF',
		        },
		    }
		],
	    series: [
		    {
		        name: '丽江市',
		        type: 'pie',
		        radius: ['25%', '32%'],
		        center:['15%','24%'],
		        color:'rgba(244,214,46,1)',
		        label: {
		            normal: {
		                position: 'center'
		            }
		        },
		        data: [
		            {
		                value: 72,
		                name: '丽江市配置人数',
		                label: {
		                    normal: {
		                    	padding: [12, 0, 0, 0],
		                        formatter:function(params){
		                        	//formatter:'{d} %'
		                        	//console.log(JSON.stringify(params));
		                        	var rounds = params.percent;
		                        	rounds = rounds.toFixed(0);
		                        	return rounds;
		                        },
		                        textStyle: {
		                            fontSize: 12
		                        }
		                    }
		                },
		                tooltip:{
		                     trigger: 'item',
		                     formatter: "{a}<br/>配置人数 : {c}"
		                }
		             }, 
		             {
		                value: 187,
		                name: '其他人员',
		                x : '20%',
		        		y : '17%',
		                label: {
		                    normal: {
		                    	show:false,
		                        //formatter: '<span style="padding-left:10%;">丽江市</span>',
		                        formatter: '丽江市',
	                         	//padding:[0,0,12,90],
		                        textStyle: {
		                            color: '#FFF',
		                            fontSize: 12,
		                            fontWeight:'normal',
		                        },
		                        
		                    }
		                },
		                itemStyle: {
		                    normal: {
		                        color: 'rgba(154,149,68,0.6)',
		                    },
		                    emphasis: {
		                        color: 'rgba(154,149,68,0.6)'
		                    }
		                },
		            }
		        ]
		    },
		    {
		        name: '古城区',
		        type: 'pie',
		        radius: ['25%', '32%'],
		        center:['45%','24%'],
		        color:'#473C8B',
		        label: {
		            normal: {
		                position: 'center'
		            }
		        },
		        data: [
			        {
			            value: 56,
			            name: '古城区：',
			            label: {
			                normal: {
			                    //formatter: '{d} %',
			                    padding: [12, 0, 0, 0],
			                    formatter:function(params){
		                        	//formatter:'{d} %'
		                        	//console.log(JSON.stringify(params));
		                        	var rounds = params.percent;
		                        	rounds = rounds.toFixed(0);
		                        	return rounds;
		                        },
			                    textStyle: {
			                        fontSize: 12
			                    }
			                }
			            },
			            itemStyle: {
			                normal: {
			                    color: 'rgba(74,144,226,0.6)'
			                },
			                emphasis: {
			                    color: 'rgba(74,144,226,0.6)'
			                }
			            },
			            tooltip:{
			                 trigger: 'item',
			                 //formatter: "{a}<br/> 到期注销数 : {c}"
			                 formatter: "{a}<br/> 配置人数: {c}"
			            }
			        }, 
			        {
			            value: 203,
			            name: '其他',
			            label: {
			                normal: {
			                	show:false,
			                    //formatter: '\n古城区',
			                    formatter: '古城区',
			                    padding:[0,0,12,90],
			                    textStyle: {
			                        color: '#FFF',
			                        fontSize: 12
			                    }
			                }
			            },
			            itemStyle: {
			                normal: {
			                    color: 'rgba(52,100,166,0.6)'
			                },
			                emphasis: {
			                    color: 'rgba(52,100,166,0.6)'
			                }
			            },
			        },
			        
		     	]
	    	},
		    {
		        name: '永盛县',
		        type: 'pie',
		        radius: ['25%', '32%'],
		        center:['75%','24%'],
		        color:'#00EE76',
		        label: {
		            normal: {
		                position: 'center'
		            }
		        },
		        data: [{
		            value: 23,
		            name: '永盛县',
		            label: {
		                normal: {
		                    //formatter: '{d} %',
		                    padding: [12, 0, 0, 0],
		                    formatter:function(params){
	                        	//formatter:'{d} %'
	                        	//console.log(JSON.stringify(params));
	                        	var rounds = params.percent;
	                        	rounds = rounds.toFixed(0);
	                        	return rounds;
	                        },
		                    textStyle: {
		                        fontSize: 12
		                    }
		                }
		            },
		            itemStyle: {
		                normal: {
		                    color: 'rgba(96,255,0,0.6)',
		                },
		                emphasis: {
		                    color: 'rgba(96,255,0,0.6)',
		                }
		            },
		            tooltip:{
		                 trigger: 'item',
		                 formatter: "{a}<br/> 配置人数 : {c}"
		            }
		        }, {
		            value: 236,
		            name: '其他',
		            label: {
		                normal: {
		                	show:false,
		                    //formatter: '\n永盛县',
		                    formatter: '永盛县',
			                padding:[0,0,12,90],
		                    textStyle: {
		                        color: '#FFF',
		                        fontSize: 12
		                    }
		                }
		            },
		            itemStyle: {
		                normal: {
		                    color: 'rgba(64,165,26,0.6)',
		                },
		                emphasis: {
		                    color: 'rgba(64,165,26,0.6)',
		                }
		            },
		        }]
		    },
		    /*---------------------华坪县-------------------------*/
		    {
		        name: '华坪县',
		        type: 'pie',
		        radius: ['25%', '32%'],
		        center:['15%','60%'],
		        color:'#00EE76',
		        label: {
		            normal: {
		                position: 'center'
		            }
		        },
		        data: [{
		            value: 20,
		            name: '华坪县',
		            label: {
		                normal: {
		                    //formatter: '{d} %',
		                    padding: [12, 0, 0, 0],
		                    formatter:function(params){
	                        	//formatter:'{d} %'
	                        	//console.log(JSON.stringify(params));
	                        	var rounds = params.percent;
	                        	rounds = rounds.toFixed(0);
	                        	return rounds;
	                        },
		                    textStyle: {
		                        fontSize: 12
		                    }
		                }
		            },
		            itemStyle: {
		                normal: {
		                    color: 'rgba(30,228,148,0.6)',
		                },
		                emphasis: {
		                    color: 'rgba(30,228,148,0.6)',
		                }
		            },
		            tooltip:{
		                 trigger: 'item',
		                 formatter: "{a}<br/> 配置人数 : {c}"
		            }
		        }, {
		            value: 239,
		            name: '其他',
		            label: {
		                normal: {
		                	show:false,
		                    //formatter: '\n永盛县',
		                    formatter: '华坪县',
			                padding:[0,0,12,90],
		                    textStyle: {
		                        color: '#FFF',
		                        fontSize: 12
		                    }
		                }
		            },
		            itemStyle: {
		                normal: {
		                    color: 'rgba(26,150,118,0.6)',
		                },
		                emphasis: {
		                    color: 'rgba(26,150,118,0.6)',
		                }
		            },
		        }]
		    },
		    /*-------------------------玉龙纳西族自治县------------------------------*/
		   {
		        name: '玉龙纳西族自治县',
		        type: 'pie',
		        radius: ['25%', '32%'],
		        center:['45%','62%'],
		        color:'#00EE76',
		        label: {
		            normal: {
		                position: 'center'
		            }
		        },
		        data: [{
		            value: 62,
		            name: '玉龙纳西族自治县',
		            label: {
		                normal: {
		                    //formatter: '{d} %',
		                    padding: [12, 0, 0, 0],
		                    formatter:function(params){
	                        	//formatter:'{d} %'
	                        	//console.log(JSON.stringify(params));
	                        	var rounds = params.percent;
	                        	rounds = rounds.toFixed(0);
	                        	return rounds;
	                        },
		                    textStyle: {
		                        fontSize: 12
		                    }
		                }
		            },
		            itemStyle: {
		                normal: {
		                    color: 'rgba(253,127,36,0.6)',
		                },
		                emphasis: {
		                    color: 'rgba(253,127,36,0.6)',
		                }
		            },
		            tooltip:{
		                 trigger: 'item',
		                 formatter: "{a}<br/> 配置人数 : {c}"
		            }
		        }, {
		            value: 197,
		            name: '其他',
		            label: {
		                normal: {
		                	show:false,
		                    //formatter: '\n永盛县',
		                    formatter: '玉龙纳西\n族自治县',
			                padding:[0,0,12,90],
		                    textStyle: {
		                        color: '#FFF',
		                        fontSize: 12
		                    }
		                }
		            },
		            itemStyle: {
		                normal: {
		                    color: 'rgba(160,89,50,0.6)',
		                },
		                emphasis: {
		                    color: 'rgba(160,89,50,0.6)',
		                }
		            },
		        }]
		    },
		    /*宁夏彝族自治县*/
		   {
		        name: '宁夏彝族自治县',
		        type: 'pie',
		        radius: ['25%', '32%'],
		        center:['75%','62%'],
		        color:'#00EE76',
		        label: {
		            normal: {
		                position: 'center'
		            }
		        },
		        data: [{
		            value: 26,
		            name: '宁夏彝族自治县',
		            label: {
		                normal: {
		                    //formatter: '{d} %',
		                    padding: [12, 0, 0, 0],
		                    formatter:function(params){
	                        	//formatter:'{d} %'
	                        	//console.log(JSON.stringify(params));
	                        	var rounds = params.percent;
	                        	rounds = rounds.toFixed(0);
	                        	return rounds;
	                        },
		                    textStyle: {
		                        fontSize: 12
		                    }
		                }
		            },
		            itemStyle: {
		                normal: {
		                    color: 'rgba(28,222,255,0.6)',
		                },
		                emphasis: {
		                    color: 'rgba(28,222,255,0.6)',
		                }
		            },
		            tooltip:{
		                 trigger: 'item',
		                 formatter: "{a}<br/> 配置人数 : {c}"
		            }
		        }, {
		            value: 233,
		            name: '其他',
		            label: {
		                normal: {
		                	show:true,
		                	show:false,
		                    //formatter: '\n永盛县',
		                    formatter: '宁夏彝族\n自治县',
			                padding:[0,0,12,90],
		                    textStyle: {
		                        color: '#FFF',
		                        fontSize: 12
		                    }
		                }
		            },
		            itemStyle: {
		                normal: {
		                    color: 'rgba(22,143,178,0.6)',
		                },
		                emphasis: {
		                    color: 'rgba(22,143,178,0.6)',
		                }
		            },
		        }]
		    },
	    ]
	};
	return option4;
}
//立体柱状图
function echart5(){
	var imgDatUrl = 'image://img/bar.jpg';
	var imgD1 = 'image://img/lawEye/test.png';
	var dimensions = ['丽江市', '古城区', '永盛县', '华坪县', '玉龙纳西族自治县', '宁夏彝族自治县'];
	var dataValue = [21, 13, 12, 10, 10, 11];
	var option5 = {
	    //backgroundColor: '#262A35',
	    grid: {
	        top: '5%',
	        bottom: '26%',
	        left:'5%',
	        right:'5%',
	        height:'69%',
	        width:'96%',
	        textStyle: {
	            color: "#fff"
	        }
	    },
	    xAxis: {
	        data: dimensions,
	        axisLabel: {
		    	interval:0,
		    	//margin:2,
		    	fontSize:11,
		        color: '#FCFDFD',
		        formatter:function(label){
		        	label = label.substring(0,4) + '\n' +label.substring(4);
		        	return label;
		        }
		    },
	        axisLine: {
	        	show:false,
	            lineStyle: {
	                color: '#51637D'
	            }
	        },
	        axisTick: {
	            show: false,
	            lineStyle: {
	                color: '#51637D'
	            }
	        }
	    },
	    yAxis: {
	        splitLine: {
	            show: false
	        },
	        axisLabel: {
	        	show:false,
	            color: '#51637D'
	        },
	        axisLine: {
	        	show:false,
	            lineStyle: {
	                color: '#51637D'
	            }
	        },
	        axisTick: {
	        	show:false,
	            lineStyle: {
	                color: '#51637D'
	            }
	        }
	    },
	    series: {
	        name: '系列',
	        type: 'pictorialBar',
			barGap: 0,
			symbolSize: ['38%', '100%'],
	        // symbolRepeat: true,
	        // symbolOffset: [0, 10],
	        //data:currentMonth,
		    data:[
			    {
			    	name:'',
			    	symbol:'image://img/lawEye/1.png',
		       	 	value:21,
			    	label:{
			            show:true,
			            position:'top',
			            color:'#4DF3FE',
			            formatter:function(param){
			                //alert(JSON.stringify(param));
			                return param.value;
			            },
		        	}
			    },
			    {
			    	name:'',
			    	symbol:'image://img/lawEye/2.png',
		       	 	value:13,
			    	label:{
			            show:true,
			            position:'top',
			            color:'#218AE3',
			            formatter:function(param){
			                 //alert(JSON.stringify(param));
			                return param.value;
			            },
		        	}
			    },
			    {
			    	name:'',
			    	symbol:'image://img/lawEye/3.png',
		       	 	value:12,
			    	label:{
			            show:true,
			            position:'top',
			            color:'#2BDCD0',
			            formatter:function(param){
			                 //alert(JSON.stringify(param));
			                return param.value;
			            },
		        	}
			    },
			    {
			    	name:'',
			    	symbol:'image://img/lawEye/4.png',
		       	 	value:10,
			    	label:{
			            show:true,
			            position:'top',
			            color:'#1EE092',
			            formatter:function(param){
			                 //alert(JSON.stringify(param));
			                return param.value;
			            },
		        	}
			    },
			    {
			    	name:'',
			    	symbol:'image://img/lawEye/5.png',
		       	 	value:10,
			    	label:{
			            show:true,
			            position:'top',
			            color:'#3AD9F5',
			            formatter:function(param){
			                 //alert(JSON.stringify(param));
			                return param.value;
			            },
		        	}
			    },
			    {
			    	name:'',
			    	symbol:'image://img/lawEye/6.png',
		       	 	value:11,
			    	label:{
			            show:true,
			            position:'top',
			            color:'#73D8B7',
			            formatter:function(param){
			                 //alert(JSON.stringify(param));
			                return param.value;
			            },
		        	}
			    },
		    ]
	    },
	};
	return option5;
}

//立体柱状图
function echart6(){
	var option6 = {
	    tooltip: {
	        formatter: "{a} <br/>{b} : {c}%"
	    },
    series: [{
        name: '国控',
        type: 'gauge',
        center: ['50%', '58%'], // 默认全局居中
        radius: '76%',
        axisLine: {
            show: false,
            lineStyle: { // 属性lineStyle控制线条样式
                color: [
                    [0.129, 'rgba(14,211,233,1)'],
                    [1, 'rgba(32,137,212, 0.3)']
                ],
                width: 15
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        pointer: {
            show: false,
            length: '0',
            width: '0'
        },
        detail: {
            formatter: '{value}%',
            offsetCenter: [0, '5%'],
            textStyle: {
                color: "#1F87D0",
                fontSize: 12,
            },
        },
        title: {
            offsetCenter: [0, '80%'], // x, y，单位px
            show: true,
            fontSize: 12,
            color:'#FFF'
        },
        data: [{
            name:'国控',
            value: 12.9,
            label: {
                textStyle: {
                    fontSize: 12
                }
            }
        }]
    }, {
        name: '市控',
        type: 'gauge',
        center: ['22%', '40%'], // 默认全局居中
        radius: '65%',
        axisLine: {
            show: false,
            lineStyle: { // 属性lineStyle控制线条样式
                color: [
                    [0.0968, 'rgba(112,209,126,1)'],
                    [1, 'rgba(112,209,126, 0.3)']
                ],
                width: 13
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        pointer: {
            show: false,
            length: '0',
            width: '0'
        },
        detail: {
            formatter: '{value}%',
            offsetCenter: [0, '5%'],
            textStyle: {
                    color:'#2CBEA1',
                    fontSize: 12,
            },
        },
        title: {
            offsetCenter: [0, '80%'], // x, y，单位px
            show: true,
            fontSize: 12,
            color:'#FFF',
        },
        data: [{
            name:'市控',
            value: 9.68,
        }]
    }, {
        name: '其它',
        type: 'gauge',
        center: ['78%', '40%'], // 默认全局居中
        radius: '65%',
        axisLine: {
            show: false,
            lineStyle: { // 属性lineStyle控制线条样式
                color: [
                    [0.7742, 'rgba(52,238,219,1)'],
                    [1, 'rgba(52,238,219, 0.3)']
                ],
                width: 13
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        pointer: {
            show: false,
            length: '0',
            width: '0'
        },
        detail: {
            formatter: '{value}%',
            offsetCenter: [0, '5%'],
            textStyle: {
                color: "rgba(35,221,212,1)",
                fontSize: 10,
            },
        },
        title: {
            offsetCenter: [0, '80%'], // x, y，单位px
            show: true,
            fontSize: 12,
            color: "#FFF",
        },
        data: [{
            name:'其它',
            value: 77.42,
        }]
    }]
};
	return option6;
}