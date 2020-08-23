<?php    
    header("Content-Type: application/json");
    include_once("../class/class-usuario-grupal.php");
    sleep(0.5);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            //Guardar
        break;
        case 'GET':
            if (isset($_GET['idGrupo'])){
                UsuarioGrupal::obtenerGrupo($_GET['idGrupo']);
            }elseif(isset($_GET['idNombre'])){
                UsuarioGrupal::obtenerNombreGrupo($_GET['idNombre']);
            }elseif(isset($_GET['idArchivos'])){
                UsuarioGrupal::obtenerArchivosGrupo($_GET['idArchivos']);
            }else{
                UsuarioGrupal::obtenerGrupos();                 
            }                          
        break;
        case 'PUT':
            //actualizar
        break;
        case 'DELETE':
            //Eliminar
        break;
    }
?>