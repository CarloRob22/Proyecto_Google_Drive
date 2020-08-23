<?php    
    header("Content-Type: application/json");
    include_once("../class/class-usuario-personal.php");
    sleep(0.5);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            $_POST = json_decode(file_get_contents('php://input'),true);
            $usuario = new UsuarioPersonal($_POST["idUsuario"], $_POST["nombre"], $_POST["apellido"], $_POST["nombreUsuario"], $_POST["contraseña"], $_POST["foto"],$_POST["idGrupo"],$_POST["archivos"]);
            $usuario->guardarUsuario();
            $resultado["mensaje"] = "Guardar usuario, informacion:". json_encode($_POST);
            echo json_encode($resultado);
        break;
        case 'GET':
            if (isset($_GET['id'])){
                UsuarioPersonal::obtenerUsuario($_GET['id']);
            }elseif(isset($_GET['idArchivos'])){
                UsuarioPersonal::obtenerArchivos($_GET['idArchivos']);
            }else{
                UsuarioPersonal::obtenerUsuarios();                 
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