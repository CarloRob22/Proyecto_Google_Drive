<?php
    class UsuarioGrupal{
        private $idGrupo;
        private $nombreGrupo;
        private $integrantes;
        private $fotoGrupo;

        public function __construct(
                $idGrupo,
                $nombreGrupo,
                $integrantes,
                $fotoGrupo
        ){
               $this-> idGrupo = $idGrupo;
               $this-> nombreGrupo = $nombreGrupo;
               $this-> integrantes = $integrantes;
               $this-> fotoGrupo = $fotoGrupo;
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
         * Get the value of nombreGrupo
         */ 
        public function getNombreGrupo()
        {
                return $this->nombreGrupo;
        }

        /**
         * Set the value of nombreGrupo
         *
         * @return  self
         */ 
        public function setNombreGrupo($nombreGrupo)
        {
                $this->nombreGrupo = $nombreGrupo;

                return $this;
        }

        /**
         * Get the value of integrantes
         */ 
        public function getIntegrantes()
        {
                return $this->integrantes;
        }

        /**
         * Set the value of integrantes
         *
         * @return  self
         */ 
        public function setIntegrantes($integrantes)
        {
                $this->integrantes = $integrantes;

                return $this;
        }

        /**
         * Get the value of fotoGrupo
         */ 
        public function getFotoGrupo()
        {
                return $this->fotoGrupo;
        }

        /**
         * Set the value of fotoGrupo
         *
         * @return  self
         */ 
        public function setFotoGrupo($fotoGrupo)
        {
                $this->fotoGrupo = $fotoGrupo;

                return $this;
        }
        public static function obtenerGrupos(){
                $contenidoArchivo = file_get_contents('../data/usuarios-grupal.json');
                echo $contenidoArchivo;
        }

        public static function obtenerGrupo($idGrupo){
                $contenidoArchivo = file_get_contents('../data/usuarios-grupal.json');
                $grupos = json_decode($contenidoArchivo, true);
                $grupo = null;
                for ($i=0; $i <sizeof($grupos) ; $i++) { 
                        if ($grupos[$i]["idGrupo"]==$idGrupo) {
                        $grupo = $grupos[$i];
                        break;
                        }
                }
        $grupoResultante = json_encode($grupo); 
        echo $grupoResultante;                
        }

        public static function obtenerNombreGrupo($idGrupo){
                $contenidoArchivo = file_get_contents('../data/usuarios-grupal.json');
                $grupos = json_decode($contenidoArchivo, true);
                $nombre = null;
                for ($i=0; $i <sizeof($grupos) ; $i++) { 
                        if ($grupos[$i]["idGrupo"]==$idGrupo) {
                        $nombre = $grupos[$i];
                        break;
                        }
                }
        $nombreResultante = json_encode($nombre["nombreGrupo"]); 
        echo $nombreResultante;    
        }

        public static function obtenerArchivosGrupo($idGrupo){
                $contenidoArchivo = file_get_contents('../data/usuarios-grupal.json');
                $grupos = json_decode($contenidoArchivo, true);
                $archivos = null;
                for ($i=0; $i <sizeof($grupos) ; $i++) { 
                        if ($grupos[$i]["idGrupo"]==$idGrupo) {
                        $archivos = $grupos[$i];
                        break;
                        }
                }
        $archivosResultante = json_encode($archivos["archivos"]); 
        echo $archivosResultante;    
        }        
    }
?>