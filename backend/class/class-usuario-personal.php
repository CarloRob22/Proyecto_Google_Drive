<?php
    class UsuarioPersonal{
        private $idUsuario;
        private $nombre;
        private $apellido;
        private $nombreUsuario;
        private $contrasena;
        private $foto;
        private $idGrupo;
        private $archivos;

        public function __construct(
            $idUsuario,
            $nombre,
            $apellido,
            $nombreUsuario,
            $contrasena,
            $foto,
            $idGrupo,
            $archivos

        ){
            $this-> idUsuario = $idUsuario;
            $this-> nombre = $nombre;
            $this-> apellido = $apellido;
            $this-> nombreUsuario=$nombreUsuario;
            $this-> contrasena=$contrasena;
            $this-> foto=$foto;
            $this-> idGrupo=$idGrupo;
            $this-> archivos=$archivos;
        }

        /**
         * Get the value of idUsuario
         */ 
        public function getIdUsuario()
        {
                return $this->idUsuario;
        }

        /**
         * Set the value of idUsuario
         *
         * @return  self
         */ 
        public function setIdUsuario($idUsuario)
        {
                $this->idUsuario = $idUsuario;

                return $this;
        }

        /**
         * Get the value of nombre
         */ 
        public function getNombre()
        {
                return $this->nombre;
        }

        /**
         * Set the value of nombre
         *
         * @return  self
         */ 
        public function setNombre($nombre)
        {
                $this->nombre = $nombre;

                return $this;
        }

        /**
         * Get the value of apellido
         */ 
        public function getApellido()
        {
                return $this->apellido;
        }

        /**
         * Set the value of apellido
         *
         * @return  self
         */ 
        public function setApellido($apellido)
        {
                $this->apellido = $apellido;

                return $this;
        }

        /**
         * Get the value of nombreUsuario
         */ 
        public function getNombreUsuario()
        {
                return $this->nombreUsuario;
        }

        /**
         * Set the value of nombreUsuario
         *
         * @return  self
         */ 
        public function setNombreUsuario($nombreUsuario)
        {
                $this->nombreUsuario = $nombreUsuario;

                return $this;
        }

        /**
         * Get the value of contrasena
         */ 
        public function getContrasena()
        {
                return $this->contrasena;
        }

        /**
         * Set the value of contrasena
         *
         * @return  self
         */ 
        public function setContrasena($contrasena)
        {
                $this->contrasena = $contrasena;

                return $this;
        }

        /**
         * Get the value of foto
         */ 
        public function getFoto()
        {
                return $this->foto;
        }

        /**
         * Set the value of foto
         *
         * @return  self
         */ 
        public function setFoto($foto)
        {
                $this->foto = $foto;

                return $this;
        }

        /**
         * Get the value of idGrupo
         */ 
        public function getIdGrupo()
        {
                return $this->idGrupo;
        }

        /**
         * Set the value of idGrupo
         *
         * @return  self
         */ 
        public function setIdGrupo($idGrupo)
        {
                $this->idGrupo = $idGrupo;

                return $this;
        }
        /**
         * Get the value of archivos
         */ 
        public function getArchivos()
        {
                return $this->archivos;
        }

        /**
         * Set the value of archivos
         *
         * @return  self
         */ 
        public function setArchivos($archivos)
        {
                $this->archivos = $archivos;

                return $this;
        }

        public static function obtenerUsuarios(){
            $contenidoArchivo = file_get_contents('../data/usuarios-personal.json');
            echo $contenidoArchivo;
        }

        /*public static function obtenerUsuario($indice){
            $contenidoAchivo = file_get_contents("../data/usuarios-personal.json");
            $usuarios = json_decode($contenidoAchivo, true);
            echo json_encode($usuarios[$indice-1]);

        }*/

        public static function obtenerUsuario($idUsuario){
            $contenidoArchivo = file_get_contents('../data/usuarios-personal.json');
            $usuarios = json_decode($contenidoArchivo, true);
            $usuario = null;
            for ($i=0; $i <sizeof($usuarios) ; $i++) { 
                if ($usuarios[$i]["idUsuario"]==$idUsuario) {
                    $usuario = $usuarios[$i];
                    break;
                }
            }
            $usuarioResultante = json_encode($usuario); 
            echo $usuarioResultante;
            
        }

        public static function obtenerArchivos($idUsuario){
                $contenidoArchivo = file_get_contents('../data/usuarios-personal.json');
                $usuarios = json_decode($contenidoArchivo, true);
                $usuario = null;
                for ($i=0; $i <sizeof($usuarios) ; $i++) { 
                    if ($usuarios[$i]["idUsuario"]==$idUsuario) {
                        $usuario = $usuarios[$i];
                        break;
                    }
                }
                $archivosResultante = json_encode($usuario["archivos"]); 
                echo $archivosResultante;
        }

        public function guardarUsuario(){
                $contenidoAchivo = file_get_contents("../data/usuarios-personal.json");
                $usuarios = json_decode($contenidoAchivo, true);
                $usuarios[] = array(
                        "idUsuario"=>$this->idUsuario,
                        "nombre" => $this->nombre,
                        "apellido" => $this->apellido,
                        "nombreUsuario" => $this->nombreUsuario,
                        "contrasena" => $this->contrasena,
                        "foto"=> $this->foto,
                        "idGrupo"=>$this->idGrupo,
                        "archivos"=>$this->archivos
                );
                $archivo = fopen("../data/usuarios-personal.json","w");
                fwrite($archivo, json_encode($usuarios));
                fclose($archivo);
        }
    }
?>