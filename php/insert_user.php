<?php
 include("../db/connect.php");

$date = date("Y-m-d H:i:s");  
echo $date; 
 
 $data  = json_decode(file_get_contents("php://input"));
 $login = $data->login;
 $pass = $data->passw;
 $rpass = $data->rpass;
 if($pass!=$rpass)
 	 echo"la contrasnia no conincide";
 $name = $data->name;
 $lname = $data->lname;

 $md5_pass = md5($pass);

 $link = Connect();
 $sql = "INSERT INTO tbl_users (login,password,name,lastname,created_on) 
         values ('$login','$md5_pass','$name', '$lname','$date')";
  echo $sql;
 
 mysqli_query( $link,$sql);
 ?>