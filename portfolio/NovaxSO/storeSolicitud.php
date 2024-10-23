<?php
echo '
<meta name="robots" content="noindex">
<META HTTP-EQUIV="Refresh" CONTENT="0; URL=./index.php">';
    require_once("./controllers/solicitudController.php");
    $obj = new solicitudController();
    $obj->guardar(intval($_POST['cod']), $_POST['nombres'], $_POST['correo'], $_POST['categoria'], $_POST['comentario']);
