const mostrarLibros = (libros) => {

    const contenedorLibros = document.getElementById("contenedor-libros");

    libros.forEach(libro => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML += ` 
                                <div class="card" style="width: 18rem;">
                                <img src="${libro.img}" class="card-img-top rounded" alt="${libro.nombre}">
                                <div class="card-body">
                                    <h5 class="card-title">${libro.nombre}</h5>
                                    <li class="card-text">${libro.año}</li>
                                    <li class="card-text">${libro.editorial}</li>
                                    <li class="card-text">${libro.autor}</li>
                                    <li class="card-text">${libro.precio}</li>
                                    <button id="button" type="button" id=boton${libro.id} class="btn btn-success">Comprar</button> 
                                </div>
                                </div>
                            </div>`;

        contenedorLibros.appendChild(div);                    
    
        const boton = document.getElementById(`boton${x.id}`);
        
        boton.addEventListener("click", () =>{
            // carritoIndex(x.id)
            alert(`se agregro el producto ${x.nombre}`) 
        })
    
    });
}

mostrarLibros(libros);



















