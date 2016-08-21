<?php
 include("../db/connect.php");
 $data  = json_decode(file_get_contents("php://input"));
 $pay_date = $data->pay_date;
 $amount = $data->amount;
 $login = $data->login;

 $link = Connect();
 $sql = "INSERT INTO tbl_payment (amount,pay_date,user_id) values (".$amount.", ' ".$pay_date." ', ".$login.");";
 //echo $sql;
 mysqli_query( $link,$sql);





 ?>