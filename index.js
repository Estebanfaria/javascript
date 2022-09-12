const productos = [ 
    { id: 1, nombre: "El intercesor", precio: 1000, tapa: "./multimedia/el intercesor.jpg" },    
    { id: 2, nombre: "El dia que fui crucificado", precio: 1500, tapa: "./multimedia/51sUzFNeLmL (1).jpg" },   
    { id: 3, nombre: "Perfil de tres monarcas", precio: 1900,tapa:"./multimedia/41GHUfpN11L._BO1,204,203,200_.jpg" },
    { id: 4, nombre: "El nacimiento", precio: 2100,tapa:"./multimedia/El nacimiento.jpg" },
    { id: 5, nombre: "En pos de lo supremo", precio: 2080,tapa:"./multimedia/en pos de lo supremo.jpg" },
    { id: 6, nombre: "Este poder puede ser tuyo", precio: 2500,tapa:"./multimedia/este-poder_1.webp" },
    
];  

let contenedor = document.getElementById ("contenedor");
let precio = parseInt(prompt("Ingrese el precio minimo"));


let productosFiltrados = productos.filter(item => item.precio > precio);

for (const producto of productosFiltrados) {
    let div = document.createElement("div");
    div.innerHTML = `<h3> ID: ${producto.id}</h3>
                    <p> Producto: ${producto.nombre}</p>
                    <b> Precio: ${producto.precio}</b>
                    <img src="${producto.tapa}" alt="">`; 
                    

    contenedor.append(div);
}




