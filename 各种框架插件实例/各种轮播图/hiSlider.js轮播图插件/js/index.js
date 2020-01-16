// 轮播图
$('.hiSlider1').hiSlider({
	isFlexible: true,
	isShowControls: false,
	isSupportTouch: true,
	titleAttr: function(curIdx) {
		return $('img', this).attr('alt');
		}
});
// 字体随屏幕放大缩小
$(function() {
    $('#nav div').fontFlex(16, 60, 30);
    $('#nav div span:last-child').fontFlex(14, 60, 30);
    $('.content').fontFlex(18, 60, 30);
    $('.mainTitle').fontFlex(18, 60, 30);
    $('#newstabs').fontFlex(18, 60, 30);
    $('#footer').fontFlex(18, 60, 30);
    $('.airWeight').fontFlex(18, 60, 30);
    $('.airLight').fontFlex(16, 60, 30);
    $('.airAQI').fontFlex(24, 60, 30);
    $('.mainTitle1').fontFlex(16, 60, 30);
    $('.mainTitle1').fontFlex(16, 60, 30);
});
// 新闻列表菜单状态
$('#newstabs li').click(function() {
    $(this).siblings('li').removeClass('navActive');
    $(this).addClass('navActive');
});
// 新闻切换
$('.guo').click(function() {
    $('.guonei').css('display','block');
    $('.shengnei').css('display','none');
    $('.shinei').css('display','none');
    $('.dongtai').css('display','none');
});
$('.sheng').click(function() {
    $('.guonei').css('display','none');
    $('.shengnei').css('display','block');
    $('.shinei').css('display','none');
    $('.dongtai').css('display','none');
});
$('.shi').click(function() {
    $('.guonei').css('display','none');
    $('.shengnei').css('display','none');
    $('.shinei').css('display','block');
    $('.dongtai').css('display','none');
});
$('.dong').click(function() {
    $('.guonei').css('display','none');
    $('.shengnei').css('display','none');
    $('.shinei').css('display','none');
    $('.dongtai').css('display','block');
});
