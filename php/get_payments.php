<?php
   
   include("../db/connect.php");
   header("Content-Type: application/json;charset=utf-8");
   
   $link = connect();
   //$link  = mysqli_connect("localhost","root","root","carpay");
   $sql = "SELECT date_format(pay_date, '%d %b %Y') as pay_date, amount, user_name FROM view_payment_users";

   
   //$sql_2 = "select sum(amount) as total from tbl_payment;"
   //$retval2 = mysqli_query($link,$sql2);
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
