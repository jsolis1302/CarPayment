<?php

function Connect(){
   $dbhost = 'localhost';
   $dbuser = 'root';
   $dbpass = 'root';
   $dbname = 'carpay';

   if(!($link = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname)))
   {
      echo "Error al conectarse";
      exit();
   }
   if(!mysqli_select_db($link,$dbname))
   {
      echo "Error seleccionando la base de datos";
      exit();
   }
   return $link;
}

$link = Connect();
mysqli_set_charset($link,"utf8");
//echo "Conexion exitosa.<br>";
mysqli_close($link);

   
?>