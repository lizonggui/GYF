window.onload=function(){
function $(id){
    return document.getElementById(id);
}
function fn(sr,obj,mingzi){
       sr.onblur=function(){
            if(sr.value==""){
                obj.innerHTML=mingzi+"不能为空";
                
            }  
        }
            sr.onfocus=function(){
            sr.value='';
            obj.innerHTML="";
        }
    }

fn($("username"),$("enroll_span1"),"用户名");
fn($("password"),$("enroll_span2"),"密码");




























}