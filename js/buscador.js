let nombre = document.getElementById("buscador");
let producto = libros.find(li => li.nombre === nombre);

let mensaje = `Id: ${producto.id}
                Nombre: ${producto.nombre}
                precio: ${producto.precio}`;

alert(mensaje); 