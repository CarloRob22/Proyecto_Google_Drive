/*var localStorage = window.localStorage;
var archivos;

if (localStorage.getItem("archivos")==null){
    archivos=[
        {
            carpeta:false,
            Nombre:"Proyecto_poo_Netflix",
            Propietario:"Bryan Lagos",
            ultima_modif:"26 julio 2020",
            tamaño:"50 MB"
        },
        {
            carpeta:false,
            Nombre:"Proyecto_poo_Tik_tok",
            Propietario:"Juan Hernandes",
            ultima_modif:"26 julio 2020",
            tamaño:"60 MB"
        },
        {
            carpeta:false,
            Nombre:"Tarea 1",
            Propietario:"yo",
            ultima_modif:"26 julio 2020",
            tamaño:"30 MB"
        },
        {
            carpeta:false,
            Nombre:"Tarea 2",
            Propietario:"yo",
            ultima_modif:"26 julio 2020",
            tamaño:"74KB"
        },
        {
            carpeta:false,
            Nombre:"Tarea 4",
            Propietario:"yo",
            ultima_modif:"26 julio 2020",
            tamaño:"564KB"
        },
        {
            carpeta:false,
            Nombre:"Proyecto_Algoritmos",
            Propietario:"yo",
            ultima_modif:"02 marzo 2020",
            tamaño:"11KB"
        },
        {
            carpeta:true,
            Nombre:"Tarea_Ecuaciones",
            Propietario:"yo",
            ultima_modif:"22 noviembre 2019",
            tamaño:"24KB"
        },
        {
            carpeta:false,
            Nombre:"Canciones",
            Propietario:"yo",
            ultima_modif:"01 enero 2018",
            tamaño:"88KB"
        }       
    ];
    localStorage.setItem("archivos",JSON.stringify(archivos));
}else{
    archivos = JSON.parse(localStorage.getItem('archivos'));
}*/

var usuarios = [];
var archivos = [];
var archivosGrupales =[];
var grupos =[];
var usuarioSeleccionado;
const url = '../../Proyecto_Google_Drive/backend/api/usuarios-personales.php';
const url2= '../../Proyecto_Google_Drive/backend/api/usuarios-grupales.php';

function obtenerTipoUsuario(){

    if(document.getElementById('tipo-usuario').value=="personal"){
        obtenerUsuariosPersonales();
    }else{
        obtenerUsuariosGrupales();
    }
    document.getElementById('tipo-usuario').value=null;
}

function obtenerUsuariosPersonales(){
    axios({
        method: 'GET',
        url: url,
        responseType:'json',

    }).then(res=>{
        console.log(res.data);
        this.usuarios = res.data;       
        llenarDropdonw();
    }).catch(error=>{
        console.error(error);
    });
}


function llenarDropdonw(){
    document.getElementById("img-perfil").innerHTML=
    `<img class= "" style="border-radius: 16px; height:32px; width:32px;" src="img/perfiles/pedro.jpg"></img>`;
        
    document.getElementById("lista-usuarios").innerHTML= 
    `<div id="encabezado-cuenta" class="dropdown-header" style="width: 100%;">
        
    </div>
    <div class="divider"></div>`;
    for(let i=0; i<usuarios.length; i++){
        console.log(i);
        document.getElementById("lista-usuarios").innerHTML+=
        `<div class="dropdown-item">                                    
            <a onclick="seleccionar(${i}); " class="dropdown-item" href="#" style="padding-left: 0; ">
                <img class="" style="border-radius: 16px; margin-right: 10px; height:32px; width:32px;" src="${usuarios[i].foto}">
                ${usuarios[i].nombre} ${usuarios[i].apellido}
            </a>                                                          
        </div>`;
    }        
}

function obtenerUsuariosGrupales(){
    axios({
        method: 'GET',
        url: url2,
        responseType:'json',
    }).then(res=>{
        console.log(res.data);
        this.grupos = res.data;               
        llenarDropdownGrupos();
    }).catch(error=>{
        console.error(error);
    });
}

function llenarDropdownGrupos(){
    document.getElementById("img-perfil").innerHTML=
    `<img class= "" style="border-radius: 16px; height:32px; width:32px;" src="img/perfiles/grupo-2.jpg"></img>`;
        
    document.getElementById("lista-usuarios").innerHTML= 
    `<div id="encabezado-cuenta" class="dropdown-header" style="width: 100%;">
        
    </div>
    <div class="divider"></div>`;
    for(let i=0; i<grupos.length; i++){       
        document.getElementById("lista-usuarios").innerHTML+=
        `<div class="dropdown-item">                                    
            <a onclick="seleccionarGrupo(${i}); " class="dropdown-item" href="#" style="padding-left: 0; ">
                <img class="" style="border-radius: 16px; margin-right: 10px; height:32px; width:32px;" src="${grupos[i].fotoGrupo}">
                ${grupos[i].nombreGrupo} 
            </a>                                                          
        </div>`;
    }        
}


