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


 function get_remaining_months($amount){
 	$months = $amount/3900;
 	$remaining_months = 39.04 - $monts;
 	return $remaining_months;
 }





 ?>