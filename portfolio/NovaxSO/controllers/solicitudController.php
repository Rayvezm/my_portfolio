<?php
echo '
<meta name="robots" content="noindex">
<META HTTP-EQUIV="Refresh" CONTENT="0; URL=./index.php">';
class solicitudController
{
    private $model;
    public function __construct()
    {
        require_once("./models/solicitudModel.php");
        $this->model = new solicitudModel();
    }
    public function guardar($cod, $nombres, $correo, $categoria, $comentario)
    {
        $cod = $this->model->insertar($cod, $nombres, $correo, $categoria, $comentario);
        return ($cod != false) ? header("Location:index.php?cod=" . $cod) : header("Location:index.php");
    }
}
