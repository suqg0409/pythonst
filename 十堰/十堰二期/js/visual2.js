$(function() {
$('html').fontFlex(12, 20, 114);
//顶部进度条
var piechart = echarts.init(($('#maintopleftbar')[0]));
option = {

    xAxis: [{
        type: 'value',
        show: false

    }],
    yAxis: [{
        type: 'category',
        show: false,

    }],
    series: [{
        name: '总投资',
        type: 'bar',
        barWidth: 16,
        silent: true,
        itemStyle: {
            normal: {
                color: '#EEF6F6',
                barBorderRadius: 30,
                barBorderColor: '#8D86EE',
            }
        },
        barGap: '-100%',
        barCategoryGap: '50%',
        data:[100],
    }, {
        name: '环保收入',
        type: 'bar',
        barWidth: 16,
//      label: {
//          normal: {
//              show: true,
//              position: 'right',
//              formatter: '{c}%'
//          }
//      },
        data: [{
            value: 9,
            itemStyle: {
                normal: {
                    color: '#8D86EE',
                    barBorderRadius: 30,
                    barBorderWidth:6
                }
            }
        }]
    }]
};

piechart.setOption(option);
//右上进度条
var piechart2 = echarts.init(($('#punishchart')[0]));
 option4 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
//    legend: {
//        orient: 'vertical',
//        left: 'left',
//        data: ['未完成']
//    },
        series: [{
            name: '',
            type: 'pie',
            radius: ['60%', '70%'],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [
                {
                    value: 80,
                    name: '完成',
                    label: {
                        normal: {
                            formatter: '{d} %',
                            textStyle: {
                                fontSize: 12,
                                color: '#000'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            
                            color: '#3EC4C9'
                        },
                        emphasis: {
                            color: '#3EC4C9'
                        }
                    },
                },
                {
                    value: 20,
                    name: '未完成',
                    label: {
                        normal: {
                            formatter: '\n完成率',
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#aaa'
                        },
                        emphasis: {
                            color: '#3EC4C9'
                        }
                    },
                    hoverAnimation: false
                }
            ]
        }]
    };
    piechart2.setOption(option4);
//  污染源
    var piechart3 = echarts.init(($('#wuranchart')[0]));
    option5 = {
        legend: [{
            orient: '',
            icon: 'circle',
            left: '15',
            bottom: '10',
            data: ['在线企业', '执法企业', '超标企业']
        }],
        series: [{
            type: 'pie',
            data: [100],
            z: 2,
            radius: ['75%', '0%'],
            itemStyle: {
                normal: {
                    color: '#fff',
                }
            },
            silent: true,
            labelLine: {
                normal: {
                    show: false
                }
            }
        }, {
            type: 'pie',
            data: [100],
            z: 1,
            radius: ['76%', '0%'],
            itemStyle: {
                normal: {
                    color: '#77BBED',
                }
            },
            silent: true,
            labelLine: {
                normal: {
                    show: false
                }
            }
        }, {
            radius: ['0%', '70%'],
            name: '',
            type: 'pie',
            selectedOffset: 16, //选中是扇区偏移量
            startAngle: 90,
            z: 3,
            labelLine: {
                normal: {
                    length: 10,
                    length2: 10,
                    lineStyle: {
                        width: 2
                    }
                }
            },
            label: {
                normal: {
                    textStyle: {
                        fontSize: 12
                    },
                    formatter: function (params) {
                        return params.value + '%'
                    }
                }
            },
            color: ['#1884E9', '#FBD92B', '#43E578'],
            data: [{
                value: 77,
                name: '在线企业'
            }, {
                value: 13,
                name: '执法企业'
            }, {
                value: 10,
                name: '超标企业'
            }]
        }]
    };
    piechart3.setOption(option5);
    

//  企业信访投诉
    var piechart4 = echarts.init(($('#tousuchart')[0]));
    option2 = {
        xAxis: {
            type: 'category',
            splitLine: {show: false},//去除网格线
            data: ['投诉一次', '投诉两次', '投诉三次', '投诉四次以上']
        },

        yAxis: {
            type: 'value',
            splitLine: {show: false},
            min: 0,
            max: 15
        },
        series: [{
            data: [13, 7, 5, 3],
            type: 'bar',
            barWidth: 25,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#2ED8DE'
                    }, {
                        offset: 1,
                        color: '#2BBDFD'
                    }]),
                    shadowColor: 'rgba(0, 0, 0, 0.4)',
                    shadowBlur: 20
                }
            }
        }]
    };
    piechart4.setOption(option2);
//  环境
var piechart5 = echarts.init(($('#huanjingchart')[0]));
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
            clockWise:false,
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
            clockWise:false,
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
            clockWise:false,
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
piechart5.setOption(option);

var piechart6 = echarts.init(($('#shuiyuanchart')[0]));
option = {
        title: {
            text: '2016年第一周断面水质级别构成',
            x: 'center',
            y: 'top',
            textStyle: {
                fontWeight: 'normal',
                color: '#666666',
                fontSize: 12
            }
        },
        legend: [{
            orient: '',
            icon: 'circle',
            right: '10',
            bot: '2',
            itemGap: 5,
            data: ['I', 'II', 'III', 'IV', 'V', '劣V']
        }],
        series: [{
            type: 'pie',
            radius: [10, '60%'],
            center: ['50%', '50%'],
            roseType: 'radius',
            color: ['#11C7F8', '#15AAF1', '#23B462', '#FFD52f', '#F97637', '#FF2919'],
            data: [{
                value: 37,
                name: 'I'
            }, {
                value: 25,
                name: 'II'
            }, {
                value: 20,
                name: 'III'
            }, {
                value: 13,
                name: 'IV'
            }, {
                value: 5,
                name: 'V'
            }, {
                value: 0,
                name: '劣V'
            }],
            label: {
                normal: {
                    textStyle: {
                        fontSize: 12
                    },
                    formatter: function (param) {
                        return Math.round(param.percent) + '%';
                    }
                }
            },
            labelLine: {
                normal: {
                    length: 0,
                    length2: 20,
                    lineStyle: {
                        width: 1
                    }
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 30,
                    shadowColor: 'rgba(0, 0, 0, 0.4)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }]
    };
piechart6.setOption(option);
var piechart7 = echarts.init(($('#chufachart')[0]));
option1 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '10px',
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
                barWidth: 8,
                data: [50, 55, 25, 200, 90, 120],
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: '#20D16D'
                    }
                }
            }
        ]
    };
piechart7.setOption(option1);
 var myChart = echarts.init(document.getElementById('map'));
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
        piechart3.resize();
        piechart4.resize();
        piechart5.resize();
        piechart6.resize();
});
$('.filter-box1').selectFilter({
			});
$('.filter-box2').selectFilter({
});
$('.filter-box3').selectFilter({
		});
});