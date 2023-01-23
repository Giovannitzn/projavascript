
function bienvenida() {
    let nombre = prompt("Para poder iniciar, Ingrese su nombre").toUpperCase();
    let apellido = prompt("Gracias, ahora su apellido:").toUpperCase();

 
    document.querySelector('h1').innerHTML = `<b>Bienvenido ${nombre} ${apellido} a tu DEPORTSHOES</b>` 

}

const suedad = (numero) => {
if (edad>=18) {
    let mensaje1 = `Usted es mayor de edad , puedes continuar ... `;
    alert(mensaje1);
    
    let deporte = prompt("¿que tipo de deporte practicas?: tennis, basquet o quiza futbol?")
    while (deporte != null){
          switch (deporte) {
            case "tennis":
            alert("Tenemos las zapatillas para las partidas dobles");
            break;
            case "basquet":
                alert("EN nuestras galerias se encuentran zapatillas para sus canastas");
            break;
            case "futbol":
                alert("Con la variedad de modelos disfrutaras mejor de tus goles");
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
        
        const lista = document.getElementById('lista')
        
        const arrayitem = ["Seleccionaste Zapatilla marca " + zapatilla1.marca + "", "Modelo:  " + zapatilla1.modelo  + "" ," Zapatilla con precio: " + zapatilla1.precio];

        const fragment = document.createDocumentFragment()

        arrayitem.forEach(item => {
            const li = document.createElement('li')
            li.textContent = item
            fragment.appendChild(li)
        })

        lista.appendChild(fragment)




} else {
    alert ("Entiendo que menor de edad, o no entendi tu edad...");
}}

bienvenida();
let edad = parseInt (prompt ("Cual es tu edad:"));
suedad(edad);

alert("Gracias por visitarnos, espero vuelvas pronto");


