// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('hjzfsj'));
var radius1='28%';
var radius2='55%';
var radius3='55%';
var radius4='60%';
var fonts='1.2rem';
var screenw = window.screen.width;
if(screenw==1366){
	radius1='15%';
    radius2='40%';
    radius3='40%';
    radius4='45%';
    fonts='12';
}

option = {
    tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
    legend: {
        orient: 'vertical',
        x: 'right',
        top:'1rem',
        textStyle:{//图例文字的样式
            color:'#ffffff',
            fontSize:fonts
        },
        data:[
            {name:'古城区', 
             icon:'image://./leadimg/古城区.png'},//格式为'image://+icon文件地址'，其中image::后的//不能省略
             {name: '华坪县',
             icon:'image://./leadimg/华坪县.png'},
             {name:'丽江市',
             icon:'image://./leadimg/丽江市.png'},
             {name:'宁蒗彝族自治县',
             icon:'image://./leadimg/宁蒗.png'},
             {name:'永胜县',
             icon:'image://./leadimg/永胜县.png'},
             {name:'玉龙纳西族自治县',
             icon:'image://./leadimg/玉龙.png'}
           ]
    },
    // calculable : true,
    color: ['#51F2F5','#1EE494','#4A90E2','#B8E986','#00CEFF','#048DFA'],  //每个区域颜色
    // 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: [radius1, radius2],
            center: ['38%','45%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true
                    // position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize:fonts,
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {value:10, name:'古城区'},
                {value:20, name:'华坪县'},
                {value:13, name:'丽江市'},
                {value:15, name:'宁蒗彝族自治县'},
                {value:13, name:'永胜县'},
                {value:29, name:'玉龙纳西族自治县'}
            ]
        },
        {
            name:'二级保护区',
            type:'pie',
            radius: [radius3, radius4],
            center: ['38%','45%'],
              labelLine: {
                normal: {
                    show: false
                }
            },
             itemStyle: { 
                normal:{ 
                color: '#0C4F7F'
                }
            },
            data:[
                {value:335, name:''}
            ]
        }
    ]
};


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
 window.addEventListener("resize", function () {//窗口改变时的事件监听
	  myChart.resize();
	});