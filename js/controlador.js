var localStorage = window.localStorage;
var archivos;

if (localStorage.getItem("archivos")==null){
    archivos=[
        {
            Nombre:"Proyecto_poo_Netflix",
            Propietario:"Bryan Lagos",
            ultima_modif:"26 julio 2020",
            tamaño:"50 MB"
        },
        {
            Nombre:"Proyecto_poo_Tik_tok",
            Propietario:"Juan Hernandes",
            ultima_modif:"26 julio 2020",
            tamaño:"60 MB"
        },
        {
            Nombre:"Tarea 1",
            Propietario:"yo",
            ultima_modif:"26 julio 2020",
            tamaño:"30 MB"
        },
        {
            Nombre:"Tarea 2",
            Propietario:"yo",
            ultima_modif:"26 julio 2020",
            tamaño:"74KB"
        },
        {
            Nombre:"Tarea 4",
            Propietario:"yo",
            ultima_modif:"26 julio 2020",
            tamaño:"564KB"
        },
        {
            Nombre:"Proyecto_Algoritmos",
            Propietario:"yo",
            ultima_modif:"02 marzo 2020",
            tamaño:"11KB"
        },
        {
            Nombre:"Tarea_Ecuaciones",
            Propietario:"yo",
            ultima_modif:"22 noviembre 2019",
            tamaño:"24KB"
        },
        {
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
    for (let i=0;i<archivos.length;i++) {
        document.getElementById("id-archivos").innerHTML += 
        `<tr>
            <th id="Nombre">${archivos[i].Nombre}</th>
            <td id="Propietario" >${archivos[i].Propietario}</td>
            <td id="ultima-modif" >${archivos[i].ultima_modif}</td>
            <td id="tamaño">${archivos[i].tamaño}</td>            
        </tr>`;
    }   
}
generarArchivos();