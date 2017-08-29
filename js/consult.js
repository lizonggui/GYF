$(document).ready(function(){
	var timer=null;
	var i=0;
	timer=setInterval(function(){
		i++;
		if(i>5){
			i=1;
		}
		if(i==1){
		    $(".welcome").css("color","#fff603");	
		}else if(i==2){
		    $(".welcome").css("color","#1bff03");
		}else if(i==3){
			$(".welcome").css("color","#03fffc");
		}else if(i==4){
			$(".welcome").css("color","#f53afc");
		}else if(i==5){
			$(".welcome").css("color","#fac904");
		}		    
	},1000)
	
//	       我的医生列表展开和隐藏
			var a=1;
            $(".expan").click(function(){
           	  a++;
           	  if(a%2==0){
           	  	$(".expan").parent().css("height","450px");
           	  	
           	  }else{
           	  	$(".expan").parent().css("height","50px");
           	  	$(".message").css("display","none");
           	  }          	  
            })            			
          //显示用户名
		var name=sessionStorage.getItem("name")||"用户名";
	    $(".user-name").text(name);           
})