var localStorage = window.localStorage;
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
}