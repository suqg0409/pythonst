$(function() {
	$('html').fontFlex(12, 20, 114);
//	$('body').css('display','block');
	$('.top-jsxm').click(function(){
		var index = $(this).index();
		if(index==0){
			topclick('.gjxm1img');
		}else if(index==1){
			topclick('.pwsfimg');
		}else if(index==2){
			topclick('.wryimg');
		}else if(index==3){
			topclick('.hjyximg');
		}else if(index==4){
			topclick('.xczfimg');
		}else if(index==5){
			topclick('.xzcfimg');
		}
	});
});
var jsxms=new Array(".gjxm1img",".pwsfimg",".wryimg",".hjyximg",".xczfimg",".xzcfimg");
var jsxms1=new Array("gjxm1img1","pwsfimg1","wryimg1","hjyximg1","xczfimg1","xzcfimg1");
///*//top点击事件*/
function topclick(id){
	 for (var i = 0; i < jsxms.length; i++) {
		if(id==jsxms[i]){
			$(id).addClass(jsxms1[i]);
		}else{
			$(jsxms[i]).removeClass(jsxms1[i]);
		}
	}
}