function obtenerArchivosPersonales(){
    axios({
        method: 'GET',
        url: url + `?idArchivos=${usuarioSeleccionado}`,
        responseType:'json',
    }).then(res=>{
        console.log(res.data);
        this.archivos = res.data;               
        llenarArchivos();
    }).catch(error=>{
        console.error(error);
    });
}

function llenarArchivos(){    
    document.getElementById("id-archivos").innerHTML = '';
    for (let i=0;i<archivos.length;i++)        
        document.getElementById("id-archivos").innerHTML += 
        `<tr>
            <th id="Carpeta">${ValidarCarpeta(archivos[i].carpeta)}</th>            
            <th id="Nombre">${archivos[i].nombre}</th>
            <!--<td id="Propietario" >{obtenerUsuario(archivos[i].idUsuario)}</td>-->
            <td id="ultima-modif" >${archivos[i].ultima_modif}</td>
            <td id="tamaño">${archivos[i].tamano}</td>            
        </tr>`;
}

function obtenerArchivosGrupales(){
    axios({
        method: 'GET',
        url: url + `?idArchivos=${usuarioSeleccionado}`,
        responseType:'json',
    }).then(res=>{
        console.log(res.data);
        this.archivosGrupales = res.data;               
        llenarArchivosGrupales();
    }).catch(error=>{
        console.error(error);
    });
}

function llenarArchivosGrupales(){    
    document.getElementById("id-archivos").innerHTML = '';
    for (let i=0;i<archivosGrupales.length;i++)        
        document.getElementById("id-archivos").innerHTML += 
        `<tr>
            <th id="Carpeta">${ValidarCarpeta(archivosGrupales[i].carpeta)}</th>            
            <th id="Nombre">${archivosGrupales[i].nombre}</th>
            <!--<td id="Propietario" >{obtenerUsuario(archivos[i].idUsuario)}</td>-->
            <td id="ultima-modif" >${archivosGrupales[i].ultima_modif}</td>
            <td id="tamaño">${archivosGrupales[i].tamano}</td>            
        </tr>`;
}

function ValidarCarpeta(i){
    if(i==true){   
        return '<i class="fas fa-folder"></i>'

    }else{
        return '<i></i>'
    };
}

function seleccionar(indice){
    indice=indice+1;
    usuarioSeleccionado = indice;
    axios({
        method: 'GET',
        url: url + `?id=${indice}`,
        responseType:'json',       
    }).then(res=>{        
        console.log(res);  
        document.getElementById('encabezado-cuenta').innerHTML=
        `<img id="img-drop-perfil" style="border-radius: 16px; height:32px; width:32px;" src="${res.data.foto}">                              
         <p align="center" id="nombre">${res.data.nombre} ${res.data.apellido}</p>
         <h6 align="center" id="nombre-usuario">${res.data.nombreUsuario}</h6>`;       
         obtenerArchivosPersonales(res.data.idUsuario);
         document.getElementById("img-perfil").innerHTML=
        `<img class="" style="border-radius: 16px; margin-right: 10px; height:32px; width:32px;" src="${res.data.foto}">`;      
    }).catch(error=>{
        console.error(error);
    });    
}

function seleccionarGrupo(indice){
    indice=indice+1;
    usuarioSeleccionado = indice;
    axios({
        method: 'GET',
        url: url2 + `?idGrupo=${indice}`,
        responseType:'json',       
    }).then(res=>{        
        console.log(res);  
        document.getElementById('encabezado-cuenta').innerHTML=
        `<img id="img-drop-perfil" style="border-radius: 16px; height:32px; width:32px;" src="${res.data.fotoGrupo}">                               
         <h6 align="center" id="nombre-usuario">${res.data.nombreGrupo}</h6>`;       
         obtenerArchivosGrupales(res.data.idUsuario);
         document.getElementById("img-perfil").innerHTML=
        `<img class="" style="border-radius: 16px; margin-right: 10px; height:32px; width:32px;" src="${res.data.fotoGrupo}">`;      
    }).catch(error=>{
        console.error(error);
    });    
}