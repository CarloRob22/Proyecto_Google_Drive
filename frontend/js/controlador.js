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
}


function generarArchivos(){
    document.getElementById("id-archivos").innerHTML = '';
    for (let i=0;i<archivos.length;i++) 
        document.getElementById("id-archivos").innerHTML += 
        `<tr>
            <th id="Carpeta">${ValidarCarpeta(archivos[i].carpeta)}</th>            
            <th id="Nombre">${archivos[i].Nombre}</th>
            <td id="Propietario" >${archivos[i].Propietario}</td>
            <td id="ultima-modif" >${archivos[i].ultima_modif}</td>
            <td id="tamaño">${archivos[i].tamaño}</td>            
        </tr>`;
    console.log(archivos);
}
generarArchivos();

function ValidarCarpeta(i){
    if(i==true){   
        return '<i class="fas fa-folder"></i>'

    }else{
        return '<i></i>'
    };
}*/
var usuarios = [];
var usuarioSeleccionado;
const url = '../../Proyecto_Google_Drive/backend/api/usuarios-personales.php';
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
obtenerUsuariosPersonales();

function llenarDropdonw(){    
    document.getElementById("lista-usuarios-personales").innerHTML= 
    `<div id="encabezado-cuenta" class="dropdown-header" style="width: 100%;">
        <img id="img-drop-perfil" style="border-radius: 16px;" src="img/perfil.jpg">                              
        <p align="center" id="nombre-apellido">nombre</p>
        <h6 align="center" id="nombre-cuenta">nombre usuario</h6>
    </div>
    <div class="divider"></div>`;
    for(let i=0; i<usuarios.length; i++){
        document.getElementById("lista-usuarios-personales").innerHTML+=
        `<div class="dropdown-item">                                    
            <a class="dropdown-item" href="#" style="padding-left: 0; ">
                <img class="" style="border-radius: 16px; margin-right: 10px; height:32px; width:32px;; " src="${usuarios[i].foto}">
                ${usuarios[i].nombre} 
            </a>                                                          
        </div>`;
    }    
}

function seleccionar(indice){
    usuarioSeleccionado = indice;
    axios({
        method: 'GET',
        url: url + `?id=${indice}`,
        responseType:'json',       
    }).then(res=>{
        console.log(res);  
        document.getElementById('nombre').value=res.data.nombre;
        document.getElementById('apellido').value=res.data.apellido;
        document.getElementById('nombre-usuario').value=res.data.fechaNacimiento;
        document.getElementById('foto').valu=res.data.pais; 
        document.getElementById('archivos').style.display='none';
        
    }).catch(error=>{
        console.error(error);
    });
}