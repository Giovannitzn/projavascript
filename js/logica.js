
function bienvenida() {
    let nombre = prompt("Para poder iniciar, Ingrese su nombre").toUpperCase();
    let apellido = prompt("Gracias, ahora su apellido:").toUpperCase();
    let mensaje = `Hola ${nombre} ${apellido} bienvenido, a la tienda de la zapatilla DEPORTSHOES...`;
    alert(mensaje);
    //console.log(document)
    document.querySelector('h1').textContent='Bienvenido a tu tienda DEPORTSHOES' 
    console.log(document.querySelector('h1'))
}

const suedad = (numero) => {
if (edad>=18) {
    let mensaje1 = `Usted es mayor de edad , puedes continuar ... `;
    alert(mensaje1);
    
    let deporte = prompt("¿que tipo de deporte practicas?: tennis, basquet o quiza futbol?")
    while (deporte != null){
          switch (deporte) {
            case "tennis":
            alert("Tenemos las zapatillas que quiza te interesen");
            break;
            case "basquet":
                alert("En nuestra galeria encontraras las zapatillas mas comodas y livianas para correr");
            break;
            case "futbol":
                alert("Con la variedad de modelos disfrutaras mejor de tu pasión y tus goles");
                break;
            default:
                alert("Disculpa aun no tenemos productos");
                 break;
            }break;
        }

        let marcaIn = prompt("Ingrese la marca del articulo").toUpperCase();
        let modeloIn = prompt("Ingrese el modelo del articulo").toUpperCase();
        let precioIn = parseInt (prompt("Ingrese el precio del articulo"));
        let cantidadIn = parseInt (prompt("Ingrese la cantidad del articulo"));
        
        
        class Zapatilla{
            constructor(marca, modelo, precio, cantidad) {
            this.marca = marca;
            this.modelo = modelo;
            this.precio = precio;
            this.cantidad = cantidad;
        }
        }
        
        let zapatilla1 = new Zapatilla(marcaIn, modeloIn, precioIn, cantidadIn);
        
        alert("Haz seleccionado los siguientes productos Zapatilla modelo" + zapatilla1.modelo + " marca: " + zapatilla1.marca + " y tiene precio " + zapatilla1.precio);

} else {
    alert ("Entiendo que menor de edad, o no entendi tu edad...");
}}

bienvenida();
let edad = parseInt (prompt ("Cual es tu edad:"));
suedad(edad);

alert("Gracias por visitarnos, espero vuelvas pronto");


