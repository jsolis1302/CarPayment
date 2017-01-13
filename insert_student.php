<?php
 include("connect.php");

 if(isset($_POST['nombre']) && !empty($_POST['nombre'])
 	&& isset($_POST['snombre']) && !empty($_POST['snombre'])
 	&& isset($_POST['apellido']) && !empty($_POST['apellido'])
    && isset($_POST['sapellido']) && !empty($_POST['sapellido'])
    && isset($_POST['correo']) && !empty($_POST['correo']))
    {
    	$nombre = $_POST['nombre'];
    	$snombre = $_POST['snombre'];
    	$apellido = $_POST['apellido'];
    	$sapellido = $_POST['sapellido'];
    	$correo = $_POST['correo'];

    	$query = "INSERT INTO tbl_students (first_name, last_name, second_last_name, middle_name, email)
    	          VALUES ('$nombre','$apellido','$sapellido','$snombre','$correo')";
        $link = Connect();

        mysqli_query( $link,$query);
        echo $query;

    }
    else {
    	echo "problemas al insertar";

    }
 
 
 ?>