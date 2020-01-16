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
$('.tabletitle>div').click(function() {
	$('.tabletitle>div').removeClass('tabletitleclick');
	$(this).addClass('tabletitleclick');
});
$('.kongqimenu').click(function() {
	$('.inner').removeClass('innerclick');
	$('.inner1').addClass('innerclick');
});
$('.wuranmenu').click(function() {
	$('.inner').removeClass('innerclick');
	$('.inner2').addClass('innerclick');
});
$('.shuimenu').click(function() {
	$('.inner').removeClass('innerclick');
	$('.inner3').addClass('innerclick');
});
$('.header>div').click(function() {
	$('.header>div').removeClass('headertapclick');
	$(this).addClass('headertapclick');
});
$('.hiSlider1').hiSlider();
var myChart = echarts.init(document.getElementById('KQZLmap'));
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
	myChart.resize();
});
})

