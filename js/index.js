const mostrarProductos = (productos) => {
    const contenedorProductos = document.getElementById("producto-contenedor")

    productos.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML += `<div class="card-inside rounded" style="width: 18rem;">
                            <img src="${producto.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">Descripción:  ${producto.autor}</p>
                                <p class="card-text">${producto.precio}</p>
                                <button class="btn btn-primary" id=boton${producto.id}>Comprar</button>
                            </div>
                        </div>`

        contenedorProductos.appendChild(div)
        
        const boton = document.getElementById( `boton${producto.id}` )

        boton.addEventListener('click', ()=> {
            carritoIndex(producto.id);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Su libro fue añadido al carrito',
                showConfirmButton: false,
                timer: 1500,   
              })
            
        })

    })
}

mostrarProductos (productos);

// function cargarProductos(){
//     fetch('productos.json')
//     .then(respuesta => respuesta.json)
//     .then(productos  => {
//         productos.forEach(producto => {
//                     const div = document.createElement("div")
//                     div.classList.add("card")
//                     div.innerHTML += `<div class="card-inside rounded" style="width: 18rem;">
//                                         <img src="${producto.img}" class="card-img-top" alt="...">
//                                         <div class="card-body">
//                                             <h5 class="card-title">${producto.nombre}</h5>
//                                             <p class="card-text">Descripción:  ${producto.autor}</p>
//                                             <p class="card-text">${producto.precio}</p>
//                                             <button class="btn btn-primary" id=boton${producto.id}>Comprar</button>
//                                         </div>
//                                     </div>`
            
//                     contenedorProductos.appendChild(div)
                    
//                     const boton = document.getElementById( `boton${producto.id}` )
            
//                     boton.addEventListener('click', ()=> {
//                         carritoIndex(producto.id);
//                         Swal.fire({
//                             position: 'top-end',
//                             icon: 'success',
//                             title: 'Su libro fue añadido al carrito',
//                             showConfirmButton: false,
//                             timer: 1500,   
//                           })
                        
//                     })
            
//                 })
//             }
//     }
     

// cargarProductos()