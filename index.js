let nombre = prompt ("Ingrese su nombre");
alert ("Bienvenid@ " + nombre);

let edad = parseInt (prompt ("¿Cuantos años tienes?")); 

if (edad < 10){
    alert ("Tenemos libros para niños, esperamos que lo disfrutes");
} else if (edad < 16) {
    alert ("Tenemos libros para adolescentes, esperamos que lo disfrutes");
} else if (edad < 25){
    alert ("Tenemos libros para jovenes, esperamos que lo disfrutes");
} else {
    alert ("Tenemos libros para adultos, esperamos que lo disfrutes");
}

// function categoria (nombre){
    
//     switch (nombre) {
//         case "paz":
//         alert("Tenemos el tipo de libro esta buscando");
//         break;

//         case "gozo":
//         alert ("Tenemos el tipo de libro esta buscando");
//         break;

//         case "amor":
//         alert ("Tenemos el tipo de libro esta buscando");
//         break;

//         case "fe":
//         alert ("Tenemos el tipo de libro esta buscando");
//         break;

//         case "esperanza":
//         alert ("Tenemos el tipo de libro esta buscando");
//         break;

//         case "bibliografico":
//             alert ("Tenemos el tipo de libro esta buscando");
//             break;

//         default:
//             alert ("No tenemos el tipo de libro que esta buscando");
//             break;

//     }
// }

// let nombre = prompt("Ingrese el tipo de libro que esta buscando");
// categoria (nombre);}

const libros = ["El dia en que fui crucificado","Este poder puede ser tuyo","Secretos del avivamiento en Argentina","Tres monarcas", "El nacimiento","En pos de lo supremo","Y todo lo que pidieres","Intercesor",];

libros.push("La fe más allá de la razón");
console.log(libros.length);
console.log(libros);

class biblioteca{
    constructor(id, nombre, precio, img, cantidad){
        this.id = id
        this.nombre = nombre.toUpperCase()
        this.precio = parseFloat(precio)
        this.img = img
        this.cantidad = cantidad
    }
    sumarIva(){
        this.precio = this.precio * 1.21
    }
}

const stockproductos = []

stockproductos.push(new biblioteca("1","El dia en que fui crucificado",2500, "./multimedia/51sUzFNeLmL (1).jpg",1));
stockproductos.push(new biblioteca("2","Este poder puede ser tuyo",3500, "./multimedia/este-poder_1.webpllls",4));
stockproductos.push(new biblioteca("3","SecretoMArtes de un avivamiento en argentina",1500, "./multimedia/secretos-del-avivamiento-en-argentina.webp",22));
stockproductos.push(new biblioteca("4","tres monarcas",900,"./multimedia/41GHUfpN11L._BO1,204,203,200_.jpg",5));
stockproductos.push(new biblioteca("5","El nacimiento",4000,"./multimedia/El nacimiento.jpg",6));
stockproductos.push(new biblioteca("6","En pos de lo supremo",1200,"./multimedia/en pos de lo supremo.jpg",5));
stockproductos.push(new biblioteca("7","Y todo lo que pidieres",900,"./multimedia/y todo lo que pidieres.webp",10));
stockproductos.push(new biblioteca("8","Intercesor",1600,"./multimedia/el intercesor.jpg",30));
stockproductos.push(new biblioteca("9","La fe mas alla de la razon",2100,"./multimedia/la fe.jpg",25));





