<?php 
    header("Content-Type: text/html; charset=utf8");  
    if(!isset($_POST['submit'])){
        exit("错误执行");
    }//判断是否有submit操作
    $phone=$_POST['phone'];//获取表单里的电话号码
    $name=$_POST['username'];//获取表单里的name	
    $password=$_POST['password'];//获取表单里的password
    include('connect.php');//链接数据库
    $sql="select phone from logindata where phone='$phone'";
    $result=mysql_query($sql);
    $num=mysql_num_rows($result);
    if($num){
        echo "<script>alert('该用户已经存在！');
        	   setTimeout(function(){window.location.href='http://127.0.0.1/GYF/enroll.html';},800);
             </script>";
        
    }else{    	
    	
	    	$q="insert into logindata(phone,name,password) values ('$phone','$name','$password')";//向数据库插入表单传来的值的sql
	    	
	    	$q_result=mysql_query($q);//执行sql	    
	    	if (!$q_result){
	    		
	    	    die('Error:'. mysql_error());//如果sql执行失败输出错误
	    	}else{	    		
	    	    echo "<script>alert('恭喜！您已经成功注册');    	    	    	        	   
	    	               setTimeout(function(){window.location.href='http://127.0.0.1/GYF/login.html';},800);
	    	           </script>";//成功输出注册成功
	    	}
    }

    // mysql_close($con);//关闭数据库

?>