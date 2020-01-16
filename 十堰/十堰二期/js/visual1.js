$(function() {
$('html').fontFlex(12, 20, 114);
$('.wuranbt').click(function() {
	$('.click').parents('#main').find('.click').removeClass('clicked');
	$('.pollution').addClass('clicked');
	$('.parallelogram').removeClass('parallelogramClick');
	$(this).addClass('parallelogramClick');
});
$('.waterbt').click(function() {
	$('.click').parents('#main').find('.click').removeClass('clicked');
	$('.water').addClass('clicked');
	$('.parallelogram').removeClass('parallelogramClick');
	$(this).addClass('parallelogramClick');
});
$('.airbt').click(function() {
	$('.click').parents('#main').find('.click').removeClass('clicked');
	$('.air').addClass('clicked');
	$('.parallelogram').removeClass('parallelogramClick');
	$(this).addClass('parallelogramClick');
});
$('.soilbt').click(function() {
	$('.click').parents('#main').find('.click').removeClass('clicked');
	$('.soil').addClass('clicked');
	$('.parallelogram').removeClass('parallelogramClick');
	$(this).addClass('parallelogramClick');
});
$('.videobt').click(function() {
	$('.click').parents('#main').find('.click').removeClass('clicked');
	$('.video').addClass('clicked');
	$('.parallelogram').removeClass('parallelogramClick');
	$(this).addClass('parallelogramClick');
});
var piechart = echarts.init(($('#echart1main')[0]));
option = {
		grid: {
	        left: '-8%',
	        right: '2%',
	        bottom: '2%',
	        top:'12%',
	        containLabel: true
	    },
	    xAxis: {
	        type: 'category',
	        data: ['3日', '4日', '5日', '6日', '7日', '8日', '9日']
	    },
	  
	    yAxis: {
        axisLabel : {
            show: false
        },
        splitLine :{
            show: false
        },
        axisTick :{
            show: false
        }
	    },
	   
	    series: [{
	        data: [120, 200, 150, 80, 70, 110, 130],
	        type: 'bar',
	        barWidth: 20,
              itemStyle:{
              normal:{
                  color:"#5E94DA"
              }  
            }
	    }]
	};

piechart.setOption(option);

var piechart2 = echarts.init(($('#echart2main')[0]));
option2 = {
	grid: {
        left: '2%',
        right: '8%',
        bottom: '2%',
        top:'12%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        splitLine: {
            show: false
        },
        data: []
    },
    yAxis: {
    	min: 0,
        max: 1600,
        interval: 500,
        splitLine: {
            show: false
        },
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        itemStyle: {
            normal: {

                color: '#FD946A',
                borderColor: 'rgba(219,50,51,0.2)',
                borderWidth: 2
            }
        	},
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(250, 233, 216, 1)'
                }, {
                    offset: 0.8,
                    color: 'rgba(246, 246, 246, 1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
     	   },
    }]
};


piechart2.setOption(option2);
 var myChart = echarts.init(document.getElementById('mainMiddle'));
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
	 piechart.resize();
     piechart2.resize();
     myChart.resize();
});

});