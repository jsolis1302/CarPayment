<?php
   
   include("../db/connect.php");
   header("Content-Type: application/json;charset=utf-8");
   
   $link = connect();
   //$link  = mysqli_connect("localhost","root","root","carpay");
   $sql = 'SELECT pay_date, amount, user_name FROM view_payment_users';
   $retval = mysqli_query( $link,$sql);

   if(! $retval ) {
      die('Could not get data: ' . mysqli_error());
   }
   $rows = array();
   while($r = mysqli_fetch_assoc($retval)) {
            $rows[] = $r;
   
      
   }
   
   echo json_encode($rows);
   
   mysqli_close($link);


   
?>
