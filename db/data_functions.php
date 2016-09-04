<?php

 //$link = Connect();

function get_remaining_months($link,$amount){
	$sql_months = "SELECT months_left from tbl_debt order by months_left;";
	$retval =mysqli_query( $link,$sql_months);
	$first_month = 39.04;
	$months = $amount/3900;

	if(! $retval ) {
		die('Could not get data: ' . mysqli_error());
	}
	$last_month = mysqli_fetch_row($retval);
	$remaining_months = floatval($last_month[0]) - $months;

	return $remaining_months;		
 }

 function get_remaining_debt($link,$amount){
 	$sql_amount = "SELECT amount_left from tbl_debt order by amount_left;";
 	$retval = mysqli_query($link,$amount);

 	if(! $retval ) {
		die('Could not get data: ' . mysqli_error());
	}

	$last_amount = mysqli_fetch_row($retval);
	$remaining_amount = floatval($last_amount[0]) - $amount;

	return $remaining_amount;



 }



 ?>