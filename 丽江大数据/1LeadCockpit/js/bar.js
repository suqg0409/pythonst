/*横向柱状图*/
function EChart_bar(id, title, category, serise, bgColor) {
    AirAQI = echarts.init($(id)[0], 'default');
    var option = {
        //backgroundColor: '',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function (params) {

            }
            //show: false
        },
        legend: {
            data: ['line', 'bar'],
            textStyle: {
                color: '#ccc'
            },
            show: false
        },
        grid: {
            top: '1%',
            left: '8%',
            right:'5%',
            bottom: '6%',
            containLabel:true
        },
        xAxis: {
            data: category,
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            splitLine: { show: false },
            type: 'value',
            interval: 0,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            show: false
        },
        yAxis: {
            type: 'category',
            splitLine: { show: false },
            axisLine: {
                lineStyle: {
                    color: '#ccc',
                },
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            spliteArea:{
            	
            },
            data: category,
        },
        series: [
        {
            name: 'AQI',
            type: 'bar',
            barGap: '-100%',
            barWidth: 13,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,/*右/下/左/上 开始渐变的位置*/
                        [
                            { offset: 0, color: '#44dbff' },
                            { offset: 0.5, color: '#fdab47' },
                            { offset: 1, color: '#fd4747' },
                        ]
                    )
                }
            },
            label: {
                normal: {
                    show: true, //显示数字
                    position: 'right', //这里可以自己选择位置
                    textStyle: {
                        color: '#40c6ff',
                        fontSize: 12
                    },
                }
            },
            z: -11,
            data: serise
        },
        {
            name: 'AQI',
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
                normal: {
                    color: '#0f375f'
                }
            },
            symbolRepeat: true,
            symbolSize: [4, 16],
            symbolMargin: 2,
            z: -10,
            data: serise
        }],
        animation: true
    };
    //animation: true

    AirAQI.setOption(option);
    window.addEventListener("resize", function () {//窗口改变时的事件监听
	  AirAQI.resize();
	});
}
