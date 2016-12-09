<?php

include("../db/connect.php");
 
$login = $_POST['user'];

$pass = $_POST['pass'];

echo $login." ".$pass;
 
if(empty($login) || empty($pass)){
header("Location: index_error.php");
exit();
}
 
 /*
mysql_connect('localhost','root','*****') or die("Error al conectar " . mysql_error());
mysql_select_db('login') or die ("Error al seleccionar la Base de datos: " . mysql_error());*/

$link = connect();
$query = "select * from tbl_users where login ="."'".$login."';";
echo $query."<br>";

 
$result = mysqli_query($link,$query);
 
if($row = mysqli_fetch_array($result)){
	if($row['password'] == $pass){
		session_start();
		$_SESSION['login'] = $login;
		header("Location: ../main.php");
	}
    else{
		//header("Location: ../index.php");
		header("Location: ../index_error.php");
		exit();
	}

}
else{
	//header("Location: ../index.php");
	header("Location: ../index_error.php");
	exit();
}
 
 
?>