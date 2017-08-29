<?php
    header("Content-Type: text/html; charset=utf8");
    if(!isset($_POST["submit"])){
        exit("错误执行");
    }//检测是否有submit操作 

    include('connect.php');//链接数据库    
    $phone = $_POST['phone'];//post获得用户名表单值
    $password = $_POST['password'];//post获得用户密码单值
    if ($phone && $password){//如果用户名和密码都不为空 
    	//检测数据库是否有对应的phone和password的sql
             $sql = "select * from logindata where phone = '$phone' and password = '$password'";
                    
            
             $result = mysql_query($sql);//执行sql */           
                    
             
             $test=mysql_fetch_array($result);
           
             
             $rows=mysql_num_rows($result);//返回一个数值
            
             if($test){ 
             	    echo 
             		 "<script>
                            sessionStorage.setItem('name','" . $test['name'] . "');
             	      		setTimeout(function(){window.location.href='http://lizonggui.cn/GYF/index.html';},800);
                      </script>";
                      //登录成功跳转到主页
                                   	
             }else{
                echo '<script>alert("用户名或密码错误");</script>';
                echo "
                  <script>
                          setTimeout(function(){window.location.href='http://lizonggui.cn/GYF/login.html';},1000);
                  </script>";//如果错误使用js 1秒后跳转到登录页面重试;
               }
             

    }else{//如果用户名或密码有空
              echo '<script>alert("表单填写不完整");</script>';
              echo "
                    <script>
                          setTimeout(function(){window.location.href='http://lizonggui.cn/GYF/login.html';},1000);
                    </script>";

                      //如果错误使用js 1秒后跳转到登录页面重试;
    }    
    
    mysql_close();//关闭数据库
?>