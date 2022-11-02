
const carritoDeCompras = []

const carritoIndex = (productoId)=>{

    const contenedorCarrito = document.getElementById("carrito-contenedor")

    const renderProductosCarrito = ()=> {
        let producto  = productos.find( producto => producto.id == productoId )
        carritoDeCompras.push(producto);

        sessionStorage.setItem("carrito", JSON.stringify(carritoDeCompras))

        let carritoStorage = sessionStorage.getItem("carrito");

        if(carritoStorage){
            let carrito = JSON.parse(carritoStorage);
        };


        producto.cantidad = 1

        let div = document.createElement("div")
        div.classList.add("productoEnCarrito")

        div.innerHTML = `<li> Titulo:${producto.nombre}</li>
                        <li> ${producto.precio}</li> 
                        <li id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</li>
                        `;
        contenedorCarrito.appendChild(div)
    }

    renderProductosCarrito()
}

{/* <button id="eliminar${producto.id}" class="boton-eliminar" ><i class="fa-solid fa-trash-can"></i></button> */}





