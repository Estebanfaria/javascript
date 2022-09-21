const libros = [
    {id: 1,img:"./multimedia/51sUzFNeLmL (1).jpg" ,nombre:"El dia en que fui crucificado",precio:5000 },
    {id: 2,img:"./multimedia/este-poder_1.webp" ,nombre:"Este poder puede ser tuyo",precio:2000},
    {id: 3,img:"./multimedia/secretos-del-avivamiento-en-argentina.webp" ,nombre:"Secretos del avivamiento en Argentina",precio:3000},
    {id: 4,img:"./multimedia/41GHUfpN11L._BO1,204,203,200_.jpg" ,nombre:"Tres monarcas",precio:1000},
    {id: 5,img:"./multimedia/El nacimiento.jpg" ,nombre:"El nacimiento",precio:7000},
    {id: 6,img:"./multimedia/en pos de lo supremo.jpg" ,nombre:"En pos de lo supremo",precio:2200},
    {id: 7,img:"./multimedia/y todo lo que pidieres.webp" ,nombre:"Y todo lo que pidieres",precio:1000},
    {id: 8,img:"./multimedia/el intercesor.jpg" ,nombre:"Intercesor",precio:1200},
    {id: 9,img:"./multimedia/la fe.jpg" ,nombre:"La fe más allá de la razón",precio:3500},
];

let card = document.getElementById("card-template");
libros.map((x) =>{
    card.innerHTML += ` <div class="grid-item">
                            <div class="card" style="width: 18rem;">
                            <img src="${x.img}" class="card-img-top" alt="${x.nombre}">
                            <div class="card-body">
                                <h5 class="card-title">${x.nombre}</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">$${x.precio}</a>
                            </div>
                            </div>
                        </div>`;
});


// const formulario = document.querySelector ("#formulario");
// const boton = document.querySelector ("#boton");
// const resultados = document.querySelector("#resultado");

// const filtrar = ()=>{
//         const texto = formulario.value.toLowerCase("#formulario");
//         for(let libro of libros){
//             let nombre = libro.nombre.toLowerCase
//             if(nombre.indexOf(texto) !== -1){
//                 resultados.innerHTML += `<div class="grid-item">
//                                                 <div class="card" style="width: 18rem;">
//                                                     <img src="${libro.img}" class="card-img-top" alt="${libro.nombre}">
//                                                     <div class="card-body">
//                                                         <h5 class="card-title">${libro.nombre}</h5>
//                                                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                                         <a href="#" class="btn btn-primary">Go somewhere</a>
//                                                     </div>
//                                                     </div>
//                                         </div>`
//             }
//         }

//         if(resultados.innerHTML=""){
//             resultados.innerHTML += `<li> Producto no encontrado...</li>`
//         }

// }

// boton.addEventListener("click", filtrar);
// formulario.addEventListener("keyup", filtrar);

// filtrar();







