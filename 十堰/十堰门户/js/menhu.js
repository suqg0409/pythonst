$(function() {
$('html').fontFlex(12, 20, 114);
$('.menhutap').click(function() {
	$('.menhutap').removeClass('menhutapclick');
	$(this).addClass('menhutapclick');
});
$('.daimianlist').click(function() {
	$('.daimianlist').removeClass('daimianlistclick');
	$(this).addClass('daimianlistclick');
});
var hjchart = echarts.init(($('#huanjingchart')[0]));
var dataStyle = { 
    normal: {
         label: {
                show: true,
                normal:{
                    formatter(v) {
                        let text = v.name
                        return text.length < 4 
                            ? text 
                            : `${text.slice(0,4)}\n${text.slice(4)}`
                    },
                    offset: [0, 0]
                }  
             },
    }
};
var chart1length=$('#huanjingchart').height();
var a1=chart1length*0.39;
var b1=chart1length*0.34;
var a2=chart1length*0.33;
var b2=chart1length*0.27;
var a3=chart1length*0.26;
var b3=chart1length*0.21;
var a4=chart1length*0.20;
var b4=chart1length*0.15;
var a5=chart1length*0.14;
var b5=chart1length*0.09;
var a6=chart1length*0.08;
var b6=chart1length*0.03;
var chart1length=$('#huanjingchart').height();
var placeHolderStyle = {
    normal : {
        color: 'rgba(0,0,0,0)',
        label: {show:true},
        labelLine: {show:false}
    },
    emphasis : {
        color: 'rgba(0,0,0,0)'
    }
};
option = {
// backgroundColor: '#f4f2e3',
     color: ['#47df92', '#44d8dd','#5382e1', '#ec6f38','#f0dd5d','#a9e24e'],
    tooltip : {
        show: true,
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    series : [
        {
            name:'Line 1',
            type:'pie',
            clockWise:false,
            radius : [b1,a1],
            itemStyle : dataStyle,
            hoverAnimation: false,
       		label: {
                show: true,
                normal:{
                    formatter(v) {
                        let text = v.name
                        return text.length < 8
                            ? text 
                            : `${text.slice(0,4)}\n${text.slice(4)}`
                    },
                    offset: [0, 0]
                }  
             },
             labelLine: {
                normal: {           
                    length2: 20,
                }
            },
            data:[
                {
                    value:300,
                    name:'专项任务'
                },
                {
                    value:50,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
         
            ]
        }, 
         {
            name:'Line 2',
            type:'pie',
            clockWise:true,
            radius : [b2, a2],
            itemStyle : dataStyle,
            hoverAnimation: false,
           	label: {
                show: true,
                normal:{
                    formatter(v) {
                        let text = v.name
                        return text.length < 8
                            ? text 
                            : `${text.slice(0,4)}\n${text.slice(4)}`
                    },
                    offset: [0, 0]
                }  
             },
             labelLine: {
                normal: {           
                    length2: 20,
                }
            },
            data:[
                {
                    value:150, 
                    name:'领导交办'
                },
                {
                    value:60,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'Line 3',
            type:'pie',
            clockWise:false,
            hoverAnimation: false,
            radius : [b3, a3],
            itemStyle : dataStyle,
           	label: {
                show: true,
                normal:{
                    formatter(v) {
                        let text = v.name
                        return text.length < 8
                            ? text 
                            : `${text.slice(0,4)}\n${text.slice(4)}`
                    },
                    offset: [0, 0]
                }  
             },
             labelLine: {
                normal: {    
                	length: 40,
                    length2: 10,
                }
            },
            data:[
                {
                    value:80, 
                    name:'日常巡查'
                },
                {
                    value:50,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'Line 4',
            type:'pie',
            clockWise:true,
            hoverAnimation: false,
            radius : [b4, a4],
            itemStyle : dataStyle,
           	label: {
                show: true,
                normal:{
                    formatter(v) {
                        let text = v.name
                        return text.length < 8
                            ? text 
                            : `${text.slice(0,4)}\n${text.slice(4)}`
                    },
                    offset: [0, 0]
                }  
             },
             labelLine: {
                normal: {  
                	length: 30,
                    length2: 20,
                }
            },
            data:[
                {
                    value:45, 
                    name:'后督察任务'
                },
                {
                    value:30,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
         {
            name:'Line 5',
            type:'pie',
            clockWise: false,
            hoverAnimation: false,
            radius : [b5, a5],
            itemStyle : dataStyle,
            label: {
                show: true,
                normal:{
                    formatter(v) {
                        let text = v.name
                        return text.length < 8
                            ? text 
                            : `${text.slice(0,4)}\n${text.slice(4)}`
                    },
                    offset: [0, 0]
                }  
             },
             labelLine: {
                normal: {           
                    length2: 40,
                }
            },
            data:[
                {
                    value:30, 
                    name:'双随机任务'
                },
                {
                    value:30,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'Line 6',
            type:'pie',
            clockWise:true,
            hoverAnimation: false,
            radius : [b6, a6],
            itemStyle : dataStyle,
           	label: {
                show: true,
                normal:{
                    formatter(v) {
                        let text = v.name
                        return text.length < 8
                            ? text 
                            : `${text.slice(0,4)}\n${text.slice(4)}`
                    },
                    offset: [0, 0]
                }  
             },
             labelLine: {
                normal: {     
                	length: 20,
                    length2: 50,
                }
            },
            data:[
                {
                    value:20, 
                    name:'信访任务'
                },
                {
                    value:20,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },

    ]
};
hjchart.setOption(option);
var xzcharts = echarts.init(($('#chufachart')[0]));
option1 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '10%',
            right: '15px',
            top: '2%',
            bottom: '2%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            min: 0,
            max: 350,
            interval: 50,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#666666'
                }
            }
        },
        yAxis: {
            type: 'category',
            data: ['房县', '郧阳区', '竹山县', '丹江口', '茅箭区', '张湾区'],
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#666666'
                }
            }
        },
        
        series: [
            {
                name: '',
                type: 'bar',
                barWidth: 14,
                data: [290, 270, 315, 300, 240, 260],
                itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0, [{
                                offset: 0,
                                color: '#0FCBED'
                           },
                            {
                                offset: 1,
                                color: '#3F9EF7'
                            }
                        ]
                    )
                	}
            	},
            }
        ]
    };
xzcharts.setOption(option1);
$('.filter-box1').selectFilter({
			});
$('.filter-box2').selectFilter({
});
$('.filter-box3').selectFilter({
		});
window.addEventListener("resize", function () {//窗口改变时的事件监听
        hjchart.resize();
        xzcharts.resize();

});
})

