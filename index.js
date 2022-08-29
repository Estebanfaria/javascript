// let nombre = prompt ("Ingrese su nombre");
// alert ("Bienvenid@ " + nombre);

// let edad = parseInt (prompt ("¿Cuantos años tienes?")); 

// if (edad < 10){
//     alert ("Tenemos libros para niños, esperamos que lo disfrutes");
// } else if (edad < 16) {
//     alert ("Tenemos libros para adolescentes, esperamos que lo disfrutes");
// } else if (edad < 25){
//     alert ("Tenemos libros para jovenes, esperamos que lo disfrutes");
// } else {
//     alert ("Tenemos libros para adultos, esperamos que lo disfrutes");
// }

function categoria (nombre){
    
    switch (nombre) {
        case "paz":
        alert("Tenemos el tipo de libro esta buscando");
        break;

        case "gozo":
        alert ("Tenemos el tipo de libro esta buscando");
        break;

        case "amor":
        alert ("Tenemos el tipo de libro esta buscando");
        break;

        case "fe":
        alert ("Tenemos el tipo de libro esta buscando");
        break;

        case "esperanza":
        alert ("Tenemos el tipo de libro esta buscando");
        break;

        case "bibliografico":
            alert ("Tenemos el tipo de libro esta buscando");
            break;

        default:
            alert ("No tenemos el tipo de libro que esta buscando");
            break;

    }
}

let nombre = prompt("Ingrese el tipo de libro que esta buscando");
categoria (nombre);