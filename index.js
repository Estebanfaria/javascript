const libros = [
    {nombre:"El dia en que fui crucificado",precio:5000 },
    {nombre:"Este poder puede ser tuyo",precio:2000},
    {nombre:"Secretos del avivamiento en Argentina",precio:3000},
    {nombre:"Tres monarcas",precio:1000},
    {nombre:"El nacimiento",precio:7000},
    {nombre:"En pos de lo supremo",precio:2200},
    {nombre:"Y todo lo que pidieres",precio:1000},
    {nombre:"Intercesor",precio:1200},
    {nombre:"La fe más allá de la razón",precio:3500},
]



const formulario = document.querySelector ("#formulario");
const boton = document.querySelector ("#boton");
const resultado = document.querySelector("#resultado"); 

const filtrar = ()=>{
    // console.log(formulario.value);
    resultado.innerHTML = ""; 

    const texto = formulario.value.toLowerCase();
    
    for (let producto of libros){
        let nombre = producto.nombre.toLowerCase();
            if(nombre.indexOf(texto) !== -1){
                resultado.innerHTML += `<li>Nombre:${producto.nombre}</li>
                                        <li>Precio:${producto.precio}</li>`
            }
    }

    if(resultado.innerHTML === ""){
        resultado.innerHTML += `<p>Producto no encontrado...</p>`;
    }
}

boton.addEventListener("click", filtrar);
formulario.addEventListener("keyup", filtrar);

filtrar();







