
let nombre = prompt("Para poder iniciar, Ingrese su nombre");
let apellido = prompt("Gracias, ahora su apellido:");
let edad = parseInt (prompt ("Por ultimo que edad tienes:"));
let mensaje = `Hola ${nombre} ${apellido} bienvenido, a la tienda de la zapatilla ...`;

if (edad>=18) {
    let mensaje1 = `Eres mayor de edad, puedes continuar ... `;
    alert(mensaje1);
    let deporte = prompt("¿que tipo de deporte practicas: el caminar, correr o quiza el futbol?")
    while (deporte != null){
          switch (deporte) {
            case "caminar":
            alert("Tenemos las zapatillas que quiza te interesen");
            break;
            case "correr":
                alert("En nuestra galeria encontraras las zapatillas mas comodas y livianas para esta actividad");
            break;
            case "futbol":
                alert("Con la variedad de modelos disfrutaras mejor de tu pasión y tus goles");
                break;
            default:
                alert("Disculpa aun no tenemos zapatillas para ello");
                 break;
            }break;
        }
        let finde = prompt("Los zapatos quiza son los que van mejor para ti");
            if (finde ==="si") {
                alert("Pronto, te tendremos sorpresas");
            } else {
                alert("Estamos trabajando para ti");
            }
} else {
    alert ("No se ingreso bien tu edad o eres menor de edad, gracias por tu visita");
}

alert("Muchas gracias por visitarnos, espero vuelvas pronto");