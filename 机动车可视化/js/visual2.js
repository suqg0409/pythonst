$(function() {
$('html').fontFlex(12, 20, 114);
$("#carMessageTable tr:even").addClass("style1");  //奇数行的样式
$("#carTextTable tr:even").addClass("style1");  //奇数行的样式
$("#InforChangesTable tr:even").addClass("style1");  //奇数行的样式
var oMyBar2 = new MyScrollBar({
				selId: 'alarmInfordiv',
				bgColor: 'rgba(50, 50, 50, 0.2)',
				barColor: '#173E72',
				enterColor: '#173E72',
				enterShow: false,
				borderRadius: 2,
				width: 4
			});
var oMyBar3 = new MyScrollBar({
	selId: 'carTextTableroll',
	bgColor: 'rgba(50, 50, 50, 0.2)',
	barColor: '#173E72',
	enterColor: '#173E72',
	enterShow: false,
	borderRadius: 2,
	width: 4
});
var oMyBar4 = new MyScrollBar({
	selId: 'InforChangesTableroll',
	bgColor: 'rgba(50, 50, 50, 0.2)',
	barColor: '#173E72',
	enterColor: '#173E72',
	enterShow: false,
	borderRadius: 2,
	width: 4
});
$("#alarmInfordiv>div").addClass("barstyle");  
$("#carTextTableroll>div").addClass("barstyle");  
$("#InforChangesTableroll>div").addClass("barstyle");  
$('#jqmeter-container').jQMeter({
				goal:'100',
    			raised:'85',
    			width:'100px',
    			height:'50px'
			});
$('#jqmeter-container2').jQMeter({
				goal:'100',
    			raised:'65',
    			width:'100px',
    			height:'50px'
			});
$('#jqmeter-container3').jQMeter({
				goal:'100',
    			raised:'90',
    			width:'100px',
    			height:'50px'
			});
var piechart = echarts.init(($('#chart3')[0]));
option = {
	title: {
        x: 100,
        y: 10,
        text: '豫A66666车辆检测过程数据曲线图',
        textStyle: {
        	color: '#51CBFD',
        	fontSize: 20,
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
    	x: 420,
        y: 40,
        data:['简易瞬态工况法','不透光烟度法','加载减速法','滤纸烟度法'],
        textStyle: {
        	color: '#f1f1f1',
        	fontSize: 12,
        }
    },
    grid: {
        left: '4%',
        right: '8%',
        bottom: '4%',
        top: '20%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['20','60','100','140','180'],
			axisLine:{
            lineStyle:{
                color:'#f1f1f1',
                fontSize: 12,
                width:2
            }
        },
    },
    yAxis: {
    	name: '单位/辆',
        max: 350,
        type: 'value',
        axisLine:{
        lineStyle:{
            color:'#f1f1f1',
            fontSize: 12,
            width:2
        }
    },
    },
    series: [
        {
            name:'测试工况【】',
            type:'line',
            smooth: true,
            data:[10, 132, 101, 134, 90]
        },
        {
            name:'简易瞬态工况法',
            type:'line',
            smooth: true,
            data:[220, 182, 191, 234, 290]
        },
        {
            name:'不透光烟度法',
            type:'line',
            smooth: true,
            data:[150, 232, 201, 154, 190]
        },
        {
            name:'加载减速法',
            type:'line',
            smooth: true,
            data:[320, 332, 301, 334, 250]
        },
        {
            name:'滤纸烟度法',
            type:'line',
            smooth: true,
            data:[120, 203, 301, 234, 290]
        }
    ]
};
piechart.setOption(option);
window.addEventListener("resize", function () {//窗口改变时的事件监听
        piechart.resize();
});

});