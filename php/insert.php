<?php
 include("../db/connect.php");
 
 $data  = json_decode(file_get_contents("php://input"));
 $pay_date = $data->pay_date;
 $amount = $data->amount;
 $login = $data->login;

 $link = Connect();
 $sql = "INSERT INTO tbl_payment (amount,pay_date,user_id) values (".$amount.", ' ".$pay_date." ', ".$login.");";
 $sql_total = "SELECT debt_amount FROM tbl_total_debt;";
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
$months_left = get_remaining_months($amount);
//$pay_id = 2;

$sql_debt = "INSERT INTO tbl_debt  (amount_left,months_left,pay_id,total_debt) VALUES (".$amount_left.",".$months_left.",".$pay_id.",".floatval($debt_amount[0]).");";

mysqli_query( $link,$sql_debt);

 function get_remaining_months($amount){

    $link = Connect();

 	$sql_months = "SELECT months_left from tbl_debt order by months_left;";
 	$retval =mysqli_query( $link,$sql_months);

 	if(! $retval ) {
  		die('Could not get data: ' . mysqli_error());
	}
 	$last_month = mysqli_fetch_row($retval);
 	$months = $amount/3900;
 	$remaining_months = floatval($last_month[0]) - $months;
 	return $remaining_months;
 }





 ?>