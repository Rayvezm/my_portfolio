<?php
echo '
<meta name="robots" content="noindex">
<META HTTP-EQUIV="Refresh" CONTENT="0; URL=./index.php">';
class Conexion {
    function Conectar()
    {
        $host= "/var/run/postgresql";
        $port= "5432";
        $dbname= "novaxsoc_NOVAX";
        $user= "novaxsoc";
        $password= "Rz23081410.@.";
        $cadena= "host=$host port=$port dbname=$dbname user=$user password=$password";  
        $con = pg_connect ($cadena) or die ("Error de conexión al conectar".pg_last_error());        
        if($con == 1) {
            //echo "Se ha conectado a la base de datos con exito";
        }else {
            //echo "No se conecto";
        }
    }    
    function cerrar_conexion()
    {
    pg_close($this->con);
    return true;
    }
}
?>