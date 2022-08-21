let nombre = prompt ("Ingrese su nombre");
alert ("Bienvenid@ " + nombre);

let edad = parseInt (prompt ("¿Cuantos años tienes?")); 

if (edad < 10){
    alert ("Tenemos libros para niños");
} else if (edad < 16) {
    alert ("Tenemos libros para adolecentes");
} else if (edad < 25){
    alert ("Tenemos libros para jovenes");
} else {
    alert ("Tenemos libros para adultos");
}