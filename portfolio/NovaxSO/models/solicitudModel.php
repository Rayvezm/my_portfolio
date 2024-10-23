<?php
echo '
<meta name="robots" content="noindex">
<META HTTP-EQUIV="Refresh" CONTENT="0; URL=./index.php">';
if (class_exists("Conexion")) {
} else {

    include("./config/conexion.php");
}
class solicitudModel extends Conexion
{
    private $cod;
    private $nombres;
    private $correo;
    private $categoria;
    private $comentario;
    public function __construct()
    {
        parent::Conectar();
    }

    public function __constructUsuario0($cod, $nombres, $correo, $categoria, $comentario)
    {
        $this->cod = $cod;
        $this->nombres = $nombres;
        $this->correo = $correo;
        $this->categoria = $categoria;
        $this->comentario = $comentario;
    }

    public function setCod($cod)
    {
        $this->cod = $cod;
    }
    public function getCod()
    {
        return $this->cod;
    }

    public function setNombres($nombres)
    {
        $this->nombres = $nombres;
    }
    public function getNombres()
    {
        return $this->nombres;
    }

    public function setCorreo($correo)
    {
        $this->correo = $correo;
    }
    public function getCorreo()
    {
        return $this->correo;
    }

    public function setCategoria($categoria)
    {
        $this->categoria = $categoria;
    }
    public function getCategoria()
    {
        return $this->categoria;
    }
    public function setComentario($comentario)
    {
        $this->comentario = $comentario;
    }
    public function getComentario()
    {
        return $this->comentario;
    }

    public function insertar($cod, $nombres, $correo, $categoria, $comentario)
    {
        $tiraSQL = "INSERT INTO public.solicitud(cod, nombres, correo, categoria, comentario) VALUES('" . $cod . "', '" . $nombres . "', '" . $correo . "','" . $categoria . "','" . $comentario . "')";
        $resultado = pg_query($tiraSQL) or die(pg_last_error());

        if ($resultado) {

            $sw = true;
        }
        return $sw;
    }
}
