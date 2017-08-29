$(document).ready(function(){
//   图片轮播
    var key=0;
    var timer=null;
//  圆点
    $(".circle_dot>a").click(function(){
			$(".circle_dot>a").eq($(this).index()).addClass("current_dot").siblings(".circle_dot>a").removeClass("current_dot");
			$("#circleList>li").eq($(this).index()).siblings("#circleList>li").fadeOut(300);
			$("#circleList>li").eq($(this).index()).fadeIn(300);
			$(".circle_dot>a").eq($(this).index()).addClass("current_dot").siblings(".circle_dot>a").removeClass("current_dot");
			key=$(this).index();
			console.log(sessionStorage.getItem("name"));
		})
//  按钮
    $(".btn1").click(function(){
			key--;
			if(key<0){
				key=$("#circleList>li").length-1;
			}
			$("#circleList>li").eq(key).addClass("show").siblings("#circleList>li").removeClass("show");
			$("#circleList>li").eq(key).siblings("#circleList>li").fadeOut(300);
			$("#circleList>li").eq(key).fadeIn(300);
			$(".circle_dot>a").eq(key).addClass("current_dot").siblings(".circle_dot>a").removeClass("current_dot");
		})
	$(".btn2").click(function(){
			key++;
			if(key>$("#circleList>li").length-1){
				key=0;
			}
			$("#circleList>li").eq(key).addClass("show").siblings("#circleList>li").removeClass("show");
			$("#circleList>li").eq(key).siblings("#circleList>li").fadeOut(300);
			$("#circleList>li").eq(key).fadeIn(300);
			$(".circle_dot>a").eq(key).addClass("current_dot").siblings(".circle_dot>a").removeClass("current_dot");
		})
//  定时器
    timer=setInterval(function(){
			$(".btn2").click();			
		},2000);
	$("#img_intro").mouseenter(function(){
			clearInterval(timer);
	})
	$("#img_intro").mouseleave(function(){
		timer=setInterval(function(){
				$(".btn2").click();
		},2000);
	})
//	中西医图片轮播
	var timer1=null;
	var i=0;
	timer1=setInterval(function(){
		i++;
		if(i>3){
			i=1;
		}		
		$(".zhongyao").css("background","url(img/index_img/zhongyao"+i+".png) no-repeat");
	    
	},2000)
	var timer2=null;
	var j=0;
	timer2=setInterval(function(){
		j++;
		if(j>3){
			j=1;
		}				
	    $(".xiyao").css("background","url(img/index_img/xiyao"+j+".png) no-repeat");
	},2500);
		
})
