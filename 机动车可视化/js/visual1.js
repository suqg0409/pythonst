$(function() {
$('html').fontFlex(12, 20, 114);
// 时间轴
        $(".timeP").click(function () {
            $(this).addClass("timePk");
            $(this).siblings().removeClass("timePk");
        })
        var i = -1;
        var length = $(".timeP").length;
        $("#butright").click(function () {
            i++;
            i = i >= length ? 0 : i;
            $(".timeP").eq(i).addClass("timePk");
            $(".timeP").eq(i).siblings().removeClass("timePk");
        })
        $("#butleft").click(function () {
            i--;
            i = i <= 0 ? 0 : i;
            $(".timeP").eq(i).addClass("timePk");
            $(".timeP").eq(i).siblings().removeClass("timePk");
        })
var elem = document.querySelector('.yieldBar1');//选择input元素
var init = new Powerange(elem, {disable: true,klass: 'power-ranger', min: 0, max: 100, start: 20 });//实例化powerange类并且初始化参数
var elem2 = document.querySelector('.yieldBar2');//选择input元素
var init2 = new Powerange(elem2, {disable: true,klass: 'power-ranger', min: 0, max: 100, start: 50 });//实例化powerange类并且初始化参数
var elem3 = document.querySelector('.yieldBar3');//选择input元素
var init3 = new Powerange(elem3, {disable: true,klass: 'power-ranger',min: 0, max: 100, start: 80 });//实例化powerange类并且初始化参数
var elem4 = document.querySelector('.yieldBar4');//选择input元素
var init4 = new Powerange(elem4, {disable: true,klass: 'power-ranger', min: 0, max: 100,start: 40 });//实例化powerange类并且初始化参数
var elem5 = document.querySelector('.yieldBar5');//选择input元素
var init5 = new Powerange(elem5, {disable: true,klass: 'power-ranger',min: 0, max: 100,start: 90 });//实例化powerange类并且初始化参数
var elem6 = document.querySelector('.yieldBar6');//选择input元素
var init6 = new Powerange(elem6, {disable: true,klass: 'power-ranger2',min: 0, max: 100,start: 96 });//实例化powerange类并且初始化参数
var elem7 = document.querySelector('.yieldBar7');//选择input元素
var init7 = new Powerange(elem7, {disable: true,klass: 'power-ranger3',min: 0, max: 100,start: 96 });//实例化powerange类并且初始化参数
var elem8 = document.querySelector('.yieldBar8');//选择input元素
var init8 = new Powerange(elem8, {disable: true,klass: 'power-ranger4',min: 0, max: 100,start: 96 });//实例化powerange类并且初始化参数

var oMyBar1 = new MyScrollBar({
				selId: 'mainMessage',
				bgColor: 'rgba(50, 50, 50, 0.2)',
				barColor: '#173E72',
				enterColor: '#173E72',
				enterShow: false,
				borderRadius: 2,
				width: 4
			});
var oMyBar2 = new MyScrollBar({
				selId: 'alarmMessage',
				bgColor: 'rgba(50, 50, 50, 0.2)',
				barColor: '#173E72',
				enterColor: '#173E72',
				enterShow: false,
				borderRadius: 2,
				width: 4
			});
$("#mainMessage>div>div").addClass("barstyle");  
$("#alarmMessage>div>div").addClass("barstyle");  
$("#textMessageTable tr:even").addClass("style1");  //奇数行的样式
$("#yieldTable tr:even").addClass("style1");  //奇数行的样式
$("#mainMessageTable tr:even").addClass("style1");  //奇数行的样式
$("#alarmMessageTable tr:even").addClass("style1");  //奇数行的样式
var piechart = echarts.init(($('#chart1')[0]));
option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['双怠速法','简易瞬态工况法','不透光烟度法','加载减速法','滤纸烟度法'],
        textStyle: {
        	color: '#f1f1f1',
        	fontSize: 12,
        }
    },
    grid: {
        left: '2%',
        right: '8%',
        bottom: '2%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['首次','一次复检','二次复检','三次复检','三次以上'],
			axisLine:{
            lineStyle:{
                color:'#f1f1f1',
                fontSize: 12,
                width:2
            }
        },
    },
    yAxis: {
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
            name:'双怠速法',
            type:'line',
            data:[10, 132, 101, 134, 90]
        },
        {
            name:'简易瞬态工况法',
            type:'line',
            data:[220, 182, 191, 234, 290]
        },
        {
            name:'不透光烟度法',
            type:'line',
            data:[150, 232, 201, 154, 190]
        },
        {
            name:'加载减速法',
            type:'line',
            data:[320, 332, 301, 334, 390]
        },
        {
            name:'滤纸烟度法',
            type:'line',
            data:[120, 203, 301, 234, 290]
        }
    ]
};
piechart.setOption(option);
var piechart2 = echarts.init(($('#chart2')[0]));
option = {

    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['环保一线','环保二线','环保三线'],
        textStyle: {
        	color: '#f1f1f1',
        	fontSize: 12,
        }
    },
    grid: {
        left: '2%',
        right: '8%',
        bottom: '2%',
        top:'14%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['首次','一次复检','二次复检','三次复检','三次以上'],
			axisLine:{
            lineStyle:{
                color:'#f1f1f1',
                fontSize: 12,
                width:2
            }
        },
    },
    yAxis: {
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
            name:'环保一线',
            type:'line',
            data:[10, 132, 101, 134, 90]
        },
        {
            name:'环保二线',
            type:'line',
            data:[220, 182, 191, 234, 290]
        },
        {
            name:'环保三线',
            type:'line',
            data:[150, 232, 201, 154, 190]
        },

    ]
};
piechart2.setOption(option);
var piechart3 = echarts.init(($('#chart3C')[0]));
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'cross'}
    },

//  legend: {
//      data:['',''],
//      textStyle: {
//      	color: '#f1f1f1',
//      	fontSize: 12,
//      }
//  },
    grid: {
        left: '2%',
        right: '8%',
        bottom: '2%',
        top:'22%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['首检','一次复检','2次复检','3次复检','3次以上'],
            axisLine:{
            lineStyle:{
                color:'#4EF0FE',
                fontSize: 12,
                width:2
            }
        },
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '单位:辆',
            min: 0,
            max: 8000,
            interval: 1600,
            axisLine:{
            lineStyle:{
                color:'#4EF0FE',
                fontSize: 12,
                width:1
            }
        },
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '合格率',
            min: 0,
            max: 100,
            interval:20,
            axisLine:{
            lineStyle:{
                color:'#4EF0FE',
                fontSize: 12,
                width:2
            }
        },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name:'合格率',
            type:'line',
            yAxisIndex: 1,
          	itemStyle: {
            normal: {

                color: '#0F3DDD',
                borderColor: 'rgba(219,50,51,0.2)',
                borderWidth: 12
            }
        	},
            areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 136, 212, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 136, 212, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
     	    },
            data:[87, 94, 91, 82, 94]
        },
        {
            name:'单位:辆',
            type:'bar',
         
            barWidth: 35,
            itemStyle: {
            normal: {
            	
                barBorderRadius: 35,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#4EF0FE'},
                        {offset: 1, color: '#1A6A7D'}
                    ]
                )
            }
        },
            data:[5400, 2600, 3300,3600,4000]
        },
    ]
};
piechart3.setOption(option);
window.addEventListener("resize", function () {//窗口改变时的事件监听
        piechart.resize();
        piechart2.resize();
});

});