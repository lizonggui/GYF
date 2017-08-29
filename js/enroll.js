window.onload=function(){


function $(id){
    return document.getElementById(id);
}

var success = false;
function fn(yz,sr,obj,text,mingzi){
       sr.onblur=function(){
            if(sr.value==""){
                obj.innerHTML=mingzi+"输入不能为空";
            }else if(yz.test(sr.value)){            	
                success = true;         
            }else{
               obj.innerHTML=text;
               success = false;
            }
        }
            sr.onfocus=function(){
            sr.value='';
            obj.innerHTML="";
        }
    }


    var usernames=/^[0-9a-zA-Z\u4e00-\u9fa5]{2,8}$/;
    var passwords=/^\w{6,16}$/;
    var phone=/^1[35789]\d{9}$/; 
//验证邮箱
 fn(phone,$('phone_input'),$('enroll_span1'),'手机号码格式不正确','手机号码');

//验证用户
fn(usernames,$('name_input'),$('enroll_span2'),'数字、字符、汉字不能超过8个，最少两个字符','用户');

 //验证密码
 fn(passwords,$('password'),$('enroll_span3'),'输入有误','密码');

//再次验证
 fn(password1,$('password1'),$('enroll_span4'),'请再次输入您的密码','密码');
 
 $('password1').onblur=function(){
 	if($('password1').value!=$('password').value){
	$('enroll_span4').innerHTML="输入密码不一致";
	success=false;
    }
 }
 
    $("enroll_input").onclick = function(e){
    	
        if(success==false){
            e.preventDefault();
            alert("注册失败");
        }else{
//      	alert("注册成功");
        	
        }
    }
 }