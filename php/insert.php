<?php
 include("../db/connect.php");
 include("../db/data_functions.php");
 
 $data  = json_decode(file_get_contents("php://input"));
 $pay_date = $data->pay_date;
 $amount = $data->amount;
 $login = $data->login;

 $link = Connect();
 $sql = "INSERT INTO tbl_payment (amount,pay_date,user_id) values (".$amount.", ' ".$pay_date." ', ".$login.");";
 $sql_total = "SELECT debt_amount FROM tbl_total_debt order by debt_amount;";
 mysqli_query( $link,$sql);
 
 $pay_id =  mysqli_insert_id($link);

 $retval = mysqli_query( $link,$sql_total);
 //echo $retval;

if(! $retval ) {
  die('Could not get data: ' . mysqli_error());
}
$debt_amount = mysqli_fetch_row($retval);
/*
while($r = mysqli_fetch_row($retval)) {
        $debt_amount[] = $r;

  
}*/

$amount_left = floatval($debt_amount[0])-$amount;
$months_left = get_remaining_months($link,$amount);
//$pay_id = 2;

$sql_debt = "INSERT INTO tbl_debt (amount_left,months_left,pay_id) VALUES (".$amount_left.",".$months_left.",".$pay_id.");";

mysqli_query( $link,$sql_debt);

$sql_new_debt = "INSERT INTO tbl_total_debt (debt_amount) VALUES(".$amount_left.");";
mysqli_query($link,$sql_new_debt);

 


 ?>