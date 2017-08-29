//          马云界面       
            $(".mayun_li").click(function(){
            	$(".message").css("display","block");
            	$(".mayun_box").css("display","block").siblings('div').css("display","none");
            	$(".doctor_name").html("乡村医生马云");
            	$(".head_portrait1").css({"background":"url(img/consult_img/mayun.png)","background-size":"48px 48px"});                    	
            })
//          王健林界面
			$(".wangjianlin_li").click(function(){		
            	$(".message").css("display","block");
            	$(".wangjianlin_box").css("display","block").siblings('div').css("display","none");
            	$(".doctor_name").html("万达大夫王健林");
            	$(".head_portrait1").css({"background":"url(img/consult_img/wangjianlin.png)","background-size":"48px 48px"});
            	
            })
//			马化腾界面
			$(".mahuateng_li").click(function(){				
            	$(".message").css("display","block");
            	$(".mahuateng_box").css("display","block").siblings('div').css("display","none");
            	$(".doctor_name").html("doctor马化腾");
            	$(".head_portrait1").css({"background":"url(img/consult_img/mahuateng.png)","background-size":"48px 48px"});

            })
//			信息回车发送
			$("body").keydown(function(event) {
             if (event.keyCode == "13"){//keyCode=13是回车键
             	if($("#content").val()!=""){   
             		if($(".doctor_name").text()=="乡村医生马云"){             			
		             	$(".head_portrait1").css({"background":"url(img/consult_img/mayun.png)","background-size":"48px 48px"});			            	
		                $(".mayun_box").append("<div class='boxb'><div class='head_portrait2'></div><div class='box2'><span>"+$("#content").val()+"</span><div class='box22'></div></div></div>");
						$(".mayun_box").append("<div class='boxa'><div class='head_portrait1'></div><div class='box1'><p>您好，我现在在阿里巴巴兼职还没下班，请您留言，稍后我会回复您。</p><div class='box11'></div></div></div>");				
						$(".boxb").css("display","block");
						$("#content").val("");
						$('.mayun_box').scrollTop( $('.mayun_box')[0].scrollHeight );
             		}else if($(".doctor_name").text()=="万达大夫王健林"){
             			$(".head_portrait1").css({"background":"url(img/consult_img/wangjianlin.png)","background-size":"48px 48px"});	
		                $(".wangjianlin_box").append("<div class='boxb'><div class='head_portrait2'></div><div class='box2'><span>"+$("#content").val()+"</span><div class='box22'></div></div></div>");
						$(".wangjianlin_box").append("<div class='boxa'><div class='head_portrait1'></div><div class='box1'><p>您好，我现在在万达影院兼职还没下班，请您留言，稍后我会回复您。</p><div class='box11'></div></div></div>");				
						$(".boxb").css("display","block");
						$("#content").val("");
						$('.wangjianlin_box').scrollTop( $('.wangjianlin_box')[0].scrollHeight );
             		}else{
             			$(".head_portrait1").css({"background":"url(img/consult_img/mahuateng.png)","background-size":"48px 48px"});	
		                $(".mahuateng_box").append("<div class='boxb'><div class='head_portrait2'></div><div class='box2'><span>"+$("#content").val()+"</span><div class='box22'></div></div></div>");
						$(".mahuateng_box").append("<div class='boxa'><div class='head_portrait1'></div><div class='box1'><p>您好，我现在在腾讯公司兼职还没下班，请您留言，稍后我会回复您。</p><div class='box11'></div></div></div>");				
						$(".boxb").css("display","block");
						$("#content").val("");
						$('.mahuateng_box').scrollTop( $('.mahuateng_box')[0].scrollHeight );
             		}
             	}            	
             }
           });